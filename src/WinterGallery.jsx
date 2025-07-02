// src/components/WinterGallery.jsx
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
import { FaSnowflake, FaCamera, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionHeading = motion(Heading);

// Imágenes de invierno
const winterImages = [
    {
        src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        title: 'Sendero invernal en las sierras',
        description: 'Los senderos se cubren de escarcha matutina creando paisajes mágicos.',
        location: 'Sendero Las Sierras',
        date: 'Julio 2025'
    },
    {
        src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop',
        title: 'Amanecer invernal en el río',
        description: 'El río San Francisco refleja los primeros rayos del sol en una mañana de invierno.',
        location: 'Río San Francisco',
        date: 'Junio 2025'
    },
    {
        src: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=400&fit=crop',
        title: 'Noches junto al fuego',
        description: 'Los encuentros junto al fuego son una tradición invernal en San Francisco.',
        location: 'Plaza Principal',
        date: 'Agosto 2025'
    },
    {
        src: 'https://images.unsplash.com/photo-1444927714506-8492d94b5ba0?w=600&h=400&fit=crop',
        title: 'Cielos estrellados de invierno',
        description: 'Las noches cristalinas de invierno ofrecen los mejores cielos para la astronomía.',
        location: 'Mirador Las Estrellas',
        date: 'Julio 2025'
    },
    {
        src: 'https://images.unsplash.com/photo-1548777123-bfb1b15c2ba6?w=600&h=400&fit=crop',
        title: 'Bosque serrano en invierno',
        description: 'Los árboles nativos muestran su belleza invernal con ramas cristalinas.',
        location: 'Bosque El Montiño',
        date: 'Agosto 2025'
    },
    {
        src: 'https://images.unsplash.com/photo-1422255661376-bc1bdd66dd15?w=600&h=400&fit=crop',
        title: 'Valle cubierto de escarcha',
        description: 'El valle se transforma en un paisaje de ensueño durante las mañanas de invierno.',
        location: 'Valle de la Luna',
        date: 'Junio 2025'
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
        className="group"
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
            bg="rgba(2,119,189,0.8)"
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
            as={FaSnowflake}
            position="absolute"
            top={3}
            right={3}
            color="winter.ice"
            boxSize={6}
            opacity={0.7}
        />
    </MotionBox>
);

const WinterGallery = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
        onOpen();
    };

    const handlePrevious = () => {
        setSelectedImageIndex((prev) =>
            prev === 0 ? winterImages.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setSelectedImageIndex((prev) =>
            prev === winterImages.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <Box py={16} bg="rgba(227, 242, 253, 0.3)">
            <Container maxW="container.xl">
                <VStack spacing={8} mb={10} position="relative">
                    <Icon
                        as={FaSnowflake}
                        position="absolute"
                        top="-20px"
                        left="10%"
                        color="winter.frost"
                        boxSize={6}
                        transform="rotate(-15deg)"
                    />

                    <MotionHeading
                        as="h2"
                        size="2xl"
                        color="winter.deep"
                        textAlign="center"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        GALERÍA DE INVIERNO
                    </MotionHeading>

                    <MotionBox
                        width="120px"
                        height="3px"
                        bg="winter.sky"
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
                        Explora la belleza de San Francisco del Monte de Oro durante las vacaciones de invierno.
                        Los paisajes se transforman con una impresionante paleta de azules cristalinos,
                        blancos puros y verdes serranos creando escenarios únicos.
                    </Text>

                    <Icon
                        as={FaSnowflake}
                        position="absolute"
                        bottom="-15px"
                        right="10%"
                        color="winter.sky"
                        boxSize={6}
                        transform="rotate(15deg)"
                    />
                </VStack>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                    {winterImages.map((image, index) => (
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
                    <ModalOverlay bg="rgba(2, 119, 189, 0.4)" backdropFilter="blur(5px)" />
                    <ModalContent bg="rgba(240, 250, 255, 0.95)" borderRadius="xl" overflow="hidden">
                        <ModalCloseButton color="winter.deep" />
                        <ModalBody p={0} position="relative">
                            <Image
                                src={winterImages[selectedImageIndex].src}
                                alt={winterImages[selectedImageIndex].title}
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
                                    _hover={{ bg: "rgba(2,119,189,0.7)" }}
                                    aria-label="Imagen anterior"
                                />
                                <IconButton
                                    icon={<ChevronRightIcon />}
                                    onClick={handleNext}
                                    variant="ghost"
                                    color="white"
                                    size="lg"
                                    _hover={{ bg: "rgba(2,119,189,0.7)" }}
                                    aria-label="Imagen siguiente"
                                />
                            </HStack>

                            <Box
                                position="absolute"
                                bottom={0}
                                left={0}
                                right={0}
                                p={4}
                                bg="rgba(2,119,189,0.8)"
                                color="white"
                            >
                                <Heading size="md" mb={2}>{winterImages[selectedImageIndex].title}</Heading>
                                <Text>{winterImages[selectedImageIndex].description}</Text>
                                <HStack mt={2} spacing={6}>
                                    <HStack>
                                        <Icon as={FaMapMarkerAlt} />
                                        <Text>{winterImages[selectedImageIndex].location}</Text>
                                    </HStack>
                                    <HStack>
                                        <Icon as={FaCalendarAlt} />
                                        <Text>{winterImages[selectedImageIndex].date}</Text>
                                    </HStack>
                                    <HStack>
                                        <Icon as={FaCamera} />
                                        <Text>Foto {selectedImageIndex + 1} de {winterImages.length}</Text>
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

export default WinterGallery;