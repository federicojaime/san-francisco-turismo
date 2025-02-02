import React, { useState } from 'react';
import { Box, Container, VStack, Heading, Input, Textarea, Button, useToast } from '@chakra-ui/react';

const InteractiveMap = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        try {
            const response = await fetch('https://vivisanfrancisco.com/api-sanfrancisco/send_email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            const result = await response.json();
    
            if (result.success) {
                toast({
                    title: "Mensaje enviado",
                    description: result.message,
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                throw new Error(result.message || 'Error al enviar el mensaje');
            }
        } catch (error) {
            toast({
                title: "Error",
                description: error.message || "No se pudo enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <Box py={16} display="flex" justifyContent="center" alignItems="center">
            <Container maxW="container.xl">
                <VStack spacing={8} align="center" bg="white" p={8} borderRadius="2xl" boxShadow="2xl" width="full">
                    <Heading as="h3" size="lg" color="teal.500" textAlign="center">
                        ¡Déjanos ayudarte a planificar el viaje perfecto!
                    </Heading>
                    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                        <VStack spacing={4}>
                            <Input
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Nombre"
                                size="lg"
                                focusBorderColor="teal.400"
                                required
                            />
                            <Input
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                type="email"
                                size="lg"
                                focusBorderColor="teal.400"
                                required
                            />
                            <Input
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Teléfono de Contacto"
                                size="lg"
                                focusBorderColor="teal.400"
                                required
                            />
                            <Textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Contanos cómo podemos ayudarte"
                                rows={4}
                                size="lg"
                                focusBorderColor="teal.400"
                                required
                            />
                            <Button
                                type="submit"
                                colorScheme="teal"
                                size="lg"
                                width="full"
                                bg="teal.500"
                                _hover={{ bg: 'teal.600' }}
                                isLoading={isLoading}
                            >
                                Enviar Mensaje
                            </Button>
                        </VStack>
                    </form>
                </VStack>
            </Container>
        </Box>
    );
};

export default InteractiveMap;