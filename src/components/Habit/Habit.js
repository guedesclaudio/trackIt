import { useState, useEffect, useContext } from "react";
import { getHabits } from "../services/trackit.js";
import {Container} from "../commom styles/allScreens.js"
import styled from "styled-components";
import Topo from "../Topo/Topo.js";
import Footer from "../Footer/Footer.js";
import FormHabit from "../FormHabit/FormHabit.js";
import ListHabits from "../ListHabits/ListHabits.js"
import UserContext from "../contexts/userContext.js";
import plusImg from "./plus.png"

export default function Habit() {

    const {callApi, config} = useContext(UserContext)
    const [plus, setPlus] = useState(false)
    const [checkData, setCheckData] = useState([])
    const [habit, setHabit] = useState("")

    useEffect(() => { 
        getHabits(config)
        .then(response => {
            setCheckData(response.data)
        })
        .catch(response => console.log(response))
    }, [callApi])

    return (
        <>
            <Topo/>
            <Container> 
                <Create>
                    <Title>
                        Meus hábitos
                    </Title>
                    <Plus onClick = {() => setPlus(!plus)}>
                        <img src = {plusImg}/>
                    </Plus>
                </Create>
                    {plus ? <FormHabit plus = {plus} setPlus = {setPlus} habit = {habit} setHabit = {setHabit}/> : ""}
                    {checkData.length > 0 ? <ListHabits/> :  
                    <Text>
                        Você não tem nenhum hábito cadastrado ainda. 
                        Adicione um hábito para começar a trackear!
                    </Text>
                    }
            </Container>
            <Footer/>
        </>    
    )
}

const Create = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Title = styled.h1`
    font-family: "Lexend Deca";
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    text-align: left;
    color: #126BA5;
    margin-left: 10px;
`
const Plus = styled.div`
    width: 40px;
    height: 35px;
    border-radius: 5px;
    background-color: #52B6FF;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Text = styled.p`
    font-family: "Lexend Deca";
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    margin: 20px 10px;
    color: #666666;
    text-align: justify;
`