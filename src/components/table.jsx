import React from 'react';
import {
    Text,
    Box,
    Image,
    Wrap,
    Center,
    WrapItem
  } from '@chakra-ui/react';
  import {category_hex} from '../config';

  


const VacationTable = React.forwardRef(({card_data}) => {

    return (
        <Center>
        <Box maxW='90vw'>
            <Wrap spacing='30px'>
            {card_data.map((item, index) => 
                (
                    <Box  boxShadow='base' maxWidth='20vw' mb='100px'>
                        <Image h='20vh' src='https://media.architecturaldigest.com/photos/5da74823d599ec0008227ea8/16:9/w_2560%2Cc_limit/GettyImages-946087016.jpg' w='100%'/>
                        <Text className='title-2' fontWeight='bold'>
                            {item.location}
                        </Text>
                        <Wrap>
                            {item.categories.map((category, index) => 
                                ( 
                                    <WrapItem bgColor={category_hex[category]} w='fit-content' pl={2} pr={2} borderRadius={5}>
                                        {category}
                                        </WrapItem>
                            ))}
                        </Wrap>
                        <Text className='title-2'>
                            {item.description}
                        </Text>
                    </Box>

                    ))}
            </Wrap>
        </Box>
        </Center>
    );
})

export default VacationTable;