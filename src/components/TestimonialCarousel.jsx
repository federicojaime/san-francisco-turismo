import React from 'react';
import { Box, Text, VStack, Avatar, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Asegúrate de usar 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';

const MotionBox = motion(Box);

const TestimonialCard = ({ name, location, text }) => (
    <MotionBox
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow="lg"
        p={8}
        borderRadius="xl"
        textAlign="center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <VStack spacing={4}>
            <Avatar size="xl" name={name} src={`https://i.pravatar.cc/300?u=${name}`} />
            <Text fontWeight="bold" fontSize="xl">{name}</Text>
            <Text color="gray.500">{location}</Text>
            <Text fontSize="md" fontStyle="italic">"{text}"</Text>
        </VStack>
    </MotionBox>
);

const TestimonialCarousel = () => {
    const testimonials = [
        { name: 'Laura', location: 'Buenos Aires', text: 'Una experiencia inolvidable. Las sierras son impresionantes y la gente muy amable.' },
        { name: 'Martín', location: 'Córdoba', text: 'Me encantó la tranquilidad del lugar y la comida regional. ¡Volveré seguro!' },
        { name: 'Sofía', location: 'Mendoza', text: 'Los paisajes son de otro mundo. Ideal para desconectar y disfrutar de la naturaleza.' },
    ];

    return (
        <Swiper
            modules={[Pagination, Autoplay]} // Usa los módulos de 'swiper/modules'
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
        >
            {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                    <TestimonialCard {...testimonial} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TestimonialCarousel;
