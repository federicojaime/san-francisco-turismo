import { useState, useEffect } from 'react';
import { Box, Container, Heading, Input, Select, SimpleGrid, Text, VStack, HStack, Badge, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaBed, FaHotel, FaHome, FaBuilding, FaWarehouse, FaMountain, FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';
import ElegantSectionTitle from '../components/ElegantSectionTitle';


const accommodationsList = [
    {
        localidad: 'San Francisco',
        tipo: 'Cabañas',
        nombre: 'Cabañas La Temperancia',
        direccion: 'R. Saa s/nº Banda Sur',
        area: '',
        telefono: '2664509294',
        legajo: '',
        email: 'sergiopuras@hotmail.com',
        web: 'www.latemperancia.com.ar'
    },
    {
        localidad: 'San Francisco',
        tipo: 'Cabañas',
        nombre: 'Cabañas Luna',
        direccion: 'Cnel. Concha y Miguez Iñarra',
        area: '',
        telefono: '2664726348',
        legajo: '',
        email: 'complejoluna@gmail.com',
        web: ''
    },
    {
        localidad: 'San Francisco',
        tipo: 'Complejo de Cabañas',
        nombre: 'Complejo de Cabañas La Querencia',
        direccion: '25 de mayo s/nº',
        area: '',
        telefono: '2664853320',
        legajo: '684',
        email: 'info@laquerenciapuntana.com.ar',
        web: 'www.laquerenciapuntana.com.ar'
    },
    {
        localidad: 'San Francisco',
        tipo: 'Cabañas',
        nombre: 'Cabañas Rio Claro',
        direccion: 'Ruta pcial 9.',
        area: '',
        telefono: '2664206399',
        legajo: '712',
        email: 'cabanias.rioclaro@gmail.com',
        web: ''
    },
    {
        localidad: 'San Francisco',
        tipo: 'Cabañas',
        nombre: 'Cabañas En el Jardin Nativo',
        direccion: 'Miguel B Pastor',
        area: '',
        telefono: '2615345602',
        legajo: '',
        email: '',
        web: ''
    },
    {
        localidad: 'San Francisco',
        tipo: 'Cabañas',
        nombre: 'Cabañas Alas del Cielo',
        direccion: 'Camino Rio Gomez. Banda Sur',
        area: '',
        telefono: '1151205259',
        legajo: '676',
        email: 'cab_alasdelcielo@hotmail.com.ar',
        web: ''
    },
    {
        localidad: 'San Francisco',
        tipo: 'Departamentos',
        nombre: 'Deptos Yapai Peñi',
        direccion: 'Sarmiento 856',
        area: '',
        telefono: '2651412015',
        legajo: '',
        email: '',
        web: ''
    },
    {
        localidad: 'San Francisco',
        tipo: 'Cabañas',
        nombre: 'Puertas al Paraiso',
        direccion: 'Sarmiento y Berrondo',
        area: '',
        telefono: '2664400371',
        legajo: '',
        email: '',
        web: ''
    },
    {
        localidad: 'San Francisco',
        tipo: 'Cabañas',
        nombre: 'Complejo de Cabañas Misky Wayra',
        direccion: 'Rodriguez Saa Banda Sur.',
        area: '',
        telefono: '2226603481',
        legajo: '719',
        email: '',
        web: 'www.miskywayra.com'
    },
    {
        localidad: 'San Francisco',
        tipo: 'Departamentos',
        nombre: 'Mari Sol',
        direccion: 'San Martin y Pringles',
        area: '',
        telefono: '2664021752',
        legajo: '',
        email: '',
        web: ''
    },
    {
        localidad: 'San Francisco',
        tipo: 'Cabañas',
        nombre: 'Alquimia',
        direccion: 'R.Saa Banda Sur',
        area: '',
        telefono: '3416064947',
        legajo: '721',
        email: '',
        web: ''
    },
    {
        localidad: 'San Francisco',
        tipo: 'Complejo de Cabañas',
        nombre: 'Complejo de Cabañas Quinto Elemento',
        direccion: 'Segundo Baden. Ruta Prov. 9',
        area: '',
        telefono: '1123357542',
        legajo: '708',
        email: 'info@complejo5toelemento.com.ar',
        web: 'www.complejo5toelemento.com.ar',
        instagram: '@complejo_5to_elemento'
    },
    {
        localidad: 'San Francisco',
        tipo: 'Cabañas',
        nombre: 'Cabañas Nuestro Sol',
        direccion: 'Ruta pcial 9.',
        area: '',
        telefono: '1133096182',
        legajo: '',
        email: '',
        web: ''
    },
    {
        localidad: 'San Francisco',
        tipo: 'Cabañas',
        nombre: 'Cabañas al Pie de la Sierra',
        direccion: 'Ruta pcial 9.',
        area: '',
        telefono: '2664837038',
        legajo: '720',
        email: '',
        web: ''
    },
    {
        localidad: 'San Francisco',
        tipo: 'Apart Hotel',
        nombre: 'Apart Hotel Altos del Molle',
        direccion: 'Miguel B Pastor',
        area: '',
        telefono: '1133371643',
        legajo: '704',
        email: 'altosdelosmollesesf@gmail.com',
        web: 'www.altosdelosmollesf.com.ar'
    },
    {
        localidad: 'San Francisco',
        tipo: 'Cabañas',
        nombre: 'El Barquito',
        direccion: 'Cnel Concha',
        area: '',
        telefono: '1165394745',
        legajo: '',
        email: '',
        web: ''
    },
    {
        localidad: 'San Francisco',
        tipo: 'Cabañas',
        nombre: 'Cabañas Del Lago',
        direccion: 'Avda. 9 de julio 1284',
        area: '',
        telefono: '1136002389',
        legajo: '711',
        email: 'cabanasdellago@gmail.com',
        web: 'www.cabasdelago.com',
        instagram: '@cabanasdellago'
    },
    {
        localidad: 'San Francisco',
        tipo: 'Cabañas',
        nombre: 'Arcadia',
        direccion: 'Ruta pcial 9.',
        area: '',
        telefono: '2954365220',
        legajo: '715',
        email: 'cabanasarcadia@hotmail.com',
        web: ''
    },
    {
        localidad: 'San Francisco',
        tipo: 'Cabañas',
        nombre: 'Chateu Tolan',
        direccion: 'Punta del Agua',
        area: '',
        telefono: '3516534211',
        legajo: '',
        email: 'info@chateautolan.ar',
        web: 'chateautolan.ar'
    },
    {
        localidad: 'San Francisco',
        tipo: 'Camping',
        nombre: 'Camping El Valle',
        direccion: 'Tomas Jofre',
        area: '',
        telefono: '2664015518',
        legajo: '',
        email: '',
        web: ''
    },
    {
        localidad: 'San Francisco',
        tipo: 'Cabañas',
        nombre: 'Cabañas Las Promesas',
        direccion: 'Cnel. Concha, entre Rosenda Quiroga y Juan W. Gez',
        area: '',
        telefono: '1134653132',
        legajo: '',
        email: '',
        web: ''
    },
    {
        localidad: 'San Francisco',
        tipo: 'Cabañas',
        nombre: 'Ayres de Cuarzo',
        direccion: 'Ruta pcial 9.',
        area: '',
        telefono: '2254413393',
        legajo: '705',
        email: 'ayresdecuarzosanluis@gmail.com ',
        web: 'www.ayresdecuarzo.com',
        instagram: '@Ayresdecuarzo'
    },
    {
        localidad: 'San Francisco',
        tipo: 'Cabañas',
        nombre: 'Cabañas El Tio',
        direccion: 'Ricardo Rojas',
        area: '',
        telefono: '1133902200',
        legajo: '713',
        email: 'complejoeltio@gmail.com',
        web: ''
    },
    {
        localidad: 'San Francisco',
        tipo: 'Cabañas',
        nombre: 'Cabañas Bellmont',
        direccion: 'Ruta Nacional Vieja ex 146',
        area: '',
        telefono: '3462576708',
        legajo: '',
        email: '',
        web: '',
        instagram: '@bellmont23'
    },
    {
        localidad: 'San Francisco',
        tipo: 'Cabañas',
        nombre: 'Cabaña del Rio',
        direccion: 'Frente Primer Baden.',
        area: '',
        telefono: '2665043687',
        legajo: '',
        email: '',
        web: ''
    },
    {
        localidad: 'San Francisco',
        tipo: 'Cabañas',
        nombre: 'Cabañas Cuncumen',
        direccion: 'Ruta Provincial 9',
        area: '',
        telefono: '295415465367',
        legajo: '',
        email: 'servicios.servimer@gmail.com',
        web: ''
    },
    {
        localidad: 'San Francisco',
        tipo: 'Posada',
        nombre: 'Posada El Algarrobo',
        direccion: 'Miguel B Pastor',
        area: '',
        telefono: '2657493676',
        legajo: '665',
        email: 'ivanmartinez45@hotmail.com',
        web: ''
    },
    {
        localidad: 'San Francisco',
        tipo: 'Hospedaje',
        nombre: 'Akasia Hospedaje',
        direccion: '25 de febrero',
        area: '',
        telefono: '1164005480',
        legajo: '',
        email: '',
        web: ''
    },
    {
        localidad: 'San Francisco',
        tipo: 'Hotel',
        nombre: 'Hotel Martin',
        direccion: 'Sarmiento',
        area: '',
        telefono: '2664383374',
        legajo: '',
        email: '',
        web: ''
    },
    {
        localidad: 'San Francisco',
        tipo: 'Cabañas',
        nombre: 'Cabañas Valle del Chutunzo',
        direccion: 'Ricardo Rojas',
        area: '',
        telefono: '',
        legajo: '716',
        email: 'daoslen@yahoo.com.ar',
        web: ''
    },
    {
        localidad: 'San Francisco',
        tipo: 'Cabañas',
        nombre: 'Sobre la Roca',
        direccion: 'Miguel B Pastor',
        area: '',
        telefono: '2665030915',
        legajo: '',
        email: 'vani_997@hotmail.com',
        web: ''
    },
    {
        localidad: 'San Francisco',
        tipo: 'Cabañas',
        nombre: 'Keisy',
        direccion: 'Sarmiento s/n sobre Boulevard',
        area: '',
        telefono: '2664202164',
        legajo: '',
        email: '',
        web: ''
    },
    {
        localidad: 'San Francisco',
        tipo: 'Cabañas',
        nombre: 'El Parquecito',
        direccion: 'Rodriguez Saa Banda Sur',
        area: '',
        telefono: '2664725279',
        legajo: '',
        email: '',
        web: ''
    }
];




const getAccommodationIcon = (tipo) => {
    const icons = {
        hotel: FaHotel,
        rural: FaMountain,
        departamentos: FaBuilding,
        posada: FaHome,
        complejo: FaWarehouse,
        cabañas: FaHome,
    };
    return icons[tipo.toLowerCase()] || FaHome;
};

const AccommodationCard = ({ accommodation }) => {
    const bgColor = useColorModeValue('white', 'gray.700');
    const borderColor = useColorModeValue('gray.200', 'gray.600');

    const formatPhoneNumber = (area, telefono) => {
        if (area && telefono) {
            return `(${area}) ${telefono}`;
        } else if (telefono) {
            return telefono;
        }
        return '';
    };



    const phoneNumber = formatPhoneNumber(accommodation.area, accommodation.telefono);

    return (
        <Box bg={bgColor} borderWidth="1px" borderColor={borderColor} borderRadius="lg" overflow="hidden" p={6} shadow="md" transition="all 0.3s" _hover={{ shadow: 'xl' }}>
            <HStack spacing={3} mb={4}>
                <Icon as={getAccommodationIcon(accommodation.tipo)} boxSize={6} color="blue.500" />
                <Heading size="md" fontWeight="semibold">{accommodation.nombre}</Heading>
            </HStack>
            <Badge colorScheme="blue" mb={2}>{accommodation.tipo}</Badge>
            <Text color="gray.600" mb={2} display="flex" alignItems="center">
                <Icon as={FaMapMarkerAlt} mr={2} /> {accommodation.direccion}
            </Text>
            <VStack align="stretch" spacing={2}>
                {phoneNumber && (
                    <HStack as="a" href={`tel:${phoneNumber}`} color="blue.500" _hover={{ color: 'blue.600' }}>
                        <Icon as={FaPhone} />
                        <Text>{phoneNumber}</Text>
                    </HStack>
                )}
                {accommodation.email && (
                    <HStack as="a" href={`mailto:${accommodation.email}`} color="blue.500" _hover={{ color: 'blue.600' }}>
                        <Icon as={FaEnvelope} />
                        <Text>{accommodation.email}</Text>
                    </HStack>
                )}
                {accommodation.web && (
                    <HStack as="a" href={`https://${accommodation.web}`} target="_blank" rel="noopener noreferrer" color="blue.500" _hover={{ color: 'blue.600' }}>
                        <Icon as={FaGlobe} />
                        <Text>{accommodation.web}</Text>
                    </HStack>
                )}
                {accommodation.instagram && (
                    <HStack as="a" href={`https://instagram.com/${accommodation.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" color="blue.500" _hover={{ color: 'blue.600' }}>
                        <Icon as={FaInstagram} />
                        <Text>{accommodation.instagram}</Text>
                    </HStack>
                )}
            </VStack>
        </Box>
    );
};

const Accommodations = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [filteredAccommodations, setFilteredAccommodations] = useState(accommodationsList);

    useEffect(() => {
        const results = accommodationsList.filter(accommodation =>
            accommodation.nombre.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedType === '' || accommodation.tipo.toLowerCase() === selectedType.toLowerCase())
        );
        setFilteredAccommodations(results);
    }, [searchTerm, selectedType]);

    const uniqueTypes = [...new Set(accommodationsList.map(item => item.tipo))];

    return (
        <Box bg="gray.50" minHeight="100vh" py={20}>
            <Container maxW="container.xl">
                <ElegantSectionTitle
                    title="VIVÍ TU ESTADÍA"
                    subtitle="Encontrá el lugar ideal para tu descanso"
                    primaryColor="teal.600"
                    accentColor="orange.400"
                />

                <VStack spacing={8} mb={12}>
                    <HStack w="full" spacing={4}>
                        <Input
                            placeholder="Buscar alojamientos..."
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

                {filteredAccommodations.length === 0 ? (
                    <Text fontSize="xl" textAlign="center" color="gray.600">
                        No se encontraron alojamientos que coincidan con tu búsqueda.
                    </Text>
                ) : (
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                        {filteredAccommodations.map((accommodation, index) => (
                            <AccommodationCard key={index} accommodation={accommodation} />
                        ))}
                    </SimpleGrid>
                )}
            </Container>
        </Box>
    );
};

export default Accommodations;