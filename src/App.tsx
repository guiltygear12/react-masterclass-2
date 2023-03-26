import { Console } from "console";
import React, { useState } from "react";
import styled from "styled-components";
import Circle from "./Circle";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid black;
  background-color: ${(props)=>props.theme.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(props)=>props.theme.textColor};
`;
const Btn = styled.button`
  background-color: ${(prop)=>prop.theme.btnColor};
  color: ${(props)=>props.theme.textColor};
`;
interface PlayerShape{
  name: string;
  age: string;
}
const sayHello = (playerObj : PlayerShape) => `Hello! ${playerObj.name} you are ${playerObj.age} years old.`;

sayHello({name:"123", age:"123"});



function App() {
  const [value, setValue]= useState<number | string>("");
  const onChange =(event:React.FormEvent<HTMLInputElement>)=>{
    const {currentTarget:{value}} = event;
    setValue(value);
    console.log(value);
  };
  const onSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    console.log("hello",value);
  }
  return (
    <Wrapper className="App">
      <Circle bgColor="teal" borderColor="crimson"/>
      <Title> {sayHello({name:"Park", age:"123"})} </Title>
      <Circle bgColor="tomato" text="공"/>
      <form onSubmit={onSubmit}>
        <input 
          value={value} 
          onChange={onChange}
          type="text" 
          placeholder="name" 
          />
        <Btn>Log in</Btn>
      </form>
    </Wrapper>
  );
}

export default App;
