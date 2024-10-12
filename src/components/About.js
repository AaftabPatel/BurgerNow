import React from 'react';
import aboutImg from '../Images/aboutBg.jpg';

const About = () => {
	return(
		<div className = "about" id="about">
			<img src={aboutImg} alt="guard standing strong" />
			<div className="aboutContent">
				<h1 className='aboutHeading'>BurgerNow</h1>
				<p className='aboutInfo'>
				At Burger Now, we believe that a burger is more than just a meal—it's an experience. 
				Founded with a passion for crafting the perfect burger, we’ve made it our mission 
				to deliver gourmet, handcrafted burgers that are full of flavor and creativity.
				Every burger we make starts with the freshest ingredients, from locally sourced 
				meats to hand-picked vegetables and house-made sauces. Whether you're craving the 
				classics or something adventurous, our menu is designed to cater to all tastes.
				But we don’t stop there. Our side dishes, from crispy fries to indulgent onion rings,
				and our refreshing drinks, are all carefully curated to complement your meal perfectly.
				We also offer a range of delicious desserts to satisfy your sweet tooth after every bite.
				</p>
				<button className="ybtn">Know More</button>
			</div>
		</div>
	);
}

export default About;