import UserContext from "../contexts/userContext"
import { useContext } from "react"

export default function PrivateRoute({children}) {

    const {userData} = useContext(UserContext)

    if (userData.token) {
        return (
            <>{children}</>
        )
    }
    else {
        return (
            <h1>Você não esta logado! Acesso não autorizado</h1>
        )
    }
}