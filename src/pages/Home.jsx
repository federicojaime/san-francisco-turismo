import { useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Banner from '../components/Banner';

// Importación de componentes personalizados
import VideoBanner from '../components/VideoBanner';
import InteractiveMap from '../components/InteractiveMap';
import AttractionsCarousel from '../components/AttractionsCarousel';
import WinterBanner from '../components/WinterBanner.jsx';
import WinterParallaxSeparator from '../components/WinterParallaxSeparator.jsx';
import WinterActivities from '../components/WinterActivities.jsx';
import WinterAgendaPreview from '../components/WinterAgendaPreview.jsx';

// Importación de imágenes
import sierrasImage from '../assets/images/sierras.jpg';
import riosImage from '../assets/images/rios.jpg';
import culturaImage from '../assets/images/cultura.jpg';
import alojamientoImage from '../assets/images/alojamiento.jpg';
import gastronomiaImage from '../assets/images/gastronomia.jpg';

//Separador
import separatorImage1 from '../assets/images/sierras.jpg';
import separatorImage2 from '../assets/images/experience.jpg';

const Home = () => {
    const attractions = [
        {
            title: 'Naturaleza',
            image: sierrasImage,
            description: 'Explora las majestuosas sierras con sus paisajes invernales únicos.'
        },
        {
            title: 'Ríos y Arroyos',
            image: riosImage,
            description: 'Disfruta de la frescura cristalina de nuestros ríos y arroyos en invierno.'
        },
        {
            title: 'Cultura e Historia',
            image: culturaImage,
            description: 'Sumérgete en la rica herencia cultural e histórica durante tu estadía invernal.'
        },
        {
            title: 'Alojamientos',
            image: alojamientoImage,
            description: 'Encuentra tu refugio perfecto para las vacaciones de invierno.'
        },
        {
            title: 'Gastronomía',
            image: gastronomiaImage,
            description: 'Degusta los sabores cálidos y reconfortantes de nuestra cocina local.'
        },
    ];
    const attractionsRef = useRef(null);
    
    return (
        <ParallaxProvider>
            <Box>
                {/* VideoBanner */}
                <VideoBanner />

                {/* Banner Invernal */}
                <WinterBanner style={{ marginTop: "-5px" }} />
                
                {/* Separador parallax */}
                <WinterParallaxSeparator text="Descubrí el Invierno en San Francisco" imageUrl={separatorImage1} />

                {/* Carousel de atractivos */}
                <Box ref={attractionsRef}>
                    <AttractionsCarousel attractions={attractions} />
                </Box>

                {/* Agenda de Invierno - NUEVO */}
                <WinterAgendaPreview />

                {/* Second parallax separator */}
                <WinterParallaxSeparator text="Viví unas Vacaciones de Invierno Únicas" imageUrl={separatorImage2} />

                {/* Actividades Invernales 
                <WinterActivities />*/}

                {/* Sección de Planificación */}
                <Banner />

                {/* Sección de Mapa Interactivo */}
                <InteractiveMap />
            </Box>
        </ParallaxProvider>
    );
};

export default Home;