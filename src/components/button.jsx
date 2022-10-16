import { React, useState} from 'react';
import {Button} from '@chakra-ui/react';


const QuizButton=(props) =>{
    const [active, setActive] = useState(false);
    return(
        <Button 
            colorScheme='teal' 
            variant={`${active? "outline":"solid"}`}
            onClick={()=> {setActive(props.active===false? true : false); console.log(active)}}
            onChange={()=> {setActive(props.active===false? true : false); console.log(active)}}
        >{props.name} {props.active}</Button>
    )
}

export default QuizButton