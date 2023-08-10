import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"
import { AuthContext } from "./contexts/userContext"
import MainLayout from "./components/layouts/MainLayout"
import { useState } from "react"
import { VideoContext } from "./contexts/videoContext"

const App = () => {
    const [authData, setAuthData] = useState(
        JSON.parse(window.localStorage.getItem("authData")),
    )
    const [videosData, setVideosData] = useState(null)

    return (
        <AuthContext.Provider value={{ authData, setAuthData }}>
            <VideoContext.Provider value={{ videosData, setVideosData }}>
                <div className="App">
                    <Router>
                        <MainLayout />
                    </Router>
                </div>
            </VideoContext.Provider>
        </AuthContext.Provider>
    )
}

export default App
