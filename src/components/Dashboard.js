import React, { useState } from "react";
import styled from "styled-components";
// import { Route, BrowserRouter as Router, Link, ActiveLink } from 'react-router-dom';
import { AiFillPrinter, AiOutlinePlus } from "react-icons/ai";
import { PreClassic, Classic } from "templates/index";
import { SectionHeader } from "components/index";

// https://github.com/styled-components/styled-components/issues/1449#issuecomment-360331968
// must import directly from file bc import from index will return undefined which causes run time error
import TextInput from "components/TextInput";
import TextArea from "components/TextArea";

const Nav = styled.div`
  position: fixed;
  top: 0;
  background-color: #fff;

  border-bottom: 1px solid #e1e1e1;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 50px;
  gap: 32px;
`;

const FixedArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 36px;
`;

const VerticalLine = styled.div`
  border-left: 2px solid #e1e1e1;
  height: 50%;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 36px;
`;

const Section = styled.div`
  //nav is 50px height
  // margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 0 20px 35px 20px;

  // background-color: pink;
  // align-items: center;
`;

const Template = styled(Section)`
  align-items: center;
  // background-color: #282828;
  // background-color: #4E4E4E;
  background-color: #747474;
`;

const Container = styled.div`
  margin-top: 50px;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const Form = styled.form`
  display: grid;
  gap: 35px;
`;

// you can't use numbers e.g. <TextInput100>
const TextInputWide = styled(TextInput)`
  grid-column: 1 / -1;
`;
const TextAreaWide = styled(TextArea)`
  grid-column: 1 / -1;
`;

const Card = styled.div`
  display: grid;
  gap: 35px;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
`;

const SeparateNavFromContents = styled.div`
  margin-top: 70px;
`;

const Button = styled.button`
  padding: 5px 10px;
  border-radius: 15px;
  border: 1px solid black;
  background-color: #fff;
  font-size: 1rem;
  letter-spacing: 1px;
`;
const ButtonActive = styled(Button)`
  // background-color: #0071BC;
  background-color: #0087e2;
  // color: #E1E1E1;
  color: white;
  border-color: #0087e2;
`;

export default function NavContents(props) {
  const [section, setSection] = useState("basic");
  const [template, setTemplate] = useState("preclassic");

  const [text, setText] = useState("");

  const initialValues = {
    firstName: 'Michelle',
    middleName: 'Chung',
    last: 'Lee',
    work: '',
    skills: '',
    school: {
      schoolName: '',
      schoolState: '',
      schoolCity: '',
    }
  };
  const [state, setState] = useState({
    // order: "",
    paid: false,
    // submitting: false,
    // loading: false,
    values: {},
    initialValues: initialValues,

    // setState() in handleForm() is adding objects in here
  });

  const handleForm = (e) => {
    e.preventDefault();
    setTemplate("classic");

    // need to have ...state to keep prev array states, else it will overwrite entire arr with one state
    // setState({ ...state, [e.target.name]: e.target.value });
    // Modify nested objects https://medium.com/@kkranthi438/dont-mutate-state-in-react-6b25d5e06f42

    // this modifies nested object but doesn't keep previous values of state
    // setState({ ...state, values: { [e.target.name]: e.target.value } });

    // this modifies nested object and keep previous values of state
    setState({ ...state, values: { ...state.values, [e.target.name]: e.target.value } });

    const nestedObjList = ['school', 'company'];
    nestedObjList.map((i) => {
      if(e.target.name.includes(i)) {
        console.log(i);
        console.log('nest this object')
      }
    })
    // if(e.target.name.includes('school')) {
    //   console.log('education was here');
    // }
  };

  return (
    <>
      {/* <Router> */}
        <Nav>
          <FixedArea>
            <AiFillPrinter />
          </FixedArea>
          <VerticalLine />
          <ButtonArea>
            {template === "preclassic" || template === "classic" ? (
              <ButtonActive>Classic</ButtonActive>
            ) : null}
            {/* <Button onClick={() => setTemplate("classic")}>
              Classic
            </Button> */}
            {/* <Button onClick={() => setTemplate("classic2")}>Classic2</Button> */}
          </ButtonArea>
        </Nav>

        {/* <Switch>
          <Route path='preclassic'>

          </Route>
        </Switch> */}
      {/* </Router> */}

      {/* <Section>
        {
            section === 'basic' ? <Basic parentCallback={ handleCallback }/> : 
            section === 'education' ? <Education/> :
            null
        } 
      </Section> */}

      <Container>
        <Section id="container-info" className="scroll">
          <Form onChange={handleForm}>
            <SectionHeader name="Basic Information" />
            <Card>
              {/* <Item>
                <Label htmlFor="firstName">First Name</Label>
                <Input name="firstName" type="text"/>
              </Item> */}
              <TextInput name="firstName" label="First Name" />
              {/* <TextInput name="firstName" label="First Name" /> */}

              <TextInput name="middleName" label="Middle Name" />
              <TextInput name="lastName" label="Last Name" />
              <TextInput name="email" label="Email" />
              <TextInput name="phone" label="Phone" />
            </Card>

            <SectionHeader name="Links" />
            <Card>
              <TextInput name="website" label="Website" />
              <TextInput name="linkedin" label="LinkedIn" />
            </Card>

            <SectionHeader name="Others" />
            <Card>
              <TextAreaWide name="skills" label="Skills" />
              <TextAreaWide name="objective" label="Objective" />
            </Card>

            <SectionHeader name="Education" />
            <Card>
              <TextInput name="schoolName" label="School Name" />
              <TextInput name="schoolState" label="State" />
              <TextInput name="schoolCity" label="City" />
              <TextInput name="schoolMajorName" label="Major Name" />
              <TextInput name="schoolDegree" label="Degree" />
              <TextInput name="schoolYearStart" label="Year Start" />
              <TextInput name="schoolYearEnd" label="Year End" />
            </Card>

            <SectionHeader name="Company" />
            <Card>
              <TextInput name="companyJobTitle" label="Job Title" />
              <TextInput name="companyJobDescription" label="Job Description" />
              <TextInput name="companyName" label="Company Name" />
              <TextInput name="companyState" label="State" />
              <TextInput name="companyCity" label="City" />
              <TextInput name="companyYearStart" label="Year Start" />
              <TextInput name="companyYearEnd" label="Year End" />
            </Card>
          </Form>
        </Section>

        <Template id="container-template" className="scroll">
          {console.log()}
          {template === "preclassic" ? (
            <PreClassic />
          ) : template === "classic" ? (
            <Classic id="print" data={state} />
          ) : null}
        </Template>
      </Container>
    </>
  );
}
