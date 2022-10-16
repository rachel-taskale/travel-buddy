import {React, useState} from "react";
import { useForm } from 'react-hook-form';
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
    Spacer,
    Textarea
    } from '@chakra-ui/react';
import firebaseapp from "../utils/firebase";
import { quiz_categories } from "../config";
import QuizButton from "./button";



const NewVacationSpotForm = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [activeButtons, setActiveButtons] = useState({
        'cheap flights':false,
        'city':false,
        'beach':false,
        'mountains':false,
        'vineyard':false,
        'africa':false,
        'asia':false,
        'europe':false,
        'north america': false
});
    const [categories, setCategories] = useState([]);
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
      } = useForm();



    function onSubmit(values) {
        return new Promise((resolve) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            resolve()
          }, 3000)
        })
      }


    function handleCategoryFormClick(item){
        setActiveButtons(prevState =>({
            ...prevState,
            [item]:true
        }))
        console.log(activeButtons);
        setCategories(prevState => [... prevState, item])
        
        console.log(categories)
    }



    return(
    <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="modal-sticky" >
            <Button onClick={onOpen} bgColor='green.200'>New vacation spot <Box w='2vw' fontSize='larger' fontWeight='900'>&#43;</Box></Button>
            <Modal isOpen={isOpen} onClose={onClose} w='fit-content'>
            <ModalOverlay w='fit-content' />
            <ModalContent w='fit-content'>
                    <ModalHeader fontWeight='bold' fontSize='2vw' mt='2vh' >New Vacation Spot Form</ModalHeader >
                    <Text fontSize='larger' fontWeight='600' m='1.5vw' mt='1.5vh'>Where did you travel?</Text>
                        <FormControl>
                            <Input type='text' w='20vw' ml='2vw'/>
                            <Spacer h='2vh'/>
                            <Text fontSize='larger' fontWeight='600' m='1.5vw' >What did you experience on the trip?</Text>
                            <Wrap ml='2vw' mr='2vw'>

                            {quiz_categories.map((category, index) =>  
                                (
                                    category !='within 50 mi' && category !='within 100 mi' ?
                                    <Box onClick={()=> handleCategoryFormClick(category)}>
                                        <QuizButton 
                                            className="quiz-button"
                                            name={category}
                                        />
                                    </Box>
                                    :<></>

                                ))}
                                    
                            </Wrap>
                            <Spacer h='2vh'/>
                            <Text fontSize='larger' fontWeight='600' m='1.5vw' >What was your favorite part?</Text>
                            <Textarea type='text' w='20vw' h='10vh' ml='2vw'/>   
                        </FormControl>
                    
                <ModalCloseButton />
                <ModalBody>
                </ModalBody>
                <ModalFooter>
                <Button variant='ghost' mr={3} onClick={onClose}>
                    Close
                </Button>
                <Button colorScheme='blue' isLoading={isSubmitting} type='submit'>Submit</Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </Box>
    </form>
    
    );

}

export default NewVacationSpotForm;