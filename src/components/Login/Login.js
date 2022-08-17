import {Link, useNavigate} from "react-router-dom"
import {useState, useContext} from "react"
import {postLogin} from "../services/trackit.js"
import {Page, Container, Text} from "../commom styles/loginAndRegistration.js"
import { ThreeDots } from "react-loader-spinner";
import Logo from "../Logo/Logo.js"
import styled from "styled-components";
import UserContext from "../contexts/userContext.js";


export default function Login() {

    const dots = <ThreeDots color="#FFFFFF" height={80} width={80}/>
    const [load, setLoad] = useState("Entrar")
    const [disabled, setDisabled] = useState("")
    const [background, setBackground] = useState("#FFFFFF")
    const [opacity, setOpacity] = useState(1)
    const [form, setForm] = useState({})
    const {userData, setUserData, setConfig} = useContext(UserContext)
    const navigate = useNavigate()

    
    function handleForm({name, value}) {
        setForm({
            ...form,
            [name] : value
        })
    }

    function sendUserLogin(event) {
        event.preventDefault()
        disabledForm()
        postLogin(form)
        .then(response => {
            setUserData({...userData,
                name: response.data.name, 
                token: response.data.token,
                image: response.data.image,
                email: response.data.email,
            })
            setConfig({
                headers: {
                    "Authorization": `Bearer ${response.data.token}`
                }
            })
            navigate("/hoje")
        }) 
        .catch(response => {
            activateForm()
            alert(`Informe o email e senha corretamente. ERROR ${response.response.status}`)
        })
    }

    function disabledForm() {
        setOpacity(0.7)
        setDisabled(disabled)
        setLoad(dots)
        setBackground("#F2F2F2")
    }

    function activateForm() {
        setOpacity(1)
        setLoad("Entrar")
        setDisabled("")
        setBackground("#FFFFFF")
    }

    return (
        <Page>
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
        </Page>
    )
}

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
    opacity: ${props => props.opacity};
`
