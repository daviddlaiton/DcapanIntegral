import React from "react";
import "../../css/Client.css";
import "../../css/NavbarClient.css";
import BootstrapTable from '../../../node_modules/react-bootstrap-table-next';
const columnsOrders = [{
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

const columnsInfo = [{
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

export class Client extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            token : localStorage.getItem("token")
        }
    }

    render() {
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
                        <button className="buttonEditInfo">
                            Editar datos
                        </button>
                    </div>
                </div >
            </div >
        );
    }
}