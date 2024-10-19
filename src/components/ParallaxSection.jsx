// src/components/ParallaxSection.jsx

import React from 'react';
import { Box } from '@chakra-ui/react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

const ParallaxSection = ({ bgImage, children, overlayColor = 'rgba(0,0,0,0.4)' }) => (
  <ParallaxBanner style={{ height: '100vh' }}>
    <ParallaxBannerLayer image={bgImage} speed={-20} />
    <ParallaxBannerLayer speed={-5}>
      <Box
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg={overlayColor}
        px={4}
      >
        {children}
      </Box>
    </ParallaxBannerLayer>
  </ParallaxBanner>
);

export default ParallaxSection;
