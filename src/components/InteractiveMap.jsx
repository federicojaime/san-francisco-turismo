import React from 'react';
import { Box, Container, VStack, Flex, Heading, Text, Input, Textarea, Button } from '@chakra-ui/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const InteractiveMap = () => {
    const position = [-32.6795, -66.1281]; // Coordenadas de San Francisco del Monte de Oro

    return (
        <Box bg="gray.50" py={16}>
            <Container maxW="container.xl">
                <VStack spacing={12} align="stretch">
                    <Heading as="h2" size="2xl" textAlign="center" color="blue.600">
                        Descubrí San Francisco
                    </Heading>
                    <Text fontSize="xl" textAlign="center" color="gray.600">
                        Te ayudamos a planear y conocer San Francisco para tus próximas vacaciones
                    </Text>
                    <Flex direction={{ base: 'column', md: 'row' }} gap={8}>
                        <Box flex={1} height="400px" borderRadius="xl" overflow="hidden" boxShadow="xl">
                            <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={position}>
                                    <Popup>
                                        San Francisco del Monte de Oro <br /> ¡Te esperamos!
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </Box>
                        <Box flex={1}>
                            <VStack spacing={4} align="stretch" bg="white" p={6} borderRadius="xl" boxShadow="xl">
                                <Heading as="h3" size="lg" color="blue.500">
                                    Contáctanos
                                </Heading>
                                <Input placeholder="Nombre" />
                                <Input placeholder="Email" type="email" />
                                <Textarea placeholder="Tu mensaje" rows={4} />
                                <Button colorScheme="blue" size="lg">
                                    Enviar Mensaje
                                </Button>
                            </VStack>
                        </Box>
                    </Flex>
                </VStack>
            </Container>
        </Box>
    );
};

export default InteractiveMap;