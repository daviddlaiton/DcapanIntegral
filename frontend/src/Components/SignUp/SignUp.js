import React from 'react';
import "../../css/login.css";
import "../../css/cover.css";


export class SignUp extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            login: "",
            password: "",
            name: "",
            correo: ""

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleMailChange = this.handleMailChange.bind(this);
    }
    handleUserChange(event) {
        this.setState({login: event.target.value});
      }
      handlePasswordChange(event) {
        this.setState({password: event.target.value});
      }
      handleNameChange(event) {
        this.setState({name: event.target.value});
      }
      handleMailChange(event) {
        this.setState({correo: event.target.value});
      }
      
      
    handleSubmit(e){
        e.preventDefault();
        let callback = this.props.onSubmitClick;
        fetch("auth/signIn", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
              }
        }).then(response =>{
            console.log(response)
            if(response.status === 200){
                alert("Su usuario ha sido creado exitosamente");
                callback();
            }
            else{
                alert("El nombre de usuario ya existe");
            }
        })
    }
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4">
                        <div className="formularioRegistro" >
                            <form action="/action_page.php" onSubmit = {this.handleSubmit}>
                                <label htmlFor="fname">Usuario</label>
                                <input type="text" id="fname" name="firstname" placeholder="Ingresa tu usuario" onChange={this.handleUserChange} />

                                <label htmlFor="lname">Clave</label>
                                <input type="password" id="lname" name="lastname" placeholder="Ingresa tu clave" onChange={this.handlePasswordChange} />

                                <label htmlFor="lname">Nombre</label>
                                <input type="text" id="aname" name="lastname" placeholder="Ingresa tu Nombre" onChange={this.handleNameChange} />

                                <label htmlFor="lname">correo</label>
                                <input type="text" id="nname" name="lastname" placeholder="Ingresa tu correo" onChange={this.handleMailChange} />

                                <input type="submit" value="Registrarse" disabled={this.state.password == 0 || this.state.login == 0 || this.state.name == 0 || this.state.correo == 0} />
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}