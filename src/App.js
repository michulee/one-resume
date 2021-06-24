import React from 'react';
import './App.css';
import styled from 'styled-components';
import {NavContents, Nav} from 'components/index';
import {SectionBasic} from 'sections/index';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 0 20px 35px 20px;
`

export default function App() {
  // const toSection = () => {
  //   return (

  //   );
  // }
  return (
    <>
        {/* <Nav/> */}
        <NavContents/>

        {/* <Section>
          <SectionBasic/>
        </Section> */}
    </>
  )
}
