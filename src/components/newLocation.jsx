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
    Box,
    Center,
    Input,
    Wrap,
    Text,
    Spacer
    } from '@chakra-ui/react';
import firebaseapp from "../utils/firebase";
import { quiz_categories } from "../config";
import QuizButton from "./button";



const NewVacationSpotForm=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
    <Box className="modal-sticky" >
        <Button onClick={onOpen} bgColor='green.200'>New vacation spot <Box w='20px' fontSize='larger' fontWeight='900'>&#43;</Box></Button>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            {/* <Center > */}
                <ModalHeader >Where have you traveled</ModalHeader>
            {/* </Center> */}
            
                <FormControl>
                    <Input type='text' w='20vw' ml='2vw'/>
                    <Spacer h='2vh'/>
                    <Text fontSize='larger' fontWeight='600' m='1.5vw' >What categories did you experience?</Text>
                    <Wrap ml='2vw' mr='2vw'>

                     {quiz_categories.map((category, index) =>  
                        (
                            category !='within 50 mi' && category !='within 100 mi'
                            ?
                            <Box onClick={()=> console.log(category)}>
                                <QuizButton 
                                    className="quiz-button"
                                    name={category}
                                />
                             </Box>    
                            :
                            <></>

                            ))} 

                        {/* {quiz_categories.map((category, idx) => ( category !='within 50 mi' || category !='within 100 mi' ? 
                            
                            <Box onClick={()=> console.log(category)}>
                                <QuizButton 
                                    className="quiz-button"
                                    name={category}
                                />
                             </Box>    
                        ))} */}
                             
                    </Wrap>
                </FormControl>

            
            
            <ModalCloseButton />
            <ModalBody>
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