import logo from '../images/logo.svg';
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <header>
            <nav className="nav">
                <img src={logo} className="App-logo" alt="logo" />
                <ul className="nav-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/githubcards">Github Hards</Link></li>
                    <li><Link to="/starmatch">StartMatch</Link></li>
                </ul>
            </nav>
        </header>
    )
}