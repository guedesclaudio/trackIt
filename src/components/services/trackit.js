import axios from "axios"
import UserContext from "../contexts/userContext"
import { useContext } from "react"

const baseURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit"
/*
const {token} = useContext(UserContext)
console.log(token)*/
/*
const tokenFromLocal = localStorage.getItem(`${name}`)
const token = JSON.parse(tokenFromLocal)


const config = {
    headers: {
        "Authorization": `Bearer ${token}`
    }
}*/

function postRegistration(userRegistration) {
    const promise = axios.post(`${baseURL}/auth/sign-up`, userRegistration)
    return promise
}

function postLogin(userLogin) {
    const promise = axios.post(`${baseURL}/auth/login`, userLogin)
    return promise
}

function postHabit(userDataForm, config) {
    const promise = axios.post(`${baseURL}/habits`, userDataForm, config)
    return promise
}

function getHabits(config) {
    const promise = axios.get(`${baseURL}/habits`, config)
    return promise
}

function deleteHabit(id, config) {
    const promise = axios.delete(`${baseURL}/habits/${id}`, config)
    return promise
}

function getHabitsToday(config) {
    const promise = axios.get(`${baseURL}/habits/today`, config)
    return promise
}

function postHabitDone(id, config) {
    const promise = axios.post(`${baseURL}/habits/${id}/check`, {}, config)
    return promise
}

function postCancelHabitDone(id, config) {
    const promise = axios.post(`${baseURL}/habits/${id}/uncheck`, {}, config)
    return promise
}

function getHistoryDailyHabits() {

}

export {
    postRegistration, 
    postLogin, 
    postHabit, 
    getHabits, 
    deleteHabit, 
    getHabitsToday, 
    postHabitDone, 
    postCancelHabitDone,  
    getHistoryDailyHabits
}