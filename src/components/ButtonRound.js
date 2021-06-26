import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #0071BC;
    width: 100%;
    border: none;
    border-radius: 5px;
    color: #fff;
    padding: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
`

export default function ButtonRound(props) {
    return (
        <>
            <Button onClick={props.onClick}>{props.name}</Button>
        </>
    );
}
