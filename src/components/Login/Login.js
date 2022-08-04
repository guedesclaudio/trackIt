import React from "react";
import Logo from "../Logo/Logo.js"
import {Link, useNavigate} from "react-router-dom"
import {useState} from "react"
import {postLogin} from "../services/trackit.js"
import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../contexts/userContext.js";



export default function Login() {

    const [form, setForm] = useState({})
    const {token, setToken, setPerfilImage} = useContext(UserContext)
    //const {name, setName} = useContext(UserContext)
    const navigate = useNavigate()

    function handleForm({name, value}) {
        setForm({
            ...form,
            [name] : value
        })
    }

    function sendUserLogin(event) {
        event.preventDefault()
        postLogin(form)
        .then(response => {
            setToken(response.data.token)
            setPerfilImage(response.data.image)
            //setName(response.data.name)
            const token = {name: response.data.name, token: response.data.token} //localstorage
            const serializedToken = JSON.stringify(token) //localstorage
            localStorage.setItem(`${response.data.name}`, serializedToken) //localstorage
            navigate("/hoje")
        }) 
        .catch(response => {
            resetForm()
            alert(`Informe o email e senha corretamente. ERROR ${response.response.status}`)
        })
    }

    function resetForm() {
        setForm({})
    }

    return (
        <>
            <Logo/> 
            <Container>
                <form onSubmit = {sendUserLogin}>
                    <Input type = "email" placeholder = "email" name = "email" 
                    onChange = {event => handleForm({name : event.target.name, value : event.target.value})}/>
                    <Input type = "password" placeholder = "senha" name = "password" 
                    onChange = {event => handleForm({name : event.target.name, value : event.target.value})}/>
                    <Button type = "submit">Entrar</Button>
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
    /*color: #D4D4D4;*/
    background-color: #FFFFFF;
    border: 1px solid #D4D4D4;
    margin: 5px auto;
    /*color:#DBDBDB;*/
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