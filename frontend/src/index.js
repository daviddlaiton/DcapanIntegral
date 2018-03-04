import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import NavbarDcapan from './Components/Home/NavbarDcapan';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {Cover} from "./Components/Home/Cover";
import {About} from "./Components/Home/About";
import {Login} from "./Components/Login/Login";
import {Client}from "./Components/Client/Client";
import {SignUp} from "./Components/SignUp/SignUp";
import {NavbarClient} from "./Components/Client/NavbarClient";
import {Admin} from "./Components/Administrator/Administrator";
import {Map} from "./Components/Home/Map";
import {NavbarAdmin} from "./Components/Administrator/NavbarAdmin";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display: "Home"
        }
        this.handleLoginClick= this.handleLoginClick.bind(this);
        this.handleHomeClick = this.handleHomeClick.bind(this);
        this.handleSignUpClick = this.handleSignUpClick.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleAdmin = this.handleAdmin.bind(this);
    }
    handleLoginClick(){
        this.setState({display: "login"});
    }
    handleHomeClick(){
        this.setState({display:"Home"});
    }
    handleSignUpClick(){
        this.setState({display:"signup"});
    }
    handleLogin(){
        this.setState({display:"Client"});
    }
    handleAdmin(){
        this.setState({display:"Admin"});
    }
    render(){
        let navbar = <NavbarDcapan onLoginClick = {this.handleLoginClick} onHomeClick = {this.handleHomeClick} onSignUpClick = {this.handleSignUpClick} />;
        if(this.state.display === "Home"){
            return(
                <div>
                    {navbar}
                    <Cover />
                    <About />
                    <Map />
                </div>
            );
        }
        if(this.state.display === "login"){
            return(
                <div>
                    {navbar}
                    <br />
                    <br />
                    <br />
                    <br />
                    <Login onLogin={this.handleLogin} onAdmin={this.handleAdmin} />
                </div>
            );
        }
        if(this.state.display === "signup"){
            return(
                <div>
                    {navbar}
                    <br />
                    <br />
                    <br />
                    <br />
                    <SignUp onSubmitClick = {this.handleLoginClick} />
                </div>
            );
        }
        if(this.state.display === "Client"){
            return(
                <div>
                    <NavbarClient/>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Client />
                </div>
            );
        }

        if(this.state.display === "Admin"){
            return(
                <div>
                    <NavbarAdmin />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Admin />
                </div>
            );
        }
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
