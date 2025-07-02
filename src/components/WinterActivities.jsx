// src/components/WinterActivities.jsx
import React from 'react';
import { Box, Container, Heading, SimpleGrid, VStack, Text, Icon, Image, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaSnowflake, FaCamera, FaHiking, FaFire, FaCampground, FaBinoculars } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const ActivityCard = ({ title, description, icon, image, delay = 0 }) => (
    <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -10 }}
        bg="white"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        h="100%"
    >
        <Box position="relative" h="200px" overflow="hidden">
            <Image
                src={image}
                alt={title}
                width="100%"
                height="100%"
                objectFit="cover"
                transition="transform 0.5s"
                _groupHover={{ transform: 'scale(1.1)' }}
            />
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="rgba(2,119,189,0.2)"
                transition="all 0.3s"
                _groupHover={{ bg: "rgba(2,119,189,0.4)" }}
            />
            <Icon
                as={icon}
                position="absolute"
                top={4}
                right={4}
                boxSize={10}
                color="white"
                zIndex={1}
            />
        </Box>
        <VStack p={6} align="start" spacing={3}>
            <Heading size="md" color="winter.deep">{title}</Heading>
            <Text color="gray.600">{description}</Text>
        </VStack>
    </MotionBox>
);

const WinterActivities = () => {
    const activities = [
        {
            title: "Senderismo Invernal",
            description: "Recorre los senderos de las sierras y maravíllate con los paisajes invernales. Una experiencia única con aire puro y vistas cristalinas.",
            icon: FaHiking,
            image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=300&fit=crop"
        },
        {
            title: "Fotografía de Invierno",
            description: "El invierno ofrece las mejores oportunidades para fotografiar paisajes con una luz única. Captura momentos mágicos con escarcha y cielos despejados.",
            icon: FaCamera,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop"
        },
        {
            title: "Fogatas y Encuentros",
            description: "Disfruta de las noches invernales junto al fuego. Nuestros alojamientos ofrecen espacios especiales para compartir momentos únicos.",
            icon: FaFire,
            image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=300&fit=crop"
        },
        {
            title: "Observación Astronómica",
            description: "Los cielos de invierno son perfectos para la observación de estrellas. Las noches cristalinas ofrecen una visibilidad excepcional del cosmos.",
            icon: FaBinoculars,
            image: "https://images.unsplash.com/photo-1444927714506-8492d94b5ba0?w=500&h=300&fit=crop"
        }
    ];

    return (
        <Box py={16} bg="rgba(227, 242, 253, 0.5)" overflow="hidden">
            <Container maxW="container.xl">
                <VStack spacing={12} mb={12}>
                    <Box textAlign="center" position="relative">
                        <Icon
                            as={FaSnowflake}
                            position="absolute"
                            top="-20px"
                            left="-10px"
                            color="winter.frost"
                            boxSize={8}
                            transform="rotate(-20deg)"
                        />

                        <MotionHeading
                            as="h2"
                            size="2xl"
                            color="winter.deep"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            ACTIVIDADES DE INVIERNO
                        </MotionHeading>

                        <MotionBox
                            width="100px"
                            height="3px"
                            bg="winter.sky"
                            margin="15px auto"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100px" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        />

                        <MotionHeading
                            as="h3"
                            size="md"
                            fontWeight="normal"
                            color="gray.600"
                            maxW="700px"
                            mx="auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Descubre las experiencias más hermosas que ofrece nuestra ciudad durante las vacaciones de invierno
                        </MotionHeading>

                        <Icon
                            as={FaSnowflake}
                            position="absolute"
                            bottom="-15px"
                            right="-5px"
                            color="winter.sky"
                            boxSize={6}
                            transform="rotate(15deg)"
                        />
                    </Box>

                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} width="100%">
                        {activities.map((activity, index) => (
                            <ActivityCard
                                key={index}
                                {...activity}
                                delay={index * 0.1}
                            />
                        ))}
                    </SimpleGrid>
                </VStack>
            </Container>
        </Box>
    );
};

export default WinterActivities;