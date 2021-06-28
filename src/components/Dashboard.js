import React, { useState } from "react";
import styled from "styled-components";
import { AiFillPrinter, AiOutlinePlus } from "react-icons/ai";
import { PreClassic, Classic } from 'templates/index';
import {
  SectionHeader,
  TextInput,
} from "components/index";

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

const Item = styled.div`
    display: flex;
    flex-direction: column;
`

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
    work: "",
    skills: "",
  };
  const [state, setState] = useState({
    // order: "",
    // paid: false,
    // submitting: false,
    // loading: false,
    data: initialValues,
  });

  const handleForm = (e) => {
    e.preventDefault();
    setTemplate('classic');

    // need to have ...state to keep prev array states, else it will overwrite entire arr with one state
    setState({...state, [e.target.name]: e.target.value})
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
          <TextInput name="firstName" label="First Name"/>
          {/* <Item>
            <Label htmlFor="firstName">First Name</Label>
            <Input name="firstName" type="text"/>
          </Item> */}
          <Item>
            <Label htmlFor="middleName">Middle Name</Label>
            <Input name="middleName" type="text"/>
          </Item>
          <Item>
            <Label htmlFor="lastName">Last Name</Label>
            <Input name="lastName" type="text"/>
          </Item>
          <Item>
            <Label htmlFor="work">Work Experience</Label>
            <Input name="work" type="text"/>
          </Item>
          <Item>
            <Label htmlFor="skills">Skills</Label>
            <Input name="skills" type="text"/>
          </Item>
        </Form>
      </Section>

      <hr></hr>

      <Section>
        {console.log()}
        {
            template === '' ? <PreClassic/> : 
            template === 'classic' ? <Classic data={state}/> : 
            null
        } 
      </Section>
    </>
  );
}
