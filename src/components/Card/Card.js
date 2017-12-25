import React, { Component } from 'react';
import Carousel from './Carousel';
import ProductInfo from './ProductInfo';

class Card extends Component {
	render() {
		return (
			<div className="container">
				<div className="product">
					<Carousel />
					<ProductInfo />
				</div>
			</div>
		);
	}
}

export default Card;
