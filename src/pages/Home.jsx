// src/pages/Home.jsx
import { useRef } from 'react';
import {
    Box,
    Container,
    VStack,
    Flex,
    useColorModeValue
} from '@chakra-ui/react';
import { useViewportScroll, useTransform, useSpring } from 'framer-motion';
import { ParallaxProvider } from 'react-scroll-parallax';

// Importación de componentes personalizados
import VideoBanner from '../components/VideoBanner';
import WeatherWidget from '../components/WeatherWidget';
import EventCalendar from '../components/EventCalendar';
import TestimonialCarousel from '../components/TestimonialCarousel';
import InteractiveMap from '../components/InteractiveMap';

// Importación de componentes separados
import ParallaxSection from '../components/ParallaxSection';
import AnimatedHeading from '../components/AnimatedHeading';
import FloatingButton from '../components/FloatingButton';
import AttractionAccordion from '../components/AttractionAccordion'; // Nuevo componente
import ExperienceSection from '../components/ExperienceSection';

// Importación de imágenes
import sierrasImage from '../assets/images/sierras.jpg';
import riosImage from '../assets/images/rios.jpg';
import culturaImage from '../assets/images/cultura.jpg';
import experienceImage from '../assets/images/experience.jpg';
import senderismoImage from '../assets/images/senderismo.jpg';
import gastronomiaImage from '../assets/images/gastronomia.jpg';
import artesaniasImage from '../assets/images/artesanias.jpg';
import testimonialsImage from '../assets/images/testimonials.jpg';


//Separador
import ParallaxSeparator from '../components/ParallaxSeparator';
import separatorImage1 from '../assets/images/sierras.jpg'; // example image
import separatorImage2 from '../assets/images/experience.jpg';


const Home = () => {
    const bgColor = useColorModeValue('gray.50', 'gray.900');
    const textColor = useColorModeValue('gray.600', 'gray.200');

    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    const smoothScale = useSpring(scale, { stiffness: 400, damping: 90 });
    const smoothY = useSpring(y, { stiffness: 400, damping: 90 });

    const attractionsRef = useRef(null);

    const scrollToAttractions = () => {
        attractionsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <ParallaxProvider>
            <Box>
                {/* VideoBanner */}
                <VideoBanner />

                {/* Sección de Atractivos Turísticos */}
                <Box ref={attractionsRef} bg={bgColor} py={16}>
                    <Container maxW="container.xl">
                        <VStack spacing={12}>
                            <AnimatedHeading color={textColor}>Viví los Atractivos</AnimatedHeading>
                            <AttractionAccordion
                                attractions={[
                                    {
                                        title: 'Sierras',
                                        image: sierrasImage,
                                        description: 'Recorré las majestuosas sierras y descubrí vistas impresionantes.',
                                    },
                                    {
                                        title: 'Ríos',
                                        image: riosImage,
                                        description: 'Sumergite en las aguas cristalinas de nuestros ríos.',
                                    },
                                    {
                                        title: 'Cultura',
                                        image: culturaImage,
                                        description: 'Viví la historia y las tradiciones de nuestro pueblo.',
                                    },
                                ]}
                            />
                        </VStack>
                    </Container>
                </Box>

                {/* Separador */}
                <ParallaxSeparator text="Descubrí las Sierras" imageUrl={separatorImage1} />

                <ExperienceSection
                    experiences={[
                        {
                            title: "Senderismo",
                            image: senderismoImage,
                            description: "Explorá rutas increíbles y conectá con la naturaleza.",
                        },
                        {
                            title: "Gastronomía",
                            image: gastronomiaImage,
                            description: "Degustá sabores auténticos de la región.",
                        },
                        {
                            title: "Artesanías",
                            image: artesaniasImage,
                            description: "Descubrí el talento de nuestros artesanos locales.",
                        },
                    ]}
                />

                {/* Second parallax separator */}
                <ParallaxSeparator text="Viví una Experiencia Única" imageUrl={separatorImage2} />

                {/* Sección de Planificación */}
                <Box bg={bgColor} py={16}>
                    <Container maxW="container.xl">
                        <VStack spacing={12}>
                            <AnimatedHeading color={textColor}>Planificá tu aventura</AnimatedHeading>
                            <Flex
                                direction={{ base: 'column', md: 'row' }}
                                justify="space-between"
                                w="100%"
                                mt={8}
                                gap={8}
                            >
                            </Flex>
                        </VStack>
                    </Container>
                </Box>

                {/* Second parallax separator */}
                <ParallaxSeparator text="Viví una Experiencia Única" imageUrl={separatorImage2} />



                {/* Separador */}
                <Box borderBottom="2px dashed #00AEEF" width="80%" margin="auto" my={8} />

                {/* Sección de Mapa Interactivo */}
                <Box bg={bgColor} py={16}>
                    <Container maxW="container.xl">
                        <VStack spacing={12}>
                            <InteractiveMap />
                        </VStack>
                    </Container>
                </Box>
            </Box>
        </ParallaxProvider>
    );
};

export default Home;
