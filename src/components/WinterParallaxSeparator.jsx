// src/components/WinterParallaxSeparator.jsx - Versión mejorada
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Text, HStack, Icon } from '@chakra-ui/react';
import { FaSnowflake } from 'react-icons/fa';

const MotionText = motion(Text);
const MotionBox = motion(Box);
const MotionIcon = motion(Icon);

const WinterParallaxSeparator = ({ text, imageUrl, children, showOverlay = true }) => {
  const words = text.split(' ');

  return (
    <MotionBox
      bgImage={`url(${imageUrl})`}
      bgPos="center"
      bgSize="cover"
      bgAttachment={{ base: "scroll", md: "fixed" }} // Fixed solo en desktop para mejor performance
      minH={{ base: "300px", md: "400px" }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      overflow="hidden"
      my={0}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      {/* Overlay principal con gradiente mejorado */}
      {showOverlay && (
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bgGradient="linear(to-b, rgba(1,87,155,0.6), rgba(3,169,244,0.4), rgba(2,119,189,0.7))"
          zIndex={1}
        />
      )}

      {/* Partículas de nieve flotantes animadas */}
      <MotionIcon
        as={FaSnowflake}
        position="absolute"
        top="10%"
        left="8%"
        color="rgba(225, 245, 254, 0.8)"
        boxSize={{ base: 6, md: 10 }}
        zIndex={2}
        animate={{ 
          y: [0, 20, 0], 
          rotate: [0, 20, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      <MotionIcon
        as={FaSnowflake}
        position="absolute"
        top="20%"
        right="12%"
        color="rgba(179, 229, 252, 0.9)"
        boxSize={{ base: 4, md: 8 }}
        zIndex={2}
        animate={{ 
          y: [0, -15, 0], 
          rotate: [0, -25, 0],
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5,
          ease: "easeInOut"
        }}
      />
      
      <MotionIcon
        as={FaSnowflake}
        position="absolute"
        bottom="15%"
        left="15%"
        color="rgba(227, 242, 253, 0.7)"
        boxSize={{ base: 5, md: 7 }}
        zIndex={2}
        animate={{ 
          y: [0, 12, 0], 
          rotate: [0, 30, 0],
          x: [0, 8, 0],
          opacity: [0.5, 0.9, 0.5]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
          ease: "easeInOut"
        }}
      />

      <MotionIcon
        as={FaSnowflake}
        position="absolute"
        bottom="25%"
        right="20%"
        color="rgba(3, 169, 244, 0.6)"
        boxSize={{ base: 3, md: 6 }}
        zIndex={2}
        animate={{ 
          y: [0, -10, 0], 
          rotate: [0, -15, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ 
          duration: 3.5, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
          ease: "easeInOut"
        }}
      />

      {/* Contenido principal */}
      <Box
        zIndex={3}
        textAlign="center"
        px={{ base: 4, md: 8 }}
        position="relative"
      >
        {/* Efecto de brillo detrás del texto */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width="120%"
          height="120%"
          bg="radial-gradient(circle, rgba(225, 245, 254, 0.1), transparent 70%)"
          borderRadius="50%"
          zIndex={-1}
        />

        <HStack spacing={2} flexWrap="wrap" justifyContent="center" mb={6}>
          {words.map((word, index) => (
            <MotionText
              key={index}
              display="inline-block"
              fontSize={{ base: '2xl', md: '4xl', lg: '6xl' }}
              fontWeight="black"
              color="white"
              textShadow="3px 3px 8px rgba(0,0,0,0.8), 0 0 20px rgba(225, 245, 254, 0.3)"
              m={1}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: 'spring',
                damping: 20,
                stiffness: 100,
                delay: index * 0.15,
                duration: 0.8
              }}
              whileHover={{
                scale: 1.05,
                textShadow: "4px 4px 12px rgba(0,0,0,0.9), 0 0 30px rgba(225, 245, 254, 0.6)",
                transition: { duration: 0.3 }
              }}
              letterSpacing="wide"
              className="winter-float"
            >
              {word}
            </MotionText>
          ))}
        </HStack>

        {/* Línea decorativa animada */}
        <MotionBox
          width={{ base: "60%", md: "40%" }}
          height="4px"
          bgGradient="linear(to-r, transparent, rgba(225, 245, 254, 0.8), rgba(3, 169, 244, 1), rgba(225, 245, 254, 0.8), transparent)"
          mx="auto"
          borderRadius="2px"
          boxShadow="0 0 20px rgba(3, 169, 244, 0.6), 0 0 40px rgba(225, 245, 254, 0.3)"
          zIndex={3}
          initial={{ width: '0%', opacity: 0 }}
          whileInView={{ width: { base: "60%", md: "40%" }, opacity: 1 }}
          transition={{ 
            delay: words.length * 0.15 + 0.5, 
            duration: 1.2, 
            ease: 'easeInOut' 
          }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(3, 169, 244, 0.6), 0 0 40px rgba(225, 245, 254, 0.3)",
              "0 0 30px rgba(3, 169, 244, 0.8), 0 0 60px rgba(225, 245, 254, 0.5)",
              "0 0 20px rgba(3, 169, 244, 0.6), 0 0 40px rgba(225, 245, 254, 0.3)"
            ]
          }}
          style={{
            animation: "winterPulse 3s ease-in-out infinite"
          }}
        />

        {/* Contenido adicional (como botones) */}
        {children && (
          <MotionBox
            mt={8}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: words.length * 0.15 + 1, 
              duration: 0.8,
              ease: 'easeOut'
            }}
            zIndex={3}
          >
            {children}
          </MotionBox>
        )}
      </Box>

      {/* Efectos de partículas adicionales para mayor dinamismo */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={2}
        pointerEvents="none"
      >
        {/* Pequeñas partículas dispersas */}
        {[...Array(8)].map((_, i) => (
          <MotionBox
            key={i}
            position="absolute"
            top={`${Math.random() * 100}%`}
            left={`${Math.random() * 100}%`}
            width="3px"
            height="3px"
            bg="rgba(225, 245, 254, 0.6)"
            borderRadius="50%"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </Box>

      {/* Efecto de cristal en las esquinas */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100px"
        height="100px"
        bgGradient="radial(circle, rgba(225, 245, 254, 0.1), transparent 70%)"
        zIndex={2}
        pointerEvents="none"
        className="winter-sparkle"
      />
      <Box
        position="absolute"
        bottom="0"
        right="0"
        width="120px"
        height="120px"
        bgGradient="radial(circle, rgba(3, 169, 244, 0.1), transparent 70%)"
        zIndex={2}
        pointerEvents="none"
        className="winter-sparkle"
        style={{ animationDelay: "1s" }}
      />
    </MotionBox>
  );
};

export default WinterParallaxSeparator;