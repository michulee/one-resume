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
  return (
    <>
      <Container>
        <Header>
          <Title>
            <Paragraph id="First">{props.data.firstName}</Paragraph>
            <Paragraph id="Middle"></Paragraph>
            <Paragraph id="Last"></Paragraph>
          </Title>
          <Info>
            <InfoItem id="Email"></InfoItem>
            <InfoItem id="PhoneNumber"></InfoItem>
            <InfoItem id="GitHub"></InfoItem>
          </Info>
        </Header>
        <Body>
          <Section>
            <SubHeader>Objective</SubHeader>
            <Paragraph id="Objective"></Paragraph>
          </Section>
          <Section>
            <SubHeader>Education</SubHeader>
            <Paragraph id="Education"></Paragraph>
          </Section>
          <Section>
            <SubHeader>Work Experience</SubHeader>
            <Paragraph id="WorkExperience"></Paragraph>
          </Section>
          <Section>
            <SubHeader>Skills</SubHeader>
            <Paragraph id="Skills"></Paragraph>
          </Section>
        </Body>
      </Container>
    </>
  );
}
