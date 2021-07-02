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
`;

const Paragraph = styled.p`
  margin: 0;
`;

const Margin = styled.div`
  margin: 6rem;
  overflow: hidden;
`;

export default function Classic(props) {
  const input = props.data.input;
  const data = props.data.values;
  const dummyData = props.data.initialValues;

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
              <Paragraph>{props.data.objective}</Paragraph>
            </Section>
            <Section>
              {console.log(input)}
              {input.includes('school') ? <SubHeader>Education</SubHeader> : null}
              <Paragraph>{data.school.schoolName}</Paragraph>
            </Section>

          </Body>
        </Margin>
      </Container>
    </>
  );
}
