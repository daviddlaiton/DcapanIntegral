var express = require('express');
var app = express();
var path = require('path');
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var apiRouter = express.Router();
var adminRouter = express.Router();
//Configuration
app.use(express.static(__dirname + '/public')); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', apiRouter);
app.use('/admin', adminRouter);

app.get('/', function(req, res){
    res.sendFile(path.join((__dirname  + '/public')));
});


//Authentication Stuff
apiRouter.post('/auth', function(req, res){
    var superSecret = 'webDevUniandesSuperSecret';
    let user = req.body.login;
    let userInfo;
    MongoClient.connect('mongodb://user:user@ds249418.mlab.com:49418/dcapan', function(err, client) {
        if (err) {
            throw err;
        }
        client.db('dcapan').collection('clientes').find({login: user}).toArray(function(err, result) {
            if (err) {
                throw err;
            }
            userInfo = result[0];
            console.log(userInfo);
            client.close();
            if(userInfo === undefined){
                res.json({
                    success: false,
                    message: 'Authentication failed, user not found'
                });
            }
            else{
                let password = userInfo.password;
                console.log(req.body.password);
                if(password != req.body.password){
                    res.json({
                        success: false,
                        message: 'Authentication failed, wrong password'
                    });
                }
                else{
                    let token = jwt.sign({
                        name: userInfo.name,
                        login: userInfo.login,
                        admin: userInfo.admin
                    }, superSecret, {expiresIn: 60 * 30}
                                        );

                    res.json({
                        succes: true,
                        message: 'Authenticated',
                        token: token
                    });
                }
            }
        });
    });

});

//Api Router
//All api routes after this line will require authentication
apiRouter.use(function(req, res, next){
    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    let superSecret = 'webDevUniandesSuperSecret';

    if(token){
        jwt.verify(token, superSecret, function(err, decoded){
            if(err){
                return res.status(403).send({
                    success: false,
                    message: 'Invalid Token'
                });
            }
            else{
                req.decoded = decoded;
                next();
            }
        });
    }
    else{
        return res.status(403).send({
            success: false,
            message: 'No token Provided'
        });
    }
});
//Admin Router
// All admin routes after this line will require authentication
adminRouter.use(function(req, res, next){
    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    let superSecret = 'webDevUniandesSuperSecret';

    if(token){
        jwt.verify(token, superSecret, function(err, decoded){
            if(err){
                return res.status(403).send({
                    success: false,
                    message: 'Invalid Token'
                });
            }
            else{
                if(decoded.admin === false){
                    return res.status(403).send({
                        success: false,
                        message: 'Unauthorized'
                    });
                }
                else{
                    req.decoded = decoded;
                    console.log(req.decoded);
                    next();
                }
            }
        });
    }
    else{
        return res.status(403).send({
            success: false,
            message: 'No token Provided'
        });
    }
});

//Get all clients
adminRouter.get('/clientes', function(req, res){
    res.status(200).send({hola: "Hola"});
});


app.listen(process.env.PORT || 5000);
console.log('5000 is the magic port');