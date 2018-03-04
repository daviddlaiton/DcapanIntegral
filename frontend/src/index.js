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
import {NavbarClient} from "./Components/Client/NavbarClient";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display: "Home"
        }
        this.handleLoginClick= this.handleLoginClick.bind(this);
        this.handleHomeClick = this.handleHomeClick.bind(this);
    }
    handleLoginClick(){
        this.setState({display: "login"});
    }
    handleHomeClick(){
        this.setState({display:"Home"});
    }

    handleClient
    render(){
        if(this.state.display === "Home"){
            return(
                <div>
                    <NavbarDcapan onLoginClick = {this.handleLoginClick} onHomeClick = {this.handleHomeClick} />
                    <Cover />
                    <About />
                </div>
            );
        }
        if(this.state.display === "login"){
            return(
                <div>
                    <NavbarDcapan onLoginClick = {this.handleLoginClick} onHomeClick = {this.handleHomeClick} />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Login />
                </div>
            );
        }
        if(this.state.display === "Client")
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
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
