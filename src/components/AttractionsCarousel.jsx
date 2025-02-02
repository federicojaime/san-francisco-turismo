import React, { useState } from 'react';
import { Box, Text, Image, Flex, Icon, useBreakpointValue, useToast } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMountain, FaWater, FaLandmark, FaBed, FaUtensils } from 'react-icons/fa';
import ElegantSectionTitle from './ElegantSectionTitle';
import { useNavigate } from 'react-router-dom';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);

const iconMap = {
  Naturaleza: FaMountain,
  "Ríos y Arroyos": FaWater,
  "Cultura e Historia": FaLandmark,
  Alojamientos: FaBed,
  Gastronomía: FaUtensils,
};

const AttractionCard = ({ title, image, description, isExpanded, onMouseEnter, onMouseLeave, onClick, isMobile }) => (
  <MotionBox
    position="relative"
    height={isMobile ? "200px" : "400px"}
    layout
    initial={{ flex: 1 }}
    animate={{
      flex: isExpanded ? (isMobile ? 1 : 1.5) : 1,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }}
    overflow="hidden"
    borderRadius="lg"
    boxShadow="md"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
    cursor="pointer"
    m={1}
    _hover={{
      transform: "scale(1.02)",
      transition: "transform 0.3s ease"
    }}
  >
    <Image
      src={image}
      alt={title}
      objectFit="cover"
      width="100%"
      height="100%"
      transition="all 0.3s ease"
    />
    <MotionFlex
      position="absolute"
      left={0}
      right={0}
      bottom={0}
      animate={{
        height: isExpanded ? "100%" : "45%",
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
      }}
      direction="column"
      justify="flex-end"
      align="center"
      p={isMobile ? 2 : 4}
      color="white"
      bg={isExpanded
        ? "linear-gradient(to bottom, rgba(0,128,128,0.2) 0%, rgba(0,128,128,0.5) 50%, rgba(0,128,128,0.8) 100%)"
        : "linear-gradient(to top, rgba(0,128,128,0.7) 0%, rgba(0,128,128,0.4) 50%, rgba(0,128,128,0.1) 100%)"}
      transition="all 0.3s ease"
    >
      <AnimatePresence>
        <MotionFlex
          direction="column"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          align="center"
        >
          <Icon
            as={iconMap[title]}
            boxSize={isMobile ? 6 : 8}
            mb={1}
            color="white"
          />
          <MotionText
            fontSize={isMobile ? "sm" : "lg"}
            fontWeight="bold"
            textAlign="center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </MotionText>
          {isExpanded && !isMobile && (
            <MotionText
              fontSize="sm"
              textAlign="center"
              maxWidth="90%"
              lineHeight="1.4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {description}
            </MotionText>
          )}
        </MotionFlex>
      </AnimatePresence>
    </MotionFlex>
  </MotionBox>
);

const AttractionsCarousel = ({ attractions }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const navigate = useNavigate();
  const toast = useToast();

  const handleAttractionClick = (index) => {
    const selectedCategory = attractions[index].title;
    if (selectedCategory === "Gastronomía") {
      navigate('/gastronomia'); // Cambiar toast por navegación a la ruta de Gastronomía
    } else if (selectedCategory === "Alojamientos") {
      navigate('/alojamientos');
    } else {
      navigate(`/atractivos?category=${encodeURIComponent(selectedCategory)}`);
    }
  };
  

  return (
    <Box position="relative" width="100%" py={4} bg="gray.50">
      <ElegantSectionTitle
        title="VIVÍ LOS ATRACTIVOS"
        subtitle="Descubrí los tesoros ocultos de nuestra hermosa ciudad"
        primaryColor="teal.600"
        accentColor="orange.400"
      />
      <Flex
        direction={isMobile ? "column" : "row"}
        justifyContent="center"
        alignItems="stretch"
        height={isMobile ? "auto" : "400px"}
        maxWidth="100%"
        mx="auto"
        px={2}
      >
        {attractions.map((attraction, index) => (
          <AttractionCard
            key={index}
            {...attraction}
            isExpanded={expandedIndex === index}
            onMouseEnter={() => !isMobile && setExpandedIndex(index)}
            onMouseLeave={() => !isMobile && setExpandedIndex(null)}
            onClick={() => handleAttractionClick(index)}
            isMobile={isMobile}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default AttractionsCarousel;