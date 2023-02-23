import React, { useState } from "react";
import { Link, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { AiFillPrinter, AiOutlinePlus } from "react-icons/ai";

const Layout = styled.div`
  // display: flex;
  // display: grid;
  // grid-template-columns: repeat(2, 1fr);
  @media print {
    overflow: hidden;
    background-color: pink;
    scroll: hidden;
  }
`

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

  //BUG different margins preprint and in print preview
  @media print {
    // margin: 0 6rem;
    // overflow: hidden;
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

const Contact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const Body = styled.div``;

const SubHeader = styled.h2`
  border-bottom: 1px solid black;
  margin-bottom: 0;
`;

const Section = styled.section`
`;
const Row = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Paragraph = styled.p`
  margin: 0;
`;

const Nav = styled.div`
  // position: fixed;
  top: 0;
  background-color: #fff;
  // background-color: blue;

  border-bottom: 1px solid #e1e1e1;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 50px;
  gap: 32px;

  .active {
    // background-color: #0071BC;
    background-color: #0087e2;
    // color: #E1E1E1;
    color: white;
    border-color: #0087e2;
  }
`;

const TemplateNav = styled(Nav)`
  padding: 5px 15px;
`

const StyledLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: #0087e2;
  padding: 5px 10px;
  border: 1px solid #0087e2;
  border-radius: 5px;

  :hover {
    opacity: 0.6;
    transition: 0.3s
  }
`

export default function Classic(props) {
  // const input = props.data.input;
  const input = props.input;
  const togglePreview = props.isChecked;
  const data = props.data.values;
  const dummyValues = props.data.dummyValues;

  const [school, setSchool] = useState("");
  const [company, setCompany] = useState("");
  let { path, url } = useRouteMatch();

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
                {togglePreview === true ? (dummyValues.school.schoolName) : (data.school.schoolName, data.school.schoolState,
                data.school.schoolCity)}

                {/* {data.school.schoolName}, {data.school.schoolState},{" "}
                {data.school.schoolCity} */}
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
      <TemplateNav className="template-nav">
        <StyledLink to={`${url}/preview`}>Preview</StyledLink>
        <AiFillPrinter className="btn" onClick={() => window.print()}/>
      </TemplateNav>

      <Layout>
        {/* <Container id="container-template"> */}
        {/* <Container> */}
        <Container>
          <Margin>
            <Header>
              <Title>
                {data.firstName} {data.middleName} {data.lastName}

                {/* exclusive - use one or the other to test with dummy data or actual data */}
                {/* {dummyValues.firstName} {dummyValues.middleName} {dummyValues.lastName} */}
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
      </Layout>
    </>
  );
}
