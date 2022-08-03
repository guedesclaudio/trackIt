import styled from "styled-components"

export default function Topo() {
    return (
        <Container>
            <Title>
                Trackit
            </Title>
            <ImgPerfil src = ""/>
        </Container>
    )
}

const Container = styled.div`
    height: 70px;
    width: 100%;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
`

const Title = styled.h1`
    font-family: 'Playball', cursive;
    font-weight: 400;
    font-size: 38px;
    line-height: 49px;
    color: #FFFFFF;
`

const ImgPerfil = styled.img`
    height: 51px;
    width: 51px;
    border-radius: 98px;
`