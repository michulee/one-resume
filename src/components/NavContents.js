import React from 'react';
import styled from 'styled-components';
import {AiFillPrinter, AiOutlinePlus} from 'react-icons/ai';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 70px;
    gap: 32px;
`

const FixedArea = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    font-size: 36px;
`

const VerticalLine = styled.div`
    border-left: 2px solid #E1E1E1;
    height: 50%;
`

const ButtonArea = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    font-size: 36px;
`

const ButtonSection = styled.button`

`
const ButtonActiveSection = styled.button`

`

function Section(props) {
    switch() {

    }
}

export default function NavContents(props) {
    const getSection = (e) => {
        e.preventDefault();
        // if click on <ButtonSection/> then render <ButtonSectionContents/> with Nav, or maybe replace bottom section???
    }
    return (
        <>
            <Container>
                <FixedArea>
                    <AiFillPrinter/>
                </FixedArea>
                <VerticalLine/>
                <ButtonArea>
                    {/* <AiOutlinePlus/> */}
                    <Section/>
                    <ButtonSection onClick={ getSection }>B</ButtonSection>
                    <ButtonSection onClick={ getSection }>E</ButtonSection>
                </ButtonArea>
            </Container>
        </>
    );
}
