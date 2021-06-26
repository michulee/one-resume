import React, { useState } from "react";
import styled from "styled-components";
import { AiFillPrinter, AiOutlinePlus } from "react-icons/ai";
import { IoIosSave } from 'react-icons/io';
import { Basic, Education, Resume } from "sections/index";
import { useEffect } from "react";

const Container = styled.div`
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

const ButtonSection = styled.button``;
const ButtonActiveSection = styled.button``;

export default function NavContents(props) {
  const [section, setSection] = useState('basic');
  const handleSectionClick = (e) => {
    setSection("basic");
  };

  const [resume, setResume] = useState('');

  return (
    <>
      <Container>
        <FixedArea>
          <AiFillPrinter />
          <IoIosSave onClick={() => setSection('')}/>
        </FixedArea>
        <VerticalLine />
        <ButtonArea>
          {/* <AiOutlinePlus/> */}
          {/* <ButtonSection onClick={ handleSectionClick }>Basic</ButtonSection> */}
          <ButtonSection onClick={() => setSection("basic")}>
            Basic
          </ButtonSection>
          <ButtonSection onClick={() => setSection("education")}>
            Education
          </ButtonSection>
        </ButtonArea>
      </Container>
      <Section>
        {
            section === 'basic' ? <Basic/> : 
            section === 'education' ? <Education/> :
            null
        } 
      </Section>

      <hr></hr>

      <Section>
        <Resume/>
        {/* {
          resume === '' ? <Resume/> :
          null
        } */}
      </Section>
    </>
  );
}
