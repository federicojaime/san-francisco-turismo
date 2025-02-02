import React from 'react';
import { Box, Button, Heading, Text, VStack, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import bannerImage from '../assets/images/360.jpg';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionButton = motion(Button);
const MotionText = motion(Text);

const Banner = () => {
    return (
        <Box
            position="relative"
            minH={{ base: '250px', md: '300px', lg: '350px' }}
            display="flex"
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems="center"
            justifyContent={{ base: 'center', md: 'space-between' }}
            overflow="hidden"
            px={{ base: 4, md: 16 }}
            py={{ base: 6, md: 10 }}
            mx="auto"
            my={{ base: 6, md: 10 }}
            boxShadow="2xl"
            bgGradient="linear(to-r, #008080, #00CED1)"
        >
            <VStack spacing={3} alignItems={{ base: 'center', md: 'flex-start' }} textAlign={{ base: 'center', md: 'left' }} zIndex={2} color="white" pl={{ base: 0, md: 4 }}>
                <MotionHeading
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    fontSize={{ base: 'xl', md: '3xl' }}
                    textTransform="uppercase"
                    fontWeight="bold"
                    textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
                    color="white"
                >
                    ¡Explorá San Francisco del Monte de Oro en 360°!
                </MotionHeading>
                <MotionText
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    fontSize={{ base: 'sm', md: 'xl' }}
                    textShadow="1px 1px 3px rgba(0, 0, 0, 0.7)"
                >
                    Sumergite en la historia, naturaleza y aventura con nuestra experiencia virtual 360°
                </MotionText>
                <MotionButton
                    bgGradient="linear(to-r, #FF8C00, #FFA500)"
                    color="white"
                    _hover={{ bgGradient: 'linear(to-r, #FFA500, #FF8C00)', transform: 'scale(1.05)' }}
                    size="md"
                    onClick={() => window.location.href = 'https://vivisanfrancisco.com/recorrido-virtual/'}
                    borderRadius="full"
                    px={6}
                    py={4}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    boxShadow="lg"
                >
                    Conocé el Recorrido Virtual
                </MotionButton>
            </VStack>
            <Image
                src={bannerImage}
                alt="Vista 360 de las Sierras"
                borderRadius="full"
                boxSize={{ base: '200px', md: '300px', lg: '400px' }}
                position={{ base: 'relative', md: 'absolute' }}
                right={{ base: 0, md: -100 }}
                top={{ base: 'unset', md: '50%' }}
                transform={{ base: 'none', md: 'translateY(-50%)' }}
                objectFit="cover"
                boxShadow="2xl"
                mt={{ base: 4, md: 0 }}
            />
        </Box>
    );
};

export default Banner;
