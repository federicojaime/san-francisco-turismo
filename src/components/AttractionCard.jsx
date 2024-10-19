
// src/components/AttractionCard.jsx

import React from 'react';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const AttractionCard = ({
  title,
  image,
  description,
  isActive,
  onMouseEnter,
  onMouseLeave,
  index,
  isMobile,
}) => (
  <MotionBox
    flex={isMobile ? 'auto' : (isActive ? 3 : 1)}
    height={isMobile ? '300px' : 'auto'}
    mb={isMobile ? 4 : 0}
    overflow="hidden"
    position="relative"
    cursor={isMobile ? 'default' : 'pointer'}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    animate={{ flex: isMobile ? 'auto' : (isActive ? 3 : 1) }}
    transition={{ duration: 0.6, ease: 'easeInOut' }}
    display="flex"
    alignItems="center"
    justifyContent="center"
    className="group"
  >
    <MotionImage
      src={image}
      alt={title}
      objectFit="cover"
      width="100%"
      height="100%"
      animate={{ scale: isActive ? 1.1 : 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    />
    <Box
      position="absolute"
      bottom="0"
      left="0"
      width="100%"
      bgGradient="linear(to-t, rgba(0,0,0,0.8), transparent)"
      color="white"
      p={4}
      textAlign="center"
      opacity={1}
      transform="translateY(0)"
      transition="all 0.6s ease-in-out"
    >
      <Heading size="lg" mb={2}>
        {title}
      </Heading>
      <Text
        fontSize="sm"
        opacity={isActive ? 0.9 : 0}
        height={isActive ? 'auto' : '0'}
        transition="all 0.6s ease-in-out"
        overflow="hidden"
      >
        {description}
      </Text>
    </Box>
  </MotionBox>
);

export default AttractionCard;