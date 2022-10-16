import './App.css';
import { ChakraProvider, Box, Center,  VStack, Text, ButtonGroup, Button } from '@chakra-ui/react';
import { card_data, quiz_categories, category_hex } from './config';
import Quiz from './components/quiz';
import VacationTable from './components/table';
import NewVacationSpotForm from './components/newLocation';
import {React, useState} from 'react';

function App() {


  const buttons = ['yo','anotha', 'one', 'one more'];
  const [isActive, setIsActive] = useState({
    'yo':false,
    'anotha':false,
    'one':false,
    'one more':false
  })

  function handleFilterButtonClick(item){
      console.log(item)
      setIsActive(prevState=>({
        ...prevState,
        [item] : !isActive[item]
      }))
    console.log(isActive[item])
  }

  return (

    <ChakraProvider>
      <Box mt='100px' mb='100px'>
            <VStack>
            <Text className='title-1' fontSize='5vh'>Where do you want to travel?</Text>
            <Quiz
              attributes = {quiz_categories}
              card_data = {card_data}
            />
          </VStack>
        <NewVacationSpotForm/>
      </Box >
    </ChakraProvider>
  );
}

export default App;
