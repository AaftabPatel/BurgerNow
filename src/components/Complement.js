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

const complementsData = {
    Sides : ['French Fries','Onion Rings','Sweet Potato Fries','Salad'],
    Desserts : ['Ice Cream','Brownie','Cookie']
  };

const Complement = ({ addComplement, burger }) => {
  return (
    <motion.div className="complement container"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      
      <h3>Step 4: Choose complements</h3>
      <div className="complements displayGrid continer">
        {Object.keys(complementsData).map((category) => (
          <div key={category} className="category">
            <h4 className='categoryHeading'>{category}</h4>
            <ul>
              {complementsData[category].map((complement) => {
                let spanClass = burger.complements.includes(complement) ? 'active' : '';
                return (
                  <motion.li key={complement} onClick={() => addComplement(complement)}
                    whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <span className={spanClass}>{ complement }</span>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <Link to="/order">
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

export default Complement;