// src/components/AutumnBanner.jsx
import React from 'react';
import { Box, Button, Heading, Text, VStack, HStack, Icon, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaLeaf, FaMountain, FaCampground } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const AutumnBanner = () => {
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
                bgImage="url('https://images.unsplash.com/photo-1507783548227-544c3b8fc065')"
                bgSize="cover"
                bgPosition="center"
                zIndex={0}
            />
            
            {/* Overlay con gradiente otoñal */}
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgGradient="linear(to-r, rgba(176, 58, 46, 0.85), rgba(214, 137, 16, 0.85))"
                zIndex={1}
            />

            {/* Decoración: Hojas flotantes */}
            <Icon
                as={FaLeaf}
                position="absolute"
                top="15%"
                left="10%"
                color="rgba(255, 255, 255, 0.7)"
                boxSize={{ base: 5, md: 8 }}
                transform="rotate(-15deg)"
                zIndex={2}
            />
            
            <Icon
                as={FaLeaf}
                position="absolute"
                bottom="20%"
                right="15%"
                color="rgba(255, 235, 200, 0.7)"
                boxSize={{ base: 6, md: 10 }}
                transform="rotate(20deg)"
                zIndex={2}
            />
            
            <Icon
                as={FaLeaf}
                position="absolute"
                top="25%"
                right="10%"
                color="rgba(255, 215, 170, 0.7)"
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
                    ¡VIVÍ EL OTOÑO EN SAN FRANCISCO DEL MONTE DE ORO!
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
                    Descubrí los paisajes más impresionantes con la magia de los colores otoñales. Las
                    sierras y senderos te esperan con un espectáculo único de rojos, naranjas y dorados.
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
                        color="#B7410E"
                        leftIcon={<FaMountain />}
                        _hover={{ 
                            bg: "rgba(255,255,255,0.9)", 
                            transform: "translateY(-2px)",
                            boxShadow: "lg"
                        }}
                        transition="all 0.3s"
                        boxShadow="md"
                    >
                        Rutas de Senderismo
                    </Button>
                    
                    <Button
                        as={RouterLink}
                        to="/alojamientos"
                        bg="white"
                        color="#B7410E"
                        leftIcon={<FaCampground />}
                        _hover={{ 
                            bg: "rgba(255,255,255,0.9)", 
                            transform: "translateY(-2px)",
                            boxShadow: "lg"
                        }}
                        transition="all 0.3s"
                        boxShadow="md"
                    >
                        Escapadas de Otoño
                    </Button>
                </HStack>
            </VStack>
        </MotionBox>
    );
};

export default AutumnBanner;