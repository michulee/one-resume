import React, { useState } from "react";
import styled from "styled-components";
import { AiFillPrinter, AiOutlinePlus } from "react-icons/ai";
import { IoIosSave } from 'react-icons/io';
import { Basic, Education } from "sections/index";
import { PreClassic, Classic } from 'templates/index';
import {
  TextInput,
  SectionHeader,
  ButtonRound,
  TextArea,
} from "components/index";
import { useEffect } from "react";

const Nav = styled.div`
  position: fixed;
  top: 0;
  background-color: #fff;

  border-bottom: 1px solid #e1e1e1;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 70px;
  gap: 32px;
`;

const FixedArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 36px;
`;

const VerticalLine = styled.div`
  border-left: 2px solid #e1e1e1;
  height: 50%;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 36px;
`;

const Section = styled.div`
  //nav is 70px height
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 0 20px 35px 20px;
`;

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

const ButtonSection = styled.button``;
const ButtonActiveSection = styled.button``;

export default function NavContents(props) {
  const [section, setSection] = useState('basic');
  const [template, setTemplate] = useState('');

  const [text, setText] = useState("");

  const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
  };
  const [state, setState] = useState({
    // order: "",
    // paid: false,
    // submitting: false,
    // loading: false,
    data: initialValues,
  });

  // const handleCallback = (childData) => {
  //   // alert(childData);
  //   console.log(childData);
  // }

  const handleTextChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
    setState({[e.target.name]: e.target.value})
  };

  const handleForm = (e) => {
    setTemplate('classic');
  }

  return (
    <>
      <Nav>
        <FixedArea>
          <AiFillPrinter />
        </FixedArea>
        <VerticalLine />
        <ButtonArea>
          <ButtonSection onClick={() => setTemplate("classic")}>
            Classic
          </ButtonSection>
        </ButtonArea>
      </Nav>

      
      {/* <Section>
        {
            section === 'basic' ? <Basic parentCallback={ handleCallback }/> : 
            section === 'education' ? <Education/> :
            null
        } 
      </Section> */}
      
      <Section>
        <SectionHeader name="Basic Information" />

        <Form onChange={handleForm}>
        {/* <Form> */}
          <input name="firstName" onChange={handleTextChange}></input>

          {/* <TextInput name="First Name" placeholder="John"/> */}
          <TextInput name="Middle Name" placeholder="C" />
          <TextInput name="Last Name" placeholder="Doe" />
        </Form>
      </Section>

      <hr></hr>

      <Section>
        {
            template === '' ? <PreClassic/> : 
            template === 'classic' ? <Classic data={state}/> : 
            null
        } 
      </Section>
    </>
  );
}