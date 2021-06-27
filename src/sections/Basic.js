import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  TextInput,
  SectionHeader,
  ButtonRound,
  TextArea,
} from "components/index";
import { PreClassic, Classic } from "templates/index";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

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

const Label = styled.label`
  color: #0071bc;
  text-transform: uppercase;
  letter-spacing: 1px;
  // font-variant: small-caps;
`;

const Input = styled.input`
  border: 1px solid #e1e1e1;
  padding: 10px 15px;
  border-radius: 5px;

  :focus {
    outline: none;
    border-color: #0071bc;
    box-shadow: 0 0 3px #0071bc;
  }
`;

const Section = styled.div`
  //nav is 70px height
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 0 20px 35px 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Basic(props) {
  const [text, setText] = useState("");
  const [template, setTemplate] = useState("");

  const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    email: "",
  };

  const [state, setState] = useState({
    order: "",
    paid: false,
    submitting: false,
    loading: false,
    data: initialValues,
  });

  const handleTextChange = (e) => {
    e.preventDefault();

    console.log(e.target);
    setText(e.target.value);
  };

  return (
    <>
      <Section>
        <SectionHeader name="Basic Information" />

        {/* <Form onSubmit={handleSubmit}> */}
        <Form>
          <Container>
            <Label htmlFor="">Test</Label>
            <Input
              id=""
              type="text"
              value={text}
              placeholder="test"
              onChange={handleTextChange}
            />
          </Container>
          <Container>
            <Label htmlFor="">Test2</Label>
            <Input
              id=""
              type="text"
              value={text}
              placeholder="test"
              onChange={handleTextChange}
            />
          </Container>
          <TextInput name="First Name" placeholder="John" />
          <TextInput name="Middle Name" placeholder="C" />
          <TextInput name="Last Name" placeholder="Doe" />
          {/* <TextInput name="Phone Number" placeholder="(626) 123 - 4567" /> */}

          {/* <TextInput name="Email" placeholder="johndoe@email.com" /> */}
          {/* <TextArea
          name="Objective"
          placeholder="Hello World! My name is John C Doe and I am a developer."
        /> */}
          {/* <TextInput name="Skills" placeholder="HTML, CSS, JavaScript" /> */}
          {/* <TextInput name="Website" placeholder="www.linkedin.com/in/johndoe" /> */}
          {/* <TextInput name="LinkedIn" placeholder="www.github.com/johndoe" /> */}
          {/* <TextInput name="GitHub" placeholder="www.somewebsite.com" /> */}
          {/* <ButtonRound name="Save" type="submit" /> */}
        </Form>
      </Section>

      <hr></hr>

      {/* <Section>
        {
          template === '' ? <PreClassic/> :
          template === 'filled' ? <Classic text={text}/> :
          null
        }
      </Section> */}
    </>
  );
}
