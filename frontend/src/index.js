import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import NavbarDcapan from './Components/Home/NavbarDcapan';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {Cover} from "./Components/Home/Cover";
import {About} from "./Components/Home/About";
import {Login} from "./Components/Login/Login";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display: "Login"
        }
    }
    render(){
        if(this.state.display === "Home"){
            return(
                <div>
                    <NavbarDcapan />
                    <Cover />
                    <About />
                </div>
            );
        }
        else if(this.state.display === "Login") {
            return(
                <div>
                    <NavbarDcapan />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Login/>
                </div>
            )
        }
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
