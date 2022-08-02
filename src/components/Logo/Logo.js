import React from "react";
import logo from "./logo.png"
import styled from 'styled-components';

export default function Logo() {
    return (
        <Container>
            <img src = {logo}/>
        </Container>
        
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
`