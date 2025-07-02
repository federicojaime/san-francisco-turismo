// src/components/AutumnSectionTitle.jsx
import React from 'react';
import { Box, Heading, Text, VStack, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaLeaf } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionIcon = motion(Icon);

const AutumnSectionTitle = ({
    title,
    subtitle,
    primaryColor = "#B7410E",
    accentColor = "#CD950C"
}) => (
    <VStack
        spacing={4}
        align="center"
        py={12}
        px={4}
        position="relative"
        className="elegant-section-title"
    >
        {/* Decoración de hojas */}
        <MotionIcon
            as={FaLeaf}
            position="absolute"
            top="10px"
            left="10%"
            color={accentColor}
            boxSize={5}
            opacity={0.6}
            initial={{ opacity: 0, rotate: -15 }}
            animate={{ opacity: 0.6, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
        />

        <MotionIcon
            as={FaLeaf}
            position="absolute"
            bottom="10px"
            right="10%"
            color={primaryColor}
            boxSize={6}
            opacity={0.6}
            initial={{ opacity: 0, rotate: 15 }}
            animate={{ opacity: 0.6, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
        />

        <MotionHeading
            as="h2"
            size="2xl"
            color={primaryColor}
            textAlign="center"
            fontWeight="bold"
            textShadow="1px 1px 2px rgba(0,0,0,0.1)"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="autumn-heading"
        >
            {title}
        </MotionHeading>

        <MotionBox
            width="100px"
            height="3px"
            bgGradient={`linear(to-r, ${primaryColor}, ${accentColor})`}
            boxShadow="0 1px 2px rgba(0,0,0,0.1)"
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
        />

        <MotionText
            color="gray.700"
            fontSize="xl"
            textAlign="center"
            maxWidth="700px"
            fontStyle="italic"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            {subtitle}
        </MotionText>
    </VStack>
);

export default AutumnSectionTitle;