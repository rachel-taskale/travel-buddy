import './App.css';
import { ChakraProvider, Box, Center,  VStack, Text } from '@chakra-ui/react';
import { card_data, quiz_categories, category_hex } from './config';
import Quiz from './components/quiz';
import VacationTable from './components/table';


function App() {
  return (

    <ChakraProvider>
      <Box mt='100px' mb='100px'>
        <Center>
            <VStack>
            <Text className='title-1' fontSize='5vh'>Where do you want to travel?</Text>
            <Quiz
              attributes = {quiz_categories}
            />
            <VacationTable
              card_data= {card_data}
              hex_colors = {category_hex}
            />
          </VStack>
        </Center>
      </Box >
    </ChakraProvider>
  );
}

export default App;
