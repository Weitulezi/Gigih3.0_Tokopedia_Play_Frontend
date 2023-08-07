import React from "react"
import { useLocation, Switch, Route } from "react-router-dom"

import HomePage from "../../pages/HomePage"
import LoginPage from "../../pages/LoginPage"

import Navigation from "../../components/navigation/Navigation"

const MainLayout = () => {
    const location = useLocation()

    return (
        <div className="min-h-screen bg-black">
            {location.pathname === "/" && <Navigation />}
            <Switch>
                <LoginPage path="/login" component={LoginPage} />
                <Route path="/" component={HomePage} />
            </Switch>
        </div>
    )
}

export default MainLayout
