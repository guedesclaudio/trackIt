import styled from "styled-components"
import {Link} from "react-router-dom"
import { useContext } from "react";
import UserContext from "../contexts/userContext.js";

export default function Topo() {

    const {userData} = useContext(UserContext)

    return (
        <Container>
            <Link to = {"/"}>
                <Title>
                    Trackit
                </Title>
            </Link>
            <ImgPerfil src = {userData.image}/>
        </Container>
    )
}

const Container = styled.div`
    height: 70px;
    width: 100%;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
`

const Title = styled.h1`
    font-family: 'Playball', cursive;
    font-weight: 400;
    font-size: 38px;
    line-height: 49px;
    color: #FFFFFF;
    margin-left: 10px;
`

const ImgPerfil = styled.img`
    height: 51px;
    width: 51px;
    border-radius: 98px;
    margin-right: 10px;
`