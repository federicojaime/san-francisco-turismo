import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const ElegantTitle = ({ 
  title,
  subtitle,
  primaryColor = "teal.600",
  accentColor = "orange.400"
}) => (
  <VStack
    spacing={4}
    align="center"
    py={12}
    px={4}
  >
    <MotionHeading
      as="h2"
      size="2xl"
      color={primaryColor}
      textAlign="center"
      fontWeight="bold"
      textShadow="2px 2px 4px rgba(0,0,0,0.2)"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {title}
    </MotionHeading>
    
    <MotionBox
      width="100px"
      height="3px"
      bg={accentColor}
      boxShadow="0 2px 4px rgba(0,0,0,0.1)"
      initial={{ width: 0 }}
      animate={{ width: "100px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
    />
    
    <MotionText
      color="gray.600"
      fontSize="xl"
      textAlign="center"
      maxWidth="600px"
      fontStyle="italic"
      textShadow="1px 1px 2px rgba(0,0,0,0.1)"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {subtitle}
    </MotionText>
  </VStack>
);

export default ElegantTitle;