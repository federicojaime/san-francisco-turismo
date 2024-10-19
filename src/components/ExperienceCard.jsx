
// src/components/ExperienceCard.jsx
import React from 'react';
import { Box, Heading, Text, Image, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const ExperienceCard = ({ title, image, description, index }) => (
    <MotionBox
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
    >
        <VStack
            spacing={4}
            align="center"
            bg="white"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
            h="100%"
        >
            <Image
                src={image}
                alt={title}
                h={64}
                w="full"
                objectFit="cover"
                transition="transform 0.3s ease-in-out"
                _hover={{ transform: 'scale(1.1)' }}
            />
            <VStack p={6} spacing={3} align="center" flex={1}>
                <Heading as="h3" size="lg" color="teal.600" textAlign="center">
                    {title}
                </Heading>
                <Text color="gray.600" fontSize="md" textAlign="center">
                    {description}
                </Text>
            </VStack>
        </VStack>
    </MotionBox>
);

export default ExperienceCard;