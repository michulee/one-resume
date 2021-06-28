import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InfoItem = styled.div``;

const Body = styled.div``;

const SubHeader = styled.h2`
  border-bottom: 1px solid black;
`;

const Section = styled.section``;

const Paragraph = styled.p`
`;


export default function Classic(props) {
  const [state, setState] = useState({
    toggleOn: true,
  })
  const toggleSection = (e) => {

  }
  return (
    <>
      <Container>
        <Header>
          <Title>
            <Paragraph>{props.data.firstName}</Paragraph>
            <Paragraph>{props.data.middleName}</Paragraph>
            <Paragraph>{props.data.lastName}</Paragraph>
          </Title>
          <Info>
            <InfoItem id="Email"></InfoItem>
            <InfoItem id="PhoneNumber"></InfoItem>
            <InfoItem id="GitHub"></InfoItem>
          </Info>
        </Header>
        <Body>
          {/* <Section>
            <SubHeader>Objective</SubHeader>
            <Paragraph id="Objective"></Paragraph>
          </Section>
          <Section>
            <SubHeader>Education</SubHeader>
            <Paragraph id="Education"></Paragraph>
          </Section> */}
          <Section>
            {
              props.data.work === undefined ? null : <SubHeader>Work Experience</SubHeader>
            }
            <Paragraph>{props.data.work}</Paragraph>
          </Section>
          <Section>
            {
              props.data.skills === undefined ? null : <SubHeader>Skills</SubHeader>
            }
            <Paragraph>{props.data.skills}</Paragraph>
          </Section>
        </Body>
      </Container>
    </>
  );
}
