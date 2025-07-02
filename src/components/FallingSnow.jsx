// src/components/FallingSnow.jsx - Versión mejorada
import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const snowflakeTypes = [
  { char: '❄', weight: 0.3 },
  { char: '❅', weight: 0.25 },
  { char: '❆', weight: 0.2 },
  { char: '✻', weight: 0.15 },
  { char: '✼', weight: 0.1 },
  { char: '❋', weight: 0.1 },
  { char: '⋄', weight: 0.05 },
  { char: '◆', weight: 0.05 },
  { char: '⬟', weight: 0.03 },
  { char: '⬢', weight: 0.02 }
];

const SnowflakeComponent = ({ snowflake }) => {
  const randomRotation = Math.random() * 360;
  const swayAmplitude = 20 + Math.random() * 40; // Amplitud de balanceo
  
  return (
    <motion.div
      initial={{ 
        y: -100, 
        x: snowflake.startX,
        rotate: randomRotation,
        opacity: 0
      }}
      animate={{
        y: "100vh",
        x: [
          snowflake.startX,
          snowflake.startX + swayAmplitude,
          snowflake.startX - swayAmplitude,
          snowflake.startX + (swayAmplitude * 0.7),
          snowflake.startX - (swayAmplitude * 0.5),
          snowflake.startX
        ],
        rotate: [randomRotation, randomRotation + 180, randomRotation + 360],
        opacity: [0, 1, 1, 1, 0.7, 0]
      }}
      transition={{
        y: {
          duration: snowflake.duration,
          repeat: Infinity,
          delay: snowflake.delay,
          ease: "linear",
        },
        x: {
          duration: snowflake.duration,
          repeat: Infinity,
          delay: snowflake.delay,
          times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          ease: "easeInOut",
        },
        rotate: {
          duration: snowflake.duration * 0.7,
          repeat: Infinity,
          delay: snowflake.delay,
          ease: "linear",
        },
        opacity: {
          duration: snowflake.duration,
          repeat: Infinity,
          delay: snowflake.delay,
          times: [0, 0.1, 0.3, 0.7, 0.9, 1],
          ease: "easeInOut",
        }
      }}
      style={{
        position: 'absolute',
        fontSize: `${snowflake.size}px`,
        color: snowflake.color,
        textShadow: `0 0 ${snowflake.glow}px rgba(255, 255, 255, 0.8)`,
        filter: `blur(${snowflake.blur}px)`,
        zIndex: snowflake.zIndex,
        userSelect: 'none',
        pointerEvents: 'none'
      }}
    >
      {snowflake.char}
    </motion.div>
  );
};

const FallingSnow = ({ count = 60, intensity = 'medium' }) => {
  const [snowflakes, setSnowflakes] = useState([]);
  
  useEffect(() => {
    const intensitySettings = {
      light: { count: Math.max(20, count * 0.5), speedMultiplier: 0.7 },
      medium: { count: count, speedMultiplier: 1 },
      heavy: { count: count * 1.5, speedMultiplier: 1.3 }
    };
    
    const settings = intensitySettings[intensity] || intensitySettings.medium;
    
    const newSnowflakes = Array.from({ length: settings.count }).map((_, index) => {
      // Seleccionar tipo de copo basado en peso
      const randomValue = Math.random();
      let cumulativeWeight = 0;
      let selectedType = snowflakeTypes[0];
      
      for (const type of snowflakeTypes) {
        cumulativeWeight += type.weight;
        if (randomValue <= cumulativeWeight) {
          selectedType = type;
          break;
        }
      }
      
      // Crear variaciones en tamaño y velocidad
      const baseSize = 12 + Math.random() * 16;
      const sizeVariation = 0.7 + Math.random() * 0.6; // Entre 0.7 y 1.3
      const size = baseSize * sizeVariation;
      
      // Velocidad inversamente proporcional al tamaño (copos grandes caen más lento)
      const baseSpeed = 12 + Math.random() * 8;
      const speedFactor = Math.max(0.4, 1 - (size - 12) / 20); // Copos más grandes van más lentos
      const duration = (baseSpeed / speedFactor) * settings.speedMultiplier;
      
      // Colores sutiles de invierno
      const colors = [
        'rgba(255, 255, 255, 0.9)',
        'rgba(240, 248, 255, 0.8)',
        'rgba(230, 245, 255, 0.85)',
        'rgba(225, 245, 254, 0.9)',
        'rgba(179, 229, 252, 0.7)',
        'rgba(187, 222, 251, 0.8)'
      ];
      
      return {
        id: index,
        char: selectedType.char,
        startX: Math.random() * window.innerWidth,
        size: size,
        duration: duration,
        delay: Math.random() * 8, // Delay más distribuido
        color: colors[Math.floor(Math.random() * colors.length)],
        glow: Math.random() * 3 + 1, // Efecto de brillo
        blur: Math.random() * 0.5, // Ligero desenfoque para profundidad
        zIndex: Math.floor(Math.random() * 3) + 1 // Diferentes capas de profundidad
      };
    });
    
    setSnowflakes(newSnowflakes);
  }, [count, intensity]);
  
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      pointerEvents="none"
      zIndex="1"
      overflow="hidden"
      // Añadir gradiente sutil para simular niebla invernal
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(180deg, rgba(225,245,254,0.02) 0%, rgba(179,229,252,0.01) 50%, rgba(225,245,254,0.02) 100%)',
        pointerEvents: 'none',
        zIndex: -1
      }}
    >
      {snowflakes.map((snowflake) => (
        <SnowflakeComponent key={snowflake.id} snowflake={snowflake} />
      ))}
    </Box>
  );
};

export default FallingSnow;