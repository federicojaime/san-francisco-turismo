import { useRef, useState, useEffect } from 'react';
import { 
    Box, 
    Button, 
    Modal, 
    ModalOverlay, 
    ModalContent, 
    ModalBody, 
    ModalCloseButton, 
    useDisclosure,
    Text,
    Heading,
    VStack,
    HStack,
    Icon,
    Image
} from '@chakra-ui/react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { FaCalendarAlt, FaSnowflake, FaMapMarkerAlt } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

// Importación de componentes personalizados
import Banner from '../components/Banner';
import VideoBanner from '../components/VideoBanner';
import InteractiveMap from '../components/InteractiveMap';
import AttractionsCarousel from '../components/AttractionsCarousel';
import WinterBanner from '../components/WinterBanner.jsx';
import WinterParallaxSeparator from '../components/WinterParallaxSeparator.jsx';
import WinterActivities from '../components/WinterActivities.jsx';
import WinterAgendaPreview from '../components/WinterAgendaPreview.jsx';

// Importación de imágenes
import sierrasImage from '../assets/images/sierras.jpg';
import riosImage from '../assets/images/rios.jpg';
import culturaImage from '../assets/images/cultura.jpg';
import alojamientoImage from '../assets/images/alojamiento.jpg';
import gastronomiaImage from '../assets/images/gastronomia.jpg';

//Separador
import separatorImage1 from '../assets/images/sierras.jpg';
import separatorImage2 from '../assets/images/experience.jpg';

const MotionBox = motion(Box);

// Modal de Invitación a Actividades
const WinterActivitiesModal = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered>
            <ModalOverlay bg="rgba(1, 87, 155, 0.6)" backdropFilter="blur(8px)" />
            <ModalContent 
                bg="linear-gradient(135deg, rgba(227, 242, 253, 0.95), rgba(255, 255, 255, 0.95))" 
                borderRadius="2xl" 
                overflow="hidden"
                border="2px solid"
                borderColor="winter.frost"
                boxShadow="2xl"
            >
                <ModalCloseButton 
                    color="winter.deep" 
                    size="lg"
                    _hover={{ bg: "winter.crystal" }}
                />
                <ModalBody p={0}>
                    <Box position="relative" overflow="hidden">
                        {/* Imagen de fondo */}
                        <Image
                            src={separatorImage2}
                            alt="Actividades de Invierno"
                            w="100%"
                            h="300px"
                            objectFit="cover"
                            filter="brightness(0.8)"
                        />
                        
                        {/* Overlay con gradiente invernal */}
                        <Box
                            position="absolute"
                            top={0}
                            left={0}
                            right={0}
                            bottom={0}
                            bgGradient="linear(to-b, rgba(1,87,155,0.4), rgba(3,169,244,0.6))"
                        />

                        {/* Copos de nieve decorativos */}
                        <Icon
                            as={FaSnowflake}
                            position="absolute"
                            top="20px"
                            left="20px"
                            color="white"
                            boxSize={8}
                            opacity={0.8}
                            transform="rotate(-15deg)"
                        />
                        <Icon
                            as={FaSnowflake}
                            position="absolute"
                            top="40px"
                            right="30px"
                            color="winter.crystal"
                            boxSize={6}
                            opacity={0.9}
                            transform="rotate(20deg)"
                        />
                        <Icon
                            as={FaSnowflake}
                            position="absolute"
                            bottom="30px"
                            left="40px"
                            color="white"
                            boxSize={5}
                            opacity={0.7}
                            transform="rotate(45deg)"
                        />

                        {/* Contenido superpuesto */}
                        <Box
                            position="absolute"
                            top={0}
                            left={0}
                            right={0}
                            bottom={0}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            p={6}
                        >
                            <VStack spacing={4} textAlign="center" color="white">
                                <Icon as={FaSnowflake} boxSize={12} color="winter.crystal" />
                                <Heading 
                                    size="xl" 
                                    textShadow="2px 2px 4px rgba(0,0,0,0.7)"
                                    fontWeight="bold"
                                >
                                    ¡MÁS DE 40 ACTIVIDADES TE ESPERAN!
                                </Heading>
                                <Text 
                                    fontSize="lg" 
                                    textShadow="1px 1px 3px rgba(0,0,0,0.6)"
                                    fontWeight="medium"
                                >
                                    Vacaciones de Invierno 2025
                                </Text>
                                <Text 
                                    fontSize="md" 
                                    textShadow="1px 1px 2px rgba(0,0,0,0.6)"
                                >
                                    Del 4 al 27 de Julio
                                </Text>
                            </VStack>
                        </Box>
                    </Box>

                    {/* Contenido del modal */}
                    <VStack spacing={6} p={8} align="center">
                        <VStack spacing={3} textAlign="center">
                            <Heading size="lg" color="winter.deep">
                                🎿 Vacaciones de Invierno Épicas
                            </Heading>
                            <Text color="gray.700" fontSize="lg" maxW="500px" lineHeight="1.6">
                                Descubrí una experiencia invernal única con actividades para toda la familia. 
                                Desde senderismo nocturno hasta festivales medievales, observación astronómica 
                                y mucho más.
                            </Text>
                        </VStack>

                        <VStack spacing={4} w="100%">
                            <HStack spacing={4} color="winter.deep" fontSize="md">
                                <HStack>
                                    <Icon as={FaCalendarAlt} />
                                    <Text fontWeight="bold">40+ Actividades</Text>
                                </HStack>
                                <HStack>
                                    <Icon as={FaMapMarkerAlt} />
                                    <Text fontWeight="bold">Para toda la familia</Text>
                                </HStack>
                            </HStack>

                            <VStack spacing={3} w="100%">
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
                                        boxShadow: "2xl"
                                    }}
                                    transition="all 0.3s"
                                    px={8}
                                    py={6}
                                    borderRadius="full"
                                    boxShadow="xl"
                                    width="100%"
                                    maxW="300px"
                                    fontSize="lg"
                                    fontWeight="bold"
                                >
                                    Ver Agenda Completa
                                </Button>
                                
                                <Button
                                    as={RouterLink}
                                    to="/alojamientos"
                                    size="md"
                                    variant="outline"
                                    borderColor="winter.deep"
                                    color="winter.deep"
                                    _hover={{ 
                                        bg: "winter.crystal",
                                        transform: "translateY(-1px)"
                                    }}
                                    transition="all 0.3s"
                                    borderRadius="full"
                                    width="100%"
                                    maxW="250px"
                                >
                                    Reservar Alojamiento
                                </Button>
                            </VStack>
                        </VStack>

                        <Text fontSize="sm" color="gray.600" textAlign="center" fontStyle="italic">
                            ¡No te pierdas la experiencia invernal más completa de San Luis!
                        </Text>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    // Auto-abrir modal después de 3 segundos de cargar la página
    useEffect(() => {
        const timer = setTimeout(() => {
            onOpen();
        }, 3000); // 3 segundos después de cargar la página

        return () => clearTimeout(timer);
    }, [onOpen]);
    
    const attractions = [
        {
            title: 'Naturaleza',
            image: sierrasImage,
            description: 'Explora las majestuosas sierras con sus paisajes invernales únicos.'
        },
        {
            title: 'Ríos y Arroyos',
            image: riosImage,
            description: 'Disfruta de la frescura cristalina de nuestros ríos y arroyos en invierno.'
        },
        {
            title: 'Cultura e Historia',
            image: culturaImage,
            description: 'Sumérgete en la rica herencia cultural e histórica durante tu estadía invernal.'
        },
        {
            title: 'Alojamientos',
            image: alojamientoImage,
            description: 'Encuentra tu refugio perfecto para las vacaciones de invierno.'
        },
        {
            title: 'Gastronomía',
            image: gastronomiaImage,
            description: 'Degusta los sabores cálidos y reconfortantes de nuestra cocina local.'
        },
    ];

    const attractionsRef = useRef(null);
    
    return (
        <ParallaxProvider>
            <Box position="relative">
                {/* VideoBanner */}
                <VideoBanner />

                {/* Banner Invernal */}
                <WinterBanner />
                
                {/* NUEVA SECCIÓN: Agenda de Invierno - PRIORIDAD MÁXIMA */}
                <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <WinterAgendaPreview />
                </MotionBox>

                {/* Separador parallax - SIN botón modal */}
                <WinterParallaxSeparator 
                    text="Descubrí el Invierno en San Francisco" 
                    imageUrl={separatorImage1} 
                />

                {/* Carousel de atractivos */}
                <MotionBox 
                    ref={attractionsRef}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <AttractionsCarousel attractions={attractions} />
                </MotionBox>

                {/* Actividades Invernales 
                <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <WinterActivities />
                </MotionBox>*/}

                {/* Second parallax separator */}
                <WinterParallaxSeparator 
                    text="Viví unas Vacaciones de Invierno Únicas" 
                    imageUrl={separatorImage2} 
                />

                {/* Sección de Planificación */}
                <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Banner />
                </MotionBox>

                {/* Sección de Mapa Interactivo */}
                <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <InteractiveMap />
                </MotionBox>

                {/* Modal de Actividades de Invierno */}
                <WinterActivitiesModal isOpen={isOpen} onClose={onClose} />
            </Box>
        </ParallaxProvider>
    );
};

export default Home;