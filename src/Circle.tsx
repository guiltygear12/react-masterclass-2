import { useState } from "react";
import styled from "styled-components";



const Container = styled.div<CircleProps>`
    background-color: ${(prop)=>prop.bgColor};
    border: 1px solid ${(prop)=>prop.borderColor};
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface CircleProps{
    bgColor:string;
    borderColor?:string;
    text?:string
}


function Circle({bgColor, borderColor, text="원"}:CircleProps) {
    const [counter, setCounter] = useState(1);
    const [value, setValue]= useState<number | string>("");

    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? "white"}>
            {text}
        </Container>
    );
  }
  
  export default Circle;