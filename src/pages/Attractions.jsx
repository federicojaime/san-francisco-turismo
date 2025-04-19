/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import {
    Box,
    SimpleGrid,
    Image,
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    VStack,
    HStack,
    Tag,
    Link,
    Input,
    InputGroup,
    InputLeftElement,
    Flex,
    Container,
    Icon,
} from '@chakra-ui/react';
import { MapPin, Clock, Info, Search, Droplet, Book, Mountain, Leaf, Activity, Home, Sun, ShoppingBag, AlertTriangle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import casaMuseoImage from '../assets/images/casaMuseoImage.jpg';
import rioSanFranciscoImage from '../assets/images/rioSanFranciscoImage.jpg';
import diqueSanFranciscoImage from '../assets/images/diqueSanFranciscoImage.jpg';
import sierrasImage from '../assets/images/sierras.jpg';
import cascadaEscondida from '../assets/images/cascadaEscondida.jpg';
import plazaPrincipal from '../assets/images/plazaPrincipal.jpg';
import feriaArtesano from '../assets/images/feriaArtesano.jpg';
import ElegantSectionTitle from '../components/ElegantSectionTitle';
import casaMuseoRosendaImage from '../assets/images/rosenda.jpg';
import pamperoEcuestreImage from '../assets/images/pamperoEcuestreImage.jpg'; // You'll need to add this image to your assets folder
import turismoArqueologicoImage from '../assets/images/turismoArqueologicoImage.jpg'; // You'll need to add this image to your assets folder
import astroturismoImage from '../assets/images/astroturismoImage.jpg'; // You'll need to add this image to your assets folder


import centroCulturalImage from '../assets/images/centroCulturalImage.jpg';
import iglesiaSagradaFamiliaImage from '../assets/images/iglesiaSagradaFamiliaImage.jpg';
import plazaSarmientoImage from '../assets/images/plazaSarmientoImage.jpg';


import IglesiaSanFranciscodeAsis from '../assets/images/IglesiaSanFranciscodeAsis.jpg';


const attractionsList = [
    {
        name: 'Casa Museo Rosenda Quiroga',
        image: casaMuseoRosendaImage, // Necesitarás importar esta imagen
        description: 'Antigua casa en la que vivió la ilustre educadora y escritora Srta. Rosenda Quiroga (1869-1931), reconocida como la principal impulsora del progreso local. Se expone el mobiliario original, objetos personales, vestimenta, libros y fotografías históricas.',
        googleMapsLink: 'https://maps.app.goo.gl/enREbTJXAiwgkDES8', // Deberás reemplazar con el link correcto de Google Maps
        categories: ['Cultura e Historia', 'Arquitectura', 'Museos'],
        location: 'Calle Coronel Concha y Rosenda Quiroga',
        hours: 'Lunes a viernes: 9:00 - 12:00 y 17:30 - 20:30. Sábados, domingos y feriados: 9:00 - 12:30 y 17:00 - 20:30',
        additionalInfo: 'Se pueden realizar visitas guiadas para conocer la historia de la educadora. La casa mantiene su estructura y decoración original del siglo XIX.',
    },
    {
        name: 'Astroturismo y Senderismo Nocturno',
        image: astroturismoImage, // You'll need to add this image to your assets
        description: 'Experiencia única que combina el senderismo nocturno hacia pinturas rupestres con la observación astronómica y astrofotografía. Una aventura que fusiona la historia milenaria de las pinturas rupestres con la majestuosidad del universo estrellado, guiada por la fotógrafa profesional Sofía Yehie Gabras, guía baqueana autorizada en colaboración con la arqueóloga Alejandra Negro.',
        categories: ['Naturaleza', 'Senderismo', 'Actividades', 'Cultura e Historia'],
        location: 'Partida desde Virgen de Lourdes (R9), San Francisco del Monte de Oro',
        hours: 'Contactar para próximas fechas',
        additionalInfo: 'Descubrí los cielos de San Francisco en circuitos cortos o largos, durante todo el año, ideal para el grupo familiar esta propuesta vincula las antiguas constelaciones, la cosmovisión y la astrofotografia. Sofia Yehie Gabras 1153138190 Guía baqueana provincial habilitada.',
    },
    {
        name: 'Turismo Arqueológico y Cultural Responsable',
        image: turismoArqueologicoImage, // You'll need to add this image to your assets
        description: 'Emprendimiento llevado a cabo por Alejandra Negro, Lic. en Cs. Antropológicas (UBA), en San Francisco del Monte de Oro y alrededores. Ofrece salidas de senderismo para explorar vestigios y legados de los primeros habitantes de la región, incluyendo pinturas rupestres y circuitos de morteros. También se programan salidas nocturnas para quienes estén interesados en astronomía cultural e interpretación del cielo.',
        googleMapsLink: 'https://maps.app.goo.gl/9A1DQFofD6X6Gom39', // Replace with the actual Google Maps link
        categories: ['Cultura e Historia', 'Senderismo', 'Actividades'],
        location: 'San Francisco del Monte de Oro y alrededores',
        hours: 'Contactar para reservas y horarios disponibles',
        additionalInfo: 'Guía habilitada por el Municipio de San Francisco del Monte de Oro. Contacto: WhatsApp +54 2664888422, Email: alenegro.asegur@gmail.com, Facebook: Alejandra Negro. Reservas previas necesarias.',
    },
    {
        name: 'Pampero Ecuestre',
        image: pamperoEcuestreImage, // You'll need to add this image to your assets
        description: 'Centro de equitación y equinoterapia ubicado en San Francisco Del Monte De Oro. Ofrecemos acceso a senderos junto al río para disfrutar con nuestros caballos, sesiones personalizadas de equinoterapia adaptadas a las necesidades de cada estudiante, y actividades en pista o corral redondo. Nuestra misión es inculcar amor y respeto por nuestros compañeros equinos en cada encuentro.',
        googleMapsLink: 'https://maps.app.goo.gl/czWXcsrnErRSBpNY7', // Replace with the actual Google Maps link
        categories: ['Deportes', 'Naturaleza', 'Actividades'],
        location: 'Pasaje Leandro N. Alem, portones verdes',
        hours: 'Contactar para reservas y horarios disponibles',
        additionalInfo: 'Reservas por WhatsApp: +17184405867 (código EEUU) o llamadas: 2664885965. Redes sociales: @pamperoecuestre en Instagram y Pampero Ecuestre en Facebook. Experiencias adaptadas para todas las edades y niveles de experiencia.',
    },
    {
        name: 'Monumento histórico primera escuela Sarmiento',
        image: casaMuseoImage,
        description: 'Solar donde Domingo F. Sarmiento fundó su primera escuela en 1826, iniciándose como maestro de alumnos mayores que él. El emblemático rancho de adobe fue declarado Monumento Histórico Nacional en 1941 y está resguardado por un templete.',
        googleMapsLink: 'https://maps.app.goo.gl/nsCb4yWXDpGpEYgb6',
        categories: ['Cultura e Historia'],
        location: 'Calle Marcelo T. de Alvear',
        hours: 'Martes a Domingo, 9:00 - 18:00',
        additionalInfo: 'Visitas guiadas disponibles. Entrada gratuita para residentes locales.',
    },
    {
        name: 'Iglesia San Francisco de Asís',
        image: IglesiaSanFranciscodeAsis,
        description: 'Este histórico templo fue construido en reemplazo de la primera capilla, que se encontraba en otra ubicación. A partir de 1859 fue Iglesia Parroquial. En su interior se conservan campanas del siglo XIX y una placa de bronce colocada en 1916.',
        googleMapsLink: 'https://maps.app.goo.gl/QyU63nCVd73q4Sq59',
        categories: ['Cultura e Historia', 'Arquitectura'],
        location: 'Calle Miguel B. Pastor y Nicolas Di Genaro',
        hours: 'Lunes a Sábado 9:00 - 12:00 y 16:00 - 19:00, Domingos 8:00 - 20:00',
        additionalInfo: 'Misas diarias a las 19:00. Visitas guiadas disponibles con reserva previa. Vestimenta respetuosa solicitada.',
    },
    {
        name: 'Iglesia Sagrada Familia',
        image: iglesiaSagradaFamiliaImage, // Placeholder: reemplazar con la imagen correspondiente
        description: 'Su construcción fue proyectada en la segunda mitad del siglo XIX, siendo concluida hacia el año 1909. Yacen en su interior los restos de Monseñor Luis Zupancic (1912-1993), sacerdote esloveno de extensa trayectoria en esta localidad.',
        googleMapsLink: 'https://maps.app.goo.gl/KeHYBhd38VDz1d7v5', // Placeholder: reemplazar con el enlace de Google Maps
        categories: ['Cultura e Historia', 'Arquitectura'],
        location: 'Av. Sarmiento',
        hours: 'Consultar horarios disponibles',
        additionalInfo: 'Se recomienda asistir a misa o realizar visitas guiadas para conocer la historia del lugar.',
    },
    {
        name: 'Plaza Sarmiento',
        image: plazaSarmientoImage, // Placeholder: reemplazar con la imagen correspondiente
        description: 'En 1835 el Gobernador José Gregorio Calderón ordenó la demarcación de la actual plaza. En su centro se destaca un obelisco inaugurado en 1926, con motivo del Centenario de la Primera Escuela de Sarmiento. También cuenta con un busto colocado en 1977.',
        googleMapsLink: 'https://maps.app.goo.gl/MU4xtmAM3nk2F5QFA', // Placeholder: reemplazar con el enlace de Google Maps
        categories: ['Cultura e Historia'],
        location: 'Centro de la ciudad',
        hours: 'Acceso libre las 24 horas',
        additionalInfo: 'Espacio ideal para actividades culturales y eventos al aire libre.',
    },
    {
        name: 'Centro Cultural San Francisco del Monte de Oro',
        image: centroCulturalImage, // Placeholder: reemplazar con la imagen correspondiente
        description: 'Edificio donde funcionó la Escuela Normal entre 1915 y 1993. En 2018 se inaugura el “Centro Cultural San Francisco del Monte de Oro”, que brinda diversas exposiciones y talleres. Cuenta con una importante Sala de Teatro denominada “Clara Chutun”.',
        googleMapsLink: 'https://maps.app.goo.gl/FSqfurGorbj2P6kW8', // Placeholder: reemplazar con el enlace de Google Maps
        categories: ['Cultura e Historia', 'Arte y Exposiciones'],
        location: 'Av. Centenario y 25 de Mayo',
        hours: 'Consultar horarios disponibles',
        additionalInfo: 'Eventos culturales y talleres regulares. Espacio accesible para todo público.',
    },
    {
        name: 'Río San Francisco',
        image: rioSanFranciscoImage,
        description: 'Cristalinas aguas ideales para refrescarse y realizar actividades acuáticas. Perfecto para días de picnic y pesca. El río ofrece varios puntos de acceso y áreas de descanso a lo largo de su recorrido.',
        googleMapsLink: 'https://maps.app.goo.gl/2xsxq5VSM7ns4ehw6',
        categories: ['Ríos y Arroyos', 'Naturaleza'],
        location: '2 km al oeste del centro de la ciudad',
        hours: 'Acceso libre las 24 horas',
        additionalInfo: 'Se recomienda llevar calzado adecuado para caminar sobre rocas. Áreas de picnic disponibles. En verano, se organizan actividades recreativas supervisadas.',
    },
    {
        name: 'Dique Las Palmeras',
        image: diqueSanFranciscoImage,
        description: 'Un embalse rodeado de naturaleza, perfecto para disfrutar de picnics. El dique ofrece una vista panorámica de las sierras circundantes y es un lugar ideal para la observación de aves.',
        googleMapsLink: 'https://maps.app.goo.gl/MyANje8gcx6Afi356',
        categories: ['Ríos y Arroyos', 'Deportes'],
        location: '5 km al norte de la ciudad',
        hours: 'Abierto de 8:00 a 20:00 todos los días',
        additionalInfo: 'Se permite la pesca con permiso. Cuenta con áreas de camping y parrillas.',
    },
    {
        name: 'Sierra de San Luis',
        image: sierrasImage,
        description: 'Majestuosas Sierras con senderos para caminatas y vistas panorámicas. Ideal para el turismo de aventura, ofreciendo rutas de diferentes niveles de dificultad y duraciones variadas.',
        googleMapsLink: 'https://maps.app.goo.gl/xs2FVGQ67YHGsWXr9',
        categories: ['Senderismo', 'Naturaleza'],
        location: 'San Francisco del Monte de Oro',
        hours: 'Acceso las 24 horas, se recomienda visitar durante el día',
        additionalInfo: 'Se recomienda llevar agua, protector solar y ropa adecuada. Guías locales disponibles para excursiones. Algunos senderos requieren permiso previo.',
    },
    {
        name: 'Salto Escondido',
        image: cascadaEscondida,
        description: 'Un Salto natural en medio de un entorno serrano, ideal para los amantes de la naturaleza y el senderismo. La caída de agua de 15 metros crea una piscina natural perfecta para un baño refrescante.',
        googleMapsLink: 'https://maps.app.goo.gl/NYTzQaKVv6Ja5goU6',
        categories: ['Ríos y Arroyos', 'Naturaleza'],
        location: '8 km al sureste de la ciudad, acceso por sendero',
        hours: 'Acceso de 8:00 a 18:00, se recomienda consultar en épocas de lluvia',
        additionalInfo: 'Se requiere una caminata de dificultad media para llegar. Llevar calzado apropiado y agua. No se permite hacer fogatas en la zona.',
    },
    {
        name: 'Plaza Pringles',
        image: plazaPrincipal,
        description: 'Fue delineada en la segunda mitad del siglo XIX. Cuenta con los bustos del Coronel Juan Pascual Pringles y Domingo F. Sarmiento, además del “Monumento a la Madre”. Es el centro de la actividad social y cultural de la localidad.',
        googleMapsLink: 'https://maps.app.goo.gl/YUJP6Qtrwf1P6vfR9',
        categories: ['Cultura e Historia'],
        location: 'Centro de la ciudad',
        hours: 'Acceso libre las 24 horas',
        additionalInfo: 'Feria artesanal los fines de semana. Eventos culturales frecuentes, especialmente en verano. Wifi gratuito disponible.',
    },
    {
        name: 'Feria Artesanal',
        image: feriaArtesano,
        description: 'Mercado local donde se pueden adquirir artesanías y productos regionales. Ofrece una amplia variedad de trabajos en cuero, tejidos, cerámicas y productos gastronómicos locales.',
        googleMapsLink: 'https://maps.app.goo.gl/WBh18VEES2Ub5NUk6',
        categories: ['Cultura e Historia', 'Compras'],
        location: 'Plaza Principal',
        hours: 'Sábados y Domingos de 10:00 a 20:00',
        additionalInfo: 'Los artesanos ofrecen demostraciones en vivo. Eventos culturales y musicales acompañan la feria. Se aceptan tarjetas de crédito en algunos puestos.',
    },
];




const categories = [
    'Todos',
    'Ríos y Arroyos',
    'Cultura e Historia',
    'Senderismo',
    'Naturaleza',
    'Deportes',
    'Arquitectura',
    'Compras',
    'Actividades',
];

const categoryIcons = {
    'Todos': Sun,
    'Ríos y Arroyos': Droplet,
    'Cultura e Historia': Book,
    'Senderismo': Mountain,
    'Naturaleza': Leaf,
    'Deportes': Activity,
    'Arquitectura': Home,
    'Compras': ShoppingBag,
    'Actividades': Activity, // You can change this to a more appropriate icon if needed
};

const Attractions = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialCategory = queryParams.get('category') || 'Todos';

    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredAttractions, setFilteredAttractions] = useState(attractionsList);
    const [selectedAttraction, setSelectedAttraction] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        const filtered = attractionsList.filter((attraction) =>
            (selectedCategory === 'Todos' || attraction.categories.includes(selectedCategory)) &&
            attraction.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredAttractions(filtered);
    }, [selectedCategory, searchTerm]);

    const openModal = (attraction) => {
        setSelectedAttraction(attraction);
        onOpen();
    };

    const calculateStats = (attractions) => {
        if (attractions.length === 0) return { average: 0, stdDev: 0 };

        const sum = attractions.reduce((acc, curr) => acc + curr.rating, 0);
        const average = sum / attractions.length;

        const squaredDifferences = attractions.map(a => Math.pow(a.rating - average, 2));
        const variance = squaredDifferences.reduce((acc, curr) => acc + curr, 0) / attractions.length;
        const stdDev = Math.sqrt(variance);

        return { average: average.toFixed(2), stdDev: stdDev.toFixed(2) };
    };

    const { average, stdDev } = calculateStats(filteredAttractions);

    return (
        <Box bg="gray.50" minHeight="100vh" py={20}>
            <Container maxW="container.xl">
                <ElegantSectionTitle
                    title="VIVÍ LOS IMPERDIBLES"
                    subtitle="Los mejores lugares para visitar"
                    primaryColor="teal.600"
                    accentColor="orange.400"
                />
                <VStack spacing={6} mb={8}>
                    <InputGroup maxW="md" mx="auto">
                        <InputLeftElement pointerEvents="none">
                            <Search color="teal.500" />
                        </InputLeftElement>
                        <Input
                            placeholder="Buscar atractivos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            bg="white"
                            borderColor="teal.500"
                            _hover={{ borderColor: 'teal.600' }}
                            _focus={{ borderColor: 'teal.600', boxShadow: '0 0 0 1px teal.600' }}
                            fontSize="md"
                        />
                    </InputGroup>

                    <Flex wrap="wrap" justify="center" gap={3}>
                        {categories.map((category) => (
                            <Button
                                key={category}
                                size="md"
                                variant={selectedCategory === category ? "solid" : "outline"}
                                colorScheme="teal"
                                onClick={() => setSelectedCategory(category)}
                                borderRadius="full"
                                leftIcon={categoryIcons[category] ? <Icon as={categoryIcons[category]} /> : null}
                            >
                                {category}
                            </Button>
                        ))}
                    </Flex>
                </VStack>

                {filteredAttractions.length > 0 ? (
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                        {filteredAttractions.map((attraction) => (
                            <Box
                                key={attraction.name}
                                bg="white"
                                borderRadius="lg"
                                overflow="hidden"
                                boxShadow="lg"
                                transition="all 0.3s"
                                _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
                            >
                                <Image
                                    src={attraction.image}
                                    alt={attraction.name}
                                    height="250px"
                                    width="100%"
                                    objectFit="cover"
                                />
                                <Box p={6}>
                                    <Text fontSize="2xl" fontWeight="bold" mb={3} color="teal.600">
                                        {attraction.name}
                                    </Text>
                                    <Text fontSize="md" color="gray.600" noOfLines={3} mb={4}>
                                        {attraction.description}
                                    </Text>
                                    <HStack spacing={4} mb={4}>
                                        <Icon as={MapPin} color="teal.500" />
                                        <Text fontSize="sm" color="gray.500">{attraction.location}</Text>
                                    </HStack>
                                    <Button
                                        colorScheme="teal"
                                        onClick={() => openModal(attraction)}
                                        width="100%"
                                        size="lg"
                                        fontWeight="bold"
                                        _hover={{ bg: 'teal.600' }}
                                    >
                                        Más información
                                    </Button>
                                </Box>
                            </Box>
                        ))}
                    </SimpleGrid>
                ) : (
                    <Box textAlign="center" mt={8}>
                        <Icon as={AlertTriangle} color="orange.500" boxSize={12} mb={4} />
                        <Text fontSize="xl" fontWeight="bold" color="teal.600">
                            No se encontró el atractivo
                        </Text>
                        <Text mt={2} color="gray.600">
                            Intente con otra búsqueda o categoría
                        </Text>
                    </Box>
                )}

                <Modal isOpen={isOpen} onClose={onClose} size="xl">
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader color="teal.600" fontSize="2xl">{selectedAttraction?.name}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Image
                                src={selectedAttraction?.image}
                                alt={selectedAttraction?.name}
                                mb={6}
                                borderRadius="md"
                                width="100%"
                                height="300px"
                                objectFit="cover"
                            />
                            <Text mb={6} fontSize="lg">{selectedAttraction?.description}</Text>
                            <VStack align="stretch" spacing={4}>
                                <HStack>
                                    <Icon as={MapPin} color="teal.500" />
                                    <Text fontSize="md">{selectedAttraction?.location}</Text>
                                </HStack>
                                <HStack>
                                    <Icon as={Clock} color="teal.500" />
                                    <Text fontSize="md">{selectedAttraction?.hours}</Text>
                                </HStack>
                                <HStack alignItems="flex-start">
                                    <Icon as={Info} color="teal.500" mt={1} />
                                    <Text fontSize="md">{selectedAttraction?.additionalInfo}</Text>
                                </HStack>
                            </VStack>
                            <Box mt={6}>
                                {selectedAttraction?.categories.map((category) => (
                                    <Tag
                                        key={category}
                                        mr={2}
                                        mb={2}
                                        colorScheme="teal"
                                        borderRadius="full"
                                        size="lg"
                                    >
                                        {category}
                                    </Tag>
                                ))}
                            </Box>
                        </ModalBody>
                        <ModalFooter>
                            {selectedAttraction?.googleMapsLink && (
                                <Link href={selectedAttraction.googleMapsLink} isExternal>
                                    <Button
                                        colorScheme="teal"
                                        size="lg"
                                        leftIcon={<Icon as={MapPin} />}
                                    >
                                        Ver en Google Maps
                                    </Button>
                                </Link>
                            )}
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Container>
        </Box>
    );
};

export default Attractions;