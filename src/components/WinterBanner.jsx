// src/components/WinterBanner.jsx
import React from 'react';
import { Box, Button, Heading, Text, VStack, HStack, Icon, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaSnowflake, FaMountain, FaCampground } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const WinterBanner = () => {
    return (
        <MotionBox
            position="relative"
            minH={{ base: '300px', md: '400px' }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
            width="100%"
            my={{ base: 2, md: 4 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Imagen de fondo con degradado */}
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgImage="url('https://images.unsplash.com/photo-1578662996442-48f60103fc96')"
                bgSize="cover"
                bgPosition="center"
                zIndex={0}
            />
            
            {/* Overlay con gradiente invernal */}
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgGradient="linear(to-r, rgba(1, 87, 155, 0.85), rgba(3, 169, 244, 0.85))"
                zIndex={1}
            />

            {/* Decoración: Copos de nieve flotantes */}
            <Icon
                as={FaSnowflake}
                position="absolute"
                top="15%"
                left="10%"
                color="rgba(255, 255, 255, 0.7)"
                boxSize={{ base: 5, md: 8 }}
                transform="rotate(-15deg)"
                zIndex={2}
            />
            
            <Icon
                as={FaSnowflake}
                position="absolute"
                bottom="20%"
                right="15%"
                color="rgba(225, 245, 254, 0.8)"
                boxSize={{ base: 6, md: 10 }}
                transform="rotate(20deg)"
                zIndex={2}
            />
            
            <Icon
                as={FaSnowflake}
                position="absolute"
                top="25%"
                right="10%"
                color="rgba(179, 229, 252, 0.7)"
                boxSize={{ base: 4, md: 7 }}
                transform="rotate(10deg)"
                zIndex={2}
            />

            {/* Contenido del banner */}
            <VStack
                spacing={{ base: 4, md: 6 }}
                maxW="1200px"
                width="100%"
                px={{ base: 4, md: 6 }}
                align="center"
                textAlign="center"
                zIndex={2}
            >
                <MotionHeading
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    fontSize={{ base: '3xl', md: '5xl' }}
                    fontWeight="bold"
                    color="white"
                    textShadow="2px 2px 4px rgba(0,0,0,0.3)"
                    letterSpacing="wider"
                >
                    ¡VIVÍ EL INVIERNO EN SAN FRANCISCO DEL MONTE DE ORO!
                </MotionHeading>

                <MotionText
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    fontSize={{ base: 'md', md: 'xl' }}
                    fontWeight="medium"
                    color="white"
                    maxW="800px"
                    textShadow="1px 1px 3px rgba(0,0,0,0.3)"
                    mb={{ base: 2, md: 4 }}
                >
                    Descubrí los paisajes más impresionantes con la magia del invierno serrano. Las
                    sierras y senderos te esperan con un espectáculo único de cristal, nieve y aire puro.
                </MotionText>

                <HStack 
                    spacing={4} 
                    flexWrap={{ base: "wrap", md: "nowrap" }}
                    justify="center"
                    mt={{ base: 2, md: 4 }}
                >
                    <Button
                        as={RouterLink}
                        to="/atractivos?category=Naturaleza"
                        bg="white"
                        color="#0277BD"
                        leftIcon={<FaMountain />}
                        _hover={{ 
                            bg: "rgba(255,255,255,0.9)", 
                            transform: "translateY(-2px)",
                            boxShadow: "lg"
                        }}
                        transition="all 0.3s"
                        boxShadow="md"
                    >
                        Rutas Invernales
                    </Button>
                    
                    <Button
                        as={RouterLink}
                        to="/alojamientos"
                        bg="white"
                        color="#0277BD"
                        leftIcon={<FaCampground />}
                        _hover={{ 
                            bg: "rgba(255,255,255,0.9)", 
                            transform: "translateY(-2px)",
                            boxShadow: "lg"
                        }}
                        transition="all 0.3s"
                        boxShadow="md"
                    >
                        Vacaciones de Invierno
                    </Button>
                </HStack>
            </VStack>
        </MotionBox>
    );
};

export default WinterBanner;