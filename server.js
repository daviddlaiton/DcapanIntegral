var express = require('express');
var app = express();
var path = require('path');
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var apiRouter = express.Router();
//Configuration
app.use(express.static(__dirname + '/public')); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Api Router
apiRouter.use(function(req, res, next){
    next();
});
app.use('/api', apiRouter);

app.get('/', function(req, res){
    res.sendFile(path.join((__dirname  + '/public')));
});

function connectToUsersDatabase(){
    MongoClient.connect('mongodb://localhost:27017/users'), (err, client) => {
        if(err){
            throw err;
        }
        else{
            return 
        }
    }
}


//Authentication Stuff

apiRouter.post('/auth', function(req, res){
    var superSecret = 'webDevUniandesSuperSecret';
    let user = req.body.login;
    let userInfo;
    MongoClient.connect('mongodb://localhost:27017/users', function(err, client) {
        if (err) {
            throw err;
        }
        client.db('users').collection('users').find({login: user}).toArray(function(err, result) {
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
                        login: userInfo.login
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


app.listen(process.env.PORT || 5000);
console.log('5000 is the magic port');