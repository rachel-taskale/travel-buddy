import React from "react";
import {
    FormControl,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Box 
    } from '@chakra-ui/react';
import firebaseapp from "../utils/firebase";



const NewVacationSpotForm=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
    <Box className="modal-sticky" >
        <Button onClick={onOpen} bgColor='green.200'>New vacation spot <Box w='10px' fontWeight='900'>&#43;</Box></Button>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            {/* <Lorem count={2} /> */}
            </ModalBody>
            <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
    </Box>
    
    );

}

export default NewVacationSpotForm;