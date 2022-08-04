import axios from "axios"


const baseURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit"
/*
const {name} = useContext(UserContext)

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

function postHabitDone() {

}

function postCancelHabitDone() {

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