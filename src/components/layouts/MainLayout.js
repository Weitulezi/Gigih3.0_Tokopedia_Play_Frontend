import React from "react"
import { useLocation, Switch, Route } from "react-router-dom"

import HomePage from "../../pages/HomePage"
import LoginPage from "../../pages/LoginPage"
import VideoDetailsPage from "../../pages/VideoDetailsPage"

import Navigation from "../../components/navigation/Navigation"
import Footer from "../Footer"
import SignInPage from "../../pages/SignInPage"

const MainLayout = () => {
    const location = useLocation()

    return (
        <div className="min-h-screen bg-black">
            <Navigation />
            <Switch>
                <Route path="/videos/:videoId" component={VideoDetailsPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signin" component={SignInPage} />
                <Route path="/" component={HomePage} />
            </Switch>
            <Footer />
        </div>
    )
}

export default MainLayout
