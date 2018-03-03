import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import NavbarDcapan from './Components/NavbarDcapan';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

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
                <NavbarDcapan />
            );
		}
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
