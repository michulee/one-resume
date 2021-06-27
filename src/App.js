import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components';
import {
  Dashboard,
  TextInput,
  SectionHeader,
  ButtonRound,
  TextArea,
} from "components/index";
import {SectionBasic} from 'sections/index';

import { Counter } from './features/counter/Counter';


const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 0 20px 35px 20px;
`

export default function App() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    e.preventDefault();

    console.log(e.target);
    setText(e.target.value);
  };
  return (
    <>
        <Dashboard/>
    </>
  )
}
