// src/components/Footer.jsx - Versión modificada con colores otoñales
import React from 'react';
import { Box, Flex, Text, VStack, HStack, Link, Grid, GridItem, Image } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { images } from '../assets/images';  // Importar todas las imágenes desde el archivo index.js

const MotionBox = motion(Box);
const MotionLink = motion(Link);

const Footer = () => {
    return (
        <Box as="footer" className="footer" py={8}>
            <Box maxW="1200px" mx="auto" px={4}>
                <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8}>
                    {/* Primera columna: Logos más pequeños y minimalistas */}
                    <GridItem>
                        <VStack align="flex-start" spacing={3}>
                            <Box>
                                <HStack spacing={4} justify="flex-start">
                                    <Link href="https://vivisanfrancisco.com" isExternal>
                                        <Image src={images.vivi} alt="Logo Vivi" w="130px" h="130px" objectFit="contain" />
                                    </Link>
                                    <Link href="https://sanfranciscomonteoro.gov.ar" isExternal>
                                        <Image src={images.logoSF} alt="Logo Municipalidad" w="130px" h="130px" objectFit="contain" />
                                    </Link>
                                </HStack>
                            </Box>
                            <Text fontSize="sm">Descubrí la magia de nuestro pueblo</Text>
                            <HStack spacing={3}>
                                {['https://www.facebook.com/vivi.sanfrancisco', 'https://www.instagram.com/vivi.sanfrancisco/', 'https://api.whatsapp.com/message/TXN65HRNAD5PI1?autoload=1&app_absent=0'].map((link, index) => (
                                    <MotionLink
                                        key={index}
                                        href={link}
                                        isExternal
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        {index === 0 ? <FaFacebook size={20} /> : index === 1 ? <FaInstagram size={20} /> : <FaWhatsapp size={20} />}
                                    </MotionLink>
                                ))}
                            </HStack>
                        </VStack>
                    </GridItem>

                    {/* Segunda columna: Enlaces Rápidos */}
                    <GridItem>
                        <VStack align="flex-start" spacing={2}>
                            <Text fontWeight="bold" fontSize="md">Enlaces Rápidos</Text>
                            {['Inicio', 'Atractivos', 'Alojamientos', 'Información'].map((item) => (
                                <Link
                                    key={item}
                                    href={item === 'Inicio' ? '/' : `/${item.toLowerCase()}`}
                                    _hover={{ color: '#FFD700' }}
                                >
                                    {item}
                                </Link>
                            ))}
                        </VStack>
                    </GridItem>


                    {/* Tercera columna: Información de contacto */}
                    <GridItem>
                        <VStack align="flex-start" spacing={3}>
                            <Text fontWeight="bold" fontSize="md">Contacto</Text>
                            <HStack spacing={2}>
                                <FaMapMarkerAlt />
                                <Link href="https://www.google.com/maps/search/?api=1&query=San+Mart%C3%ADn+453,+San+Francisco+del+Monte+de+Oro,+San+Luis" isExternal _hover={{ color: '#FFD700' }}>
                                    <Text fontSize="sm">Sarmiento S/N, San Francisco del Monte de Oro, San Luis</Text>
                                </Link>
                            </HStack>
                            <HStack spacing={2}>
                                <FaPhone />
                                <Link href="tel:+5492665063769" _hover={{ color: '#FFD700' }}>
                                    <Text fontSize="sm">+54 9 2665 06-3769</Text>
                                </Link>
                            </HStack>
                            <HStack spacing={2}>
                                <FaEnvelope />
                                <Link href="mailto:contacto@vivisanfrancisco.com" _hover={{ color: '#FFD700' }}>
                                    <Text fontSize="sm">contacto@vivisanfrancisco.com</Text>
                                </Link>
                            </HStack>
                        </VStack>
                    </GridItem>
                </Grid>

                {/* Footer inferior con derechos reservados */}
                <MotionBox
                    mt={10}
                    pt={6}
                    borderTopWidth={1}
                    borderTopColor="whiteAlpha.300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
                        <Text fontSize="xs">&copy; 2025 Viví San Francisco. Todos los derechos reservados.</Text>
                        <Link
                            href="https://www.instagram.com/codeo.ar"
                            isExternal
                            fontSize="xs"
                            display="flex"
                            alignItems="center"
                            _hover={{ color: '#FFD700' }}
                        >
                            <Image src={images.codeoLogo} alt="Logo Codeo" w="20px" h="25px" mr={2} />
                            Desarrollado por
                            <Text as="span" fontWeight="bold" ml={1}>Codeo.ar</Text>
                        </Link>
                    </Flex>
                </MotionBox>
            </Box>
        </Box>
    );
};

export default Footer;