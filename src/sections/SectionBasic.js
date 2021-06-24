import React from "react";
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

export default function SectionBasic(props) {
  return (
    <>
      <SectionHeader name="Basic Information" />
      <TextInput name="First Name" placeholder="John" />
      <TextInput name="Middle Name" placeholder="C" />
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
      <ButtonRound name="Submit" />
    </>
  );
}