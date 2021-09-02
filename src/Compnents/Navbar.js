import {React} from 'react'
import {NavLink} from 'react-router-dom'
import logo from "../assets/SITAICS_Logo.png"
import "../App.css"
function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a href="/https://rru.ac.in/" className="navbar-brand"><img className="img-responsive2 image" src={logo} /></a>
            <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav list">
           <li> <NavLink className="navbar-item" activeClassName="is-active" to="/home">Home</NavLink></li>
           <li> <NavLink className="navbar-item" activeClassName="is-active" to="/dashboard">Dashboard</NavLink></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
