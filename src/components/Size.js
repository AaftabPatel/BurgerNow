import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden:{
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition:{
      type: 'spring',
      delay: 0.1
    }
  },
  exit: {
    x: '-100vh',
    transition : {ease: 'easeInOut'}
  }
};

const nextVariants = {
  hidden: {
    x: '-100vw'
  },
  visible: {
    x: 0, 
    transition: {
      type: 'spring',
      stiffness: 120
    }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow:  "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }
}

const Size = ({ addSize, burger }) => {
  const sizes = ['Small', 'Medium', 'Large'];

  return (
    <motion.div className="base container"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >

      <h3>Step 1: Choose Your Size</h3>
      <ul>
        {sizes.map(size => {
          let spanClass = burger.size === size ? 'active' : '';
          return (
            <motion.li key={size} onClick={() => addSize(size)}
              whileHover={{scale:1.3, originX:0, color:'#f8e112'}}
              transition={{type:'spring', stiffness:300}}
            >
              <span className={spanClass}>{ size }</span>
            </motion.li>
          )
        })}
      </ul>

      {burger.size && (
        <motion.div className="next"
          variants={nextVariants}
        >
          <Link to="/Fillings">
            <motion.button
              variants={buttonVariants}
              whileHover={{scale:1.1}}
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Size;