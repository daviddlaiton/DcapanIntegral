import React from "react";
import "../../css/login.css";
import "../../css/cover.css";

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: ""
        };

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleLoginChange(event) {
        this.setState({ login: event.target.value });
    }

    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {        
        event.preventDefault();
        let callback = this.props.onLogin;
        console.log(JSON.stringify(this.state));
        fetch('/auth/login', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
              }
        }).then(response => response.json())
        .then(json => {
            if(json.succes === true){
                let myToken = json.token;
                let myId = json.id;
                let isAdmin = json.admin;

                localStorage.setItem("token", myToken);
                localStorage.setItem("id", myId);
                localStorage.setItem("admin", isAdmin);
                if(isAdmin === false){
                callback();
                }
                else{
                    let adminCallback = this.props.onAdmin;
                    adminCallback();
                }
            }
            else{
                alert(json.message);
            }
    
    });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4">
                        <div className="formularioIngresar" >
                            <form action="/action_page.php" onSubmit={this.handleSubmit}>
                                <label htmlFor="fname">Usuario</label>
                                <input type="text" id="fname" name="firstname" placeholder="Ingresa tu usuario" onChange={this.handleLoginChange} />

                                <label htmlFor="lname">Clave</label>
                                <input type="password" id="lname" name="lastname" placeholder="Ingresa tu clave" onChange={this.handlePasswordChange}/>
                                <input type="submit" value="Iniciar Sesión" />
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}
