import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  InputGroup,
  InputLeftElement,
  Input,
  Badge,
  Divider,
  Select,
  useToast,
  Card,
  CardBody,
} from "@chakra-ui/react";
import {
  SearchIcon,
  PhoneIcon,
} from "@chakra-ui/icons";
import { FaMapMarkerAlt, FaFilter, FaSnowflake, FaCalendarAlt } from "react-icons/fa";
import { motion } from 'framer-motion';

// Importar datos de eventos de invierno
import { getUpcomingEvents, guideServices, museumSchedules } from '../data/winterEventsData';
import ElegantSectionTitle from "../components/ElegantSectionTitle";

const MotionBox = motion(Box);

const categories = ["Todos", "Deportes", "Cultura", "Música", "Turismo", "Feria", "Patrio", "Entretenimiento", "Teatro", "Cultural", "Promoción"];

// Definir colores del tema winter
const winterTheme = {
  deep: "#0277BD",
  sky: "#03A9F4",
  pine: "#2E7D32",
  frost: "#B3E5FC",
  crystal: "#E1F5FE"
};

const EventDayCard = ({ eventDay }) => {
  return (
    <Card bg="white" shadow="xl" borderRadius="lg" overflow="hidden" borderTop="4px solid" borderTopColor={winterTheme.sky}>
      <CardBody p={6}>
        <VStack align="stretch" spacing={4}>
          <HStack justify="space-between" align="center">
            <HStack>
              <FaCalendarAlt color={winterTheme.deep} size={20} />
              <Heading size="lg" color={winterTheme.deep}>
                {eventDay.day}
              </Heading>
            </HStack>
            <Badge colorScheme="blue" fontSize="md" p={2}>
              {eventDay.events.length} evento{eventDay.events.length > 1 ? 's' : ''}
            </Badge>
          </HStack>

          <VStack align="stretch" spacing={3}>
            {eventDay.events.map((event, index) => (
              <Box key={index} p={4} bg="gray.50" borderRadius="md" borderLeft="3px solid" borderLeftColor={winterTheme.sky}>
                <VStack align="stretch" spacing={2}>
                  <HStack justify="space-between" wrap="wrap">
                    <HStack>
                      <Text fontSize="lg">{event.icon}</Text>
                      <Text fontWeight="bold" color={winterTheme.deep}>
                        {event.time}
                      </Text>
                      <Badge colorScheme="teal" variant="subtle">
                        {event.category}
                      </Badge>
                    </HStack>
                    {event.price && (
                      <Badge colorScheme="orange" fontSize="sm">
                        {event.price}
                      </Badge>
                    )}
                  </HStack>

                  <Heading size="md" color="gray.800">
                    {event.title}
                  </Heading>

                  <Text color="gray.600" fontSize="sm">
                    {event.description}
                  </Text>

                  {event.location && (
                    <HStack>
                      <FaMapMarkerAlt color={winterTheme.deep} size={14} />
                      <Text fontSize="sm" color={winterTheme.deep} fontWeight="bold">
                        {event.location}
                      </Text>
                    </HStack>
                  )}

                  <Text fontSize="xs" color="gray.500" fontStyle="italic">
                    Organiza: {event.organizer}
                  </Text>
                </VStack>
              </Box>
            ))}
          </VStack>
        </VStack>
      </CardBody>
    </Card>
  );
};

const GuideServicesCard = () => (
  <Card bg="white" shadow="xl" borderRadius="lg" overflow="hidden" borderTop="4px solid" borderTopColor={winterTheme.pine}>
    <CardBody p={6}>
      <VStack align="stretch" spacing={4}>
        <HStack>
          <FaMapMarkerAlt color={winterTheme.pine} size={20} />
          <Heading size="lg" color={winterTheme.pine}>
            EXCURSIONES CON BAQUEANOS AUTORIZADOS
          </Heading>
        </HStack>

        <VStack align="stretch" spacing={4}>
          {guideServices.map((service, index) => (
            <Box key={index} p={4} bg="green.50" borderRadius="md" borderLeft="3px solid" borderLeftColor={winterTheme.pine}>
              <VStack align="stretch" spacing={2}>
                <HStack justify="space-between">
                  <Heading size="sm" color={winterTheme.pine}>
                    {service.name} {service.person && `- ${service.person}`}
                  </Heading>
                  {service.legajo && (
                    <Badge colorScheme="green" variant="subtle">
                      Legajo {service.legajo}
                    </Badge>
                  )}
                </HStack>
                <Text fontSize="sm" color="gray.600">
                  {service.description}
                </Text>
                {service.contact && (
                  <HStack>
                    <PhoneIcon color={winterTheme.pine} />
                    <Text fontSize="sm" color={winterTheme.pine} fontWeight="bold">
                      {service.contact}
                    </Text>
                  </HStack>
                )}
                {service.email && (
                  <Text fontSize="sm" color="gray.600">
                    📧 {service.email}
                  </Text>
                )}
                {service.instagram && (
                  <Text fontSize="sm" color="gray.600">
                    📸 {service.instagram}
                  </Text>
                )}
              </VStack>
            </Box>
          ))}
        </VStack>
      </VStack>
    </CardBody>
  </Card>
);

const MuseumSchedulesCard = () => (
  <Card bg="white" shadow="xl" borderRadius="lg" overflow="hidden" borderTop="4px solid" borderTopColor={winterTheme.deep}>
    <CardBody p={6}>
      <VStack align="stretch" spacing={4}>
        <HStack>
          <FaSnowflake color={winterTheme.deep} size={20} />
          <Heading size="lg" color={winterTheme.deep}>
            VISITAS GUIADAS PERMANENTES EN MUSEOS LOCALES
          </Heading>
        </HStack>

        <VStack align="stretch" spacing={4}>
          <Box p={4} bg="blue.50" borderRadius="md">
            <Heading size="sm" color={winterTheme.deep} mb={2}>
              {museumSchedules.solarHistorico.name}
            </Heading>
            <Text fontSize="sm" color="gray.600">
              {museumSchedules.solarHistorico.schedule}
            </Text>
          </Box>

          <Box p={4} bg="blue.50" borderRadius="md">
            <Heading size="sm" color={winterTheme.deep} mb={2}>
              {museumSchedules.rosendaQuiroga.name}
            </Heading>
            <Text fontSize="sm" color="gray.600" mb={1}>
              {museumSchedules.rosendaQuiroga.weekdays}
            </Text>
            <Text fontSize="sm" color="gray.600">
              {museumSchedules.rosendaQuiroga.weekends}
            </Text>
          </Box>

          <Box p={4} bg="blue.50" borderRadius="md">
            <Heading size="sm" color={winterTheme.deep} mb={2}>
              {museumSchedules.henryViegas.name}
            </Heading>
            <Text fontSize="sm" color="gray.600">
              {museumSchedules.henryViegas.schedule}
            </Text>
          </Box>

          <Divider />

          <Box>
            <Heading size="sm" color={winterTheme.deep} mb={2}>
              INFORMACIÓN TURÍSTICA
            </Heading>
            <VStack align="stretch" spacing={1}>
              <Text fontSize="sm" color="gray.600">
                {museumSchedules.touristInfo.terminal}
              </Text>
              <Text fontSize="sm" color="gray.600">
                {museumSchedules.touristInfo.plaza}
              </Text>
              <HStack>
                <PhoneIcon color={winterTheme.deep} />
                <Text fontSize="sm" color={winterTheme.deep} fontWeight="bold">
                  {museumSchedules.touristInfo.contact}
                </Text>
              </HStack>
              {museumSchedules.touristInfo.website && (
                <Text fontSize="sm" color="gray.600">
                  🌐 {museumSchedules.touristInfo.website}
                </Text>
              )}
            </VStack>
          </Box>
        </VStack>
      </VStack>
    </CardBody>
  </Card>
);

const Events = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const toast = useToast();

  // Obtener eventos desde hoy en adelante
  const upcomingEvents = getUpcomingEvents();

  // Función para filtrar eventos
  useEffect(() => {
    let filtered = upcomingEvents;

    // Filtrar por término de búsqueda
    if (searchTerm) {
      filtered = filtered.filter(eventDay =>
        eventDay.events.some(event =>
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Filtrar por categoría
    if (selectedCategory !== "Todos") {
      filtered = filtered.filter(eventDay =>
        eventDay.events.some(event => event.category === selectedCategory)
      );
    }

    // Filtrar por fecha
    if (selectedDate) {
      filtered = filtered.filter(eventDay => {
        const eventDate = new Date(eventDay.date);
        const selectedDateFormatted = new Date(selectedDate);
        return eventDate.toDateString() === selectedDateFormatted.toDateString();
      });
    }

    setFilteredEvents(filtered);
  }, [searchTerm, selectedCategory, selectedDate, upcomingEvents]);

  // Función para compartir evento
  const handleShare = (eventDay) => {
    if (navigator.share) {
      navigator.share({
        title: `Agenda de Invierno - ${eventDay.day}`,
        text: `Eventos del ${eventDay.day} en San Francisco del Monte de Oro`,
        url: window.location.href,
      })
      .then(() => {
        toast({
          title: "¡Compartido con éxito!",
          status: "success",
          duration: 3000,
        });
      })
      .catch(() => {
        toast({
          title: "Error al compartir",
          status: "error",
          duration: 3000,
        });
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Enlace copiado al portapapeles",
        status: "info",
        duration: 3000,
      });
    }
  };

  // Calcular el período de eventos disponibles
  const getEventPeriod = () => {
    if (upcomingEvents.length === 0) return "No hay eventos próximos";
    
    const firstEvent = upcomingEvents[0];
    const lastEvent = upcomingEvents[upcomingEvents.length - 1];
    
    const formatDate = (date) => {
      return format(new Date(date), "d 'de' MMMM", { locale: es });
    };
    
    if (upcomingEvents.length === 1) {
      return formatDate(firstEvent.date);
    }
    
    return `${formatDate(firstEvent.date)} al ${formatDate(lastEvent.date)}, 2025`;
  };

  return (
    <Box bg="gray.50" minHeight="100vh" py={12}>
      <Container maxW="container.xl">
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ElegantSectionTitle
            title="❄️ AGENDA DE INVIERNO 2025"
            subtitle="Más de 40 actividades para disfrutar estas vacaciones de invierno"
            primaryColor={winterTheme.deep}
            accentColor={winterTheme.sky}
          />
        </MotionBox>

        {/* Barra de búsqueda y filtros */}
        <VStack spacing={6} mb={10}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} width="100%">
            {/* Buscador por nombre */}
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color={winterTheme.sky} />
              </InputLeftElement>
              <Input
                placeholder="Buscar eventos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                bg="white"
                borderColor={winterTheme.frost}
                _focus={{ borderColor: winterTheme.sky, boxShadow: `0 0 0 1px ${winterTheme.sky}` }}
              />
            </InputGroup>

            {/* Selector de categoría */}
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              bg="white"
              borderColor={winterTheme.frost}
              _focus={{ borderColor: winterTheme.sky }}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Select>

            {/* Selector de fecha */}
            <DatePicker
              selected={selectedDate}
              onChange={setSelectedDate}
              dateFormat="dd/MM/yyyy"
              placeholderText="Seleccionar fecha"
              locale={es}
              minDate={new Date()} // Solo fechas desde hoy
              customInput={
                <Input
                  bg="white"
                  cursor="pointer"
                  borderColor={winterTheme.frost}
                  _focus={{ borderColor: winterTheme.sky }}
                />
              }
            />
          </SimpleGrid>

          {/* Información destacada */}
          <Box
            bg={winterTheme.crystal}
            p={6}
            borderRadius="lg"
            borderLeft="4px solid"
            borderLeftColor={winterTheme.sky}
            width="100%"
          >
            <HStack justify="space-between" align="center" wrap="wrap">
              <VStack align="start" spacing={1}>
                <Text fontSize="lg" fontWeight="bold" color={winterTheme.deep}>
                  Período: {getEventPeriod()}
                </Text>
                <Text color="gray.600">
                  ¡Vacaciones de invierno llenas de actividades para toda la familia!
                </Text>
              </VStack>
              <Badge colorScheme="blue" fontSize="lg" p={2}>
                {upcomingEvents.length} Días con Actividades
              </Badge>
            </HStack>
          </Box>
        </VStack>

        {/* Grid principal con eventos y información adicional */}
        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8}>
          {/* Columna principal - Eventos */}
          <Box gridColumn={{ base: "span 1", lg: "span 2" }}>
            <VStack spacing={6} align="stretch">
              <Heading size="lg" color={winterTheme.deep} mb={4}>
                📅 Programa de Actividades
              </Heading>
              
              {filteredEvents.length > 0 ? (
                filteredEvents.map((eventDay) => (
                  <EventDayCard key={eventDay.id} eventDay={eventDay} />
                ))
              ) : (
                <Box textAlign="center" py={10}>
                  <Text fontSize="xl" color="gray.500">
                    {upcomingEvents.length === 0 
                      ? "No hay eventos próximos programados" 
                      : "No se encontraron eventos con los filtros seleccionados"
                    }
                  </Text>
                  {selectedDate || searchTerm || selectedCategory !== "Todos" ? (
                    <Text fontSize="md" color="gray.400" mt={2}>
                      Intenta cambiar los filtros o la fecha seleccionada
                    </Text>
                  ) : null}
                </Box>
              )}
            </VStack>
          </Box>

          {/* Columna lateral - Información adicional */}
          <VStack spacing={6} align="stretch">
            <GuideServicesCard />
            <MuseumSchedulesCard />
          </VStack>
        </SimpleGrid>
      </Container>

      {/* Estilos personalizados para el DatePicker */}
      <style jsx global>{`
        .react-datepicker-wrapper {
          width: 100%;
        }
        .react-datepicker {
          font-family: "Arial", sans-serif;
          border-radius: 10px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }
        .react-datepicker__input-container input {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #B3E5FC;
          border-radius: 0.375rem;
          font-size: 1rem;
          color: #1A202C;
          background-color: white;
        }
        .react-datepicker__input-container input:focus {
          outline: none;
          border-color: #03A9F4;
          box-shadow: 0 0 0 1px #03A9F4;
        }
        .react-datepicker__day--selected {
          background-color: #03A9F4;
          color: white;
        }
        .react-datepicker__day--selected:hover {
          background-color: #0277BD;
        }
        .react-datepicker__day:hover {
          background-color: #E1F5FE;
        }
        .react-datepicker__header {
          background-color: #E3F2FD;
          border-bottom: 1px solid #B3E5FC;
        }
        .react-datepicker__current-month {
          color: #0277BD;
          font-weight: 600;
        }
        .react-datepicker__day-name {
          color: #0277BD;
        }
        .react-datepicker__day--disabled {
          color: #ccc;
          cursor: not-allowed;
        }
      `}</style>
    </Box>
  );
};

export default Events;