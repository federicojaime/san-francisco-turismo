// src/AutumnTheme.jsx
import { extendTheme } from '@chakra-ui/react';

// Paleta de colores otoñales para reemplazar el azul turquesa de tu tema actual
const autumnTheme = extendTheme({
  colors: {
    // Colores principales para reemplazar los celestes
    primary: {
      50: '#FFF3E0',
      100: '#FFE0B2',
      200: '#FFCC80',
      300: '#FFB74D',
      400: '#FFA726',
      500: '#B7410E', // Este reemplaza el color principal turquesa
      600: '#A53A0F',
      700: '#932810',
      800: '#7F1E10',
      900: '#6B1A0F',
    },
    // Colores de acento
    accent: {
      50: '#FFFDE7',
      100: '#FFF9C4',
      200: '#FFF59D',
      300: '#FFF176',
      400: '#FFEE58',
      500: '#D68910', // Este reemplaza los acentos turquesa
      600: '#C67C0E',
      700: '#B5700C',
      800: '#A46309',
      900: '#855000',
    },
    // Define tus colores otoñales específicos
    autumn: {
      leaf: '#D2691E',
      gold: '#CD950C',
      brown: '#8B4513',
      orange: '#E67E22',
      rust: '#B7410E',
      darkOrange: '#A04000',
      amber: '#F39C12',
      burgundy: '#922B21',
      cream: '#FEF5E7',
      lightBrown: '#C19A6B',
    }
  },
  // Mantiene las fuentes existentes
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Open Sans, sans-serif',
  },
  // Componentes con estilos otoñales
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
      variants: {
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'autumn.gold' : 'autumn.rust',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'autumn.orange' : 'autumn.darkOrange',
          },
        }),
      },
    },
    // Personaliza el header para usar colores otoñales
    Box: {
      variants: {
        navbar: {
          bg: 'autumn.rust',
          color: 'white',
        },
      },
    },
  },
  // Estilos globales para toda la aplicación
  styles: {
    global: {
      body: {
        bg: '#FFF8E1', // Fondo crema muy suave
      },
      // Sobreescribe clases específicas
      '.navbar': {
        backgroundColor: '#B7410E !important',
        color: 'white',
      },
      '.footer': {
        backgroundColor: '#8B4513 !important',
        color: 'white',
      },
      // Agrega estilos para los enlaces del header
      '.nav-link': {
        color: 'white !important',
        fontWeight: 'medium',
        _hover: {
          color: '#FFD700 !important',
        },
      },
      '.active-link': {
        color: '#FFD700 !important',
        fontWeight: 'bold',
      },
    }
  }
});

export default autumnTheme;