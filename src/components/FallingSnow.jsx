// src/components/FallingSnow.jsx
import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const snowflakeShapes = [
  '❄', '❅', '❆', '✻', '✼', '❋'
];

const SnowflakeComponent = ({ style }) => {
  const randomSnowflake = snowflakeShapes[Math.floor(Math.random() * snowflakeShapes.length)];
  const randomSize = Math.random() * 20 + 10;
  
  return (
    <Box
      as="div"
      position="absolute"
      fontSize={`${randomSize}px`}
      color="rgba(255, 255, 255, 0.8)"
      style={style}
      zIndex={5}
      userSelect="none"
    >
      {randomSnowflake}
    </Box>
  );
};

const FallingSnow = ({ count = 50 }) => {
  const [snowflakes, setSnowflakes] = useState([]);
  
  useEffect(() => {
    const newSnowflakes = Array.from({ length: count }).map((_, index) => {
      const startPositionX = Math.random() * 100; // posición aleatoria en el eje X (%)
      const duration = Math.random() * 10 + 8; // duración entre 8 y 18 segundos
      const delay = Math.random() * 5; // delay inicial aleatorio
      
      return {
        id: index,
        startX: `${startPositionX}vw`,
        animationDuration: `${duration}s`,
        delay: `${delay}s`,
      };
    });
    
    setSnowflakes(newSnowflakes);
  }, [count]);
  
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      pointerEvents="none"
      zIndex="10"
      overflow="hidden"
    >
      {snowflakes.map((snowflake) => (
        <motion.div
          key={snowflake.id}
          initial={{ y: -100, x: snowflake.startX }}
          animate={{
            y: "100vh",
            x: [
              snowflake.startX,
              `calc(${snowflake.startX} + 50px)`,
              `calc(${snowflake.startX} - 30px)`,
              `calc(${snowflake.startX} + 20px)`,
              snowflake.startX,
            ],
          }}
          transition={{
            y: {
              duration: snowflake.animationDuration,
              repeat: Infinity,
              delay: snowflake.delay,
              ease: "linear",
            },
            x: {
              duration: snowflake.animationDuration,
              repeat: Infinity,
              delay: snowflake.delay,
              times: [0, 0.25, 0.5, 0.75, 1],
              ease: "easeInOut",
            },
          }}
        >
          <SnowflakeComponent />
        </motion.div>
      ))}
    </Box>
  );
};

export default FallingSnow;