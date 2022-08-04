import Logo from "../Logo/Logo.js"
import {useState} from "react"
import {postRegistration} from "../services/trackit.js"
import styled from "styled-components";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function Registration() {

    const [form, setForm] = useState({})
    const navigate = useNavigate()

    function handleForm({name, value}) {
        setForm({
            ...form,
            [name] : value
        })
    }

    function sendUserRegistration(event) {
        event.preventDefault()
        postRegistration(form)
        .then(response => navigate("/"))
        .catch(response => {
            if (response.status === "409") {
                alert("Esse nome de usuário já existe")
            }
            else {
                alert(`Ops! Ocorreu um erro inesperado, estamos trabalhando nisso! ERROR ${response.response.status}`)
            }
        })
    }

    return (
        <>
            <Logo/>
            <Container>
                <form onSubmit = {sendUserRegistration}>
                    <Input type = "email" placeholder = "email" name = "email" 
                    onChange = {event => handleForm({name : event.target.name, value : event.target.value})}/>
                    <Input type = "text" placeholder = "nome" name = "name" 
                    onChange = {event => handleForm({name : event.target.name, value : event.target.value})}/>
                    <Input type = "text" placeholder = "foto" name = "image" 
                    onChange = {event => handleForm({name : event.target.name, value : event.target.value})}/>
                    <Input type = "password" placeholder = "senha" name = "password" 
                    onChange = {event => handleForm({name : event.target.name, value : event.target.value})}/>
                    <Button type = "submit">Cadastrar</Button>
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
    color:#848484;
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;

    &&::placeholder {
        color: #DBDBDB;
        padding-left: 10px;
    }
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