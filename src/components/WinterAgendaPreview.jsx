// src/components/WinterAgendaPreview.jsx - Versión corregida con fechas hasta el 27 de julio
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
    Flex,
    useBreakpointValue,
    Image
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaSnowflake, FaCalendarAlt, FaClock, FaArrowRight, FaStar } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { getUpcomingEvents } from '../data/winterEventsData';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const FeaturedEventCard = ({ event, delay = 0 }) => (
    <MotionBox
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ y: -8, scale: 1.02 }}
        bg="white"
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="2xl"
        h="100%"
        borderTop="4px solid"
        borderTopColor="winter.sky"
        position="relative"
        _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: 'linear-gradient(135deg, rgba(227, 242, 253, 0.05), rgba(179, 229, 252, 0.1))',
            zIndex: 0
        }}
    >
        <Box position="relative" zIndex={1}>
            {/* Header del evento */}
            <Box 
                bg="linear-gradient(135deg, #0277BD, #03A9F4)" 
                color="white" 
                p={4}
                position="relative"
                overflow="hidden"
            >
                {/* Copos decorativos en el header */}
                <Icon
                    as={FaSnowflake}
                    position="absolute"
                    top="8px"
                    right="12px"
                    boxSize={4}
                    opacity={0.3}
                    transform="rotate(15deg)"
                />
                
                <VStack align="start" spacing={2}>
                    <HStack justify="space-between" w="100%">
                        <Badge 
                            bg="rgba(255,255,255,0.2)" 
                            color="white" 
                            fontSize="sm"
                            borderRadius="full"
                            px={3}
                            py={1}
                        >
                            {event.day}
                        </Badge>
                        <HStack>
                            <Icon as={FaStar} boxSize={3} />
                            <Text fontSize="xs" fontWeight="bold">DESTACADO</Text>
                        </HStack>
                    </HStack>
                    
                    <HStack spacing={3}>
                        <Text fontSize="3xl">{event.events[0]?.icon}</Text>
                        <VStack align="start" spacing={0}>
                            <Text fontSize="lg" fontWeight="bold" lineHeight="1.2">
                                {event.events[0]?.title}
                            </Text>
                            <HStack spacing={2} fontSize="sm" opacity={0.9}>
                                <Icon as={FaClock} boxSize={3} />
                                <Text>{event.events[0]?.time} hs</Text>
                            </HStack>
                        </VStack>
                    </HStack>
                </VStack>
            </Box>
            
            {/* Contenido del evento */}
            <VStack p={6} align="start" spacing={4}>
                <Text color="gray.700" fontSize="sm" lineHeight="1.6" noOfLines={3}>
                    {event.events[0]?.description}
                </Text>
                
                <HStack justify="space-between" w="100%" align="center">
                    <Badge colorScheme="teal" variant="subtle" borderRadius="full">
                        {event.events[0]?.category}
                    </Badge>
                    
                    {event.events[0]?.price && (
                        <Badge colorScheme="orange" fontSize="sm" borderRadius="full">
                            {event.events[0]?.price}
                        </Badge>
                    )}
                </HStack>
                
                {event.events.length > 1 && (
                    <Text fontSize="xs" color="winter.deep" fontWeight="bold">
                        +{event.events.length - 1} actividad{event.events.length > 2 ? 'es' : ''} más
                    </Text>
                )}
            </VStack>
        </Box>
    </MotionBox>
);

const WinterAgendaPreview = () => {
    // Obtener los próximos 6 eventos destacados
    const upcomingEvents = getUpcomingEvents().slice(0, 6);
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box 
            py={20} 
            bg="linear-gradient(180deg, rgba(227, 242, 253, 0.3) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(227, 242, 253, 0.3) 100%)" 
            overflow="hidden"
            position="relative"
        >
            {/* Fondo decorativo con copos */}
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                pointerEvents="none"
                zIndex={0}
            >
                <Icon
                    as={FaSnowflake}
                    position="absolute"
                    top="10%"
                    left="5%"
                    color="winter.frost"
                    boxSize={16}
                    opacity={0.1}
                    transform="rotate(-15deg)"
                />
                <Icon
                    as={FaSnowflake}
                    position="absolute"
                    bottom="15%"
                    right="8%"
                    color="winter.sky"
                    boxSize={20}
                    opacity={0.08}
                    transform="rotate(25deg)"
                />
            </Box>

            <Container maxW="container.xl" position="relative" zIndex={1}>
                <VStack spacing={16}>
                    {/* Header mejorado */}
                    <Box textAlign="center" position="relative" maxW="800px" mx="auto">
                        <MotionBox
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <MotionHeading
                                as="h1"
                                size="3xl"
                                color="winter.deep"
                                mb={4}
                                fontWeight="bold"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                ☃️ VACACIONES DE INVIERNO 2025
                            </MotionHeading>

                            <MotionBox
                                width="150px"
                                height="4px"
                                bgGradient="linear(to-r, winter.deep, winter.sky)"
                                margin="20px auto"
                                borderRadius="full"
                                initial={{ width: 0 }}
                                whileInView={{ width: "150px" }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            />

                            <Text
                                fontSize="xl"
                                color="gray.700"
                                mb={6}
                                lineHeight="1.6"
                                fontWeight="medium"
                            >
                                <Text as="span" color="winter.deep" fontWeight="bold">+40 actividades</Text> 
                                {" "}diseñadas para crear momentos inolvidables en familia durante las vacaciones de invierno
                            </Text>

                            {/* Información destacada */}
                            <HStack 
                                justify="center" 
                                spacing={8} 
                                flexWrap="wrap"
                                bg="white"
                                p={6}
                                borderRadius="2xl"
                                boxShadow="xl"
                                border="2px solid"
                                borderColor="winter.frost"
                            >
                                <VStack spacing={1}>
                                    <Icon as={FaCalendarAlt} color="winter.deep" boxSize={6} />
                                    <Text fontSize="lg" fontWeight="bold" color="winter.deep">
                                        Del 4 al 27
                                    </Text>
                                    <Text fontSize="sm" color="gray.600">de Julio</Text>
                                </VStack>
                                <VStack spacing={1}>
                                    <Text fontSize="2xl">🎪</Text>
                                    <Text fontSize="lg" fontWeight="bold" color="winter.deep">
                                        40+ Eventos
                                    </Text>
                                    <Text fontSize="sm" color="gray.600">Para toda la familia</Text>
                                </VStack>
                                <VStack spacing={1}>
                                    <Text fontSize="2xl">❄️</Text>
                                    <Text fontSize="lg" fontWeight="bold" color="winter.deep">
                                        Gratis y Pagos
                                    </Text>
                                    <Text fontSize="sm" color="gray.600">Opciones para todos</Text>
                                </VStack>
                            </HStack>
                        </MotionBox>
                    </Box>

                    {/* Grid de eventos destacados */}
                    <VStack spacing={8} w="100%">
                        <MotionHeading
                            as="h2"
                            size="xl"
                            color="winter.deep"
                            textAlign="center"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            🌟 Eventos Destacados
                        </MotionHeading>

                        <SimpleGrid 
                            columns={{ base: 1, md: 2, lg: 3 }} 
                            spacing={8} 
                            width="100%"
                        >
                            {upcomingEvents.map((event, index) => (
                                <FeaturedEventCard
                                    key={event.id}
                                    event={event}
                                    delay={index * 0.1}
                                />
                            ))}
                        </SimpleGrid>
                    </VStack>

                    {/* Call to action mejorado */}
                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        textAlign="center"
                        bg="white"
                        p={10}
                        borderRadius="3xl"
                        boxShadow="2xl"
                        border="3px solid"
                        borderColor="winter.frost"
                        position="relative"
                        overflow="hidden"
                        _before={{
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            bg: 'linear-gradient(135deg, rgba(227, 242, 253, 0.1), rgba(179, 229, 252, 0.05))',
                            zIndex: 0
                        }}
                    >
                        <Box position="relative" zIndex={1}>
                            <VStack spacing={6}>
                                <HStack spacing={3} justify="center">
                                    <Icon as={FaSnowflake} color="winter.sky" boxSize={8} />
                                    <Heading size="lg" color="winter.deep">
                                        ¡No te pierdas ni un solo momento!
                                    </Heading>
                                    <Icon as={FaSnowflake} color="winter.sky" boxSize={8} />
                                </HStack>
                                
                                <Text fontSize="lg" color="gray.700" maxW="600px">
                                    Mirá la agenda completa y planificá tu experiencia invernal perfecta
                                </Text>

                                <Flex 
                                    direction={{ base: "column", md: "row" }} 
                                    gap={4} 
                                    align="center"
                                    justify="center"
                                >
                                    <Button
                                        as={RouterLink}
                                        to="/eventos"
                                        size="xl"
                                        bgGradient="linear(to-r, winter.deep, winter.sky)"
                                        color="white"
                                        leftIcon={<FaCalendarAlt />}
                                        rightIcon={<FaArrowRight />}
                                        _hover={{ 
                                            bgGradient: "linear(to-r, winter.sky, winter.deep)", 
                                            transform: "translateY(-3px)",
                                            boxShadow: "2xl"
                                        }}
                                        transition="all 0.3s"
                                        px={10}
                                        py={8}
                                        borderRadius="full"
                                        boxShadow="xl"
                                        fontSize="lg"
                                        fontWeight="bold"
                                        minW="280px"
                                    >
                                        Ver Agenda Completa
                                    </Button>
                                    
                                    <Button
                                        as={RouterLink}
                                        to="/alojamientos"
                                        size="lg"
                                        variant="outline"
                                        borderColor="winter.deep"
                                        color="winter.deep"
                                        borderWidth="2px"
                                        _hover={{ 
                                            bg: "winter.crystal",
                                            transform: "translateY(-2px)",
                                            boxShadow: "lg"
                                        }}
                                        transition="all 0.3s"
                                        px={8}
                                        py={6}
                                        borderRadius="full"
                                        minW="220px"
                                        fontWeight="bold"
                                    >
                                        Reservar Estadía
                                    </Button>
                                </Flex>

                                <Text fontSize="sm" color="gray.600" fontStyle="italic">
                                    Organizá tu agenda y vive la experiencia invernal más completa de San Luis
                                </Text>
                            </VStack>
                        </Box>
                    </MotionBox>
                </VStack>
            </Container>
        </Box>
    );
};

export default WinterAgendaPreview;