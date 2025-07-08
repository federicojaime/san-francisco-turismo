// src/pages/Conoce.jsx - Nueva página con videos de YouTube
import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  AspectRatio,
  Icon,
  Badge,
  useColorModeValue,
  Button,
  Flex,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaPlay, FaSnowflake, FaYoutube, FaMountain, FaCamera, FaEye } from 'react-icons/fa';
import ElegantSectionTitle from '../components/ElegantSectionTitle';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const VideoCard = ({ video, index }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('winter.frost', 'gray.600');

  return (
    <>
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
        bg={bgColor}
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="2xl"
        borderTop="4px solid"
        borderTopColor="winter.sky"
        _hover={{
          transform: 'translateY(-8px)',
          boxShadow: '2xl',
          borderTopColor: 'winter.deep'
        }}
        transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
        cursor="pointer"
        onClick={onOpen}
        position="relative"
        className="group"
      >
        {/* Thumbnail del video */}
        <Box position="relative" overflow="hidden">
          <Image
            src={video.thumbnail}
            alt={video.title}
            w="100%"
            h="200px"
            objectFit="cover"
            transition="transform 0.5s"
            _groupHover={{ transform: 'scale(1.05)' }}
          />
          
          {/* Overlay con botón de play */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="rgba(2, 119, 189, 0.6)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            opacity={0}
            _groupHover={{ opacity: 1 }}
            transition="opacity 0.3s"
          >
            <Icon
              as={FaPlay}
              boxSize={16}
              color="white"
              filter="drop-shadow(0 4px 8px rgba(0,0,0,0.3))"
            />
          </Box>

          {/* Badge de YouTube */}
          <Badge
            position="absolute"
            top={3}
            right={3}
            colorScheme="red"
            variant="solid"
            fontSize="sm"
            borderRadius="full"
            px={3}
            py={1}
          >
            <HStack spacing={1}>
              <Icon as={FaYoutube} boxSize={3} />
              <Text>YouTube</Text>
            </HStack>
          </Badge>

          {/* Duración */}
          <Badge
            position="absolute"
            bottom={3}
            right={3}
            bg="rgba(0,0,0,0.8)"
            color="white"
            fontSize="sm"
            borderRadius="md"
            px={2}
            py={1}
          >
            {video.duration}
          </Badge>
        </Box>

        {/* Contenido del video */}
        <VStack p={6} align="stretch" spacing={4}>
          <HStack spacing={3}>
            <Heading size="md" color="winter.deep" lineHeight="1.3">
              {video.title}
            </Heading>
          </HStack>
          
          <Text color="gray.600" fontSize="sm" lineHeight="1.6">
            {video.description}
          </Text>

          <HStack justify="space-between" align="center">
            <Badge colorScheme="blue" variant="subtle" borderRadius="full">
              {video.category}
            </Badge>
           
          </HStack>

          <Button
            colorScheme="blue"
            variant="outline"
            leftIcon={<FaPlay />}
            size="md"
            borderRadius="full"
            _hover={{
              bg: 'winter.crystal',
              transform: 'translateY(-2px)'
            }}
            transition="all 0.3s"
          >
            Ver Video
          </Button>
        </VStack>
      </MotionBox>

      {/* Modal con el video */}
      <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
        <ModalOverlay bg="rgba(1, 87, 155, 0.8)" backdropFilter="blur(10px)" />
        <ModalContent bg="transparent" boxShadow="none" maxW="90vw">
          <ModalCloseButton
            color="white"
            size="lg"
            bg="rgba(0,0,0,0.5)"
            _hover={{ bg: "rgba(0,0,0,0.7)" }}
            borderRadius="full"
            zIndex={10}
          />
          <ModalBody p={0}>
            <AspectRatio ratio={16 / 9} borderRadius="lg" overflow="hidden">
              <iframe
                src={video.embedUrl}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
                }}
              />
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const Conoce = () => {
  const videos = [
    {
      id: 1,
      title: "🍽️ Sabores únicos en Paladar Negro",
      description: "Visitamos Paladar Negro, una propuesta gastronómica que combina tradición, calidad y pasión por los sabores en San Francisco del Monte de Oro.",
      thumbnail: "https://img.youtube.com/vi/qK8A1dFESpo/maxresdefault.jpg",
      url: "https://youtube.com/shorts/qK8A1dFESpo?feature=share",
      embedUrl: "https://www.youtube.com/embed/qK8A1dFESpo",
      duration: "0:60",
      category: "Turismo Gastronómico",
      icon: FaMountain,
      views: "1.2K"
    },
    {
      id: 2,
      title: "🍰 Descubrí la Cafetería Banda Sur",
      description: "Conocé la Cafetería Banda Sur, un rincón cálido en San Francisco del Monte de Oro donde el aroma a café y las tortas caseras te invitan a quedarte.",
      thumbnail: "https://img.youtube.com/vi/UlRnJWphjwA/maxresdefault.jpg",
      url: "https://youtube.com/shorts/UlRnJWphjwA?feature=share",
      embedUrl: "https://www.youtube.com/embed/UlRnJWphjwA",
      duration: "0:58",
      category: "Turismo Gastronómico",
      icon: FaCamera,
      views: "856"
    }
  ];

  return (
    <Box bg="gray.50" minHeight="100vh" py={20}>
      <Container maxW="container.xl">
        {/* Header de la sección */}
        <MotionBox
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ElegantSectionTitle
            title="CONOCÉ SAN FRANCISCO"
            subtitle="Descubrí la belleza de nuestro destino a través de estos videos"
            primaryColor="winter.deep"
            accentColor="winter.sky"
          />
        </MotionBox>

        {/* Introducción 
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          bg="white"
          p={8}
          borderRadius="2xl"
          boxShadow="xl"
          mb={12}
          borderTop="4px solid"
          borderTopColor="winter.sky"
          position="relative"
          overflow="hidden"
        >
          {/* Decoración de fondo */}
          {/**  <Box
            position="absolute"
            top={0}
            right={0}
            width="300px"
            height="300px"
            bgGradient="radial(circle, rgba(3,169,244,0.1), transparent 70%)"
            zIndex={0}
          />
          
          {/* Copos decorativos 
          <Icon
            as={FaSnowflake}
            position="absolute"
            top={4}
            right={6}
            color="winter.frost"
            boxSize={6}
            opacity={0.7}
            transform="rotate(15deg)"
            zIndex={1}
          />
          {/** 
          <VStack spacing={6} align="center" textAlign="center" position="relative" zIndex={2}>
            <HStack spacing={3} justify="center">
              <Icon as={FaYoutube} color="red.500" boxSize={10} />
              <MotionHeading
                as="h2"
                size="xl"
                color="winter.deep"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                Videos Destacados
              </MotionHeading>
            </HStack>
            
            <Box maxW="800px">
              <Text fontSize="lg" color="gray.700" lineHeight="1.8" mb={4}>
                <Text as="span" fontWeight="bold" color="winter.deep">
                  ¡Sumérgete en la belleza de San Francisco del Monte de Oro!
                </Text>{" "}
                Estos videos te llevarán en un viaje visual por los paisajes más espectaculares 
                de nuestra región. Desde las imponentes sierras hasta los arroyos cristalinos, 
                cada imagen captura la esencia única de nuestro destino.
              </Text>
              
              <Text fontSize="md" color="gray.600" fontStyle="italic">
                Descubrí por qué miles de visitantes eligen San Francisco del Monte de Oro 
                como su escape perfecto de la rutina. ¡La aventura te está esperando!
              </Text>
            </Box>

            <HStack spacing={8} color="winter.deep" fontSize="sm" fontWeight="bold">
              <HStack>
                <Icon as={FaPlay} />
                <Text>2 Videos Exclusivos</Text>
              </HStack>
              <HStack>
                <Icon as={FaEye} />
                <Text>+2K Visualizaciones</Text>
              </HStack>
              <HStack>
                <Icon as={FaMountain} />
                <Text>Paisajes Únicos</Text>
              </HStack>
            </HStack>
          </VStack>
        </MotionBox>*/}

        {/* Grid de videos */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} mb={12}>
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </SimpleGrid>

        {/* Call to action */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          bg="white"
          p={10}
          borderRadius="3xl"
          boxShadow="2xl"
          border="3px solid"
          borderColor="winter.frost"
          textAlign="center"
          position="relative"
          overflow="hidden"
        >
          {/* Fondo decorativo */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bgGradient="linear(135deg, rgba(227, 242, 253, 0.1), rgba(179, 229, 252, 0.05))"
            zIndex={0}
          />

          <VStack spacing={6} position="relative" zIndex={1}>
            <HStack spacing={3} justify="center">
              <Icon as={FaSnowflake} color="winter.sky" boxSize={8} />
              <Heading size="lg" color="winter.deep">
                ¿Te Gustó Lo Que Viste?
              </Heading>
              <Icon as={FaSnowflake} color="winter.sky" boxSize={8} />
            </HStack>
            
            <Text fontSize="lg" color="gray.700" maxW="600px">
              ¡Vení a vivir estas experiencias en persona! Planificá tu próxima aventura 
              en San Francisco del Monte de Oro.
            </Text>

            <Flex 
              direction={{ base: "column", md: "row" }} 
              gap={4} 
              align="center"
              justify="center"
            >
              <Button
                as="a"
                href="/atractivos"
                size="lg"
                bgGradient="linear(to-r, winter.deep, winter.sky)"
                color="white"
                leftIcon={<FaMountain />}
                _hover={{ 
                  bgGradient: "linear(to-r, winter.sky, winter.deep)", 
                  transform: "translateY(-3px)",
                  boxShadow: "2xl"
                }}
                transition="all 0.3s"
                px={8}
                py={6}
                borderRadius="full"
                boxShadow="xl"
                fontSize="lg"
                fontWeight="bold"
                minW="250px"
              >
                Explorar Atractivos
              </Button>
              
              <Button
                as="a"
                href="/alojamientos"
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
                Ver Alojamientos
              </Button>
            </Flex>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Conoce;