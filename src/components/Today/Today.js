import Topo from "../Topo/Topo.js";
import Cards from "../Cards/Cards.js";
import Footer from "../Footer/Footer.js";
import styled from "styled-components";

export default function Today(state) {
    console.log(state)
    return (
        <>
        <Topo/>
        <Container>
            <TextDate>
                Segunda, 17/05
            </TextDate>
            <Warning>
                Nenhum hábito concluído ainda
            </Warning>
            <Cards/>
        </Container>
        <Footer/>
        </>
    )
}

const Container = styled.div`
    margin-top: 80px;
    margin-bottom: 140px;
`

const TextDate = styled.h1`
    font-family: Lexend Deca;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    text-align: left;
    color: #126BA5;
    margin: 20px 0 5px 10px;
`

const Warning = styled.h2`
    font-family: "Lexend Deca";
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    color: #BABABA;
    margin-left: 10px;
`