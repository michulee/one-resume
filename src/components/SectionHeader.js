import React from 'react';
import styled from 'styled-components';

const Header = styled.h2`
    font-weight: 400;
    font-variant: small-caps;
    margin: 0;
`

const HorizontalLine = styled.hr`
    width: 100%;
    margin: 0;
    // background-color: red;
    // color: red;
    // outline-color: red;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export default function SectionHeader(props) {
    return (
        <>
            <Container>
                <Header>{props.name}</Header>
                {/* <HorizontalLine></HorizontalLine> */}
                <HorizontalLine/>
            </Container>
        </>
    );
}
