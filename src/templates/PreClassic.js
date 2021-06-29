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

export default function PreClassic(props) {
  return (
    <>
      <Container>
        <Header>
          <Title>
            <Paragraph id="First">First</Paragraph>
            <Paragraph id="Middle">Middle</Paragraph>
            <Paragraph id="Last">Last</Paragraph>
          </Title>
          <Info>
            <InfoItem id="Email">johndoe@gmail.com</InfoItem>
            <InfoItem id="PhoneNumber">(123) 4567 - 7890</InfoItem>
            <InfoItem id="GitHub">www.johndoe.github.io</InfoItem>
          </Info>
        </Header>
        <Body>
          <Section>
            <SubHeader>Objective</SubHeader>
            <Paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              quisquam sequi hic commodi voluptatem quidem magnam excepturi
              ullam necessitatibus explicabo nemo quam illo, cumque sapiente id
              laborum dolor culpa. Doloremque.
            </Paragraph>
          </Section>
          <Section>
            <SubHeader>Education</SubHeader>
            <Paragraph>BS Computer Science</Paragraph>
          </Section>
          <Section>
            <SubHeader>Work Experience</SubHeader>
            <Paragraph>Job Title</Paragraph>
          </Section>
          <Section>
            <SubHeader>Skills</SubHeader>
            <Paragraph>HTML, CSS, JavaScript</Paragraph>
          </Section>

          <Section>
            <SubHeader>Skills</SubHeader>
            <Paragraph>HTML, CSS, JavaScript</Paragraph>
            <Paragraph>HTML, CSS, JavaScript</Paragraph>
            <Paragraph>HTML, CSS, JavaScript</Paragraph>
            <Paragraph>HTML, CSS, JavaScript</Paragraph>
            <Paragraph>HTML, CSS, JavaScript</Paragraph>
            <Paragraph>HTML, CSS, JavaScript</Paragraph>
            <Paragraph>HTML, CSS, JavaScript</Paragraph>
            <Paragraph>HTML, CSS, JavaScript</Paragraph>
            <Paragraph>HTML, CSS, JavaScript</Paragraph>
            <Paragraph>HTML, CSS, JavaScript</Paragraph>
            <Paragraph>HTML, CSS, JavaScript</Paragraph>
            <Paragraph>HTML, CSS, JavaScript</Paragraph>
            <Paragraph>HTML, CSS, JavaScript</Paragraph>
          </Section>
        </Body>
      </Container>
    </>
  );
}
