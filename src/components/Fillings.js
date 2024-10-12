import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { 
    opacity: 0, 
    x: '100vw' 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', delay: 0.1 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }
}

const fillingsData = {
  Patty: ['Chicken Patty', 'Veggie Patty', 'Fish Fillet'],
  Cheeses: ['Cheddar', 'Swiss', 'American', 'Blue Cheese', 'Vegan Cheese'],
  Veggies: ['Lettuce', 'Tomato', 'Onion', 'Pickles', 'Jalapeños'],
  Sauces: ['Ketchup', 'Mustard', 'Mayonnaise', 'BBQ Sauce', 'Sriracha'],
  
};

const Fillings = ({ addFilling, burger }) => {
  return (
    <motion.div className="fillings container"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h3>Step 2: Choose Fillings</h3>
      <div className="fillings displayGrid continer">
        {Object.keys(fillingsData).map((category) => (
          <div key={category} className="filling-category">
            <h4 className='categoryHeading'>{category}</h4>
            <ul>
              {fillingsData[category].map((filling) => {
                let spanClass = burger.fillings.includes(filling) ? 'active' : '';
                return (
                  <motion.li key={filling} onClick={() => addFilling(filling)}
                    whileHover={{ scale: 1.3, originX: 0, color: '#f8e112', duration: 0.2 }}
                    transition={{ type: 'spring', stiffness: 200, duration: 0.2 }}
                  >
                    <span className={spanClass}>{filling}</span>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <Link to="/AddOn">
        <motion.button
          variants={buttonVariants}
          whileHover='hover'
        >
          AddOns
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Fillings;
