import { useState, useEffect } from 'react';
import { 
    Box, 
    Container, 
    Heading, 
    Input, 
    Select, 
    SimpleGrid, 
    Text, 
    VStack, 
    HStack, 
    Badge, 
    Icon, 
    useColorModeValue, 
    Link 
} from '@chakra-ui/react';
import { 
    FaUtensils, 
    FaCoffee, 
    FaBeer, 
    FaBreadSlice, 
    FaPhone, 
    FaMapMarkerAlt 
} from 'react-icons/fa';
import ElegantSectionTitle from '../components/ElegantSectionTitle';

const gastronomyList = [
    { 
        tipo: ['Restaurante', 'Bar'], 
        nombre: 'Destino Resto Bar', 
        direccion: 'Centenario S/N°', 
        telefono: '0266 15-500-4622', 
        enlace: 'https://maps.app.goo.gl/gdTRWNouocafBWG18'
    },
    { 
        tipo: ['Bar'], 
        nombre: 'La Esquina Resto-Bar', 
        direccion: 'San Martin S/N°', 
        telefono: '0266 464-7995', 
        enlace: 'https://maps.app.goo.gl/NXrTgQ3rLB4VXPNz7'
    },
    { 
        tipo: ['Restaurante', 'Bar'], 
        nombre: 'Franz Plaza - Bar & Café', 
        direccion: 'Belgrano S/N°', 
        telefono: '0266 456-4208 / 2664553284', 
        enlace: 'https://maps.app.goo.gl/Euu8B2DasMZT27mm7'
    },
    { 
        tipo: ['Restaurante'], 
        nombre: 'La Yeya', 
        direccion: 'Sarmiento S/N° entre 25 de Mayo', 
        telefono: '2664610641', 
        enlace: ''
    },
    { 
        tipo: ['Cafetería'], 
        nombre: 'Banda Sur Cafetería', 
        direccion: 'San Martin S/N°', 
        telefono: '1161501743', 
        enlace: 'https://maps.app.goo.gl/WuND9sTr8beX89Kv7'
    },
    { 
        tipo: ['Panadería'], 
        nombre: 'Panadería Boutique', 
        direccion: 'Miguel B. Pastor S/N°', 
        telefono: '0266 488-4319', 
        enlace: 'https://maps.app.goo.gl/9BHsbfFWgzKB3fqr5'
    },
    { 
        tipo: ['Restaurante'], 
        nombre: 'El Patio de las Pencas', 
        direccion: 'Miguel B. Pastor S/N°', 
        telefono: '1168330794', 
        enlace: '' 
    },
    { 
        tipo: ['Restaurante'], 
        nombre: 'Playades', 
        direccion: 'Miguel B. Pastor S/N°', 
        telefono: '1150550084', 
        enlace: '' 
    },
    { 
        tipo: ['Bar'], 
        nombre: 'Cervecería Franz', 
        direccion: 'Lafinur S/N°', 
        telefono: '2664564208 / 2664553284', 
        enlace: '' 
    },
    { 
        tipo: ['Restaurante'], 
        nombre: 'Don Villa Restaurante', 
        direccion: 'Sarmiento S/N°', 
        telefono: '2664190420', 
        enlace: 'https://maps.app.goo.gl/SZ3feGhMUAoas1Ke9' 
    },
    { 
        tipo: ['Venta de Alfajores'], 
        nombre: 'Paladar Negro', 
        direccion: 'Av. Alberdi S/N°', 
        telefono: '2984198059', 
        enlace: '' 
    },
    { 
        tipo: ['Bar'], 
        nombre: 'Vitamina Pub', 
        direccion: 'Centenario S/N°', 
        telefono: '2664222958', 
        enlace: '' 
    },
    { 
        tipo: ['Cafetería'], 
        nombre: 'Hill Valley Cafetería y Heladería', 
        direccion: 'Sarmiento y Belgrano S/N°', 
        telefono: '1158649175', 
        enlace: '' 
    },
    { 
        tipo: ['Restaurante'], 
        nombre: 'Los Galleguitos', 
        direccion: 'Av. Alberdi S/N°', 
        telefono: '2665048003', 
        enlace: '' 
    },
    { 
        tipo: ['Restaurante'], 
        nombre: 'Boutique de Pastas Yasmin', 
        direccion: 'Av. Alberdi S/N°', 
        telefono: '1160198582', 
        enlace: 'https://maps.app.goo.gl/iR8rJ4vkhvGisHKj7' 
    }, { 
        tipo: ['Restaurante'], 
        nombre: 'Posada El Algarrobo', 
        direccion: 'Miguel B Pastor', 
        telefono: '2657493676', 
        enlace: '' 
    }
];


const getGastronomyIcon = (tipo) => {
    const icons = {
        'Restaurante': FaUtensils,
        'Bar': FaBeer,
        'Cafetería': FaCoffee,
        'Panadería': FaBreadSlice,
        'Venta de Alfajores': FaBreadSlice
    };
    return icons[tipo] || FaUtensils;
};

const GastronomyCard = ({ establishment }) => {
    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('teal.500', 'teal.300');

    return (
        <Box bg={bgColor} borderWidth="1px" borderColor={borderColor} borderRadius="lg" overflow="hidden" p={6} shadow="lg" _hover={{ shadow: '2xl' }}>
            <HStack spacing={3} mb={4}>
                <Icon as={getGastronomyIcon(establishment.tipo[0])} boxSize={6} color="teal.500" />
                <Heading size="md" fontWeight="bold">{establishment.nombre}</Heading>
            </HStack>
            <HStack spacing={2} mb={2}>
                {establishment.tipo.map((t, index) => (
                    <Badge key={index} colorScheme="teal">{t}</Badge>
                ))}
            </HStack>
            <Text color="gray.500" display="flex" alignItems="center">
                <Icon as={FaMapMarkerAlt} mr={2} /> {establishment.direccion}
            </Text>
            {establishment.telefono && (
                <HStack as="a" href={`tel:${establishment.telefono}`} color="teal.500" _hover={{ color: 'teal.600' }}>
                    <Icon as={FaPhone} />
                    <Text>{establishment.telefono}</Text>
                </HStack>
            )}
            {establishment.enlace && (
                <HStack as="a" href={establishment.enlace} target="_blank" rel="noopener noreferrer" color="teal.500" _hover={{ color: 'teal.600' }}>
                    <Icon as={FaMapMarkerAlt} />
                    <Text>Ver en Google Maps</Text>
                </HStack>
            )}
        </Box>
    );
};

const Gastronomy = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [filteredEstablishments, setFilteredEstablishments] = useState(gastronomyList);

    useEffect(() => {
        const results = gastronomyList.filter(establishment =>
            establishment.nombre.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedType === '' || establishment.tipo.includes(selectedType))
        );
        setFilteredEstablishments(results);
    }, [searchTerm, selectedType]);

    const uniqueTypes = [...new Set(gastronomyList.flatMap(item => item.tipo))];

    return (
        <Box bg="gray.50" minHeight="100vh" py={20}>
            <Container maxW="container.xl">
                <ElegantSectionTitle
                    title="GASTRONOMÍA LOCAL"
                    subtitle="Descubrí los mejores lugares para disfrutar"
                    primaryColor="teal.500"
                    accentColor="yellow.400"
                />

                <VStack spacing={6} mb={10}>
                    <HStack w="full" spacing={4}>
                        <Input
                            placeholder="Buscar establecimientos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            bg="white"
                            borderColor="gray.300"
                        />
                        <Select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            bg="white"
                            borderColor="gray.300"
                        >
                            <option value="">Todos los tipos</option>
                            {uniqueTypes.map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </Select>
                    </HStack>
                </VStack>

                {filteredEstablishments.length === 0 ? (
                    <Text fontSize="xl" textAlign="center" color="gray.500">
                        No se encontraron establecimientos que coincidan con tu búsqueda.
                    </Text>
                ) : (
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                        {filteredEstablishments.map((establishment, index) => (
                            <GastronomyCard key={index} establishment={establishment} />
                        ))}
                    </SimpleGrid>
                )}
            </Container>
        </Box>
    );
};

export default Gastronomy;
