import {Container} from "../commom styles/allScreens.js"
import styled from "styled-components";
import Topo from "../Topo/Topo";
import Footer from "../Footer/Footer";

export default function History() {
    return (
        <>
            <Topo/>
            <Container>
                <Title>
                    Histórico
                </Title>
                <Text>
                    Em breve você poderá ver o histórico dos seus hábitos aqui!
                </Text>
            </Container>
            <Footer/>
        </>
    )
}

const Title = styled.h1`
    font-family: "Lexend Deca";
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    text-align: left;
    color: #126BA5;
    margin: 20px 0 10px 10px;
`

const Text = styled.p`
    font-family: "Lexend Deca";
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    margin-left: 10px;
    color: #666666;
`