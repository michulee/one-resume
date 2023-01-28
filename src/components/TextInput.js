import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Label = styled.label`
    // color: #0071BC;
    color: #000;
    text-transform: uppercase;
    letter-spacing: 1px;
    width: 100%;
    // font-weight: 500;
    // font-variant: small-caps;
`

const Input = styled.input`
    width: 100%;
    border: none;
    // border: 1px solid #E1E1E1;
    border-bottom: 1px solid #e1e1e1;
    // padding: 10px 15px;
    padding: 10px 0px;
    // border-radius: 5px;
    // background-color: rgba(0,0,0,0.1);

    font-size: 1rem;

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

export default function TextInput(props) {
    // https://ankurito.medium.com/how-to-set-the-default-value-of-a-text-input-in-react-329fb66991c9
    // example shows this component to have its own state
    const [text, setText] = useState('');
    const handleTextChange = (e) => {
        e.preventDefault();
        setText(e.target.value);
        props.onChange(e); //this works - pass whole event
    }

    return (
        <>
            {/* <Item className="container"> */}
            <Item className={props.className}>
                <Label htmlFor={props.name}>{props.label}</Label>
                <Input id={props.name} name={props.name} type="text" placeholder={props.label}/>

                {/* can't call the prop.onChange function directly, must call function within child that calls parent function */}
                {/* <Input id={props.name} type="text" value={text} placeholder={props.placeholder} onChange={props.onChange}/> */}
            </Item>
        </>
    );
}
