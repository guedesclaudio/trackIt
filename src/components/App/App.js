import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import React from "react"
import Login from "../Login/Login.js"
import Today from "../Today/Today.js"
import Habit from "../Habit/Habit.js"
import History from "../History/History.js"
import Registration from "../Registration/Registration.js"
import UserContext from "../contexts/userContext.js"
import PrivateRoute from "../PrivateRoute/PrivateRoute.js"
import "../reset.css"


export default function App() {

    const [userData, setUserData] = useState({})
    const [callApi, setCallApi] = useState(false)
    const [porcentage, setPorcentage] = useState(0)
    const [teste, setTeste] = useState(false)
    const [habitsToday, setHabitsToday] = useState([])
    const [config, setConfig] = useState({})


    return (
        <UserContext.Provider 
        value = {{callApi, setCallApi, 
        porcentage, setPorcentage, 
        teste, setTeste,
        userData, setUserData,
        habitsToday, setHabitsToday,
        config, setConfig}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element = {<Login/>}/>
                    <Route path="/cadastro" element = {<Registration/>}/>
                    <Route path="/hoje" element = {
                        <PrivateRoute>
                            <Today/>
                        </PrivateRoute>
                    }/>
                    <Route path="/habitos" element = {
                        <PrivateRoute>
                            <Habit/>
                        </PrivateRoute>
                    }/>
                    <Route path="/historico" element = {
                        <PrivateRoute>
                            <History/>
                        </PrivateRoute>
                    }/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}