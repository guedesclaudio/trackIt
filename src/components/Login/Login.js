import React from "react";
import Logo from "../Logo/Logo.js"
import {Link, useNavigate} from "react-router-dom"
import {useState} from "react"
import {postLogin} from "../services/trackit.js"
import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../contexts/userContext.js";
import { ThreeDots } from "react-loader-spinner";


export default function Login() {

    const dots = <ThreeDots color="#FFFFFF" height={80} width={80}/>
    const [load, setLoad] = useState("Entrar")
    const [disabled, setDisabled] = useState("")
    const [background, setBackground] = useState("#FFFFFF")
    const [opacity, setOpacity] = useState(1)
    const [form, setForm] = useState({})
    const {setToken, setPerfilImage} = useContext(UserContext)
    
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
        setOpacity(0.7)
        setDisabled(disabled)
        setLoad(dots)
        setBackground("#F2F2F2")
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
            setOpacity(1)
            setLoad("Entrar")
            setDisabled("")
            setBackground("#FFFFFF")
            alert(`Informe o email e senha corretamente. ERROR ${response.response.status}`)
        })
    }

    function resetForm() {
        console.log(form) //tirar essa funcao
        setForm({})
    }

    return (
        <>
            <Logo/> 
            <Container>
                <form onSubmit = {sendUserLogin}>
                    <Input type = "email" placeholder = "email" name = "email" disabled = {disabled} background = {background}
                    onChange = {event => handleForm({name : event.target.name, value : event.target.value})}/>
                    <Input type = "password" placeholder = "senha" name = "password" disabled = {disabled} background = {background}
                    onChange = {event => handleForm({name : event.target.name, value : event.target.value})}/>
                    <Button type = "submit" disabled = {disabled} opacity = {opacity}>{load}</Button>
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
    color: #848484;
    background-color: ${props => props.background};
    border: 1px solid #D4D4D4;
    margin: 5px auto;
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    outline: none;

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
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${props => props.opacity};
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