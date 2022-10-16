import { Box, Text, FormControl, Wrap, Button, Spacer, Input, Center, HStack, VStack, Flex } from "@chakra-ui/react";
import * as ReactDOM from 'react-dom';
import {React, useEffect, useState} from 'react';
import VacationTable from "./table";
// import QuizButton from "./button";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { card_data, quiz_categories } from "../config";


const Quiz = (props) =>{

    const[data, setData] = useState(props.card_data);
    const [quizButtonState, setQuizButtonState] = useState({
        'cheap flights':false,
        'city':false,
        'beach':false,
        'mountains':false,
        'within 50 mi':false,
        'within 100 mi':false,
        'vineyard':false,
        'africa':false,
        'asia':false,
        'europe':false,
        'north america':false
    })



    let filters = [];
    
    function handleFilterButtonClick(item){
        console.log(item)
        setQuizButtonState(prevState=>({
          ...prevState,
          [item] : !quizButtonState[item]
        }))

        if (quizButtonState[item]){
            filters.push(item)
        }else{
            filters.filter(x => filters[x]!==item)
        }

      console.log(filters)
    }

    // Will reset filters to all
    function resetFilters(){
        filters = [];
        setData(props.card_data);
        setQuizButtonState({ 
        'cheap flights':false,
        'city':false,
        'beach':false,
        'mountains':false,
        'within 50 mi':false,
        'within 100 mi':false,
        'vineyard':false,
        'africa':false,
        'asia':false,
        'europe':false,
        'north america':false});

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
                <HStack>
                    <Wrap
                        value={filters}
                    >
                        {props.attributes.map((item, index) => 
                            (     
                                <Button 
                                    value={item} 
                                    colorScheme='teal'
                                    variant={quizButtonState[item]===true? 'solid':'outline'}
                                    onClick={()=>handleFilterButtonClick(item)}>
                                            {item}
                                </Button>     
                            ))}
                    </Wrap>
                    <Spacer/>
                    <Button 
                        mt='-100px'
                        bgColor='red.200' 
                        onClick={()=>resetFilters()}
                    >Reset</Button>
                </HStack>
                
                <HStack mb='20px' mt='20px'>
                    <Text fontWeight='bold'>Where are you located?</Text>
                    <Input variant='outline' placeholder='location'  w='25vw'></Input>
                    <Spacer />
                    <Button type='submit' onClick={()=>handleSubmit()} boxShadow='md'>Submit</Button>
                </HStack >
            </FormControl>
            <HStack className='chosen-filters'>
                {filters.map((item, idx)=>{
                    <Button>{item}</Button>
                })}
            </HStack>
            <VacationTable
                card_data={data} >
            </VacationTable>
        </Box>
    );

}

export default Quiz;