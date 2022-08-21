import {getHabits, getHabitsToday, deleteHabit} from "../services/trackit.js"
import {useEffect, useState, useContext} from "react"
import styled from "styled-components";
import UserContext from "../contexts/userContext.js";
import trash from "./trash.png"

function Habit({
    days,
    name,
    id,
    callApi,
    setCallApi,
    setHabitsToday,
    teste,
    setTeste,
    setPorcentage,
    config
}) {

    const nameDays = [
        {day: "D", numberDay: 0},
        {day: "S", numberDay: 1},
        {day: "T", numberDay: 2},
        {day: "Q", numberDay: 3},
        {day: "Q", numberDay: 4},
        {day: "S", numberDay: 5},
        {day: "S", numberDay: 6},
    ]
    
    const nameDays2 = [
        {day: "D", numberDay: 0, background: days.includes(nameDays[0].numberDay)? "#CFCFCF":"#FFFFFF", 
        color: days.includes(nameDays[0].numberDay)? "#FFFFFF":"#DBDBDB"},
        {day: "S", numberDay: 1, background: days.includes(nameDays[1].numberDay)? "#CFCFCF":"#FFFFFF", 
        color: days.includes(nameDays[1].numberDay)? "#FFFFFF":"#DBDBDB"},
        {day: "T", numberDay: 2, background: days.includes(nameDays[2].numberDay)? "#CFCFCF":"#FFFFFF", 
        color: days.includes(nameDays[2].numberDay)? "#FFFFFF":"#DBDBDB"},
        {day: "Q", numberDay: 3, background: days.includes(nameDays[3].numberDay)? "#CFCFCF":"#FFFFFF", 
        color: days.includes(nameDays[3].numberDay)? "#FFFFFF":"#DBDBDB"},
        {day: "Q", numberDay: 4, background: days.includes(nameDays[4].numberDay)? "#CFCFCF":"#FFFFFF", 
        color: days.includes(nameDays[4].numberDay)? "#FFFFFF":"#DBDBDB"},
        {day: "S", numberDay: 5, background: days.includes(nameDays[5].numberDay)? "#CFCFCF":"#FFFFFF", 
        color: days.includes(nameDays[5].numberDay)? "#FFFFFF":"#DBDBDB"},
        {day: "S", numberDay: 6, background: days.includes(nameDays[6].numberDay)? "#CFCFCF":"#FFFFFF", 
        color: days.includes(nameDays[6].numberDay)? "#FFFFFF":"#DBDBDB"},
    ]
    /*
    const [nameDays2, setNameDays2] = useState([])
    useEffect(() => {
        setNameDays2(nameDays.map((value, index) => {
            return [
                ...nameDays2, {day: value.day, numberDay: value.numberDay, 
                background: days.includes(nameDays[index].numberDay)? "#CFCFCF":"#FFFFFF", 
                color: days.includes(nameDays[index].numberDay)? "#FFFFFF":"#DBDBDB"}
            ]
        }))
    })*/
    
    function undoHabit() {
        setTeste(!teste)
        if (window.confirm("Tem certeza disso?") === true ) {
            deleteHabit(id, config)
            .then(response => {
                setCallApi(!callApi)
            })
            .catch(response => console.log(response))
        }
    }

    useEffect(() => { 
        getHabitsToday(config)
        .then(response => {
            setHabitsToday(response.data)
            response.data.length === 0 ? 
            setPorcentage(0) : setPorcentage(response.data.filter(value => value.done === true).length/response.data.length)
        })
        .catch(response => console.log(response))
    },[callApi, teste])

    return (
        <Card>
            <div>
                <Title>
                    {name}
                </Title>
                <DaysDiv>
                    {nameDays2.length > 0 ? nameDays2.map((value, index) => <DayWeek key = {index} background = {value.background} color = {value.color}>{value.day}</DayWeek>): ""}
                </DaysDiv>
            </div>
            <img src = {trash} onClick = {undoHabit}/>
        </Card>
    )

}

export default function ListHabits() {

    const {callApi, setCallApi, userData, habitsToday, setHabitsToday, teste, setTeste, setPorcentage, config} = useContext(UserContext)
    const [data, setData] = useState([])

    useEffect(() => {
        getHabits(config)
        .then(response => setData(response.data))
        .catch(response => console.log(response))
    }, [callApi])

    return (
        <>
            {data.map((value, index) => <Habit key = {index} days = {value.days} name = {value.name} 
            id = {value.id} userData = {userData} callApi = {callApi} setCallApi = {setCallApi} 
            habitsToday = {habitsToday} setHabitsToday = {setHabitsToday} 
            teste = {teste} setTeste = {setTeste} setPorcentage = {setPorcentage} config = {config}/>)}
        </>
    )
}

const Card = styled.div`
    margin: 20px auto;
    min-height: 91px;
    width: 340px;
    border-radius: 5px;
    background: #FFFFFF;
    display: flex;
    justify-content: space-between;

    img {
        height: 14px;
        margin-top: 10px;
        margin-right: 10px;
    }
`
const Title = styled.h1`
    font-family: "Lexend Deca";
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    text-align: left;
    color: #666666;
    margin: 10px 0 10px 10px;
`
const DaysDiv = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 10px 0 10px 10px;
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