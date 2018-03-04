import React from "react";
import "../../css/Client.css";
import "../../css/NavbarClient.css";
import BootstrapTable from '../../../node_modules/react-bootstrap-table-next';
import '../../../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const columnsOrders = [
    {
        dataField: "client",
        text: "Realizado por",
        headerStyle: {
            backgroundColor: "#28436d",
            color: "white"
        }
    },
    {
        dataField: "direction",
        text: "Dirección de entrega",
        headerStyle: {
            backgroundColor: "#28436d",
            color: "white"
        }
    },
    {
    dataField: "dataCreated",
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

const columnsInfo = [
    {
    dataField: "name",
    text: "Nombre",
    headerStyle: {
        backgroundColor: "#28436d",
        color: "white"
    }
}, {
    dataField: "mail",
    text: "Correo",
    headerStyle: {
        color: "white",
        backgroundColor: '#28436d'
    }
}, {
    dataField: "user",
    text: "Usuario",
    headerStyle: {
        backgroundColor: '#28436d',
        color: "white"
    }
}];


const products = [{
    client: "Juan",
    direction: "CAlle x avenida y",
    id: "",
    dataCreated: "0",
    dateArrive: "Hola",
    orderDetail: "2 panes integrales y muchas cosas más. "
}];

const info = [{
    id: "",
    name: "Andrés Laiton",
    mail: "ad.laiton10@uniandes.edu.co",
    user: "ad.laiton10"
}];

export class Admin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            clients: [],
            pedidosActualizados: "false",
            token: localStorage.getItem("token")
        };
    }
    componentWillMount(){
        fetch("admin/clients", {
            method: "GET",
            headers: {
                "x-access-token": this.state.token
            }
        }).then(response => response.json())
        .then(json =>{
            this.state.clients = json.pop;
            console.log(json);
            console.log(json.pop);
            this.state.clients.map(pclient =>{
                console.log(pclient);
                pclient.pedidos.map((pedido, i)=>{
                    products.push({
                        client: pclient.name,
                        direction: pedido.direccion,
                        id: "Pedido" + i,
                        dataCreated: pedido.fechaPedido,
                        dateArrive: pedido.fechaEntrega
                    });
                    this.setState({pedidosActualizados: "true"});

                });

            });

        });
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-sm-4">
                        <h2>Pedidos Clientes </h2>
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
                        <button className="buttonEditInfo">
                            Editar datos
                        </button>
                    </div>
                </div >
            </div >
        );
    }
}