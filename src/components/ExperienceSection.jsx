// src/components/ExperienceSection.jsx
import React from 'react';
import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import ElegantSectionTitle from './ElegantSectionTitle';

const MotionBox = motion(Box);

const ExperienceSection = ({ experiences }) => {
    return (
        <Box py={20} bg="gray.50">
            <Container maxW="container.xl">
                <ElegantSectionTitle
                    title="VIVÍ LAS MEJORES EXPERIENCIAS"
                    subtitle="Descubrí los mejores atractivos de nuestro hogar"
                    primaryColor="teal.600"
                    accentColor="orange.400"
                />
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                    {experiences.map((experience, index) => (
                        <MotionBox
                            key={experience.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ExperienceCard {...experience} index={index} />
                        </MotionBox>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default ExperienceSection;