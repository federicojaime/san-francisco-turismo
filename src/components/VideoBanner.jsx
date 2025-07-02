import React, { useState, useEffect } from 'react';
import { Box, Heading, VStack, IconButton, Flex, Text, Icon } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FaSnowflake } from 'react-icons/fa';
import videoSpot from "../assets/videos/spot.mp4";
import imagenPlaceholder from "../assets/images/sierras.jpg";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionIconButton = motion(IconButton);
const MotionIcon = motion(Icon);

const frases = [
    "PAISAJES INVERNALES",
    "SENDEROS",
    "AIRE PURO",
    "VACACIONES DE INVIERNO",
];

const VideoBanner = () => {
    const [videoListo, setVideoListo] = useState(false);
    const [fraseActual, setFraseActual] = useState(0);

    useEffect(() => {
        const elementoVideo = document.getElementById('video-fondo');
        elementoVideo.addEventListener('canplay', () => setVideoListo(true));

        const intervaloFrases = setInterval(() => {
            setFraseActual((prev) => (prev + 1) % frases.length);
        }, 3000);

        return () => clearInterval(intervaloFrases);
    }, []);

    const scrollAlContenido = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <Box position="relative" height="100vh" overflow="hidden">
            <Box
                as="img"
                src={imagenPlaceholder}
                alt="Paisaje de San Francisco"
                position="absolute"
                inset="0"
                width="100%"
                height="100%"
                objectFit="cover"
            />
            <Box
                as="video"
                id="video-fondo"
                src={videoSpot}
                autoPlay
                loop
                muted
                playsInline
                position="absolute"
                inset="0"
                width="100%"
                height="100%"
                objectFit="cover"
                transition="opacity 1s"
                opacity={videoListo ? 1 : 0}
            />
            <Box
                position="absolute"
                inset="0"
                bg="linear-gradient(to bottom, rgba(1,87,155,0.3), rgba(3,169,244,0.5))"
                zIndex="1"
            />

            {/* Copos de nieve animados flotando */}
            <MotionIcon
                as={FaSnowflake}
                position="absolute"
                top="15%"
                left="10%"
                color="#E1F5FE"
                boxSize={6}
                zIndex={2}
                animate={{ 
                    y: [0, 10, 0],
                    x: [0, 5, 0],
                    rotate: [0, 15, 0]
                }}
                transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
            
            <MotionIcon
                as={FaSnowflake}
                position="absolute"
                top="30%"
                right="15%"
                color="#B3E5FC"
                boxSize={8}
                zIndex={2}
                animate={{ 
                    y: [0, -10, 0],
                    x: [0, -5, 0],
                    rotate: [0, -20, 0]
                }}
                transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
            
            <MotionIcon
                as={FaSnowflake}
                position="absolute"
                bottom="25%"
                left="20%"
                color="#03A9F4"
                boxSize={7}
                zIndex={2}
                animate={{ 
                    y: [0, 15, 0],
                    x: [0, 8, 0],
                    rotate: [0, 30, 0]
                }}
                transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />

            <Flex
                direction="column"
                height="100%"
                justifyContent="space-between"
                alignItems="center"
                position="relative"
                zIndex="10"
            >
                <VStack
                    flex="1"
                    justifyContent="center"
                    alignItems="center"
                    spacing={8}
                    px={4}
                >
                    <MotionBox
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        textAlign="center"
                    >
                        <MotionHeading
                            as="h1"
                            size="3xl"
                            color="white"
                            fontWeight="light"
                            textShadow="2px 2px 8px rgba(0,0,0,0.6)"
                            letterSpacing="wider"
                        >
                            VIVÍ
                        </MotionHeading>
                        <MotionHeading
                            as="h2"
                            size="3xl"
                            color="#E1F5FE"
                            fontWeight="semibold"
                            letterSpacing="tighter"
                            textShadow="2px 2px 8px rgba(0,0,0,0.6)"
                        >
                            EL INVIERNO EN SAN FRANCISCO
                        </MotionHeading>
                        <MotionBox
                            width="60%"
                            height="3px"
                            bgGradient="linear(to-r, #0277BD, #03A9F4)"
                            mx="auto"
                            mt={2}
                            mb={4}
                            initial={{ width: "0%" }}
                            animate={{ width: "60%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                    </MotionBox>

                    <AnimatePresence mode="wait">
                        <MotionHeading
                            key={fraseActual}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            size="xl"
                            color="white"
                            textShadow="1px 1px 4px rgba(0,0,0,0.6)"
                        >
                            {frases[fraseActual]}
                        </MotionHeading>
                    </AnimatePresence>
                </VStack>

                <MotionIconButton
                    icon={<ChevronDownIcon />}
                    aria-label="Desplazar al contenido"
                    onClick={scrollAlContenido}
                    size="lg"
                    fontSize="3xl"
                    color="white"
                    bg="transparent"
                    _hover={{ bg: "whiteAlpha.200" }}
                    transition="all 0.3s"
                    mb={8}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                />
            </Flex>

            {
                !videoListo && (
                    <Box
                        position="absolute"
                        inset="0"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        bg="rgba(1,87,155,0.5)"
                        zIndex="20"
                    >
                        <Box
                            className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"
                        />
                    </Box>
                )
            }
        </Box>
    );
};

export default VideoBanner;