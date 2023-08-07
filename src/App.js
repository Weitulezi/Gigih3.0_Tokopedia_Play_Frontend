import logo from "./logo.svg"
import "./App.css"

import { BrowserRouter as Router } from "react-router-dom"

import MainLayout from "./components/layouts/MainLayout"

const App = () => {
    return (
        <div className="App">
            <Router>
                <MainLayout />
            </Router>
        </div>
    )
}

export default App
