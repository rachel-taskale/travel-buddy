import React from 'react';
import {
    Text,
    Box,
    Image,
    Wrap,
    Center,
    WrapItem,
    VStack,
    FormControl,
    FormLabel,
  } from '@chakra-ui/react';
  import {category_hex} from '../config';

  


function VacationTable (props) {

    return (
        <Box>
            <Center>
            <Wrap spacing='1vw'>
            {props.card_data.map((item, index) => 
                (
                    <Box  boxShadow='base' maxWidth='19vw' minWidth='15vw' mb='100px'>
                        <VStack>
                        <Image h='20vh' src='https://media.architecturaldigest.com/photos/5da74823d599ec0008227ea8/16:9/w_2560%2Cc_limit/GettyImages-946087016.jpg' w='100%'/>
                        <Text className='title-2' fontWeight='bold'>
                            {item.location}
                        </Text>
                        <Wrap position='left'>
                            {item.categories.map((category, index) => 
                                ( 
                                    <Box 
                                        bgColor={category_hex[category]} 
                                        w='fit-content' 
                                        pl={2} 
                                        pr={2} 
                                        borderRadius={5}>
                                        {category}
                                    </Box>
                            ))}
                        </Wrap>
                        <Text className='title-2'>
                            {item.description}
                        </Text>
                        </VStack>
                    </Box>

                    ))}

            </Wrap>
            </Center>
        </Box>
        
    );
}

export default VacationTable;