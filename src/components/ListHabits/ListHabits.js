import styled from "styled-components";
import {useEffect, useState} from "react"
import { useContext } from "react";
import UserContext from "../contexts/userContext.js";
import {getHabits} from "../services/trackit.js"
import { deleteHabit } from "../services/trackit.js";
import trash from "./trash.png"

function Habit({
    days,
    name,
    id,
    token,
    callApi,
    setCallApi
}) {

    const [background, setBackground] = useState("#FFFFFF")
    const [color, setColor] = useState("#DBDBDB")
    const nameDays = [
        {day: "D", numberDay: 1},
        {day: "S", numberDay: 2},
        {day: "T", numberDay: 3},
        {day: "Q", numberDay: 4},
        {day: "Q", numberDay: 5},
        {day: "S", numberDay: 6},
        {day: "S", numberDay: 7},
    ]

    function undoHabit() {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        deleteHabit(id, config)
        .then(response => {
            console.log(response)
            setCallApi(!callApi)
        })
        .catch(response => console.log(response))
    }

    return (
        <Card>
            <div>
                <Title>
                    {name}
                </Title>
                <DaysDiv>
                    {nameDays.map((value, index) => <DayWeek key = {index} background = {background} color = {color}>{value.day}</DayWeek>)}
                </DaysDiv>
            </div>
            <img src = {trash} onClick = {undoHabit}/>
        </Card>
    )

}

export default function ListHabits() {

    const {token, setToken} = useContext(UserContext)
    const {data, setData} = useContext(UserContext)
    //const [data, setData] = useState([])
    const [callApi, setCallApi] =useState(false)
    //const [days, setDays] = useState([])

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        getHabits(config)
        .then(response => {
            setData(response.data)
            //setDays(response.data.days)
            console.log(data)
        })
        .catch(response => console.log(response))
    }, [callApi])

    return (
        <>
            {data.map((value, index) => <Habit key = {index} days = {value.days} name = {value.name} id = {value.id} token = {token} callApi = {callApi}
            setCallApi = {setCallApi}/>)}
        </>
    )
}

const Card = styled.div`
    margin: 20px auto;
    height: 91px;
    width: 340px;
    border-radius: 5px;
    background: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        margin-top: -50px;
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
    border: 1px solid red;
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