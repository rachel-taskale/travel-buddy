import { Box, Text, Checkbox, CheckboxGroup, FormControl, Wrap, Button, Spacer, Input, Center, HStack } from "@chakra-ui/react";
import React from 'react';


const Quiz = React.forwardRef(
    ({attributes}) => {  
    const [checkedBoxes, setCheckedBoxes] = React.useState([false, false])
    return (
        <Box pb='100px' pt='50px' maxW='60vw'>
            
            <FormControl> 
                <Wrap>
                {attributes.map((item, index) => 
                    
                    (               
                        <Box >
                            <Button className='title-2' boxShadow='md' mb='20px'>
                                {item}
                            </Button>
                        </Box>
                        ))}
                </Wrap>
                
                <Center>
                
                </Center>
                <HStack mb='20px'>
                <Text mt='20px' fontWeight='bold'>Where are you located?</Text>
                <Input variant='outline' placeholder='location' border='1px solid black'  w='25vw'></Input>
                <Spacer />
                <Button boxShadow='md'>Submit</Button>
                </HStack >
            </FormControl>
        </Box>
    );

})

export default Quiz;