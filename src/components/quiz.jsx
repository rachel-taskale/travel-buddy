import { Box, Text, FormControl, Wrap, Button, Spacer, Input, Center, HStack, VStack, Flex } from "@chakra-ui/react";
import {React, useState} from 'react';
import VacationTable from "./table";
import QuizButton from "./button";
import { card_data, quiz_categories } from "../config";


const Quiz = (props) =>{

    const[data, setData] = useState(props.card_data);
    const[reset, setReset] = useState(false)
    const [active, setActive] = useState('false');
    let filters = [];
    
    // Adds category chosen to filter list
    function handleFilterButtonClick(item){
        console.log(item)
        if (filters === quiz_categories){
            filters = []
        }

        if (filters.includes(item) === false){
            filters.push(item);
            console.log(filters)
        }else{
            filters = filters.filter((x)=>x!==item)
            console.log(filters)
        }
    }

    // Will reset filters to all
    function resetFilters(){
        filters = quiz_categories;
        setData(props.card_data);
        // setReset(true)
    }


    // Handles the submit call and update data based on filter categories chosen
    function handleSubmit(){
        console.log(filters)
        let temp  = []
        for (let i in filters){
            for (let j in props.card_data){
                console.log(filters[i])
                if (props.card_data[j].categories.includes(filters[i]) && temp.includes(props.card_data[j])===false){
                    
                    temp.push(props.card_data[j])
                }
            }
        }
        console.log(temp)
        setData(temp);
        console.log(data)
    }
    
    return (
        <Box pb='100px' pt='50px' maxW='60vw'>
            <FormControl> 
                <VStack border='1px solid black'>
                    <Wrap>
                        {props.attributes.map((item, index) => 
                            (     
                                <Box 
                                onClick={() => handleFilterButtonClick(item)}
                                >
                                    <QuizButton
                                        className="quiz-button"
                                        name = {item}
                                        
                                        
                                    />
                                </Box>    
                            ))}
                            
                            {filters.map((name, indx) =>{
                            <Text>{name}</Text>
                        })}
                    </Wrap>
                    <Button
                        placement="left"
                        bgColor='red.200' 
                        mb='20px'
                        onClick={()=>resetFilters()}
                    >Reset</Button>
                </VStack>
                <HStack mb='20px'>
                    <Text mt='20px' fontWeight='bold'>Where are you located?</Text>
                    <Input variant='outline' placeholder='location' border='1px solid black'  w='25vw'></Input>
                    <Spacer />
                    <Button type='submit' onClick={()=>handleSubmit()} boxShadow='md'>Submit</Button>
                </HStack >
                
            </FormControl>
            <VacationTable
                card_data={data} >
                </VacationTable>
        </Box>
    );

}

export default Quiz;