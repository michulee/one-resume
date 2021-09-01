import React from 'react';
import styled from 'styled-components';

const Header = styled.h2`
    padding-top: 20px;
    font-weight: 400;
    color: #0071BC;
    // font-variant: small-caps;
    margin: 0;
`

const HorizontalLine = styled.hr`
    width: 100%;
    margin: 0;
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
                {/* <HorizontalLine/> */}
            </Container>
        </>
    );
}
