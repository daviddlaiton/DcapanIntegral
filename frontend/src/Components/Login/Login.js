import React from "react";
import "../../css/login.css";
import "../../css/cover.css";

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4">
                        <div className="formularioIngresar" >
                            <form action="/action_page.php">
                                <label htmlFor="fname">Usuario</label>
                                <input type="text" id="fname" name="firstname" placeholder="Ingresa tu usuario" />

                                <label htmlFor="lname">Clave</label>
                                <input type="text" id="lname" name="lastname" placeholder="Ingresa tu clave" />
                                <input type="submit" value="Iniciar Sesión" />
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}