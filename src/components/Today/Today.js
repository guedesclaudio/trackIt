import Topo from "../Topo/Topo.js";
import Cards from "../Cards/Cards.js";
import Footer from "../Footer/Footer.js";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/userContext.js";
import dayjs from "dayjs";


export default function Today() {
    const {token} = useContext(UserContext)
    const [nameDay, setNameDay] = useState()
    const [porcentage, setPorcentage] = useState(0)
    const dayWeek = dayjs().day()

    useEffect(() => {
        switch (dayWeek) {
            case 0 :
                setNameDay("Domingo")
                break;
            case 1 :
                setNameDay("Segunda")
                break
            case 2 :
                setNameDay("Terça")
                break
            case 3 :
                setNameDay("Quarta")
                break
            case 4 :
                setNameDay("Quinta")
                break
            case 5 :
                setNameDay("Sexta")
                break
            case 6 :
                setNameDay("Sábado")
                break
            default:
                break;
        }
    })
    
    return (
        <>
        <Topo/>
        <Container>
            <TextDate>
                {`${nameDay} ${dayjs().date()}/${dayjs().month()}`}
            </TextDate>
            <Warning>
                {porcentage ? <Porcentage>{(Math.round(porcentage*100)) + "% dos hábitos concluídos"}</Porcentage> : "Nenhum hábito concluído ainda"}
            </Warning>
            <Cards setPorcentage = {setPorcentage}/>
        </Container>
        <Footer porcentage = {porcentage}/>
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

const Porcentage = styled.h2`
    font-family: "Lexend Deca";
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    color: #8FC549;
`