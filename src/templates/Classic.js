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
`;

const Paragraph = styled.p`
  margin: 0;
`;

const Margin = styled.div`
  margin: 6rem;
  overflow: hidden;
`;

export default function Classic(props) {
  // const input = props.data.input;
  const input = props.input;
  const data = props.data.values;
  const dummyData = props.data.initialValues;

  const Objective = () => {
    const text = data.objective;
    const newText = text.split('\n').map(str => <Paragraph>{str}</Paragraph>);
    
    return newText;
  };

  return (
    <>
      <Container>
        <Margin>
          <Header>
            <Title>
              <Paragraph>
                {data.firstName} {data.middleName} {data.lastName}
              </Paragraph>
            </Title>
            <Info>
              <InfoItem>{data.personal.personalEmail}</InfoItem>
              <InfoItem>{data.personal.personalPhone}</InfoItem>
              <InfoItem>{data.personal.personalWebsite}</InfoItem>
              <InfoItem>{data.personal.personalLinkedin}</InfoItem>
            </Info>
          </Header>

          <Body>
            <Section>
              {data.objective === "" ? null : <SubHeader>Objective</SubHeader>}
              <Objective/>
            </Section>

            {/* <Section>
              {input.includes('school') ? <SubHeader>Education</SubHeader> : null}
              <Row>
                <Paragraph>{data.school.schoolName}, {data.school.schoolState}, {data.school.schoolCity}</Paragraph>
                <Paragraph>{data.school.schoolYearStart} - {data.school.schoolYearEnd}</Paragraph>
              </Row>
              <Paragraph>{data.school.schoolDegree} {data.school.schoolMajorName}</Paragraph>
            </Section> */}

            {/* TODO school and company sharing same state, need separate states */}
            {input.includes("school") ? (
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

            {input.includes("company") ? (            
              <Section>
                <SubHeader>Work Experience</SubHeader>
              <Row>
                <Paragraph>
                  {data.company.companyName}, {data.company.companyState},{" "}
                  {data.company.companyCity}
                </Paragraph>
                <Paragraph>
                  {data.company.companyYearStart} -{" "}
                  {data.company.companyYearEnd}
                </Paragraph>
              </Row>
                <Paragraph>{data.company.companyJobTitle}</Paragraph>
                <Paragraph>{data.company.companyJobDescription}</Paragraph>
              </Section>
            ) : null}

            <Section>
              {data.skills === "" ? null : <SubHeader>Skills</SubHeader>}
              <Paragraph>{data.skills}</Paragraph>
            </Section>

          </Body>
        </Margin>
      </Container>
    </>
  );
}
