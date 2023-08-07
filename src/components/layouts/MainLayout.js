import React from "react"
import { useLocation, Switch, Route } from "react-router-dom"

import HomePage from "../../pages/HomePage"
import LoginPage from "../../pages/LoginPage"
import VideoDetailsPage from "../../pages/VideoDetailsPage"

import Navigation from "../../components/navigation/Navigation"

const MainLayout = () => {
    const location = useLocation()

    return (
        <div className="min-h-screen bg-black">
            <Navigation />
            <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/videos/:videoId" component={VideoDetailsPage} />
                <Route path="/" component={HomePage} />
            </Switch>
        </div>
    )
}

export default MainLayout
