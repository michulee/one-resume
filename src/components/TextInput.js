import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Label = styled.label`
    color: #0071BC;
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

    :focus {
        outline: none;
        border-color: #0071BC;
        // box-shadow: 0 0 3px #0071BC;
    }

    ::placeholder {
        color: #e1e1e1;
    }

`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    // margin: 10px;

    // can't do 50% because think it's counting padding
    // flex-basis: 45%;

    // flex-basis: 50%;
    flex-grow: 1;

    // width: 100%;

    @media (min-width: 375px) {
        // flex-grow: 0;
        // flex-basis: 50%;
    }
    @media (min-width: 756px) {
        flex-grow: 0;
        flex-basis: 50%;
    }
`

export default function TextInput(props) {
    // https://ankurito.medium.com/how-to-set-the-default-value-of-a-text-input-in-react-329fb66991c9
    // example shows this component to have its own state
    const [text, setText] = useState('');
    const handleTextChange = (e) => {
        e.preventDefault();

        // console.log(e.target);
        setText(e.target.value);

        // props.onChange(e.target.value);
        props.onChange(e); //this works - pass whole event
    }

    // useEffect(() => {
    //     const trimmedName = props.name.replaceAll(" ", "");
    //     const value = document.getElementById(trimmedName);
    //     if(value !== null) {
    //         value.innerText = text;
    //     }
    // })

    return (
        <>
            <Item>
                <Label htmlFor={props.name}>{props.label}</Label>
                <Input id={props.name} name={props.name} type="text" placeholder={props.label}/>

                {/* can't call the prop.onChange function directly, must call function within child that calls parent function */}
                {/* <Input id={props.name} type="text" value={text} placeholder={props.placeholder} onChange={props.onChange}/> */}
            </Item>
        </>
    );
}
