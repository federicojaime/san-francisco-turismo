import React from 'react';
import { Box, VStack, Heading, Text, HStack, Icon } from '@chakra-ui/react';
import { WiDaySunny, WiThermometer } from 'react-icons/wi';

const WeatherWidget = () => {
    // Acá deberías integrar una API de clima real
    const weather = {
        temperature: 25,
        condition: 'Soleado',
        icon: WiDaySunny,
    };

    return (
        <Box
            bg="white"
            borderRadius="xl"
            p={6}
            boxShadow="xl"
            textAlign="center"
        >
            <VStack spacing={4}>
                <Heading size="lg" color="teal.600">Clima actual</Heading>
                <HStack spacing={4} justify="center">
                    <Icon as={weather.icon} boxSize={16} color="orange.400" />
                    <VStack align="start" spacing={0}>
                        <HStack>
                            <Icon as={WiThermometer} boxSize={8} color="red.500" />
                            <Text fontSize="4xl" fontWeight="bold">{weather.temperature}°C</Text>
                        </HStack>
                        <Text fontSize="xl">{weather.condition}</Text>
                    </VStack>
                </HStack>
            </VStack>
        </Box>
    );
};

export default WeatherWidget;