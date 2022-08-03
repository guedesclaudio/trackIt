import styled from "styled-components";
import {Link} from "react-router-dom"

export default function Footer() {
    return (
        <Container>
            <Text>
                <Link to = {"/habitos"}>
                    Hábito
                </Link>
            </Text>
            <Loading>
                <TextLoad>
                    <Link to = {"/hoje"}>
                        Hoje
                    </Link>
                </TextLoad>
            </Loading>
            <Text>
                <Link to = {"/historico"}>
                    Histórico
                </Link>
            </Text>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
`

const Text = styled.h1`
    font-family: "Lexend Deca";
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    color: #52B6FF;
    width: 79px;
`

const Loading = styled.div`
    height: 91px;
    width: 91px;
    left: 142px;
    top: 566px;
    border-radius: 50%;
    background: #52B6FF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`

const TextLoad = styled.h1` // refatorar aqui fazendo herança de styled components
    font-family: "Lexend Deca";
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    color: #FFFFFF;
`