import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PreClassic, Classic } from "templates/index";

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
  background-color: #747474;
`;

const Container = styled.div`
  margin-top: 50px;
  @media (min-width: 768px) {
    display: flex;
  }
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
  return (
    <>

    </>
  );
}
