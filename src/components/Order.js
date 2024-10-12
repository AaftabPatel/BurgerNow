/*Detailed breakdown of the order
Price
Estimated time for preparation and delivery
Confirmation of the order
Estimated delivery time
Option to share feedback or review
*/
import React, {useEffect} from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { 
    opacity: 0, 
    x: '100vw',
    transition: {
      staggerChildren: 0.5,
    } 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: 'spring',
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: "beforeChildren",
    }
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  }
}

const Order = ({ burger , setShowModal}) => {
  // useEffect lifecycle hook, array with only setShowModal as dep 
  useEffect(() => {
    setTimeout(() => setShowModal(true), 5000);
  }, [setShowModal]);

  return (
     <motion.div className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>You ordered a {burger.size} Size Burger with:</motion.p>
      <motion.div variants={childVariants}>
        Fillings:{burger.fillings.map(filling => <div key={filling} >{filling}</div>)}
        Add-Ons:{burger.addons.map(addon => <div key={addon} >{addon}</div>)}
        Complements:{burger.complements.map(complement => <div key={complement} >{complement}</div>)}
      </motion.div>    
    </motion.div>
  )
}

export default Order;