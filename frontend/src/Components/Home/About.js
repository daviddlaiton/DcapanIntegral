import React from 'react';
import "../../css/cover.css";
import "../../css/Products.css";

import { Carousel } from "react-bootstrap";

export class About extends React.Component {
	render() {
		return (
			<div>
				<div className="about" id="about">
					<div className="row">
						<div className="col-sm-3">
						</div>
						<div className="col-sm-3">
							<h2>Misión</h2>
							<p>Somos una empresa productora de alimentos integrales que busca contribuir al bienestar de nuestros clientes mediante nuestros productos. De igual manera, buscamos ser líderes en el mercado de panificación integral y de frutos secos, saludables y naturales.</p>
							<img src="https://images.pexels.com/photos/162417/bread-farmer-s-bread-eat-food-162417.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="A piece of bread" id="mision-image" />
						</div>
						<div className="col-sm-3">

							<h2>Visión</h2>
							<p>Para el año 2025 ser una compañía reconocida por las personas por su calidad y sus beneficios alimenticios. Mejorando la calidad de vida de las familias colombianas. Además, estar entre las cinco compañías más grandes a nivel nacional de productos integrales y dietéticos.</p>
							<img src="https://images.pexels.com/photos/87435/break-breakfast-corporate-cup-87435.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="bread with coffee" id="vision-image" />
						</div>
					</div>
					<br />
					<br />
				</div>
				<div id="products" className="container-fluid products">
					<div className="row">
						<div className="col-sm-2"> </div>
						<div className="col-sm-8">
							<h2>Nuestros productos</h2>
							<br />
							<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
								<ol className="carousel-indicators">
									<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
									<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
									<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
									<li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
									<li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
								</ol>
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img className="d-block w-100" src="https://image.ibb.co/fV8R2x/DSC_0046.jpg" alt="Pan Integral" />
										<div className="carousel-caption">
											<h5>Super Granola</h5>
											<p>...</p>
										</div>
									</div>
									<div className="carousel-item">
										<img className="d-block w-100" src="https://image.ibb.co/gKFC9c/DSC_0043.jpg" alt="Third slide" />
										<div className="carousel-caption">
											<h5>Granola Diétetica</h5>
											<p>...</p>
										</div>
									</div>
									<div className="carousel-item">
										<img className="d-block w-100" src="https://image.ibb.co/d2xiFH/DSC_0029_copia.jpg" alt="Second slide" />
										<div className="carousel-caption">
											<h5>Pan Integral</h5>
											<p>...</p>
										</div>
									</div>
									<div className="carousel-item">
										<img className="d-block w-100" src="https://image.ibb.co/cwvJzc/DSC_0027_copia.jpg" alt="Second slide" />
										<div className="carousel-caption">
											<h5>Galleta Integral</h5>
											<p>...</p>
										</div>
									</div>
									<div className="carousel-item">
										<img className="d-block w-100" src="https://image.ibb.co/gY2nsx/DSC_0034_copia.jpg" alt="Second slide" />
										<div className="carousel-caption">
											<h5>Calado Integral</h5>
											<p>...</p>
										</div>
									</div>
								</div>
								<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
									<span className="carousel-control-prev-icon" aria-hidden="true"></span>
									<span className="sr-only">Previous</span>
								</a>
								<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
									<span className="carousel-control-next-icon" aria-hidden="true"></span>
									<span className="sr-only">Next</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<div>
					<div className="container-fluid contact" id="contact">
						<div className="row">
							<div className="col-sm-4">
								<h2> Información de contacto </h2>
							</div>
							<br />
							<br />
							<br />
						</div>
						<div className="row">
							<div className="col-sm-2"> </div>
							<div className="col-sm-3">
								<h5>Llamanos a los siguientes números: </h5>
							</div>
							<div className="col-sm-4">
								<p> (1)3117003 ó (1) 6601670</p>
							</div>
						</div>
						<br />
						<div className="row">
							<div className="col-sm-2"> </div>
							<div className="col-sm-3">
								<h5>Visitanos en nuestras instalaciones: </h5>
							</div>
							<div className="col-sm-4">
								<p> Estamos ubicados en la Carrera 61 # 75 - 24, Bogotá, Colombia.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}