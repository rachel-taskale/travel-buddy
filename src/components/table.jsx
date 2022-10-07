import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Text,
    Box,
    Image,
    Wrap
  } from '@chakra-ui/react';

  


const VacationTable = React.forwardRef(
    ({card_data, hex_colors}) => {
    return (
        <Box >
            <Wrap spacing='30px'>
            {card_data.map((item, index) => 
                
                (               
                    <Box  boxShadow='base' maxWidth='20vw'>
                        <Image h='20vh' w='100%'/>
                        <Text className='title-2' fontWeight='bold'>
                            {item.location}
                        </Text>
                        
                        <Wrap>
                            {item.categories.map((category, index) => 
                    
                                ( 
                                
                                    <Box bgColor={hex_colors[category]} w='fit-content' pl={2} pr={2} borderRadius={5}>
                                        {category}
                                        </Box>
                            ))}
                        </Wrap>
                        <Text className='title-2'>
                            {item.description}
                        </Text>
                    </Box>

                    ))}
            </Wrap>

        </Box>
        
    );

})

export default VacationTable;