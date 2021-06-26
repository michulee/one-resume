import React, {useState} from "react";
import styled from "styled-components";
import {
  TextInput,
  SectionHeader,
  Layout,
  TextArea,
  NavContents,
  Nav,
  ButtonRound,
} from "components/index";

import {Resume} from 'sections/index';

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 0 20px 35px 20px;
`

const Button = styled.button`
  background-color: #0071bc;
  width: 100%;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export default function Basic(props) {
  const [text, setText] = useState('text');
  const handleNameChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  }

  const [resume, setResume] = useState('');

  const handleSaveClick = (e) => {
    e.preventDefault();
    return <Resume/>
  }
  return (
    <>
      <SectionHeader name="Basic Information"/>
      {/* <Form> */}
        {/* <TextInput name="First Name" placeholder="John" value={text} onChange={ handleNameChange }/> */}
        {/* <TextInput name="Middle Name" placeholder="C" value={text}/> */}
        <TextInput name="Last Name" placeholder="Doe" />
        <TextInput name="Phone Number" placeholder="(626) 123 - 4567" />
        <TextInput name="Email" placeholder="johndoe@email.com" />
        <TextArea
          name="Objective"
          placeholder="Hello World! My name is John C Doe and I am a developer."
        />
        <TextInput name="Skills" placeholder="HTML, CSS, JavaScript" />
        <TextInput name="Website" placeholder="www.linkedin.com/in/johndoe" />
        <TextInput name="LinkedIn" placeholder="www.github.com/johndoe" />
        <TextInput name="GitHub" placeholder="www.somewebsite.com" />
      {/* </Form> */}
      {/* <ButtonRound name="Save" onClick={ handleSaveClick }/> */}
      {/* <ButtonRound name="Save" onClick={ handleSaveClick }/> */}
    </>
  );
}
