import { useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Banner from '../components/Banner';

// Importación de componentes personalizados
import VideoBanner from '../components/VideoBanner';
import InteractiveMap from '../components/InteractiveMap';
import AttractionsCarousel from '../components/AttractionsCarousel';
import ExperienceSection from '../components/ExperienceSection';
import AutumnBanner from '../components/AutumnBanner.jsx';
import AutumnParallaxSeparator from '../components/AutumnParallaxSeparator.jsx';
import AutumnActivities from '../components/AutumnActivities.jsx';
import AutumnGallery from '../components/AutumnGallery.jsx';

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
import separatorImage1 from '../assets/images/sierras.jpg';
import separatorImage2 from '../assets/images/experience.jpg';

const Home = () => {
    const attractions = [
        {
            title: 'Naturaleza',
            image: sierrasImage,
            description: 'Explora las majestuosas sierras con sus colores otoñales.'
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

                {/* Banner Otoñal */}
                <AutumnBanner style={{ marginTop: "-5px" }} />
                <AutumnParallaxSeparator text="Descubrí el Otoño en San Francisco" imageUrl={separatorImage1} />

                <Box ref={attractionsRef}>
                    <AttractionsCarousel attractions={attractions} />
                </Box>


                {/* ExperienceSection
                <ExperienceSection
                    experiences={[
                        {
                            title: "Río de San Francisco",
                            image: rioSanFranciscoImage,
                            description: "Disfrutá de las cristalinas aguas del río, ideal para refrescarte y contemplar los colores otoñales de la vegetación ribereña.",
                        },
                        {
                            title: "Primera Escuela de Sarmiento",
                            image: casaMuseoImage,
                            description: "Visitá el monumento histórico del prócer argentino y sumergite en la historia de su vida y obra.",
                        },
                        {
                            title: "Dique Las Palmeras",
                            image: diqueSanFranciscoImage,
                            description: "Relajate en este hermoso embalse, donde los paisajes otoñales se reflejan en sus tranquilas aguas.",
                        },
                    ]}
                /> */}

                {/* Second parallax separator */}
                <AutumnParallaxSeparator text="Viví una Experiencia Otoñal Única" imageUrl={separatorImage2} />

                {/* Nueva sección de Actividades Otoñales */}
                <AutumnActivities />

                {/* Galería otoñal */}
                <AutumnGallery />

                {/* Sección de Planificación */}
                <Banner />

                {/* Sección de Mapa Interactivo */}
                <InteractiveMap />
            </Box>
        </ParallaxProvider>
    );
};

export default Home;