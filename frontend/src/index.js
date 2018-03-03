import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import NavbarDcapan from './Components/Home/NavbarDcapan';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {Cover} from "./Components/Home/Cover";
import {About} from "./Components/Home/About";
//Smooth Scroll Imports
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display: "Home"
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
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
