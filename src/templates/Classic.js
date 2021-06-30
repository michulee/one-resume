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
            <Paragraph>{props.data.firstName} {props.data.middleName} {props.data.lastName}</Paragraph>
            {/* <Paragraph>{props.data.middleName}</Paragraph> */}
            {/* <Paragraph>{props.data.lastName}</Paragraph> */}
          </Title>
          <Info>
            <InfoItem id="Email"></InfoItem>
            <InfoItem id="PhoneNumber"></InfoItem>
            <InfoItem id="Website"></InfoItem>
          </Info>
        </Header>
        <Body>
          <Section>
            { props.data.objective === undefined ? null : <SubHeader>Objective</SubHeader> }
            <Paragraph>{props.data.objective}</Paragraph>
          </Section>
          <Section>
            { props.data.school === undefined ? null : <SubHeader>Education</SubHeader> }
            {/* <Paragraph>{props.data.school}</Paragraph> */}
            <Paragraph>{props.data.schoolName}, {props.data.schoolState}, {props.data.schoolCity}</Paragraph>
            {/* <Paragraph>{props.data.school.schoolDegree} {props.data.school.schoolMajorName}</Paragraph> */}
          </Section>
          {/* <Section>
            { props.data.work === undefined ? null : <SubHeader>Work Experience</SubHeader> }
            <Paragraph>{props.data.work}</Paragraph>
          </Section> */}
          <Section>
            { props.data.skills === undefined ? null : <SubHeader>Skills</SubHeader> }
            <Paragraph>{props.data.skills}</Paragraph>
          </Section>
        </Body>
      </Container>
    </>
  );
}
