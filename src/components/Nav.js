import React from 'react';
import styled from 'styled-components';
import {AiFillPrinter} from 'react-icons/ai';

const Container = styled.div`
    display: flex;
    flex-direction: row;
`

const FixedArea = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

const VerticalLine = styled.div`
    border-left: 6px solid black;
    height: 100%;
`

const ButtonArea = styled.div`

`

export default function Nav(props) {
    return (
        <>
            <Container>
                <FixedArea>
                    <AiFillPrinter/>
                    <AiFillPrinter/>
                    <AiFillPrinter/>
                </FixedArea>
            </Container>
        </>
    );
}
