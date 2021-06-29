import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  text-align: center;
`;

const VerticalLine = styled.div`
  border: 1px solid #e1e1e1;
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
  flex-wrap: wrap;
  gap: 10px;
`;

const InfoItem = styled.div``;

const Body = styled.div``;

const SubHeader = styled.h2`
  border-bottom: 1px solid black;
  margin-bottom: 0;
`;

const Section = styled.section``;

const Paragraph = styled.p`
  margin: 0;
`;

export default function PreClassic(props) {
  return (
    <>
      <Container>
        <Header>
          <Title>
            <Paragraph>First</Paragraph>
            <Paragraph>Middle</Paragraph>
            <Paragraph>Last</Paragraph>
          </Title>
          <Info>
            <InfoItem>johndoe@gmail.com</InfoItem>
            <VerticalLine/>
            <InfoItem>(123) 4567 - 7890</InfoItem>
            <VerticalLine/>
            <InfoItem>www.johndoe.github.io</InfoItem>
            <VerticalLine/>
            <InfoItem>www.website.com</InfoItem>
            <VerticalLine/>
            <InfoItem>www.linkedin.com/in/johndoe</InfoItem>
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
            <Paragraph>SchoolName, State, City</Paragraph>
            <Paragraph>BS Computer Science, YearStart - YearEnd</Paragraph>
          </Section>
          <Section>
            <SubHeader>Work Experience</SubHeader>
            <Paragraph>CompanyName, State, City</Paragraph>
            <Paragraph>JobTitle, YearStart - YearEnd</Paragraph>
            {/* <TextArea>Job Description</TextArea> */}
            <Paragraph>Job Description</Paragraph>
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
