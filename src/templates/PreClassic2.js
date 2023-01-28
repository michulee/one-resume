import React, { useState } from "react";
import { Link, Redirect, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { AiFillPrinter, AiOutlinePlus } from "react-icons/ai";

const Layout = styled.div`
  // display: grid;
  // grid-template-columns: repeat(2, 1fr);
  font-family: Arial;
`

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
  display: flex;
  justify-content: space-between;
`;

const VerticalLine = styled.div`
  border: 1px solid #e1e1e1;
`;

const Title = styled.h1`
  margin: 0;
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
`;

const ContactItem = styled.div`
`;

const Body = styled.div``;

const SubHeader = styled.h2`
  border-bottom: 1px solid black;
  margin-bottom: 0;
  text-transform: uppercase;
  font-size: 1.2rem;
`;

const Section = styled.section``;
const Row = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Paragraph = styled.p`
  margin: 0;
  padding: 0 20px;
`;

const Margin = styled.div`
  margin: 6rem;
  overflow: hidden;
`

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

export default function PreClassic2(props) {
  let { path, url } = useRouteMatch();
  return (
    <>
      <TemplateNav className="template-nav">
        <StyledLink to={'/one-resume/classic2'}>Live</StyledLink>
        <AiFillPrinter className="btn" onClick={() => window.print()}/>
      </TemplateNav>

      <Layout>
        <Container>
          <Margin>
            <Header>
              <Title> First Middle Last</Title>
              <Contact>
                <ContactItem>johndoe@gmail.com</ContactItem>
                <ContactItem>(123) 456 - 7890</ContactItem>
                <ContactItem>www.website.com</ContactItem>
              </Contact>
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
            </Body>
          </Margin>
        </Container>
      </Layout>
    </>
  );
}
