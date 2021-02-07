import React from 'react'
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
function App() {
    return (
        <div className="App">
        <Router>
            <Navbar />
            
                <Route path="/" exact component={Home}></Route>

        </Router>
        </div>
    )
}

export default App;
