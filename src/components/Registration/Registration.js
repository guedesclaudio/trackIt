import Logo from "../Logo/Logo.js"

import styled from "styled-components";
import {Link} from "react-router-dom"

export default function Registration() {
    return (
        <>
            <Logo/>
            <Container>
                <form>
                    <Input type = "email" placeholder = "email"/>
                    <Input type = "password" placeholder = "senha"/>
                    <Input type = "text" placeholder = "nome"/>
                    <Input type = "text" placeholder = "foto"/>
                    <Button>Cadastrar</Button>
                </form>
                <Link to = {"/"}>
                    <Text>Já tem uma conta? Faça login!</Text>  
                </Link>
            </Container>
        </>
    )
}


const Container = styled.div`
    width: 303px;
    margin: 0 auto;
`

const Input = styled.input`
    height: 45px;
    width: 303px;
    border-radius: 5px;
    color: #D4D4D4;
    background-color: #FFFFFF;
    border: 1px solid #D4D4D4;
    margin: 5px auto;
    color:#DBDBDB;
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
`

const Button = styled.button`
    height: 45px;
    width: 303px;
    border-radius: 5px;
    background: #52B6FF;
    border: none;
    color: #FFFFFF;
    font-size: 21px;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    line-height: 26px;
`

const Text = styled.h1`
    margin-top: 20px;
    text-align: center;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    color: #52B6FF;
    text-decoration-line: underline;
`