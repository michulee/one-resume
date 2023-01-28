import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, NavLink, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { PreClassic, Classic, Classic2, PreClassic2 } from "templates/@index";

// https://github.com/styled-components/styled-components/issues/1449#issuecomment-360331968
// must import directly from file bc import from index will return undefined which causes run time error
import TextInput from "components/TextInput";
import TextArea from "components/TextArea";
import { AiFillPrinter, AiOutlinePlus } from "react-icons/ai";
import { SectionHeader, ToggleButton } from "components/@index";

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

  .active {
    // background-color: #0071BC;
    background-color: #0087e2;
    // color: #E1E1E1;
    color: white;
    border-color: #0087e2;
  }
`;

const TemplateNav = styled(Nav)`
  position: sticky;
`

const StyledNavLink = styled(NavLink)`
  padding: 5px 10px;
  border-radius: 15px;
  border: 1px solid black;
  background-color: #fff;
  font-size: 1rem;
  letter-spacing: 1px;
  text-decoration: none;
  color: #0087e2;
  border-color: #0087e2;
  transition: 0.3s;

  // have to define activeClassName .active on parent <Nav>
  :hover {
    opacity: 0.6;
    transition: 0.3s;
  }
`

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

const Edit = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 2rem;
  cursor: pointer;
`;

const Section = styled.div`
  //nav is 50px height
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 0 20px 50px 20px;

  // background-color: rgba(0,0,0,0.1);
  // align-items: center;
`;

const Template = styled(Section)`
  padding: 0;
  align-items: center;
  // background-color: #282828;
  // background-color: #4E4E4E;
  background-color: #747474;
`;

const Container = styled.div`
  // need to remove margintop of Section for print
  // margin-top: 50px;

  @media (min-width: 768px) {
    display: flex;
  }
  @media print {
    #container-info, #main-nav {
      display: none;
    }
    .template-nav {
      display: none;
    }
    // must wrap <Container> in another div or... global
    // #app-container {
    //   margin-top: 0;
    // }
    #container-template {
      margin: 0;
    }
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


export default function App() {
  // const [template, setTemplate] = useState('classic');
  const [preview, setPreview] = useState(false);
  const [input, setInput] = useState('');
  // let { path, url } = useRouteMatch();

  // monster.com resume mdata https://www.monster.com/career-advice/article/sample-resume-entry-level-admin
  const dummyValues = {
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
    dummyValues: dummyValues,
    preview: "",
    input: "",
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

  /**
   * Handles states within states.values
   * @param {*} e 
   */
  const handleNestedObj = (e) => {
    // setTemplate('classic')
    setInput(e.target.name);
    const nestedObj = ["school", "company", "personal"];
    let obj = "";
    for(let i = 0; i < nestedObj.length; i++) {
      obj = nestedObj[i];
      if(e.target.name.includes(obj)) {
        setState({
          ...state,
          values: {
            ...state.values,
            [obj]: {
              ...state.values[obj],
              [e.target.name]: e.target.value,
            },
          },
        });
        break;
     }
    }
  }

  /**
   * Handles states within state.values
   * @param {*} e 
   */
  const handleOuterObj = (e) => {
    // setTemplate('classic')
    setInput(e.target.name);
    setState({
      ...state,
      values: { 
        ...state.values, 
        [e.target.name]: e.target.value 
      },
    });

    console.log(state.values)
  }

  const checkPreview = () => {
    setPreview(value => !value);
  }

  return (
    <>
      <Router>

        {/* CSS print doesn't work with this over here */}
        <Container id="app-container">

          {/* CSS print works over here */}
          <Nav id="main-nav">
            <FixedArea>
            </FixedArea>
            <ButtonArea id="test">
              <StyledNavLink to='/one-resume/classic' activeClassName="active">Classic</StyledNavLink>
              <StyledNavLink to='/one-resume/classic2' activeClassName="active">Classic2</StyledNavLink>
              {/* <Edit className="material-symbols-outlined">edit</Edit> */}
            </ButtonArea>
          </Nav>

          <Section id="container-info" className="scroll">
            <Form>
              <SectionHeader name="Name" />
              <Card onChange={handleOuterObj}>
                <TextInput name="firstName" label="First Name" />
                <TextInput name="middleName" label="Middle Name" />
                <TextInput name="lastName" label="Last Name" />
              </Card>
              <SectionHeader name="Personal Information" />
              <Card onChange={handleNestedObj}>
                <TextInput name="personalEmail" label="Email" />
                <TextInput name="personalPhone" label="Phone" />
                <TextInput name="personalWebsite" label="Website" />
              </Card>
              <SectionHeader name="Others" />
              <Card onChange={handleOuterObj}>
                <TextAreaWide name="skills" label="Skills"/>
                <TextAreaWide name="objective" label="Objective" />
              </Card>
              <SectionHeader name="Education" />
              <Card onChange={handleNestedObj}>
                <TextInput name="schoolName" label="School Name" />
                <TextInput name="schoolState" label="State" />
                <TextInput name="schoolCity" label="City" />
                <TextInput name="schoolMajorName" label="Major Name" />
                <TextInput name="schoolDegree" label="Degree" />
                <TextInput name="schoolYearStart" label="Year Start" />
                <TextInput name="schoolYearEnd" label="Year End" />
              </Card>
              <SectionHeader name="Company" />
              <Card onChange={handleNestedObj}>
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

          <Template id='container-template' className='scroll'>
            {/* <TemplateNav>
              <button>test</button>
            </TemplateNav> */}
            <Switch>
              <Route path='/one-resume/classic' exact render={ (props) => <Classic {...props} data={state} input={input} isChecked={preview} /> } />
              <Route path='/one-resume/classic/preview' exact render={ (props) => <PreClassic {...props} data={dummyValues} /> } />
              <Route path='/one-resume/classic2' exact render={ (props) => <Classic2 {...props} data={state} input={input} isChecked={preview} /> } />
              <Route path='/one-resume/classic2/preview' exact render={ (props) => <PreClassic2 {...props} data={dummyValues} /> } />
              {/* <Route path='/classic' exact render={ (props) => <Classic {...props} data={dummyValues} /> } /> */}

              {/* to redirect to /classic with props, the <Route> with props must be defined first */}
              <Route path='/' >
                <Redirect to='/one-resume/classic' />
              </Route>

              {/* <Route path='/' exact component={PreClassic} /> */}
            </Switch>
          </Template>

        </Container>
      </Router>
    </>
  )
}
