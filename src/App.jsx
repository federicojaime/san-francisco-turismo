import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import autumnTheme from './AutumnTheme.jsx';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Attractions from './pages/Attractions';
import Accommodations from './pages/Accommodations';
import Information from './pages/Information';
import CommunicationWidget from './components/SocialWidget';
import ScrollToTop from './components/config/ScrollToTop.jsx';
import Gastronomy from './pages/Gastronomy.jsx';
import Events from './pages/Events.jsx';
import FallingLeaves from './components/FallingLeaves.jsx';

// Importar estilos adicionales
import './autumnStyles.css';

const MotionBox = motion(Box);

function App() {
  return (
    <ChakraProvider theme={autumnTheme}>
      <Router>
        <ScrollToTop />
        <Box minH="100vh" display="flex" flexDirection="column">
          <FallingLeaves count={10} />
          <Header />
          <AnimatePresence mode="wait">
            <MotionBox
              flex="1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/atractivos" element={<Attractions />} />
                <Route path="/alojamientos" element={<Accommodations />} />
                <Route path="/eventos" element={<Events />} />
                <Route path="/gastronomia" element={<Gastronomy />} />
                <Route path="/informacion" element={<Information />} />
              </Routes>
            </MotionBox>
          </AnimatePresence>
          <CommunicationWidget />
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;