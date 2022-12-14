import {useState} from "react"
import {postRegistration} from "../services/trackit.js"
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom";
import {ThreeDots} from "react-loader-spinner";
import {Page, Container, Text} from "../commom styles/loginAndRegistration.js"
import styled from "styled-components";
import Logo from "../Logo/Logo.js"


export default function Registration() {

    const [form, setForm] = useState({})
    const dots = <ThreeDots color="#FFFFFF" height={80} width={80}/>
    const [load, setLoad] = useState("Cadastrar")
    const [opacity, setOpacity] = useState(1)
    const [disabled, setDisabled] = useState("")
    const [background, setBackground] = useState("#FFFFFF")
    const navigate = useNavigate()

    function handleForm({name, value}) {
        setForm({
            ...form,
            [name] : value
        })
    }

    function sendUserRegistration(event) {
        event.preventDefault()
        setOpacity(0.7)
        setDisabled(disabled)
        setLoad(dots)
        setBackground("#F2F2F2")
        postRegistration(form)
        .then(response => navigate("/"))
        .catch(response => {
            if (response.response.status == 409) {
                alert("Esse nome de usuário já existe")
            }
            else if (response.response.status == 422) {
                alert(`Preencha os campos corretamente! ERROR ${response.response.status}`)
            }
            else {
                alert(`Ops! Ocorreu um erro inesperado, estamos trabalhando nisso! ERROR ${response.response.status}`)
            }
            setOpacity(1)
            setLoad("Cadastrar")
            setDisabled("")
            setBackground("#FFFFFF")
        })
    }

    return (
        <Page>
            <Logo/>
            <Container>
                <form onSubmit = {sendUserRegistration}>
                    <Input type = "email" placeholder = "email" name = "email" disabled = {disabled} background = {background}
                    onChange = {event => handleForm({name : event.target.name, value : event.target.value})}/>
                    <Input type = "text" placeholder = "nome" name = "name" disabled = {disabled} background = {background}
                    onChange = {event => handleForm({name : event.target.name, value : event.target.value})}/>
                    <Input type = "text" placeholder = "foto" name = "image" disabled = {disabled} background = {background}
                    onChange = {event => handleForm({name : event.target.name, value : event.target.value})}/>
                    <Input type = "password" placeholder = "senha" name = "password" disabled = {disabled} background = {background}
                    onChange = {event => handleForm({name : event.target.name, value : event.target.value})}/>
                    <Button type = "submit" disabled = {disabled} opacity = {opacity}>{load}</Button>
                </form>
                <Link to = {"/"}>
                    <Text>Já tem uma conta? Faça login!</Text>  
                </Link>
            </Container>
        </Page>
    )
}


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
    width: 308px;
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
`