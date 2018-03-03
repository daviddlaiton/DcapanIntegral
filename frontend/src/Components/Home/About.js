import React from 'react';
import "../../css/cover.css";

export class About extends React.Component{
    render(){
        return(
		<div className="about" id="about">
			<div className="row">
				<div className="col-sm-3">
				</div>
				<div className="col-sm-3">
					<div className="row">
						<div className="col-sm-12">
							<div className="row">
								<div className="col-sm-3">
								</div>
								<h2>Misión</h2>
							</div>
							<div className="row">
								<p>Somos una empresa productora de alimentos integrales que busca contribuir al bienestar de nuestros clientes mediante nuestros productos. De igual manera, buscamos ser líderes en el mercado de panificación integral y de frutos secos, saludables y naturales.</p>
							</div>
							<div className="row">
								<img src="https://images.pexels.com/photos/162417/bread-farmer-s-bread-eat-food-162417.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="A piece of bread" id="mision-image"/>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-3">
					<div className="col-sm-12">
						<div className="row">
							<div className="col-sm-3">
							</div>
							<h2>Visión</h2>
						</div>
						<div className="row">
							<p>Para el año 2025 ser una compañía reconocida por las personas por su calidad y sus beneficios alimenticios. Mejorando la calidad de vida de las familias colombianas. Además, estar entre las cinco compañías más grandes a nivel nacional de productos integrales y dietéticos.</p>
						</div>
						<div className="row">
							<img src="https://images.pexels.com/photos/87435/break-breakfast-corporate-cup-87435.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="bread with coffee" id="vision-image"/>
						</div>
					</div>
				</div>
			</div>
		</div>
        );
    }
}