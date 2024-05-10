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

function App() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Container maxW='container.sm' centerContent>
            <Stack h={'100vh'} justifyContent={'center'} alignItems={'center'}>
                <Heading color={'blue.400'} fontSize={'5xl'}>
                    Vite + React
                </Heading>
                <Text fontSize={'5xl'}>DFL-Cam</Text>
                <Button onClick={onOpen}>Lanzar WebCam</Button>
            </Stack>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quod eius totam ducimus
                            qui modi. Sit, voluptatibus perferendis. Facilis distinctio quam iure deserunt recusandae
                            soluta, numquam laboriosam doloremque reiciendis officia. Laudantium vitae sapiente ratione
                            iure mollitia labore voluptates, dolorum ipsam deserunt unde maxime. Similique mollitia
                            deserunt possimus.
                        </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Container>
    )
}

export default App
