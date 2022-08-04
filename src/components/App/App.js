import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import Login from "../Login/Login.js"
import Today from "../Today/Today.js";
import Habit from "../Habit/Habit.js"
import History from "../History/History.js"
import Registration from "../Registration/Registration.js"
import UserContext from "../contexts/userContext.js";
import "../reset.css"

export default function App() {

    const [token, setToken] = useState("")
    const [data, setData] = useState([])


    return (
        <UserContext.Provider value = {{token, setToken, data, setData}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element = {<Login/>}/>
                    <Route path="/cadastro" element = {<Registration/>}/>
                    <Route path="/hoje" element = {<Today/>}/>
                    <Route path="/habitos" element = {<Habit/>}/>
                    <Route path="/historico" element = {<History/>}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}