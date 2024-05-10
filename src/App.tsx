import {
    Button,
    Container,
    Heading,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useDisclosure
} from '@chakra-ui/react'
import Webcam from 'react-webcam'

function App() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Container maxW='container.sm' centerContent>
            <Stack h={'100vh'} justifyContent={'center'} alignItems={'center'}>
                <Heading color={'blue.400'} fontSize={'5xl'}>
                    Vite + ReactTS
                </Heading>
                <Text fontSize={'5xl'}>DFL-Cam</Text>
                <Button onClick={onOpen}>Lanzar WebCam</Button>
            </Stack>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader sx={{ textDecoration: 'underline' }}>Aquí va el título del Modal</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text pb={'2'}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quod eius totam ducimus
                            qui modi. Sit, voluptatibus perferendis.
                        </Text>
                        <Webcam />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button colorScheme='red'>Enviar DATA</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Container>
    )
}

export default App
