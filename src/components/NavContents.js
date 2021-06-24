import React, { useState } from "react";
import styled from "styled-components";
import { AiFillPrinter, AiOutlinePlus } from "react-icons/ai";
import { SectionBasic } from "sections/index";

const Container = styled.div`
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
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 0 20px 35px 20px;
`

const ButtonSection = styled.button``;
const ButtonActiveSection = styled.button``;

export default function NavContents(props) {
  const [section, setSection] = useState('');
  const handleSectionClick = (props) => {
    setSection('basic')
  };

  return (
    <>
      <Container>
        <FixedArea>
          <AiFillPrinter />
        </FixedArea>
        <VerticalLine />
        <ButtonArea>
          {/* <AiOutlinePlus/> */}
          <ButtonSection onClick={ handleSectionClick }>B</ButtonSection>
          {/* <ButtonSection>B</ButtonSection> */}
          {/* <ButtonSection>E</ButtonSection> */}
        </ButtonArea>
      </Container>
      <Section>
        {/* <SectionBasic /> */}
        {section === 'basic' ? <SectionBasic/> : ''}
      </Section>
    </>
  );
}
