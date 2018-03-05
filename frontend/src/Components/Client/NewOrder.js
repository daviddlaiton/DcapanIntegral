import React from "react";
import "../../css/NewOrder.css";
export class NewOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fechaEntrega: "",
            fechaPedido: "",
            direccion: "",
            cantidad: "",
            tipo: "Pan Integral",
            dia: "1",
            mes: "1",
            ano: "2018",
            productos: [{
                tipo : "Pan Integral",
                precio : "2000",
                cantidad : "2"
            }
            ]
        };
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handleMonthChange = this.handleMonthChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleDireccionChange = this.handleDireccionChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handleProductChange = this.handleProductChange.bind(this);
        this.handleSubmitProduct = this.handleSubmitProduct.bind(this);
        this.handleSubmitOrder = this.handleSubmitOrder.bind(this);

    }

    handleDayChange(event) {
        this.setState({ dia: event.target.value });
        var today = new Date(),
            fechaActual = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
        this.setState({fechaPedido :  fechaActual})
    }

    handleMonthChange(event) {
        this.setState({ mes: event.target.value });
        var fecha = this.state.ano + "-" + this.state.mes + "-" + this.state.dia;
        this.setState({fechaEntrega : fecha});
        var today = new Date(),
            fechaActual = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
        this.setState({fechaPedido :  fechaActual})
    }

    handleYearChange(event) {
        this.setState({ ano: event.target.value });
        var today = new Date(),
            fechaActual = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
        this.setState({fechaPedido :  fechaActual})
    }

    handleDireccionChange(event) {
        this.setState({ direccion: event.target.value });
        var today = new Date(),
            fechaActual = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
        this.setState({fechaPedido :  fechaActual})
    }

    handleQuantityChange(event) {
        this.setState({ cantidad: event.target.value })
        var today = new Date(),
            fechaActual = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
        this.setState({fechaPedido :  fechaActual})
    }

    handleProductChange(event) {
        this.setState({ tipo: event.target.value })
        console.log(this.state);
        var today = new Date(),
            fechaActual = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
        this.setState({fechaPedido :  fechaActual})
    }

    handleSubmitProduct(event) {
        event.preventDefault();
        console.log(this.state);
        let productoAnadir = {
            tipo : this.state.tipo,
            cantidad : this.state.cantidad,
            precio : "2000"
        }

        this.setState({
            productos: [...this.state.productos, productoAnadir]
          })
    }

    handleSubmitOrder(event){
        event.preventDefault();
        let callback = this.props.onLogin;
        fetch(" /clients/"+  localStorage.getItem("id")+"/pedidos", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json",
                "x-access-token": localStorage.getItem("token")
              }
        }).then(response => response.json())
        .then(json => {
            if(json.succes === true){
                console.log(json);
            }
            else{
                alert("Pedido realizado");
            }
    
    });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <div className="formularioOrden" >
                            <form>
                                <label>
                                    Escoge el producto
                                    <select onChange={this.handleProductChange} className="productoSelector">
                                        <option value="Pan Integral">Pan Integral</option>
                                        <option value="Mogolla Integral">Mogolla Integral</option>
                                        <option value="Granola">Granola</option>
                                    </select>
                                </label>
                                <label>
                                    Cantidad
                                    <input
                                        name="cantidad"
                                        type="number"
                                        onChange={this.handleQuantityChange} />
                                </label>
                                <br />
                                <input type="submit" value="Agregar producto" onClick = {this.handleSubmitProduct} />
                            </form>
                            <br />
                            <br />
                            <form>
                                <label>Fecha de recepción </label>
                                <br />
                                <label>
                                    Día
                                    <select onChange={this.handleDayChange} className="dateSelector">
                                        <option value="01">1</option>
                                        <option value="02">2</option>
                                        <option value="03">3</option>
                                        <option value="04">4</option>
                                        <option value="05">5</option>
                                        <option value="06">6</option>
                                        <option value="07">7</option>
                                        <option value="08">8</option>
                                        <option value="09">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                    </select>
                                </label>
                                <label>
                                    Mes
                                    <select onChange={this.handleMonthChange} className="dateSelector">
                                        <option value="01">Enero</option>
                                        <option value="02">Febrero</option>
                                        <option value="03">Marzo</option>
                                        <option value="04">Abril</option>
                                        <option value="05">Mayo</option>
                                        <option value="06">Junio</option>
                                        <option value="07">Julio</option>
                                        <option value="08">Agosto</option>
                                        <option value="09">Septiembre</option>
                                        <option value="10">Octubre</option>
                                        <option value="11">Noviembre</option>
                                    </select>
                                </label>
                                <label>
                                    Año
                                    <select onChange={this.handleYearChange} className="dateSelector">
                                        <option value="2018">2018</option>
                                    </select>
                                </label>
                                <label>Dirección
                                <input type="text" id="direccion" name="direccion" placeholder="Ingresa tu dirección" onChange={this.handleDireccionChange} />
                                </label>
                            </form>
                        </div>
                    </div>
                </div >
                <br />
                <input type="submit" value="Realizar pedido" onClick = {this.handleSubmitOrder}/>
            </div >
        );
    }
}
