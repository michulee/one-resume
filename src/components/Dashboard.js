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
  // const [section, setSection] = useState("basic");
  const [template, setTemplate] = useState("preclassic");

  // const [text, setText] = useState("");

  // monster.com resume mdata https://www.monster.com/career-advice/article/sample-resume-entry-level-admin
  const initialValues = {
    firstName: "John",
    middleName: "C",
    lastName: "Doe",
    personal: {
      email: "johncdoe@gmail.com",
      phone: "(123) 456 - 7890",
      website: "johndoe.com",
    },
    skills: "Office Management, Records Management, Database Administration, Travel Coordination, Event Management",
    objective: "Administrative support professional offering versatile office management skills and proficiency in Microsoft Office programs. Strong planner and problem solver who readily adapts to change, works independently and exceeds expectations. Able to juggle multiple priorities and meet tight deadlines without compromising quality.",
    school: {
      schoolName: "University of California, Los Angeles",
      schoolState: "CA",
      schoolCity: "Los Angeles",
      schoolMajorName: "Business Administration",
      schoolDegree: "BS",
      schoolYearStart: "2010",
      SchoolYearEnd: "2014",
    },
    company: {
      companyJobTitle: "Administrative Assistant",
      companyJobDescription:
        "Handle multifaceted clerical tasks (e.g., data entry, filing, records management and billing) as the assistant to the registrar and admissions offices. Coordinate travel arrangements, maintain database and ensure the delivery of premium service to students.",
      companyName: "REmote",
      companyState: "CA",
      companyCity: "Los Angeles",
      companyYearStart: "Jan 2015",
      companyYearEnd: "Jan 2016",
    },
  };
  const [state, setState] = useState({
    initialValues: initialValues,
    values: {
      firstName: "",
      middleName: "",
      lastName: "",
      personal: {
        personalEmail: "",
        personalPhone: "",
        personalWebsite: "",
      },
      skills: "",
      objective: "",
      school: {
        schoolName: "",
        schoolState: "",
        schoolCity: "",
        schoolMajorName: "",
        schoolDegree: "",
        schoolYearStart: "",
        SchoolYearEnd: "",
      },
      company: {
        companyJobTitle: "",
        companyJobDescription: "",
        companyName: "",
        companyState: "",
        companyCity: "",
        companyYearStart: "",
        companyYearEnd: "",
      },
    },
  });

  const handleForm = (e) => {
    e.preventDefault();

    // const start = ("pre").length;
    // const obj = template.substring(start, template.length)
    // console.log(obj)
    // setTemplate(obj);

    setTemplate("classic");
    const setStateForNestedObj = ["school", "company", "personal"];

    console.log(Object.values(state.values.personal))

    // state.values.school returns undefined, but state.values.school.schoolName gives error
    // the destructuring [name] turns the "school" string into an object
    let isNested = false;
    setStateForNestedObj.map((nestedObj) => {
      if (e.target.name.includes(nestedObj)) {
        setState({
          ...state,
          values: {
            ...state.values,
            [nestedObj]: {
              ...state.values.nestedObj,
              [e.target.name]: e.target.value,
            },
          },
        });
        isNested = true;
      }
    });

    if (!isNested) {
      setState({
        ...state,
        values: { ...state.values, [e.target.name]: e.target.value },
      });
    }
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
