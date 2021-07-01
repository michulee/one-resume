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


export default function Classic(props) {
  const [state, setState] = useState({
    toggleOn: true,
  })
  const toggleSection = (e) => {

  }
  const data = props.data.values;
  const dummyData = props.data.initialValues;
  return (
    <>
      <Container>
        <Margin>
          <Header>
            <Title>
              <Paragraph>{data.firstName} {data.middleName} {data.lastName}</Paragraph>
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
              { data.school.schoolName === undefined ? null : <SubHeader>Education</SubHeader> }
              {console.log(data.school.schoolName)}
              <Paragraph>{data.school.schoolName}</Paragraph>
              {/* {console.log("data: " + data.school.schoolName)} */}
              {/* <Paragraph>{data.school.schoolName === undefined ? null : null}</Paragraph> */}
              {/* <Paragraph>{data.school.schoolName === undefined ? null : data.school.schoolName}</Paragraph> */}

              {/* <Paragraph>{data.school.schoolName}, {props.data.schoolState}, {props.data.schoolCity}</Paragraph> */}
              {/* <Paragraph>{props.data.schoolName}, {props.data.schoolState}, {props.data.schoolCity}</Paragraph> */}
            </Section>
            <Section>
              { props.data.skills === undefined ? null : <SubHeader>Skills</SubHeader> }
              <Paragraph>{props.data.skills}</Paragraph>
            </Section>
          </Body>

        </Margin>
      </Container>
    </>
  );
}
