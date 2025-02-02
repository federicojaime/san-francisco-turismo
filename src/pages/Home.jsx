import { useRef } from 'react';
import {
    Box,
} from '@chakra-ui/react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Banner from '../components/Banner';

// Importación de componentes personalizados
import VideoBanner from '../components/VideoBanner';
import InteractiveMap from '../components/InteractiveMap';
import AttractionsCarousel from '../components/AttractionsCarousel';
import ExperienceSection from '../components/ExperienceSection';

// Importación de imágenes
import sierrasImage from '../assets/images/sierras.jpg';
import riosImage from '../assets/images/rios.jpg';
import culturaImage from '../assets/images/cultura.jpg';
import rioSanFranciscoImage from '../assets/images/rioSanFranciscoImage.jpg';
import alojamientoImage from '../assets/images/alojamiento.jpg';
import gastronomiaImage from '../assets/images/gastronomia.jpg';
import casaMuseoImage from '../assets/images/casaMuseoImage.jpg';
import diqueSanFranciscoImage from '../assets/images/diqueSanFranciscoImage.jpg';

//Separador
import ParallaxSeparator from '../components/ParallaxSeparator';
import separatorImage1 from '../assets/images/sierras.jpg';
import separatorImage2 from '../assets/images/experience.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    const attractions = [
        {
            title: 'Naturaleza',
            image: sierrasImage,
            description: 'Explora las majestuosas sierras de San Francisco del Monte de Oro.'
        },
        {
            title: 'Ríos y Arroyos',
            image: riosImage,
            description: 'Disfruta de la frescura de nuestros ríos y arroyos cristalinos.'
        },
        {
            title: 'Cultura e Historia',
            image: culturaImage,
            description: 'Sumérgete en la rica herencia cultural e histórica de nuestra ciudad.'
        },
        {
            title: 'Alojamientos',
            image: alojamientoImage,
            description: 'Buscá tu proximo hogar mientras disfrutas de nuestro destino.'
        },
        {
            title: 'Gastronomía',
            image: gastronomiaImage,
            description: 'Degusta los sabores auténticos de nuestra cocina local.'
        },
    ];
    const attractionsRef = useRef(null);
    return (
        <ParallaxProvider>
            <Box>
                {/* VideoBanner */}
                <VideoBanner />

                <Box ref={attractionsRef}>
                    <AttractionsCarousel attractions={attractions} />
                </Box>
                
                <ParallaxSeparator text="Descubrí San Francisco del Monte de Oro" imageUrl={separatorImage1} />

                {/*<a href="https://vivisanfrancisco.com/ticket/" target="_blank" rel="noopener noreferrer">
                    <ParallaxSeparator text='Conseguí tu entrada para el "Festival del Artesano"' imageUrl={separatorImage1} />
                </a> */}

                {/* ExperienceSection */}
                <ExperienceSection
                    experiences={[
                        {
                            title: "Río de San Francisco",
                            image: rioSanFranciscoImage, // Necesitarás importar o definir esta imagen
                            description: "Disfrutá de las cristalinas aguas del río, ideal para refrescarte, pescar y pasar un día en familia rodeado de naturaleza.",
                        },
                        {
                            title: "Primera Escuela de Sarmiento",
                            image: casaMuseoImage, // Necesitarás importar o definir esta imagen
                            description: "Visitá el monumento histórico del prócer argentino y sumergite en la historia de su vida y obra.",
                        },
                        {
                            title: "Dique Las Palmeras",
                            image: diqueSanFranciscoImage, // Necesitarás importar o definir esta imagen
                            description: "Relajate en este hermoso embalse, ideal para actividades acuáticas y picnics familiares.",
                        },
                    ]}
                />

                {/* Second parallax separator */}
                <ParallaxSeparator text="Viví una Experiencia Única" imageUrl={separatorImage2} />

                {/* Sección de Planificación */}
                <Banner />



                {/* Sección de Mapa Interactivo */}

                <InteractiveMap />

            </Box>
        </ParallaxProvider>
    );
};

export default Home;