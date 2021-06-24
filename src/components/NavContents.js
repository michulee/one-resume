import React, { useState } from 'react';
import styled from 'styled-components';
import {AiFillPrinter, AiOutlinePlus} from 'react-icons/ai';
import {SectionBasic} from 'sections/index';

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

export default function NavContents(props) {
    const [section, setSection] = useState('basic');
    const handleSectionClick = (e) => {
        // if click on <ButtonSection/> then render <ButtonSectionContents/> with Nav, or maybe replace bottom section???
        console.log('hey');
    }
    return (
        <>
            <Container>
                <FixedArea>
                    <AiFillPrinter/>
                </FixedArea>
                <VerticalLine/>
                <ButtonArea onClick={ handleSectionClick() }>
                    {/* <AiOutlinePlus/> */}
                    <ButtonSection>B</ButtonSection>
                    <ButtonSection>E</ButtonSection>
                </ButtonArea>
            </Container>
        </>
    );
}
