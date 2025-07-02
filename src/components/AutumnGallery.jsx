// src/components/AutumnGallery.jsx
import React, { useState } from 'react';
import {
    Box,
    Container,
    SimpleGrid,
    Image,
    Heading,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    VStack,
    HStack,
    Icon,
    IconButton,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaLeaf, FaCamera, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionHeading = motion(Heading);

// Deberás reemplazar estos valores con tus propias imágenes
const autumnImages = [
    {
        src: 'https://via.placeholder.com/600x400/D2691E/FFFFFF?text=Otoño+en+San+Francisco+1',
        title: 'Sendero entre montañas',
        description: 'Colores otoñales en el camino que se adentra en las sierras.',
        location: 'Sendero Las Sierras',
        date: 'Abril 2025'
    },
    {
        src: 'https://via.placeholder.com/600x400/B8860B/FFFFFF?text=Otoño+en+San+Francisco+2',
        title: 'Atardecer en el río',
        description: 'El río San Francisco refleja los cálidos colores del atardecer otoñal.',
        location: 'Río San Francisco',
        date: 'Marzo 2025'
    },
    {
        src: 'https://via.placeholder.com/600x400/A0522D/FFFFFF?text=Otoño+en+San+Francisco+3',
        title: 'Valle dorado',
        description: 'El valle se viste de dorado con la llegada del otoño.',
        location: 'Valle de la Luna',
        date: 'Abril 2025'
    },
    {
        src: 'https://via.placeholder.com/600x400/CD853F/FFFFFF?text=Otoño+en+San+Francisco+4',
        title: 'Bosque de árboles nativos',
        description: 'Los árboles nativos muestran su mejor rostro en esta temporada.',
        location: 'Bosque El Montiño',
        date: 'Mayo 2025'
    },
    {
        src: 'https://via.placeholder.com/600x400/8B4513/FFFFFF?text=Otoño+en+San+Francisco+5',
        title: 'Sendero junto al arroyo',
        description: 'El camino junto al arroyo se cubre de hojas doradas y cobrizas.',
        location: 'Arroyo Piedra Blanca',
        date: 'Abril 2025'
    },
    {
        src: 'https://via.placeholder.com/600x400/FF8C00/FFFFFF?text=Otoño+en+San+Francisco+6',
        title: 'Plaza principal',
        description: 'Hasta la plaza principal se viste con los colores del otoño.',
        location: 'Plaza Pringles',
        date: 'Mayo 2025'
    },
];

const GalleryImage = ({ image, index, onClick }) => (
    <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -10, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onClick(index)}
        cursor="pointer"
        position="relative"
        overflow="hidden"
        borderRadius="lg"
        boxShadow="md"
    >
        <MotionImage
            src={image.src}
            alt={image.title}
            w="100%"
            h={{ base: "200px", md: "250px" }}
            objectFit="cover"
            transition="transform 0.5s"
            _hover={{ transform: "scale(1.05)" }}
        />
        <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            p={3}
            bg="rgba(210,105,30,0.8)"
            color="white"
            transition="all 0.3s"
            transform="translateY(100%)"
            _groupHover={{ transform: "translateY(0)" }}
        >
            <Text fontWeight="bold">{image.title}</Text>
            <HStack fontSize="sm" opacity={0.9} spacing={4}>
                <HStack>
                    <Icon as={FaMapMarkerAlt} />
                    <Text>{image.location}</Text>
                </HStack>
                <HStack>
                    <Icon as={FaCalendarAlt} />
                    <Text>{image.date}</Text>
                </HStack>
            </HStack>
        </Box>

        <Icon
            as={FaLeaf}
            position="absolute"
            top={3}
            right={3}
            color="autumn.gold"
            boxSize={6}
            opacity={0.7}
        />
    </MotionBox>
);

const AutumnGallery = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
        onOpen();
    };

    const handlePrevious = () => {
        setSelectedImageIndex((prev) =>
            prev === 0 ? autumnImages.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setSelectedImageIndex((prev) =>
            prev === autumnImages.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <Box py={16} bg="rgba(255, 248, 225, 0.3)">
            <Container maxW="container.xl">
                <VStack spacing={8} mb={10} position="relative">
                    <Icon
                        as={FaLeaf}
                        position="absolute"
                        top="-20px"
                        left="10%"
                        color="autumn.leaf"
                        boxSize={6}
                        transform="rotate(-15deg)"
                    />

                    <MotionHeading
                        as="h2"
                        size="2xl"
                        color="autumn.rust"
                        textAlign="center"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        GALERÍA DE OTOÑO
                    </MotionHeading>

                    <MotionBox
                        width="120px"
                        height="3px"
                        bg="autumn.gold"
                        initial={{ width: 0 }}
                        whileInView={{ width: "120px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    />

                    <Text
                        color="gray.700"
                        fontSize="lg"
                        textAlign="center"
                        maxW="800px"
                    >
                        Explora la belleza de San Francisco del Monte de Oro durante la temporada otoñal.
                        Los paisajes se transforman con una impresionante paleta de colores naranjas,
                        dorados y cobrizos creando escenarios de ensueño.
                    </Text>

                    <Icon
                        as={FaLeaf}
                        position="absolute"
                        bottom="-15px"
                        right="10%"
                        color="autumn.orange"
                        boxSize={6}
                        transform="rotate(15deg)"
                    />
                </VStack>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                    {autumnImages.map((image, index) => (
                        <GalleryImage
                            key={index}
                            image={image}
                            index={index}
                            onClick={handleImageClick}
                        />
                    ))}
                </SimpleGrid>

                {/* Modal para ver imagen ampliada */}
                <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
                    <ModalOverlay bg="rgba(139, 69, 19, 0.4)" backdropFilter="blur(5px)" />
                    <ModalContent bg="rgba(255, 250, 240, 0.95)" borderRadius="xl" overflow="hidden">
                        <ModalCloseButton color="autumn.rust" />
                        <ModalBody p={0} position="relative">
                            <Image
                                src={autumnImages[selectedImageIndex].src}
                                alt={autumnImages[selectedImageIndex].title}
                                w="100%"
                                h="auto"
                                maxH="70vh"
                                objectFit="cover"
                            />

                            <HStack position="absolute" top="50%" width="100%" px={4} justify="space-between" transform="translateY(-50%)">
                                <IconButton
                                    icon={<ChevronLeftIcon />}
                                    onClick={handlePrevious}
                                    variant="ghost"
                                    color="white"
                                    size="lg"
                                    _hover={{ bg: "rgba(210,105,30,0.7)" }}
                                    aria-label="Imagen anterior"
                                />
                                <IconButton
                                    icon={<ChevronRightIcon />}
                                    onClick={handleNext}
                                    variant="ghost"
                                    color="white"
                                    size="lg"
                                    _hover={{ bg: "rgba(210,105,30,0.7)" }}
                                    aria-label="Imagen siguiente"
                                />
                            </HStack>

                            <Box
                                position="absolute"
                                bottom={0}
                                left={0}
                                right={0}
                                p={4}
                                bg="rgba(210,105,30,0.8)"
                                color="white"
                            >
                                <Heading size="md" mb={2}>{autumnImages[selectedImageIndex].title}</Heading>
                                <Text>{autumnImages[selectedImageIndex].description}</Text>
                                <HStack mt={2} spacing={6}>
                                    <HStack>
                                        <Icon as={FaMapMarkerAlt} />
                                        <Text>{autumnImages[selectedImageIndex].location}</Text>
                                    </HStack>
                                    <HStack>
                                        <Icon as={FaCalendarAlt} />
                                        <Text>{autumnImages[selectedImageIndex].date}</Text>
                                    </HStack>
                                    <HStack>
                                        <Icon as={FaCamera} />
                                        <Text>Foto {selectedImageIndex + 1} de {autumnImages.length}</Text>
                                    </HStack>
                                </HStack>
                            </Box>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Container>
        </Box>
    );
};

export default AutumnGallery;