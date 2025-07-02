// src/components/FallingLeaves.jsx
import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const leafColors = [
  '#8B4513', // Marrón
  '#A0522D', // Siena
  '#CD853F', // Madera de Perú
  '#D2691E', // Chocolate
  '#B8860B', // Dorado oscuro
  '#DAA520', // Vara de oro
  '#E49B0F', // Amarillo ámbar
  '#FF8C00', // Naranja oscuro
  '#FF7F50', // Coral
  '#D2691E', // Chocolate
];

const leafShapes = [
  'M0,0 Q25,-20 50,0 Q75,-20 100,0 L100,30 Q75,50 50,30 Q25,50 0,30 Z', // Forma de hoja 1
  'M0,0 Q40,-30 50,0 Q60,-30 100,0 Q90,50 50,40 Q10,50 0,0 Z', // Forma de hoja 2
  'M0,15 Q20,-15 40,15 Q60,-15 80,15 Q60,45 40,30 Q20,45 0,15 Z', // Forma de hoja 3
];

const LeafComponent = ({ style }) => {
  const randomLeafShape = leafShapes[Math.floor(Math.random() * leafShapes.length)];
  const randomRotation = Math.floor(Math.random() * 360);
  
  return (
    <Box
      as="div"
      position="absolute"
      width={`${Math.random() * 30 + 20}px`}
      height={`${Math.random() * 30 + 20}px`}
      style={{ ...style, rotate: `${randomRotation}deg` }}
      zIndex={5}
    >
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 100 50"
        animate={{
          rotate: [0, randomRotation, 0],
        }}
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <path
          d={randomLeafShape}
          fill={leafColors[Math.floor(Math.random() * leafColors.length)]}
        />
      </motion.svg>
    </Box>
  );
};

const FallingLeaves = ({ count = 20 }) => {
  const [leaves, setLeaves] = useState([]);
  
  useEffect(() => {
    const newLeaves = Array.from({ length: count }).map((_, index) => {
      const startPositionX = Math.random() * 100; // posición aleatoria en el eje X (%)
      const duration = Math.random() * 10 + 10; // duración entre 10 y 20 segundos
      
      return {
        id: index,
        startX: `${startPositionX}vw`,
        animationDuration: `${duration}s`,
        delay: `${Math.random() * 10}s`,
      };
    });
    
    setLeaves(newLeaves);
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
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          initial={{ y: -100, x: leaf.startX }}
          animate={{
            y: "100vh",
            x: [
              leaf.startX,
              `calc(${leaf.startX} + 100px)`,
              `calc(${leaf.startX} - 50px)`,
              `calc(${leaf.startX} + 20px)`,
              leaf.startX,
            ],
          }}
          transition={{
            y: {
              duration: leaf.animationDuration,
              repeat: Infinity,
              delay: leaf.delay,
              ease: "linear",
            },
            x: {
              duration: leaf.animationDuration,
              repeat: Infinity,
              delay: leaf.delay,
              times: [0, 0.25, 0.5, 0.75, 1],
              ease: "easeInOut",
            },
          }}
        >
          <LeafComponent />
        </motion.div>
      ))}
    </Box>
  );
};

export default FallingLeaves;