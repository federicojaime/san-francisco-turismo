import { motion } from 'framer-motion';
import { FaStar, FaWifi, FaParking, FaSwimmingPool } from 'react-icons/fa';

const accommodationsList = [
    {
        name: 'Hotel San Francisco',
        image: '/path-to-hotel-image.jpg',
        description: 'Confortable hotel en el centro de la ciudad con vistas a las sierras.',
        stars: 4,
        amenities: ['wifi', 'parking', 'pool']
    },
    {
        name: 'Cabañas del Monte',
        image: '/path-to-cabanas-image.jpg',
        description: 'Acogedoras cabañas rodeadas de naturaleza, ideales para familias.',
        stars: 3,
        amenities: ['wifi', 'parking']
    },
    // Añade más alojamientos según sea necesario
];

const Accommodations = () => {
    const renderStars = (count) => {
        return Array(count).fill().map((_, i) => <FaStar key={i} className="text-yellow-400" />);
    };

    const renderAmenities = (amenities) => {
        const amenityIcons = {
            wifi: FaWifi,
            parking: FaParking,
            pool: FaSwimmingPool
        };

        return amenities.map(amenity => {
            const Icon = amenityIcons[amenity];
            return <Icon key={amenity} className="text-gray-600 mr-2" />;
        });
    };

    return (
        <div className="bg-gray-100 min-h-screen pt-20">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center mb-12">Alojamientos en San Francisco del Monte de Oro</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {accommodationsList.map((accommodation, index) => (
                        <motion.div
                            key={accommodation.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            <img src={accommodation.image} alt={accommodation.name} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2">{accommodation.name}</h2>
                                <div className="flex mb-2">
                                    {renderStars(accommodation.stars)}
                                </div>
                                <p className="text-gray-600 mb-4">{accommodation.description}</p>
                                <div className="flex mb-4">
                                    {renderAmenities(accommodation.amenities)}
                                </div>
                                <button className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-secondary transition-colors duration-300">
                                    Reservar ahora
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Accommodations;