import styled from "styled-components";
import {Link} from "react-router-dom"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export default function Footer({porcentage}) {
    return (
        <Container>
            <Link to = {"/habitos"}>
                <Text>
                    Hábito
                </Text>
            </Link>
            <Loading>
                <Link to = {"/hoje"}>
                    <Circle>
                        <CircularProgressbar value = {porcentage*100} text = {"Hoje"} styles = {{
                            text: {
                                fill: "#FFFFFF",
                                fontSize: '23px',
                                fontFamily: "Lexend Deca",
                                fontWeight: 400,
                              },
                              trail: {
                                stroke: "#52B6FF",
                              },
                              path: {
                                stroke: "#FFFFFF",
                              },
                        }}/>;
                    </Circle>
                </Link>
            </Loading>
            <Link to = {"/historico"}>
                <Text>
                    Histórico
                </Text>
            </Link>
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

const Circle = styled.div`
    width: 81px;
    height: 81px;
`

const TextLoad = styled.h1` // refatorar aqui fazendo herança de styled components
    font-family: "Lexend Deca";
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    color: #FFFFFF;
`