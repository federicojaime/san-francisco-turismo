import React, { useState, useEffect } from 'react';
import { Box, Heading, VStack, IconButton, Flex } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@chakra-ui/icons';
import videoSpot from "../assets/videos/spot.mp4";
import imagenPlaceholder from "../assets/images/sierras.jpg";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionIconButton = motion(IconButton);

const frases = [
    "AVENTURA",
    "PAZ Y SOSIEGO",
    "NATURALEZA",
    "HISTORIA",
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
                bg="linear-gradient(to bottom, rgba(0,169,206,0.1), rgba(0,169,206,0.7))"
                zIndex="1"
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
                            color="#FFB81C"
                            fontWeight="semibold"
                            letterSpacing="tighter"
                            textShadow="2px 2px 8px rgba(0,0,0,0.6)"
                        >
                            SAN FRANCISCO
                        </MotionHeading>
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
                        bg="rgba(0,169,206,0.5)"
                        zIndex="20"
                    >
                        <Box
                            className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"
                        />
                    </Box>
                )
            }
        </Box >
    );
};

export default VideoBanner;