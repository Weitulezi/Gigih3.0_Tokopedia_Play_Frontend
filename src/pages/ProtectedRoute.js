import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import { AuthContext } from "../contexts/userContext"

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { authData } = useContext(AuthContext)

    return (
        <Route
            {...rest}
            render={() => (authData ? <Component /> : <Redirect to="/" />)}
        />
    )
}

export default ProtectedRoute
