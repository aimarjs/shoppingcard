import React from 'react';

const Carousel = () => {
	return (
		<div className="product-wrapper image">
			<img src="http://assets.simplyrecipes.com/wp-content/uploads/2014/12/perfect-cheesecake-horiz-b-1200.jpg" />
			<div className="select">
				<div className="dot active" />
				<div className="dot" />
				<div className="dot" />
			</div>
		</div>
	);
};

export default Carousel;
