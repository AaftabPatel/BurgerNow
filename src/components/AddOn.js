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

const addOnData = {
    Extra : ['Cheese','Patty','Mushrooms','Lettuce', 'Tomato', 'Onion'],
    Drinks :['Soda', 'Water'  ,'Milkshake'  ,' Iced Tea'],
};

const AddOn = ({ addAddOn, burger }) => {
  return (
    <motion.div className="addOn container"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      
      <h3>Step 3: Choose AddOns</h3>
      <div className="addons displayGrid continer">
        {Object.keys(addOnData).map((category) => (
          <div key={category} className="addOn-category">
            <h4 className='categoryHeading'> {category}</h4>
            <ul>
              {addOnData[category].map((addon) => {
                let spanClass = burger.addons.includes(addon) ? 'active' : '';
                return (
                  <motion.li key={addon} onClick={() => addAddOn(addon)}
                    whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <span className={spanClass}>{addon}</span>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <Link to="/Complement">
        <motion.button
          variants={buttonVariants}
          whileHover='hover'
        >
          Next
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default AddOn;