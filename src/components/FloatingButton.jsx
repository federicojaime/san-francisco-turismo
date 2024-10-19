// src/components/FloatingButton.jsx

import React from 'react';
import { Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

const FloatingButton = ({ children, ...props }) => (
  <MotionButton
    whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgb(255,255,255)' }}
    whileTap={{ scale: 0.95 }}
    bg="#00AEEF"
    color="white"
    size="lg"
    fontWeight="bold"
    borderRadius="full"
    px={8}
    _hover={{ bg: '#F7931E' }}
    {...props}
  >
    {children}
  </MotionButton>
);

export default FloatingButton;
