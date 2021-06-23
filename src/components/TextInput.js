import React from 'react';
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
    return (
        <>
            <Container>
                <Label>{props.name}</Label>
                <Input placeholder={props.placeholder}/>
            </Container>
        </>
    );
}
