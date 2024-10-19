import { motion } from 'framer-motion';

const attractionsList = [
    { name: 'Sierra de San Luis', image: '/path-to-sierra-image.jpg', description: 'Majestuosas montañas con senderos para caminatas y vistas panorámicas.' },
    { name: 'Río San Francisco', image: '/path-to-rio-image.jpg', description: 'Cristalinas aguas ideales para refrescarse y realizar actividades acuáticas.' },
    { name: 'Plaza Principal', image: '/path-to-plaza-image.jpg', description: 'Centro histórico de la ciudad con arquitectura colonial y eventos culturales.' },
    // Añade más atracciones según sea necesario
];

const Attractions = () => {
    return (
        <div className="bg-gray-100 min-h-screen pt-20">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center mb-12">Atractivos de San Francisco del Monte de Oro</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {attractionsList.map((attraction, index) => (
                        <motion.div
                            key={attraction.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            <img src={attraction.image} alt={attraction.name} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2">{attraction.name}</h2>
                                <p className="text-gray-600">{attraction.description}</p>
                                <button className="mt-4 bg-primary text-white font-bold py-2 px-4 rounded hover:bg-secondary transition-colors duration-300">
                                    Más información
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Attractions;