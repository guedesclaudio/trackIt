import {Container} from "../commom styles/allScreens.js"
import { Calendar } from "react-calendar";
import { useEffect, useContext, useState } from "react";
import { getHistoryDailyHabits } from "../services/trackit.js";
import "react-calendar/dist/Calendar.css"
import styled from "styled-components";
import Topo from "../Topo/Topo";
import Footer from "../Footer/Footer";
import UserContext from "../contexts/userContext.js";
import dayjs from "dayjs";

export default function History() {

    const {config} = useContext(UserContext)
    const [value, setValue] = useState(new Date())
    const [history, setHistory] = useState([])

    useEffect(() => {
        getHistoryDailyHabits(config)
        .then((response) => {
            setHistory(response.data)
        })
        .catch((response) => console.log(response))
    }, [])

    function getClassName(history, date) {
        const selectDates = history.filter(value => value.day === date)
        if (selectDates.length === 1) {
            const habits = selectDates[0].habits
            const historyStatus = habits.map((habit) => habit.done ? 1 : 0)
            if (historyStatus.includes(0)) {
                return "failed"
            }
            else {
                return "success"
            }
        }
        return ""
    }

    return (
        <>
            <Topo/>
            <Container>
                <Title>
                    Histórico
                </Title>
                <Text>
                    Acompanhe o histórico da sua evolução
                </Text>
                <HistoryCalendar>
                    <Calendar 
                    className = "react-calendar"
                    locale = "pt-BR"
                    value = {value}
                    tileClassName = {({date}) => getClassName(history, dayjs(new Date(date)).format("DD/MM/YYYY"))}
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

    .failed {
        background-color: #FA6771;
        border: 6px solid white;
        border-radius: 50%;
    }
    .success {
        background-color: #9FF76C;
        border-radius: 50%;
        border: 6px solid white;
    }
`