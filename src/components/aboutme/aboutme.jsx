import React, { useEffect, useState } from 'react';
import './aboutme.css';
import Lottie from 'lottie-react';
import aboutAnimation from '../aboutAnimation.json';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const cursorVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      yoyo: Infinity,
      duration: 0.5,
    },
  },
};

const AboutMe = () => {
  const [text, setText] = useState('');
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const fullText =
        "Hello! I'm a proactive software engineering student with startup experience, specializing in web development and UI design. Fueled by a passion for transforming ideas into user-friendly solutions, I thrive in dynamic, innovative environments. As a quick learner, I'm open to any challenge, and am actively seeking opportunities to contribute and grow in the software engineering landscape.";

      let index = 0;

      const intervalId = setInterval(() => {
        setText(fullText.substring(0, index));
        index++;

        if (index > fullText.length) {
          clearInterval(intervalId);
        }
      }, 50);

      return () => clearInterval(intervalId);
    }
  }, [inView]);

  return (
    <div ref={ref} className="aboutme">
      <Lottie animationData={aboutAnimation} style={{ height: '72vh', width: '60vw', marginTop: '-10vh' }} />
      <motion.h1 variants={variants} initial="hidden" animate="visible">
        About Me
        <motion.span>{text}</motion.span>
        <motion.span className="cursor" variants={cursorVariants} initial="hidden" animate="visible">
          |
        </motion.span>
      </motion.h1>
    </div>
  );
};

export default AboutMe;
