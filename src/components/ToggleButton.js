import React from 'react';
import styled from 'styled-components';

const Label = styled.button`

`

export default function ToggleButton(props) {
    return (
        <>
            <Label>
                <input type="checkbox"/>
                <span class="slider round"></span>
            </Label>
        </>
    );
}
