import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 51rem;
  height: 66rem;
  background-color: white;
  font-size: 1em;

  @media (min-width: 764px) {
    // TODO resize for responsive design
  }
`;

const Margin = styled.div`
  margin: 6rem;
  overflow: hidden;
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

const Contact = styled.div`
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
`;

const Paragraph = styled.p`
  margin: 0;
`;



export default function Classic(props) {
  // const input = props.data.input;
  const input = props.input;
  const data = props.data.values;
  const dummyData = props.data.initialValues;

  const [school, setSchool] = useState("");
  const [company, setCompany] = useState("");

  const Objective = () => {
    const text = data.objective;
    const newText = text.split("\n").map((str) => <Paragraph>{str}</Paragraph>);
    return(
      <>
        {data.objective === "" ? null : <SubHeader>Objective</SubHeader>}
        {newText}
      </>
    );
  };

  const Skills = () => {
    const text = data.skills;
    const newText = text.split("\n").map((str) => <Paragraph>{str}</Paragraph>);
    return (
      <>
        {data.skills === "" ? null : <SubHeader>Skills</SubHeader>}
        {newText}
      </>
    );
  }

  const Education = () => {
    if (input.includes("school")) {
      setSchool("toggleOn");
    }
    return (
      <>
        {school === "toggleOn" ? (
          <Section>
            <SubHeader>Education</SubHeader>
            <Row>
              <Paragraph>
                {data.school.schoolName}, {data.school.schoolState},{" "}
                {data.school.schoolCity}
              </Paragraph>
              <Paragraph>
                {data.school.schoolYearStart} - {data.school.schoolYearEnd}
              </Paragraph>
            </Row>
            <Paragraph>
              {data.school.schoolDegree} {data.school.schoolMajorName}
            </Paragraph>
          </Section>
        ) : null}
      </>
    );
  };

  const Company = () => {
    if (input.includes("company")) {
      setCompany("toggleOn");
    }
    return (
      <>
        {company === "toggleOn" ? (
          <Section>
            <SubHeader>Work Experience</SubHeader>
            <Row>
              <Paragraph>
                {data.company.companyName}, {data.company.companyState},{" "}
                {data.company.companyCity}
              </Paragraph>
              <Paragraph>
                {data.company.companyYearStart} - {data.company.companyYearEnd}
              </Paragraph>
            </Row>
            <Paragraph>{data.company.companyJobTitle}</Paragraph>
            <Paragraph>{data.company.companyJobDescription}</Paragraph>
          </Section>
        ) : null}
      </>
    );
  };

  return (
    <>
      <Container>
        <Margin>

          <Header>
            <Title>
              {data.firstName} {data.middleName} {data.lastName}
            </Title>
            <Contact>
              {data.personal.personalEmail} {data.personal.personalPhone}{" "}
              {data.personal.personalWebsite} {data.personal.personalLinkedin}
            </Contact>
          </Header>

          <Body>
            <Objective/>
            <Education />
            <Company />
            <Skills/>
          </Body>

        </Margin>
      </Container>
    </>
  );
}
