import React, { useState } from "react";
import styled from "styled-components";
import { AiFillPrinter, AiOutlinePlus } from "react-icons/ai";
import { PreClassic, Classic } from 'templates/index';
import {
  SectionHeader,
  TextInput,
  // TextInputItem,
} from "components/index";
import { Item } from "./TextInput";

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

  // width 100% makes items even 
  // width: 100%;
  // width: 500px;
`;

const Container = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`

const Form = styled.form`
  display: grid;
  gap: 35px;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
`;

// you can't use numbers e.g. <TextInput100>
const TextInputWide = styled(TextInput)`
  grid-column: 1 / -1;
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

    // data: initialValues,
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
          <AiFillPrinter/>
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
      
      <Container>
        <Section id="container-info" className="scroll">
          <SectionHeader name="Basic Information" />
          <Form onChange={handleForm}>
            <TextInput name="firstName" label="First Name"/>
            {/* <Item>
              <Label htmlFor="firstName">First Name</Label>
              <Input name="firstName" type="text"/>
            </Item> */}
            <TextInput name="middleName" label="Middle Name"/>
            <TextInput name="lastName" label="Last Name"/>

            <TextInputWide name="email" label="Email"/>
            {/* <TextInput100 className="container" name="email" label="Email"/> */}

            <TextInput name="objective" label="Objective"/>
            <TextInput name="github" label="GitHub"/>
            <TextInput name="website" label="Website"/>
            <TextInput name="linkedin" label="LinkedIn"/>
            <TextInput name="work" label="Work Experience"/>
            <TextInput name="skills" label="Skills"/>
            <TextInput name="schoolName"/>
            <TextInput name="schoolState"/>
            <TextInput name="schoolCity"/>
            <TextInput name="schoolMajorName"/>
            <TextInput name="schoolDegree"/>
            <TextInput name="schoolYearStart"/>
            <TextInput name="schoolYearEnd"/>
            <TextInput name="companyJobTitle"/>
            <TextInput name="companyJobDescription"/>
            <TextInput name="companyName"/>
            <TextInput name="companyState"/>
            <TextInput name="companyCity"/>
            <TextInput name="companyYearStart"/>
            <TextInput name="companyYearEnd"/>
          </Form>
        </Section>

        {/* <hr></hr> */}

        <Section id="container-template" className="scroll">
          {console.log()}
          {
              template === '' ? <PreClassic/> :
              template === 'classic' ? <Classic id="print" data={state}/> :
              null
          }
        </Section>
      </Container>
    </>
  );
}
