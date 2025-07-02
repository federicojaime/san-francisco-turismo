// src/components/WinterAgendaPreview.jsx
import React from 'react';
import { 
    Box, 
    Container, 
    Heading, 
    Text, 
    VStack, 
    HStack, 
    Button, 
    SimpleGrid,
    Badge,
    Icon,
    Flex
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaSnowflake, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { winterEvents } from '../data/winterEventsData';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const EventCard = ({ event, delay = 0 }) => (
    <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -5 }}
        bg="white"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        p={6}
        h="100%"
        borderTop="3px solid"
        borderTopColor="winter.sky"
    >
        <VStack align="start" spacing={3} h="100%">
            <HStack>
                <Text fontSize="2xl">{event.events[0]?.icon}</Text>
                <Badge colorScheme="blue" fontSize="sm">
                    {event.day}
                </Badge>
            </HStack>
            
            <Heading size="md" color="winter.deep" noOfLines={2}>
                {event.events[0]?.title}
            </Heading>
            
            <HStack spacing={4} fontSize="sm" color="gray.600">
                <HStack>
                    <Icon as={FaClock} />
                    <Text>{event.events[0]?.time} hs</Text>
                </HStack>
                <Badge colorScheme="teal" variant="subtle">
                    {event.events[0]?.category}
                </Badge>
            </HStack>
            
            <Text color="gray.600" fontSize="sm" noOfLines={3} flex="1">
                {event.events[0]?.description}
            </Text>
            
            {event.events[0]?.price && (
                <Badge colorScheme="orange" size="lg">
                    {event.events[0]?.price}
                </Badge>
            )}
        </VStack>
    </MotionBox>
);

const WinterAgendaPreview = () => {
    // Obtener los próximos 6 eventos desde hoy
    const today = new Date();
    const upcomingEvents = winterEvents
        .filter(event => event.date >= today)
        .slice(0, 6);

    return (
        <Box py={16} bg="rgba(227, 242, 253, 0.3)" overflow="hidden">
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
                            AGENDA DE INVIERNO 2025
                        </MotionHeading>

                        <MotionBox
                            width="120px"
                            height="3px"
                            bg="winter.sky"
                            margin="15px auto"
                            initial={{ width: 0 }}
                            whileInView={{ width: "120px" }}
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
                            ¡Más de 40 actividades para disfrutar estas vacaciones de invierno!
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

                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} width="100%">
                        {upcomingEvents.map((event, index) => (
                            <EventCard
                                key={event.id}
                                event={event}
                                delay={index * 0.1}
                            />
                        ))}
                    </SimpleGrid>

                    <Flex direction={{ base: "column", md: "row" }} gap={4} align="center">
                        <Button
                            as={RouterLink}
                            to="/eventos"
                            size="lg"
                            bgGradient="linear(to-r, winter.deep, winter.sky)"
                            color="white"
                            leftIcon={<FaCalendarAlt />}
                            _hover={{ 
                                bgGradient: "linear(to-r, winter.sky, winter.deep)", 
                                transform: "translateY(-2px)",
                                boxShadow: "lg"
                            }}
                            transition="all 0.3s"
                            px={8}
                            py={6}
                            borderRadius="full"
                            boxShadow="lg"
                        >
                            Ver Agenda Completa
                        </Button>
                        
                        <Text color="gray.600" textAlign="center">
                            Viernes 4 al 16 de Julio
                        </Text>
                    </Flex>
                </VStack>
            </Container>
        </Box>
    );
};

export default WinterAgendaPreview;