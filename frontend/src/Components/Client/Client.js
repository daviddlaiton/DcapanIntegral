import React from "react";
import "../../css/Client.css";
import "../../css/NavbarClient.css";
import BootstrapTable from '../../../node_modules/react-bootstrap-table-next';
const columnsOrders = [{
    dataField: "dateCreated",
    text: "Realizado en",
    headerStyle: {
        backgroundColor: "#28436d",
        color: "white"
    }
}, {
    dataField: "dateArrive",
    text: "Fecha de entrega",
    headerStyle: {
        color: "white",
        backgroundColor: '#28436d'
    }
}, {
    dataField: "orderDetail",
    text: "Detalle del pedido",
    headerStyle: {
        backgroundColor: '#28436d',
        color: "white"
    }
}];

const columnsInfo = [{
    dataField: "name",
    text: "Nombre",
    headerStyle: {
        backgroundColor: "#28436d",
        color: "white"
    }
}, {
    dataField: "correo",
    text: "Correo",
    headerStyle: {
        color: "white",
        backgroundColor: '#28436d'
    }
}, {
    dataField: "login",
    text: "Usuario",
    headerStyle: {
        backgroundColor: '#28436d',
        color: "white"
    }
}];


var products = [{
    dateCreated: "",
    dateArrive: "No definida",
    orderDetail: ""

}];
var info = [{
    name: "",
    login: "",
    correo: ""
}]



export class Client extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            token: localStorage.getItem("token"),
            id: localStorage.getItem("id"),
            info: "",
            pedidos: "",
            actualizado: "false",
            pedidosActualizados: "false"
        }
    }

    componentWillMount() {

        fetch("/clients/" + this.state.id, {
            method: "GET",
            headers: {
                "x-access-token": this.state.token
            }
        }).then(response => response.json())
            .then(json => {
                console.log(json);
                console.log(json.pop.name);
                this.setState({
                    info: json.pop,
                    pedidos: json.pop.pedidos
                });

                info[0].name = this.state.info.name;
                info[0].login = this.state.info.login;
                info[0].correo = this.state.info.correo;
                this.setState({
                    actualizado: "true"
                });

                this.state.pedidos.map(function (x, i) {
                    if (i === 0) {
                        products[0].dateCreated = x.fechaPedido;
                        products[0].dateArrive = x.fechaEntrega;
                        let pedidos = "";
                        let precio = 0;
                        x.productos.map(function(producto){
                            
                            pedidos += "Producto: " + producto.tipo + "\n" + " Cantidad: " + producto.cantidad + "\n \n"; 
                            precio += producto.precio;
                        });
                        
                        pedidos += "Valor del pedido: " + precio;
                        products[0].orderDetail = pedidos;
                    }
                    else {
                        console.log(x.productos);
                        let pedido = {
                            dateCreated: x.fechaPedido,
                            dateArrive: x.fechaEntrega
                        }
                        let pedidos = "";
                        let precio = 0;
                        x.productos.map(function(producto){
                            
                            pedidos += "Producto: " + producto.tipo + "\n"+  " Cantidad: " + producto.cantidad + "\n \n"; 
                            precio += producto.precio;
                        });
                        
                        pedidos += "Valor del pedido: " + precio;
                        pedido.orderDetail = pedidos;
                        

                        products.push(pedido);
                    };

                });

                this.setState({
                    pedidosActualizado: "true"
                });
            });
    }

    componentWillUpdate(){
        fetch("/clients/" + this.state.id, {
            method: "GET",
            headers: {
                "x-access-token": this.state.token
            }
        }).then(response => response.json())
            .then(json => {
                console.log(json);
                console.log(json.pop.name);
                this.setState({
                    info: json.pop,
                    pedidos: json.pop.pedidos
                });

                info[0].name = this.state.info.name;
                info[0].login = this.state.info.login;
                info[0].correo = this.state.info.correo;
                this.setState({
                    actualizado: "true"
                });

                this.state.pedidos.map(function (x, i) {
                    if (i === 0) {
                        products[0].dateCreated = x.fechaPedido;
                        products[0].dateArrive = x.fechaEntrega;
                        let pedidos = "";
                        let precio = 0;
                        x.productos.map(function(producto){
                            
                            pedidos += "Producto: " + producto.tipo + "\n" + " Cantidad: " + producto.cantidad + "\n \n"; 
                            precio += producto.precio;
                        });
                        
                        pedidos += "Valor del pedido: " + precio;
                        products[0].orderDetail = pedidos;
                    }
                    else {
                        console.log(x.productos);
                        let pedido = {
                            dateCreated: x.fechaPedido,
                            dateArrive: x.fechaEntrega
                        }
                        let pedidos = "";
                        let precio = 0;
                        x.productos.map(function(producto){
                            
                            pedidos += "Producto: " + producto.tipo + "\n"+  " Cantidad: " + producto.cantidad + "\n \n"; 
                            precio += producto.precio;
                        });
                        
                        pedidos += "Valor del pedido: " + precio;
                        pedido.orderDetail = pedidos;
                        

                        products.push(pedido);
                    };

                });

                this.setState({
                    pedidosActualizado: "true"
                });
            });

    }

    render() {
        console.log("despues del render")
        console.log(info);
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-sm-4">
                        <h2>Pedidos realizados </h2>
                        <br />
                        <BootstrapTable keyField="id" data={products} columns={columnsOrders} />
                        <br />
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-6">
                        <h2> Tus datos </h2>
                        <br />
                        <BootstrapTable keyField="id" data={info} columns={columnsInfo} />
                        <br />
                        <button className="buttonNewOrder">
                            Realizar pedido
                        </button>
                    </div>
                </div >
            </div >
        );

    }
}

