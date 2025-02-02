import React, { useState, useEffect } from 'react';
import { Box, IconButton, Text, useMediaQuery } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCommentAlt, FaWhatsapp, FaFacebook, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionIconButton = motion(IconButton);

const CommunicationWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const socialIcons = [
    { icon: FaWhatsapp, color: '#25D366', link: 'https://api.whatsapp.com/message/TXN65HRNAD5PI1?autoload=1&app_absent=0', text: 'Escribinos' },
    { icon: FaFacebook, color: '#1877F2', link: 'https://www.facebook.com/vivi.sanfrancisco', text: 'Seguinos' },
    { icon: FaInstagram, color: '#E4405F', link: 'https://www.instagram.com/vivi.sanfrancisco/', text: 'Mirá' },
    { icon: FaEnvelope, color: '#D44638', link: 'mailto:contacto@vivisanfrancisco.com', text: 'Contactanos' },
    { icon: FaMapMarkerAlt, color: '#4285F4', link: 'https://maps.app.goo.gl/wXRDvTbitbsgLvQV7', text: 'Encontranos' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.2;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionBox
          position="fixed"
          bottom={isMobile ? "20px" : "40px"}
          right={isMobile ? "20px" : "40px"}
          zIndex={1000}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          <MotionBox display="flex" flexDirection="column" alignItems="center">
            <AnimatePresence>
              {isExpanded && (
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  mb={4}
                >
                  {socialIcons.map((item, index) => (
                    <MotionBox
                      key={index}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mb={2}
                      position="relative"
                      onMouseEnter={() => setHoveredIcon(index)}
                      onMouseLeave={() => setHoveredIcon(null)}
                    >
                      <AnimatePresence>
                        {hoveredIcon === index && (
                          <MotionBox
                            position="absolute"
                            right="100%"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.2 }}
                            mr={2}
                          >
                            <Text
                              fontSize="sm"
                              bg="white"
                              px={3}
                              py={2}
                              borderRadius="full"
                              boxShadow="md"
                              color="gray.700"
                              fontWeight="medium"
                              whiteSpace="nowrap"
                            >
                              {item.text}
                            </Text>
                          </MotionBox>
                        )}
                      </AnimatePresence>
                      <MotionIconButton
                        as="a"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.text}
                        icon={<item.icon />}
                        bg={item.color}
                        color="white"
                        size="md"
                        isRound
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      />
                    </MotionBox>
                  ))}
                </MotionBox>
              )}
            </AnimatePresence>
            <MotionIconButton
              icon={<FaCommentAlt />}
              bg="#009ca6"
              color="white"
              size="lg"
              isRound
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Comunicación"
              boxShadow="lg"
              width="60px"
              height="60px"
            />
          </MotionBox>
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

export default CommunicationWidget;