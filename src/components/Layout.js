import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    overflow: none;
`

const HalfColumn = styled.div`
    width: 50%;
    // height: 100vh;
    border: 1px solid black;
`

export default function Layout(props) {
    return (
        <>
            <Container>
                <HalfColumn>

                </HalfColumn>
                <HalfColumn>
                    
                </HalfColumn>
            </Container>
        </>
    );
}
