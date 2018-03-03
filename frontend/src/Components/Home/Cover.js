import React from 'react'
import "../../css/cover.css";

export class Cover extends React.Component{
    render(){
        return(
            <div id="home">
            <div className="cover" id="cover">
			<div className="site-wrapper">

				<div className="site-wrapper-inner">


					<div className="inner cover">
						<h1 className="cover-heading">D"Capan Integral</h1>
						<p className="lead">D’capan Integral Industrias Alimenticias es una empresa productora y comercializadora de alimentos integrales y cereales para el desayuno. Dentro de sus productos se destacan el Pan Integral y la Granola.</p>
						<p className="lead">
							<a href="#about" className="btn btn-lg btn-default">Ver Más</a>
						</p>
					</div>


				</div>

			</div>
		</div>
        </div>
        );

    }
}