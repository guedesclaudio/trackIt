import styled from "styled-components";
import Topo from "../Topo/Topo";
import Footer from "../Footer/Footer";
import FormHabit from "../FormHabit/FormHabit";
import { useState } from "react";

export default function Habit() {

    const [plus, setPlus] = useState(false)

    return (
        <>
            <Topo/>
            <Container>
                <Create>
                    <Title>
                        Meus hábitos
                    </Title>
                    <Plus onClick = {() => setPlus(!plus)}>

                    </Plus>
                </Create>
                    {plus ? <FormHabit/> : ""}
                <Text>
                    Você não tem nenhum hábito cadastrado ainda. 
                    Adicione um hábito para começar a trackear!
                </Text>
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
