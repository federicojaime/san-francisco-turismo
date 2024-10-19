// src/components/AttractionAccordion.jsx

import React, { useState } from 'react';
import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import AttractionCard from './AttractionCard';

const AttractionAccordion = ({ attractions }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile] = useMediaQuery("(max-width: 48em)");

  return (
    <Flex
      direction={isMobile ? "column" : "row"}
      align="stretch"
      height={isMobile ? "auto" : { base: '300px', md: '500px' }}
      overflow={isMobile ? "visible" : "hidden"}
      width="100%"
    >
      {attractions.map((attraction, index) => {
        const isActive = activeIndex === index;

        return (
          <AttractionCard
            key={index}
            title={attraction.title}
            image={attraction.image}
            description={attraction.description}
            isActive={isMobile ? true : isActive}
            onMouseEnter={() => !isMobile && setActiveIndex(index)}
            onMouseLeave={() => !isMobile && setActiveIndex(null)}
            index={index}
            isMobile={isMobile}
          />
        );
      })}
    </Flex>
  );
};

export default AttractionAccordion;