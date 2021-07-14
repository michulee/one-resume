import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.label`
  // .switch {
    // position: relative;
    // display: inline-block;
    // width: 60px;
    // height: 34px;
  // }
  & {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export default function ToggleButton(props) {
  const handleClick = () => {
    // calling parent to setPreview state
    // props.onClick();
    props.onChange();
  };

  return (
    <>
      {/* <Button onClick={handleClick}/> */}
      {/* <Button className="switch" onClick={handleClick}> */}
      <Button className="switch" onChange={handleClick}>
        <input type="checkbox" defaultChecked={props.isChecked} />
        {/* <input type="checkbox" defaultChecked={props.preview} /> */}
        <span className="slider round"></span>
      </Button>
    </>
  );
}
