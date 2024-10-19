import React from 'react';
import { Box, VStack, Heading, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
import { MdEvent } from 'react-icons/md';

const EventCalendar = () => {
    const events = [
        { date: '15 de Mayo', name: 'Festival de la Empanada' },
        { date: '20 de Junio', name: 'Caminata por las Sierras' },
        { date: '10 de Julio', name: 'Feria de Artesanos' },
    ];

    return (
        <Box
            bg="white"
            borderRadius="xl"
            p={6}
            boxShadow="xl"
        >
            <VStack align="stretch" spacing={4}>
                <Heading size="lg" color="teal.600" textAlign="center">Próximos eventos</Heading>
                <List spacing={3}>
                    {events.map((event, index) => (
                        <ListItem key={index}>
                            <ListIcon as={MdEvent} color="teal.500" />
                            <Text as="span" fontWeight="bold">{event.date}:</Text> {event.name}
                        </ListItem>
                    ))}
                </List>
            </VStack>
        </Box>
    );
};

export default EventCalendar;