import React from 'react';

const ProductInfo = () => {
	return (
		<div className="product-wrapper info">
			<h2>Amazing Cheese Cake</h2>
			<h1>
				Price: <span id="price">0</span>&euro;
			</h1>
			<ul className="btns">
				<li id="desc-btn">Description</li>
				<li id="details-btn">Details</li>
				<li id="comments-btn">Comments</li>
			</ul>
			<div id="content-box" />
			<ul className="qty--total-header">
				<li>Quantity</li>
				<li>Total Price</li>
			</ul>
			<div className="qty--total">
				<div className="qty">
					<button type="button" name="button" id="remove-qty">
						-
					</button>
					<div id="qty">0</div>
					<button type="button" name="button" id="add-qty">
						+
					</button>
				</div>
				<div className="total">
					<h1>
						<span id="total">20</span>&euro;
					</h1>
				</div>
			</div>
			<div className="btn">Buy Now!</div>
		</div>
	);
};

export default ProductInfo;
