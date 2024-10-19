import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Information = () => {
    return (
        <div className="bg-gray-100 min-h-screen pt-20">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center mb-12">Información Turística</h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg shadow-lg p-8 mb-8"
                >
                    <h2 className="text-2xl font-bold mb-4">Oficina de Turismo</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center">
                            <FaMapMarkerAlt className="text-primary mr-2" />
                            <p>Av. Principal 123, San Francisco del Monte de Oro</p>
                        </div>
                        <div className="flex items-center">
                            <FaPhone className="text-primary mr-2" />
                            <p>+54 XXX XXX XXXX</p>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="text-primary mr-2" />
                            <p>info@sanfranciscoturismo.com</p>
                        </div>
                        <div className="flex items-center">
                            <FaClock className="text-primary mr-2" />
                            <p>Lunes a Viernes: 9:00 - 18:00</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-lg shadow-lg p-8 mb-8"
                >
                    <h2 className="text-2xl font-bold mb-4">Cómo llegar</h2>
                    <p className="mb-4">San Francisco del Monte de Oro se encuentra ubicado en la provincia de San Luis, Argentina. Puedes llegar por las siguientes vías:</p>
                    <ul className="list-disc list-inside">
                        <li className="mb-2">En auto: Tomar la Ruta Nacional 146 desde San Luis capital.</li>
                        <li className="mb-2">En bus: Existen servicios regulares desde las principales ciudades de la región.</li>
                        <li>En avión: El aeropuerto más cercano es el Aeropuerto Internacional de San Luis (80 km).</li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-white rounded-lg shadow-lg p-8"
                >
                    <h2 className="text-2xl font-bold mb-4">Clima</h2>
                    <p className="mb-4">San Francisco del Monte de Oro goza de un clima templado con veranos cálidos e inviernos suaves. Las temperaturas promedio son:</p>
                    <ul className="list-disc list-inside">
                        <li className="mb-2">Verano (Diciembre - Febrero): 25°C - 35°C</li>
                        <li className="mb-2">Otoño (Marzo - Mayo): 15°C - 25°C</li>
                        <li className="mb-2">Invierno (Junio - Agosto): 5°C - 15°C</li>
                        <li>Primavera (Septiembre - Noviembre): 15°C - 25°C</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default Information;