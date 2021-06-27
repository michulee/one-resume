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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 35px;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert('submitted');
    alert(props.test);
    props.parentCallback(e.target);
  }
  return (
    <>
      <SectionHeader name="Basic Information"/>
      
      <Form onSubmit={ handleSubmit }>
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
        <ButtonRound name="Save" type='submit'/>
      </Form>
    </>
  );
}
