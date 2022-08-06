import { useState } from "react";
import styled from "styled-components";
import {postHabit} from "../services/trackit.js"
import { useContext } from "react";
import UserContext from "../contexts/userContext.js";
import { ThreeDots } from "react-loader-spinner";


function Days({
    day,
    numberDay,
    selectedDays,
    setSelectedDays,
    acess
}) {

    const [background, setBackground] = useState("#FFFFFF")
    const [color, setColor] = useState("#DBDBDB")

    function selectDay() {

        if (!selectedDays.includes(numberDay) && acess) {
            setSelectedDays([...selectedDays, numberDay])
            setBackground("#CFCFCF")
            setColor("#FFFFFF")
        }
        else if (selectedDays.includes(numberDay) && acess){
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

export default function FormHabit({
    plus,
    setPlus,
    habit,
    setHabit
}) {

    const dots = <ThreeDots color="#FFFFFF" height={40} width={40}/>
    const {callApi, setCallApi, teste, setTeste, userData} = useContext(UserContext)
    const [selectedDays, setSelectedDays] = useState([])
    const [disabled, setDisabled] = useState("")
    const [opacity, setOpacity] = useState(1)
    const [load, setLoad] = useState("Salvar")
    const [acess, setAcess] = useState(true)
    const [background, setBackground] = useState("#FFFFFF")
   
    const nameDays = [
        {day: "D", numberDay: 0, select:false},
        {day: "S", numberDay: 1, select:false},
        {day: "T", numberDay: 2, select:false},
        {day: "Q", numberDay: 3, select:false},
        {day: "Q", numberDay: 4, select:false},
        {day: "S", numberDay: 5, select:false},
        {day: "S", numberDay: 6, select:false},
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
                "Authorization": `Bearer ${userData.token}`
            }
        }
        disabledForm()
        if (selectedDays.length === 0) {
            alert("Preencha os campos corretamente")
            activateForm()
            return
        }
        postHabit(userDataForm, config)
        .then(response => {
            activateForm()
            setCallApi(!callApi)
            setTeste(!teste)
            setHabit("")
            setPlus(!plus)
        })
        .catch(response => {
            if (response.response.status === 422) alert("Preencha os campos corretamente")
            activateForm()
        })
    }

    function disabledForm() {
        setDisabled("disabled")
        setOpacity(0.7)
        setBackground("#F2F2F2")
        setAcess(false)
        setLoad(dots)
    }

    function activateForm() {
        setDisabled("")
        setOpacity(1.0)
        setBackground("FFFFFF")
        setLoad("Salvar")
        setAcess(true)
    }

    function cancelForm() {
        setPlus(!plus)
    }

    
    return (
        <Container>
            <input type = "text" placeholder = "nome do hábito" required disabled = {disabled} 
            background = {background} value = {habit} onChange = {event => receiveEvent(event)}/>
            <DaysDiv opacity = {opacity}>
                {nameDays.map((value, index) => 
                <Days 
                key = {index} 
                acess = {acess}
                day = {value.day}
                numberDay = {value.numberDay}
                selectedDays = {selectedDays} 
                setSelectedDays = {setSelectedDays}/>)}
            </DaysDiv>
            <Buttons opacity = {opacity}>
                <Cancel onClick = {cancelForm} disabled = {disabled}>
                    Cancelar
                </Cancel>
                <Save onClick = {saveForm} disabled = {disabled}>
                    {load}
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
        background: ${props => props.color}; //#F2F2F2
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
    opacity: ${props => props.opacity};
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
    opacity: ${props => props.opacity};
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
