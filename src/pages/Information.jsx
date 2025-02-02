/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaCar, FaBus, FaPlane, FaSun, FaLeaf, FaSnowflake, FaTree, FaAmbulance, FaFireExtinguisher, FaShieldAlt, FaHospital, FaCity, FaMoneyBillWave, FaWhatsapp, FaCompass } from 'react-icons/fa';
import ElegantSectionTitle from '../components/ElegantSectionTitle';
import {
    Box,
    Container,
    VStack,
    HStack,
    Text,
    Heading,
    SimpleGrid,
    Link,
    Button,
    useColorModeValue,
    Avatar,
    Flex,
} from '@chakra-ui/react';

const MotionBox = motion(Box);

const InfoCard = ({ title, children, delay = 0 }) => (
    <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        bg={useColorModeValue('white', 'gray.700')}
        rounded="lg"
        shadow="lg"
        p={8}
        mb={8}
    >
        <Heading as="h2" size="lg" mb={4} color="teal.600">{title}</Heading>
        {children}
    </MotionBox>
);

const GuideCard = () => {
    const bgColor = useColorModeValue('white', 'gray.700');
    const borderColor = useColorModeValue('gray.200', 'gray.600');

    return (
        <Box
            bg={bgColor}
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius="lg"
            overflow="hidden"
            p={6}
            shadow="md"
            transition="all 0.3s"
            _hover={{ shadow: 'xl' }}
        >
            <Flex direction={{ base: "column", md: "row" }} align="center">
                <Avatar size="xl" name="Suárez Ariel Alejandro" src="/path-to-guide-image.jpg" mb={{ base: 4, md: 0 }} />
                <Box ml={{ base: 0, md: 6 }} textAlign={{ base: "center", md: "left" }}>
                    <Heading as="h3" size="lg" mb={2}>
                        Suárez Ariel Alejandro
                    </Heading>
                    <Text fontSize="md" fontWeight="bold" color="teal.500" mb={2}>
                        Guía Baqueano
                    </Text>
                    <Text mb={4}>
                        Experto en rutas y senderos locales, Ariel te guiará por las maravillas naturales de San Francisco del Monte de Oro.
                    </Text>
                    <VStack spacing={2} align={{ base: "center", md: "flex-start" }}>
                        <HStack>
                            <FaPhone color="teal" />
                            <Link href="tel:2664933528" color="teal.500">
                                2664933528
                            </Link>
                        </HStack>
                        <HStack>
                            <FaEnvelope color="teal" />
                            <Link href="mailto:suarezariel888@gmail.com" color="teal.500">
                                suarezariel888@gmail.com
                            </Link>
                        </HStack>
                    </VStack>
                </Box>
            </Flex>
            <Flex justify="center" mt={6}>
                <Link href="https://wa.me/542664933528" isExternal width="100%">
                    <Button colorScheme="whatsapp" leftIcon={<FaWhatsapp />} width="100%">
                        Contactar por WhatsApp
                    </Button>
                </Link>
            </Flex>
        </Box>
    );
};

const Information = () => {
    const linkColor = useColorModeValue("teal.500", "teal.300");

    return (
        <Box bg={useColorModeValue('gray.50', 'gray.900')} minHeight="100vh" py={20}>
            <Container maxW="container.xl">
                <ElegantSectionTitle
                    title="DATOS PRÁCTICOS"
                    subtitle="Todo lo que necesitas saber antes de venir"
                    primaryColor="teal.600"
                    accentColor="orange.400"
                />

                <InfoCard title="Información Importante">
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                        <VStack align="start" spacing={3}>
                            <Text fontWeight="bold">Números de Emergencia:</Text>
                            <HStack>
                                <FaAmbulance size={20} color="red" />
                                <Text>Emergencias Generales: <Link href="tel:911" color={linkColor}>911</Link></Text>
                            </HStack>
                            <HStack>
                                <FaFireExtinguisher size={20} color="red" />
                                <Text>Bomberos: <Link href="tel:100" color={linkColor}>100</Link></Text>
                            </HStack>
                            <HStack>
                                <FaShieldAlt size={20} color="blue" />
                                <Text>Policía: <Link href="tel:101" color={linkColor}>101</Link></Text>
                            </HStack>
                            <HStack>
                                <FaAmbulance size={20} color="green" />
                                <Text>Emergencias Médicas: <Link href="tel:107" color={linkColor}>107</Link></Text>
                            </HStack>
                        </VStack>
                        <VStack align="start" spacing={3}>
                            <Text fontWeight="bold">Servicios Locales:</Text>
                            <HStack>
                                <FaHospital size={20} color="teal" />
                                <Text>Hospital San Francisco: <Link href="tel:2664443010" color={linkColor}>(2664) 443010</Link></Text>
                            </HStack>
                            <HStack>
                                <FaCity size={20} color="gray" />
                                <Text>Municipalidad: <Link href="tel:2664443444" color={linkColor}>(2664) 443444</Link></Text>
                            </HStack>
                            <HStack>
                                <FaMoneyBillWave size={20} color="green" />
                                <Text>Cajero Automático: Banco de la Nación Argentina, Av. Principal</Text>
                            </HStack>
                        </VStack>
                    </SimpleGrid>
                </InfoCard>

                <InfoCard title="Guía Baqueano" delay={0.2}>
                    <GuideCard />
                </InfoCard>

                <InfoCard title="Cómo llegar" delay={0.4}>
                    <Text mb={4}>San Francisco del Monte de Oro se encuentra en la hermosa provincia de San Luis. A continuación, te explicamos las diferentes maneras de llegar a este maravilloso lugar:</Text>
                    <VStack align="start" spacing={4}>
                        <HStack>
                            <FaCar size={24} color="teal" />
                            <Text><strong>En auto:</strong> Toma la Ruta Nacional 146 desde la ciudad de San Luis y disfruta de un recorrido por paisajes serranos espectaculares. Es una experiencia maravillosa que te permitirá disfrutar de la naturaleza en todo su esplendor.</Text>
                        </HStack>
                        <HStack>
                            <FaBus size={24} color="teal" />
                            <Text><strong>En colectivo:</strong> Hay servicios de transporte público que parten desde las principales ciudades de la región. Es una opción cómoda y accesible para llegar mientras disfrutas del paisaje.</Text>
                        </HStack>
                        <HStack>
                            <FaPlane size={24} color="teal" />
                            <Text><strong>En avión:</strong> Puedes volar hasta el Aeropuerto de San Luis, que se encuentra a unos 100 km de distancia. Desde allí, puedes alquilar un auto o tomar un transporte que te lleve hasta San Francisco del Monte de Oro.</Text>
                        </HStack>
                    </VStack>
                </InfoCard>

                <InfoCard title="Clima Perfecto para tu Visita" delay={0.6}>
                    <Text mb={4}>San Francisco del Monte de Oro te recibe con un clima ideal para todas tus aventuras. A continuación, te contamos un poco sobre el clima en cada estación del año y las temperaturas promedio:</Text>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                        <HStack>
                            <FaSun size={24} color="orange" />
                            <Text><strong>Verano (Dic - Feb):</strong> Días soleados y cálidos, con temperaturas promedio entre 25°C y 35°C, perfectos para explorar y disfrutar al aire libre.</Text>
                        </HStack>
                        <HStack>
                            <FaLeaf size={24} color="brown" />
                            <Text><strong>Otoño (Mar - May):</strong> Temperaturas agradables que oscilan entre 15°C y 25°C, con paisajes coloridos ideales para caminatas y paseos.</Text>
                        </HStack>
                        <HStack>
                            <FaSnowflake size={24} color="skyblue" />
                            <Text><strong>Invierno (Jun - Ago):</strong> Noches frescas, con temperaturas entre 5°C y 18°C, perfectas para actividades al aire libre y disfrutar del aire puro.</Text>
                        </HStack>
                        <HStack>
                            <FaTree size={24} color="green" />
                            <Text><strong>Primavera (Sep - Nov):</strong> Clima suave con temperaturas entre 18°C y 28°C, ideal para disfrutar de la naturaleza en pleno esplendor.</Text>
                        </HStack>
                    </SimpleGrid>
                </InfoCard>
            </Container>
        </Box>
    );
};

export default Information;
