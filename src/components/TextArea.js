import React, { useState } from "react";
import styled from "styled-components";

// const Label = styled.label`
//     color: #0071BC;
//     text-transform: uppercase;
//     letter-spacing: 1px;
//     // font-variant: small-caps;
// `

// const Input = styled.textarea`
//     border: 1px solid #E1E1E1;
//     padding: 10px 15px;
//     border-radius: 5px;

//     :focus {
//         outline: none;
//         border-color: #0071BC;
//         box-shadow: 0 0 3px #0071BC;
//     }
// `

// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
// `

const Label = styled.label`
  color: #0071bc;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 100%;
  // font-weight: 500;
  // font-variant: small-caps;
`;

const Input = styled.textarea`
  width: 100%;
  border: none;
  // border: 1px solid #E1E1E1;
  border-bottom: 1px solid #e1e1e1;
  // padding: 10px 15px;
  padding: 10px 0px;
  // border-radius: 5px;
  // outline: none;

  // font-family: Calibri, Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
  font-size: 1rem;

  :focus {
    outline: none;
    border-color: #0071bc;
    // box-shadow: 0 0 3px #0071BC;
  }

  ::placeholder {
    color: #e1e1e1;
  }
`;

const Item = styled.div``;

const P = styled.p``;


export default function TextArea(props) {
  const [text, setText] = useState("");
  const handleTextArea = (e) => {
    // e.preventDefault();

    const value = e.target.value;
    if (e.keyCode === 13) {
      if (e.ctrlKey) {
        text.concat("\n");
      } else {
        text.concat("\n");
      }
    }
    setText(value);
    console.log(value)

    const newText = text.split("\n").map((str) => {
        <P>{str}</P>
    });
    return newText;
  };

    // const Input = (e) => {
    //     const value = e.target.value;
    //     if (e.keyCode === 13) {
    //       if (e.ctrlKey) {
    //         text.concat("\n");
    //       } else {
    //         text.concat("\n");
    //       }
    //     }
    //     setText(value);
    //     console.log(value)
    
    //     const newText = text.split("\n").map((str) => <h1>{str}</h1>);
    //     return newText;
    // }

  return (
    <>
      {/* <Item>
                <Label>{props.name}</Label>
                <Input placeholder={props.placeholder}/>
            </Item> */}
      <Item className={props.className}>
        <Label htmlFor={props.name}>{props.label}</Label>
        <Input
          id={props.name}
          name={props.name}
          type="text"
          placeholder={props.label}
          rows="3"
        //   onKeyPress={handleTextArea}
        />

        {/* <Input
          id={props.name}
          name={props.name}
          type="text"
          placeholder={props.label}
          rows="3"
        /> */}
      </Item>
    </>
  );
}
