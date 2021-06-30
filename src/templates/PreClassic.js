import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 51rem;
  height: 66rem;
  background-color: white;
  font-size: 1em;
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
const Row = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Paragraph = styled.p`
  margin: 0;
`;

const Margin = styled.div`
  margin: 6rem;
  overflow: hidden;
`

export default function PreClassic(props) {
  return (
    <>
      <Container>
        <Margin>
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
              <InfoItem>www.website.com</InfoItem>
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
              <Row>
                <Paragraph>SchoolName, State, City</Paragraph>
                <Paragraph>YearStart - YearEnd</Paragraph>
              </Row>
              <Paragraph>BS Computer Science</Paragraph>
            </Section>
            <Section>
              <SubHeader>Work Experience</SubHeader>
              <Row>
                <Paragraph>CompanyName, State, City</Paragraph>
                <Paragraph>YearStart - YearEnd</Paragraph>
              </Row>
              <Paragraph>JobTitle</Paragraph>
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
        </Margin>
      </Container>
    </>
  );
}
