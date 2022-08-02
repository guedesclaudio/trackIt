import axios from "axios"

const baseURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit"

function postRegistration(userRegistration) {
    const promise = axios.post(`${baseURL}/auth/sign-up`, userRegistration)
    return promise
}

function postLogin(userLogin) {
    const promise = axios.post(`${baseURL}/auth/login`, userLogin)
    return promise
}

function postHabit() {

}

function getHabits() {

}

function deleteHabit() {

}

function getHabitsToday() {

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