import {React, useState} from 'react';
import {Button} from '@chakra-ui/react';


function QuizButton(props){
    const [active, setActive] = useState('false');
    return(
        <Button 
            colorScheme='teal' 
            variant={`${active? "outline":"solid"}`}
            onClick={()=> {setActive(active==false? true : false); console.log(active)}}
        >
                {props.name}
        </Button>
    )
}

export default QuizButton