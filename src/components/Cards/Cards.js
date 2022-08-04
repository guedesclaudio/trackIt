import styled from "styled-components";
import { useEffect, useState } from "react";
import { getHabitsToday } from "../services/trackit.js";
import UserContext from "../contexts/userContext.js";
import { useContext } from "react";

function Card({
    name,
    days
}) {
    return (
        <Container>
            <Habit>
                <Title>
                    {name}
                </Title>
                <Sequence>
                    Sequência atual: 3 dias  
                </Sequence>
                <Sequence>
                    Seu recorde: 5 dias
                </Sequence>
            </Habit>
            <Box>

            </Box>
        </Container>
    )
}

export default function Cards() {

    const {token} = useContext(UserContext)
    const [habitsToday, setHabitsToday] = useState([])

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        getHabitsToday(config)
        .then(response => setHabitsToday(response.data))
        .catch(response => console.log(response))
    },[])

    return (
        <>
            {habitsToday.map(value => <Card key = {value.id} name = {value.name} days = {value.days}/>)}
        </>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 20px auto;
    height: 94px;
    width: 340px;
    border-radius: 5px;
    background: #FFFFFF;
    color: #666666;
`

const Habit = styled.div`
    
`

const Title = styled.h1`
    font-family: "Lexend Deca";
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    text-align: left;
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
    background: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
`