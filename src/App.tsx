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
import { useRef, useState } from 'react'
import Webcam from 'react-webcam'

function App() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const webcamRef = useRef<Webcam | null>(null)
    const [capturedImage, setCapturedImage] = useState<string | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const capture = () => {
        const imageSrc = webcamRef.current?.getScreenshot()
        setCapturedImage(imageSrc ?? null)
        setIsSubmitting(true)

        // Envío de la imagen capturada mediante POST
        fetch('URL_DE_TU_ENDPOINT', {
            method: 'POST',
            body: JSON.stringify({ image: imageSrc }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                // Manejar la respuesta si es necesario
                setIsSubmitting(false)
                setIsSubmitted(true)
            })
            .catch((error) => {
                console.error('Error al enviar la imagen:', error)
                setIsSubmitting(false)
            })
    }

    const resetSubmission = () => {
        setIsSubmitted(false)
        setCapturedImage(null)
    }

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
                        {capturedImage ? (
                            <img src={capturedImage} alt='Captured' />
                        ) : (
                            <Webcam ref={webcamRef} screenshotFormat='image/jpeg' audio={false} />
                        )}
                    </ModalBody>

                    <ModalFooter>
                        {!isSubmitted && (
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                        )}
                        {!isSubmitted ? (
                            <Button
                                colorScheme='red'
                                onClick={capture}
                                isLoading={isSubmitting}
                                loadingText='Submitting'
                                disabled={isSubmitting}>
                                Enviar FOTO
                            </Button>
                        ) : (
                            <Button colorScheme='green' onClick={resetSubmission}>
                                Ok
                            </Button>
                        )}
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {isSubmitted && (
                <Modal isOpen={isSubmitted} onClose={resetSubmission}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>¡Foto enviada correctamente!</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text>Tu foto se ha enviado correctamente.</Text>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme='green' onClick={resetSubmission}>
                                Ok
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            )}
        </Container>
    )
}

export default App
