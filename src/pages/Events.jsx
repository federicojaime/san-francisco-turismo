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
  Image,
  Text,
  VStack,
  HStack,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputLeftElement,
  Input,
  Badge,
  Divider,
  Flex,
  Select,
  IconButton,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import {
  CalendarIcon,
  SearchIcon,
  TimeIcon,
  StarIcon,
  InfoIcon,
  PhoneIcon,
  EmailIcon,
} from "@chakra-ui/icons";
import { FaMapMarkerAlt, FaFilter, FaShare } from "react-icons/fa";

// Importar el componente de título elegante (asumiendo que existe)
import ElegantSectionTitle from "../components/ElegantSectionTitle";
import festivalImage from "../assets/images/feriaArtesano.jpg";

// Lista de eventos de ejemplo (expandida)
const eventsList = [
  {
    id: 1,
    name: "Festival Gastronómico Internacional",
    image: festivalImage,
    description: "Descubre los sabores del mundo en el festival gastronómico más importante del año. Chefs internacionales, degustaciones, shows de cocina en vivo y mucho más.",
    date: new Date(2025, 1, 10),
    location: "Plaza Gastronómica Central",
    hours: "12:00 - 23:00",
    category: "Gastronomía",
    price: "Entrada Libre",
    contactPhone: "+34 555 123 456",
    contactEmail: "festival@ejemplo.com",
    capacity: 5000,
    highlights: ["Cocina internacional", "Shows en vivo", "Área infantil"],
    coordinates: { lat: 40.416775, lng: -3.703790 }
  },
  {
    id: 2,
    name: "Feria de Artesanía Tradicional",
    image: festivalImage,
    description: "Exposición y venta de artesanías locales y regionales. Demonstraciones en vivo de técnicas tradicionales y talleres participativos.",
    date: new Date(2025, 1, 17),
    location: "Centro Cultural Histórico",
    hours: "10:00 - 20:00",
    category: "Cultura",
    price: "5€",
    contactPhone: "+34 555 789 012",
    contactEmail: "artesania@ejemplo.com",
    capacity: 1000,
    highlights: ["Talleres gratuitos", "Venta directa", "Demostraciones"],
    coordinates: { lat: 40.417890, lng: -3.704560 }
  },
  {
    id: 3,
    name: "Festival de Música y Danza",
    image: festivalImage,
    description: "Gran festival que reúne lo mejor de la música y danza tradicional y contemporánea. Actuaciones en vivo, talleres y actividades participativas.",
    date: new Date(2025, 2, 5),
    location: "Auditorio Municipal",
    hours: "16:00 - 00:00",
    category: "Música",
    price: "15€",
    contactPhone: "+34 555 345 678",
    contactEmail: "musica@ejemplo.com",
    capacity: 3000,
    highlights: ["Artistas internacionales", "Zona gastronómica", "Área de descanso"],
    coordinates: { lat: 40.418920, lng: -3.705670 }
  }
];

const categories = ["Todos", "Gastronomía", "Cultura", "Música", "Deporte", "Arte", "Naturaleza"];

const Events = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [filteredEvents, setFilteredEvents] = useState(eventsList);
  const toast = useToast();

  // Función para filtrar eventos
  useEffect(() => {
    let filtered = eventsList;

    // Filtrar por término de búsqueda
    if (searchTerm) {
      filtered = filtered.filter(event =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtrar por categoría
    if (selectedCategory !== "Todos") {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }

    // Filtrar por fecha
    if (selectedDate) {
      filtered = filtered.filter(event =>
        format(event.date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
      );
    }

    setFilteredEvents(filtered);
  }, [searchTerm, selectedCategory, selectedDate]);

  // Función para compartir evento
  const handleShare = (event) => {
    if (navigator.share) {
      navigator.share({
        title: event.name,
        text: event.description,
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
      // Fallback para navegadores que no soportan Web Share API
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Enlace copiado al portapapeles",
        status: "info",
        duration: 3000,
      });
    }
  };

  return (
    <Box bg="gray.50" minHeight="100vh" py={12}>
      <Container maxW="container.xl">
        <ElegantSectionTitle
          title="🎉 EVENTOS TURÍSTICOS"
          subtitle="Descubre las mejores experiencias en nuestra ciudad"
          primaryColor="teal.600"
          accentColor="orange.400"
        />

        {/* Barra de búsqueda y filtros */}
        <VStack spacing={6} mb={10}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} width="100%">
            {/* Buscador por nombre */}
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="teal.500" />
              </InputLeftElement>
              <Input
                placeholder="Buscar eventos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                bg="white"
              />
            </InputGroup>

            {/* Selector de categoría */}
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              bg="white"
              icon={<FaFilter />}
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
              customInput={
                <Input
                  bg="white"
                  cursor="pointer"
                />
              }
            />
          </SimpleGrid>
        </VStack>

        {/* Lista de eventos */}
        {filteredEvents.length > 0 ? (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {filteredEvents.map((event) => (
              <Box
                key={event.id}
                bg="white"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="xl"
                transition="all 0.3s"
                _hover={{ transform: "translateY(-5px)", boxShadow: "2xl" }}
              >
                <Image
                  src={event.image}
                  alt={event.name}
                  height="220px"
                  width="100%"
                  objectFit="cover"
                  fallbackSrc="https://via.placeholder.com/400x220"
                />
                <Box p={6}>
                  <HStack justifyContent="space-between" mb={2}>
                    <Badge colorScheme="teal" fontSize="0.8em" px={2} py={1}>
                      {event.category}
                    </Badge>
                    <Badge colorScheme="orange" fontSize="0.8em" px={2} py={1}>
                      {event.price}
                    </Badge>
                  </HStack>
                  
                  <Heading size="md" mb={2} color="teal.700">
                    {event.name}
                  </Heading>

                  <HStack spacing={4} mb={3}>
                    <HStack spacing={1}>
                      <CalendarIcon color="gray.500" />
                      <Text fontSize="sm" color="gray.500">
                        {format(event.date, "dd/MM/yyyy", { locale: es })}
                      </Text>
                    </HStack>
                    <HStack spacing={1}>
                      <TimeIcon color="gray.500" />
                      <Text fontSize="sm" color="gray.500">
                        {event.hours}
                      </Text>
                    </HStack>
                  </HStack>

                  <Text noOfLines={2} mb={4} color="gray.600">
                    {event.description}
                  </Text>

                  <Divider mb={4} />

                  <HStack justifyContent="space-between">
                    <Button
                      colorScheme="teal"
                      size="sm"
                      leftIcon={<InfoIcon />}
                      onClick={() => {
                        setSelectedEvent(event);
                        onOpen();
                      }}
                      flex="1"
                    >
                      Más información
                    </Button>
                    <IconButton
                      icon={<FaShare />}
                      colorScheme="gray"
                      variant="ghost"
                      onClick={() => handleShare(event)}
                      aria-label="Compartir evento"
                    />
                  </HStack>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        ) : (
          <Box textAlign="center" py={10}>
            <Text fontSize="xl" color="gray.500">
              No se encontraron eventos con los filtros seleccionados
            </Text>
          </Box>
        )}

        {/* Modal de detalle del evento */}
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="teal.600" fontSize="2xl">
              {selectedEvent?.name}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image
                src={selectedEvent?.image}
                alt={selectedEvent?.name}
                mb={6}
                borderRadius="md"
                width="100%"
                height="300px"
                objectFit="cover"
                fallbackSrc="https://via.placeholder.com/800x300"
              />

              <VStack align="stretch" spacing={4}>
                <Text fontSize="lg">{selectedEvent?.description}</Text>

                <SimpleGrid columns={2} spacing={4}>
                  <VStack align="start">
                    <HStack>
                      <FaMapMarkerAlt color="teal" />
                      <Text fontWeight="bold">Ubicación:</Text>
                    </HStack>
                    <Text>{selectedEvent?.location}</Text>
                  </VStack>

                  <VStack align="start">
                    <HStack>
                      <TimeIcon color="teal" />
                      <Text fontWeight="bold">Horario:</Text>
                    </HStack>
                    <Text>{selectedEvent?.hours}</Text>
                  </VStack>

                  <VStack align="start">
                    <HStack>
                      <PhoneIcon color="teal" />
                      <Text fontWeight="bold">Teléfono:</Text>
                    </HStack>
                    <Text>{selectedEvent?.contactPhone}</Text>
                  </VStack>

                  <VStack align="start">
                    <HStack>
                      <EmailIcon color="teal" />
                      <Text fontWeight="bold">Email:</Text>
                    </HStack>
                    <Text>{selectedEvent?.contactEmail}</Text>
                  </VStack>
                </SimpleGrid>

                <Box>
                  <Text fontWeight="bold" mb={2}>
                    Destacados:
                  </Text>
                  <SimpleGrid columns={2} spacing={2}>
                    {selectedEvent?.highlights.map((highlight, index) => (
                      <HStack key={index}>
                        <StarIcon color="orange.400" />
                        <Text>{highlight}</Text>
                      </HStack>
                    ))}
                  </SimpleGrid>
                </Box>
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="teal"
                mr={3}
                onClick={() => handleShare(selectedEvent)}
                leftIcon={<FaShare />}
              >
                Compartir
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cerrar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
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
          border: 1px solid #E2E8F0;
          border-radius: 0.375rem;
          font-size: 1rem;
          color: #1A202C;
          background-color: white;
        }
        .react-datepicker__input-container input:focus {
          outline: none;
          border-color: #319795;
          box-shadow: 0 0 0 1px #319795;
        }
        .react-datepicker__day--selected {
          background-color: #319795;
          color: white;
        }
        .react-datepicker__day--selected:hover {
          background-color: #2C7A7B;
        }
        .react-datepicker__day:hover {
          background-color: #E6FFFA;
        }
        .react-datepicker__header {
          background-color: #F7FAFC;
          border-bottom: 1px solid #E2E8F0;
        }
        .react-datepicker__current-month {
          color: #2D3748;
          font-weight: 600;
        }
        .react-datepicker__day-name {
          color: #4A5568;
        }
      `}</style>
    </Box>
  );
};

export default Events;