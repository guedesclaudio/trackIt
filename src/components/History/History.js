import {Container} from "../commom styles/allScreens.js"
import { Calendar } from "react-calendar";
import { useEffect, useContext, useState } from "react";
import { getHistoryDailyHabits } from "../services/trackit.js";
import "react-calendar/dist/Calendar.css"
import styled from "styled-components";
import Topo from "../Topo/Topo";
import Footer from "../Footer/Footer";
import UserContext from "../contexts/userContext.js";

export default function History() {

    const {config} = useContext(UserContext)
    //const [date, setDate] = useState(new Date())
    const mark = [
        '04-03-2020',
        '03-03-2020',
        '05-03-2020'
    ]

    useEffect(() => {
        getHistoryDailyHabits(config)
        .then((response) => {
            console.log(response)
        })
        .catch((response) => console.log(response))
    }, [])

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
                <HistoryCalendar>
                    <Calendar 
                    className = "react-calendar"
                    locale = "pt-BR"
                    
                    
                    />
                </HistoryCalendar>
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
const HistoryCalendar = styled.div`
    .react-calendar {
        margin: 40px auto;
        max-width: 100%;
        background: white;
        border-radius: 10px;
        border: none;
        font-family: "Lexend Deca";
        line-height: 1.125em;
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }

    .highlight {
        color: red;
    }
`