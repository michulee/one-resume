import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Label = styled.label`
    color: #0071BC;
    text-transform: uppercase;
    letter-spacing: 1px;
    // font-variant: small-caps;
`

const Input = styled.input`
    border: 1px solid #E1E1E1;
    padding: 10px 15px;
    border-radius: 5px;

    :focus {
        outline: none;
        border-color: #0071BC;
        box-shadow: 0 0 3px #0071BC;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export default function TextInput(props) {
    // https://ankurito.medium.com/how-to-set-the-default-value-of-a-text-input-in-react-329fb66991c9
    // example shows this component to have its own state
    const [text, setText] = useState('');
    const handleTextChange = (e) => {
        e.preventDefault();

        console.log(e.target);
        setText(e.target.value);
    }

    // useEffect({
        
    // }), [name];

    useEffect(() => {
        // const trimmedName = props.name.replace(/\s+/g, '');
        let trimmedName = props.name.replaceAll(" ", "");
        const value = document.getElementById(trimmedName);
        if(value !== null) {
            value.innerText = text;
        }
    })

    return (
        <>
            <Container>
                <Label htmlFor={props.name}>{props.name}</Label>
                {/* <Input type={props.type} value={props.value} placeholder={props.placeholder} onChange={handleNameChange}/> */}
                <Input id={props.name} type="text" value={text} placeholder={props.placeholder} onChange={handleTextChange}/>
            </Container>
        </>
    );
}
