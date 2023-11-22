import React from 'react'
import "../header/header.css";
import Lottie from 'lottie-react';
import newHeading from "../newHeading.json"
import {motion} from "framer-motion";

const textVariants = {
    initial:{
        x: -500,
        opacity:0,
    },

    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
        }
    },
};

const sliderVariants = {
    initial:{
        x: 0,
    },

    animate:{
        x:"-230%",
        transition:{
            duration:20,
            repeat: Infinity,
            repeatType: "mirror",

        }
    },
};

const Header = () => {
  return (
    <div className='header'>
        <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}>TRISH MANJUNATH</motion.h2>
            <motion.h1 variants={textVariants}>Software Engineering Student</motion.h1>
            <img src="" alt="" />
        </motion.div>
        </div>
        <motion.div className="sliding-text" variants={sliderVariants} initial="initial" animate="animate">
            Web Developer, UI Designer
        </motion.div>
        <div className="header-container">
            <Lottie animationData={newHeading} style={{height:"75vh", width:"50vw"}}/> 
        </div>
    </div>
  )
}

export default Header;