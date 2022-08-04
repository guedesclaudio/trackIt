import { useState } from "react";
import styled from "styled-components";
import {postHabit} from "../services/trackit.js"
import { useContext } from "react";
import UserContext from "../contexts/userContext.js";

function Days({
    day,
    numberDay,
    selectedDays,
    setSelectedDays
}) {

    const [background, setBackground] = useState("#FFFFFF")
    const [color, setColor] = useState("#DBDBDB")

    function selectDay() {

        if (!selectedDays.includes(numberDay)) {
            setSelectedDays([...selectedDays, numberDay])
            setBackground("#CFCFCF")
            setColor("#FFFFFF")
        }
        else {
            selectedDays.splice(selectedDays.indexOf(numberDay), 1)
            setSelectedDays([...selectedDays])
            setBackground("#FFFFFF")
            setColor("#DBDBDB")
        }
    }

    return (
        <DayWeek onClick = {selectDay} background = {background} color = {color}>
            {day}
        </DayWeek>
    )
}

export default function FormHabit() {

    const {token, setToken} = useContext(UserContext)
    const [selectedDays, setSelectedDays] = useState([])
    const [habit, setHabit] = useState("")
    const [disabled, setDisabled] = useState("")
    const [opacity, setOpacity] = useState(1)
    const nameDays = [
        {day: "D", numberDay: 1, select:false},
        {day: "S", numberDay: 2, select:false},
        {day: "T", numberDay: 3, select:false},
        {day: "Q", numberDay: 4, select:false},
        {day: "Q", numberDay: 5, select:false},
        {day: "S", numberDay: 6, select:false},
        {day: "S", numberDay: 7, select:false},
    ]
    function receiveEvent(event) {
        setHabit(event.target.value)
    }

    function saveForm() {
        const userDataForm = {
            name: habit,
            days: selectedDays
        }
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        disabledForm()
        postHabit(userDataForm, config)
        .then(response => {
            console.log(response)
            activateForm()
        })
        .catch(response => {
            console.log(response)
            activateForm()
        })
    }

    function disabledForm() {
        setDisabled("disabled")
        setOpacity(1.8)
    }

    function activateForm() {
        setDisabled("")
        setOpacity(1.0)
    }

    function cancelForm() {
        setHabit("")
        setSelectedDays([])
    }

    
    return (
        <Container>
            <input type = "text" placeholder = "nome do hábito" disabled = {disabled} value = {habit} onChange = {event => receiveEvent(event)}/>
            <DaysDiv>
                {nameDays.map((value, index) => 
                <Days 
                key = {index} 
                day = {value.day}
                numberDay = {value.numberDay}
                selectedDays = {selectedDays} 
                setSelectedDays = {setSelectedDays}/>)}
            </DaysDiv>
            <Buttons opacity = {opacity}>
                <Cancel onClick = {cancelForm}>
                    Cancelar
                </Cancel>
                <Save onClick = {saveForm}>
                    Salvar
                </Save>
            </Buttons>
        </Container>
    )
}

const Container = styled.div`
    margin: 20px auto;
    height: 180px;
    width: 340px;
    border-radius: 5px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        margin-top: 10px;
        height: 45px;
        width: 303px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        outline: none;
    }

    input::placeholder {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
    }
`

const DaysDiv = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    margin-left: -60px;
`

const DayWeek = styled.div`
    height: 30px;
    width: 30px;
    background: ${props => props.background};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin: 8px 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props => props.color};
`

const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    filter: brightness(${props => props.opacity});
`

const Cancel = styled.button`
    height: 20px;
    width: 69px;
    background-color: #FFFFFF;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    color: #52B6FF;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    margin: 25px 10px 0 0;
`

const Save = styled.button`
    height: 35px;
    width: 84px;
    background-color: #52B6FF;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    color: #FFFFFF;
    margin: 25px 10px 0 0;
`
