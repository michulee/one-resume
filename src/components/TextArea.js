import React from 'react';
import styled from 'styled-components';

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
    color: #0071BC;
    text-transform: uppercase;
    letter-spacing: 1px;
    width: 100%;
    // font-weight: 500;
    // font-variant: small-caps;
`

const Input = styled.textarea`
    width: 100%;
    border: none;
    // border: 1px solid #E1E1E1;
    border-bottom: 1px solid #e1e1e1;
    // padding: 10px 15px;
    padding: 10px 0px;
    // border-radius: 5px;

    :focus {
        outline: none;
        border-color: #0071BC;
        // box-shadow: 0 0 3px #0071BC;
    }

    ::placeholder {
        color: #e1e1e1;
    }

`

export const Item = styled.div`
`

export default function TextArea(props) {
    return (
        <>
            {/* <Item>
                <Label>{props.name}</Label>
                <Input placeholder={props.placeholder}/>
            </Item> */}
            <Item className={props.className}>
                <Label htmlFor={props.name}>{props.label}</Label>
                <Input id={props.name} name={props.name} type="text" placeholder={props.label} rows="3"/>
            </Item>
        </>
    );
}
