// src/WinterTheme.jsx
import { extendTheme } from '@chakra-ui/react';

const winterTheme = extendTheme({
  colors: {
    brand: {
      50: '#e6f7ff',
      100: '#b3e8ff',
      200: '#80d9ff',
      300: '#4dc9ff',
      400: '#1abcff',
      500: '#0099cc', // Color primario de invierno
      600: '#007aa3',
      700: '#005c7a',
      800: '#003d52',
      900: '#001f29',
    },
    winter: {
      ice: '#E1F5FE',      // Azul hielo claro
      snow: '#F8F9FA',     // Blanco nieve
      frost: '#B3E5FC',    // Azul escarcha
      sky: '#03A9F4',      // Azul cielo invernal
      deep: '#0277BD',     // Azul profundo
      pine: '#2E7D32',     // Verde pino
      silver: '#90A4AE',   // Plateado
      crystal: '#E3F2FD',  // Cristal
    },
  },
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Open Sans, sans-serif',
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
      variants: {
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'winter.frost' : 'winter.sky',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'winter.sky' : 'winter.deep',
          },
        }),
      },
    },
  },
});

export default winterTheme;