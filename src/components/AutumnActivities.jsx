// src/components/AutumnActivities.jsx
import React from 'react';
import { Box, Container, Heading, SimpleGrid, VStack, Text, Icon, Image, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaLeaf, FaCamera, FaHiking, FaWineGlassAlt, FaCampground } from 'react-icons/fa';

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
                bg="rgba(210,105,30,0.2)"
                transition="all 0.3s"
                _groupHover={{ bg: "rgba(210,105,30,0.4)" }}
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
            <Heading size="md" color="autumn.rust">{title}</Heading>
            <Text color="gray.600">{description}</Text>
        </VStack>
    </MotionBox>
);

const AutumnActivities = () => {
    const activities = [
        {
            title: "Senderismo Otoñal",
            description: "Recorre los senderos de las sierras y maravíllate con los colores dorados y rojizos del follaje. Una experiencia imperdible en esta época del año.",
            icon: FaHiking,
            image: "https://via.placeholder.com/500x300/FFB81C/FFFFFF?text=Senderismo+Otoñal"
        },
        {
            title: "Fotografía de Paisaje",
            description: "El otoño ofrece las mejores oportunidades para fotografiar paisajes con una paleta de colores única. Trae tu cámara y captura momentos inolvidables.",
            icon: FaCamera,
            image: "https://via.placeholder.com/500x300/D2691E/FFFFFF?text=Fotografia+Otoñal"
        },
        {
            title: "Gastronomía de Temporada",
            description: "Prueba platos y bebidas especiales preparados con ingredientes de temporada. Nuestros restaurantes ofrecen menús inspirados en el otoño.",
            icon: FaWineGlassAlt,
            image: "https://via.placeholder.com/500x300/8B4513/FFFFFF?text=Gastronomia+Otoñal"
        }
    ];

    return (
        <Box py={16} bg="rgba(255, 248, 225, 0.5)" overflow="hidden">
            <Container maxW="container.xl">
                <VStack spacing={12} mb={12}>
                    <Box textAlign="center" position="relative">
                        <Icon
                            as={FaLeaf}
                            position="absolute"
                            top="-20px"
                            left="-10px"
                            color="autumn.leaf"
                            boxSize={8}
                            transform="rotate(-20deg)"
                        />

                        <MotionHeading
                            as="h2"
                            size="2xl"
                            color="autumn.rust"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            ACTIVIDADES DE OTOÑO
                        </MotionHeading>

                        <MotionBox
                            width="100px"
                            height="3px"
                            bg="autumn.gold"
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
                            Descubre las experiencias más hermosas que ofrece nuestra ciudad durante esta temporada
                        </MotionHeading>

                        <Icon
                            as={FaLeaf}
                            position="absolute"
                            bottom="-15px"
                            right="-5px"
                            color="autumn.orange"
                            boxSize={6}
                            transform="rotate(15deg)"
                        />
                    </Box>

                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} width="100%">
                        {activities.map((activity, index) => (
                            <ActivityCard
                                key={index}
                                {...activity}
                                delay={index * 0.1}
                            />
                        ))}
                    </SimpleGrid>
                    {/* 
          <Button
            size="lg"
            bgGradient="linear(to-r, autumn.rust, autumn.gold)"
            color="white"
            _hover={{ bgGradient: "linear(to-r, autumn.gold, autumn.rust)", transform: "translateY(-5px)" }}
            transition="all 0.3s"
            px={8}
            py={6}
            borderRadius="full"
            boxShadow="lg"
          >
            Ver Todas las Actividades
          </Button>*/}
                </VStack>
            </Container>
        </Box>
    );
};

export default AutumnActivities;