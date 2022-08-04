import styled from "styled-components";
import Topo from "../Topo/Topo.js";
import Footer from "../Footer/Footer.js";
import FormHabit from "../FormHabit/FormHabit.js";
import ListHabits from "../ListHabits/ListHabits.js"
import { useState, useEffect } from "react";
import { useContext } from "react";
import { getHabits } from "../services/trackit.js";
import UserContext from "../contexts/userContext.js";
import plusImg from "./plus.png"

export default function Habit() {

    const {token, callApi} = useContext(UserContext)
    const [plus, setPlus] = useState(false)
    const [ teste, setTeste] = useState([])

    useEffect(() => { //so pra testar, nao é o lugar dela aqui , tirar as variaveis que nao for usar mais
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        getHabits(config)
        .then(response => {
            setTeste(response.data)
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
                    {plus ? <FormHabit plus = {plus} setPlus = {setPlus}/> : ""}
                    {teste.length > 0 ? <ListHabits/> :  
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

const Container = styled.div`
    margin-top: 90px;
    margin-bottom: 140px;
`
const Create = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.h1`
    font-family: Lexend Deca;
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
