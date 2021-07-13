import React from "react";
import styled from "styled-components";
import {
  TextInput,
  SectionHeader,
  Layout,
  TextArea,
  NavContents,
  Nav,
  ButtonRound,
} from "components/@index";

const Button = styled.button`
  background-color: #0071bc;
  width: 100%;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export default function Education(props) {
  return (
    <>
      <SectionHeader name="Education" />
      <TextInput name="School Name" placeholder="School Name University" />
      <TextInput name="School State" placeholder="CA" />
      <TextInput name="School City" placeholder="Some City" />
      <TextInput name="Major Name" placeholder="Computer Science" />
      <TextInput name="Degree" placeholder="B.S." />
      <TextInput name="Year Start" placeholder="Jan 2010" />
      <TextInput name="Year End" placeholder="Jan 2014" />
    </>
  );
}
