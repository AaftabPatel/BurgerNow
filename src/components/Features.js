import React from 'react';

const Features = () => {
	return(
		<>
		<h1 className="featuresHeading">Why BurgerNow</h1>
		<div className="features" id="features">
			
			<div className="featuresCard">
				<i class="fa fa-sliders" aria-hidden="true"></i>
				<h2>Customizable Burgers</h2>
				<p>
					 BurgerNow gives customers full control to create their perfect burger by choosing the size, fillings, and extras. 
					 With a wide range of ingredients, you can build a burger tailored exactly to your preferences.
				</p>
				<button className="ybtn">Read More</button>
			</div>		
			<div className="featuresCard">
				<i class="fa fa-plus-square" aria-hidden="true"></i>
				<h2>Exclusive Add-ons and Combos</h2>
				<p>
				BurgerNow offers a variety of side dishes, drinks, and meal combos to complete your order. 
				Choose from options like fries, onion rings, milkshakes, and more to pair with your burger.
				</p>
				<button className="ybtn">Read More</button>
			</div>		
			<div className="featuresCard">
				<i class="fa fa-smile" aria-hidden="true"></i>
				<h2> User-Friendly Ordering Experience:	 </h2>
				<p>
				BurgerNow provides a seamless, intuitive ordering process with a step-by-step guide, 
				ensuring that customers can easily navigate through their burger customization, extras, and checkout.
				</p>
				<button className="ybtn">Read More</button>
			</div>		
		</div>
		</>
	);
}

export default Features;
