import { useEffect, useState, useContext } from "react";
import { getHabitsToday, postHabitDone, postCancelHabitDone } from "../services/trackit.js";
import UserContext from "../contexts/userContext.js";
import select from "./select.png"
import styled from "styled-components";


function Card({
    name,
    userData,
    id,
    done,
    callApi,
    setCallApi,
    currentSequence,
    highestSequence
}) {

    const [background, setBackground] = useState("#EBEBEB")

    useEffect(() => {
        done ? setBackground("#8FC549") : setBackground("#EBEBEB")
    }, [])

    function modifyHabit() {
        const config = {
            headers: {
                "Authorization": `Bearer ${userData.token}`
            }
        }
        if (background === "#EBEBEB") {
            checkHabit(config)
        }
        else {
            uncheckHabit(config)
        }
    }

    function checkHabit(config) {
         setBackground("#8FC549")
         postHabitDone(id, config)
         .then(response => {
            setCallApi(!callApi)
         })
         .catch(response => {
            alert("Ops! Ocorreu um erro inesperado. Estamos trabalhando nisso pra te ajudar")
            console.log(response)
        })
    }

    function uncheckHabit(config) {
        setBackground("#EBEBEB")
        postCancelHabitDone(id, config)
         .then(response => {
            setCallApi(!callApi)
         })
         .catch(response => {
            alert("Ops! Ocorreu um erro inesperado. Estamos trabalhando nisso pra te ajudar")
            console.log(response)
        })
    }

    const color = currentSequence > 0 && currentSequence === highestSequence ? "#8FC549" : "#666666"
    const dayOrDays = currentSequence === 1 && highestSequence === 1 ? "dia" : "dias"

    return (
        <Container>
            <Habit>
                <Title>
                    {name} 
                </Title>
                <Sequence>
                    Sequência atual: <Day color = {color}>{currentSequence} {dayOrDays}</Day> 
                </Sequence>
                <Sequence>
                    Seu recorde: <Day color = {color}>{highestSequence} {dayOrDays}</Day>
                </Sequence>
            </Habit>
            <Box background = {background} onClick = {modifyHabit}>
                <img src = {select}/>
            </Box>
        </Container>
    )
}

export default function Cards() {

    const {setPorcentage, teste, userData, habitsToday, setHabitsToday, config} = useContext(UserContext)
    const [callApi, setCallApi] = useState(false)
    
    useEffect(() => { 
        getHabitsToday(config)
        .then(response => {
            setHabitsToday(response.data)
            response.data.length === 0 ? setPorcentage(0) : setPorcentage(response.data.filter(value => value.done === true).length/response.data.length)
        })
        .catch(response => console.log(response))
    },[callApi, teste])

    return (
        <>
            {habitsToday.map(value => <Card key = {value.id} name = {value.name} 
            days = {value.days} userData = {userData} id = {value.id} 
            done = {value.done} callApi = {callApi} setCallApi = {setCallApi} currentSequence = {value.currentSequence}
            highestSequence = {value.highestSequence}/>)}
        </>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px auto;
    min-height: 94px;
    width: 340px;
    border-radius: 5px;
    background: #FFFFFF;
    color: #666666;
`

const Habit = styled.div`
    margin-left: 10px;
    width: 200px;
`

const Title = styled.h1`
    font-family: "Lexend Deca";
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    text-align: left;
    margin-bottom: 5px;
`

const Sequence = styled.p`
    font-family: "Lexend Deca";
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
`

const Box = styled.div`
    height: 69px;
    width: 69px;
    background-color: ${props => props.background};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`

const Day = styled.span`
    font-size: 12px;
    color: ${props => props.color}
`