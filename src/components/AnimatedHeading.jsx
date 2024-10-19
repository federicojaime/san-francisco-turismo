// src/components/AnimatedHeading.jsx

import React from 'react';
import { Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionHeading = motion(Heading);

const AnimatedHeading = ({ children, color = 'white' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <MotionHeading
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      as="h2"
      size="2xl"
      mb={4}
      color={color}
      textAlign="center"
      className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 text-transparent bg-clip-text"
    >
      {children}
    </MotionHeading>
  );
};

export default AnimatedHeading;
