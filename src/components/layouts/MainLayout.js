import React from "react"
import { Switch, Route } from "react-router-dom"

import HomePage from "../../pages/HomePage"
import LoginPage from "../../pages/LoginPage"
import VideoDetailsPage from "../../pages/VideoDetailsPage"

import Navigation from "../../components/navigation/Navigation"
import Footer from "../Footer"
import SignInPage from "../../pages/SignInPage"
import ProtectedRoute from "../../pages/ProtectedRoute"
import UserDashboardPage from "../../pages/UserDashboardPage"

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-black">
            <Navigation />
            <Switch>
                <Route path="/videos/:videoId" component={VideoDetailsPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signin" component={SignInPage} />
                <ProtectedRoute
                    path="/dashboard"
                    component={UserDashboardPage}
                />
                <Route path="/" component={HomePage} />
            </Switch>
        </div>
    )
}

export default MainLayout
