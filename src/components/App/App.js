import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../Login/Login.js"
import Today from "../Today/Today.js";
import Registration from "../Registration/Registration.js"
import "../reset.css"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Login/>}/>
                <Route path="/cadastro" element = {<Registration/>}/>
                <Route path="/today" element = {<Today/>}/>
            </Routes>
        </BrowserRouter>
    )
}