import React from "react";
import Logo from "../Logo/Logo.js"
import {Link} from "react-router-dom"
import styled from "styled-components";


export default function Login() {
    return (
        <>
            <Logo/> 
            <Container>
                <form>
                    <Input type = "email" placeholder = "email"/>
                    <Input type = "password" placeholder = "senha"/>
                    <Button>Entrar</Button>
                </form>
                <Link to = {"/cadastro"}>
                    <Text>Não tem uma conta? Cadastre-se!</Text>
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