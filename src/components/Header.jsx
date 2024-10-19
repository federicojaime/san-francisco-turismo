import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  VStack,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { motion, LayoutGroup } from 'framer-motion';
import Logo from '../assets/images/vivi_blanco.png';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const NavLink = ({ children, to, isMobile = false }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Box
      position="relative"
      height={isMobile ? 'auto' : '100%'}
      display="flex"
      alignItems="center"
      mx={isMobile ? 0 : 4}
      my={isMobile ? 2 : 0}
    >
      <Button
        as={RouterLink}
        to={to}
        variant="ghost"
        color={isMobile ? 'gray.800' : 'white'}
        fontSize={isMobile ? 'lg' : 'xl'}
        fontWeight={isActive ? 'bold' : 'normal'}
        height="100%"
        width={isMobile ? 'full' : 'auto'}
        px={4}
        _hover={{
          color: '#FFB81C',
          bg: 'transparent',
        }}
        transition="all 0.3s"
      >
        {children}
      </Button>
      {isActive && (
        <MotionBox
          position="absolute"
          bottom={isMobile ? '-2px' : '0'}
          left="0"
          right="0"
          height="2px"
          bg="#FFB81C"
          layoutId="underline"
        />
      )}
    </Box>
  );
};

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (location.pathname === '/' && currentScrollY === 0) {
        setBgOpacity(0);
      } else {
        setBgOpacity(1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Ejecutar una vez para establecer el estado inicial
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return (
    <MotionFlex
      bg={`rgba(0, 156, 166, ${bgOpacity})`}
      px={4}
      py={2}
      position="fixed"
      width="full"
      zIndex="banner"
      alignItems="center"
      justifyContent="space-between"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={Logo}
        alt="San Francisco Turismo"
        height="60px"
        objectFit="contain"
        filter="drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))"
      />

      <LayoutGroup>
        <Flex
          as="nav"
          display={{ base: 'none', md: 'flex' }}
          height="100%"
          alignItems="center"
        >
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/attractions">Atractivos</NavLink>
          <NavLink to="/accommodations">Alojamientos</NavLink>
          <NavLink to="/information">Información</NavLink>
        </Flex>
      </LayoutGroup>

      <IconButton
        size="md"
        icon={<HamburgerIcon />}
        aria-label="Open Menu"
        display={{ md: 'none' }}
        onClick={onOpen}
        bg="transparent"
        color="white"
        _hover={{
          bg: 'whiteAlpha.200',
        }}
      />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="lg" color="gray.600" />
          <DrawerHeader borderBottomWidth="1px">Menú</DrawerHeader>
          <DrawerBody>
            <LayoutGroup>
              <VStack spacing={4} align="stretch" mt={8}>
                <NavLink to="/" isMobile>
                  Inicio
                </NavLink>
                <NavLink to="/attractions" isMobile>
                  Atractivos
                </NavLink>
                <NavLink to="/accommodations" isMobile>
                  Alojamientos
                </NavLink>
                <NavLink to="/information" isMobile>
                  Información
                </NavLink>
              </VStack>
            </LayoutGroup>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </MotionFlex>
  );
};

export default Header;
