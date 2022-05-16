import logo from '../images/logo.svg';

export default function Navbar() {
    return (
        <header>
            <nav className="nav">
                <img src={logo} className="App-logo" alt="logo" />
                <ul className="nav-items">
                    <li><a href="/">Home</a></li>
                    <li><a href="/githubcards">Github Hards</a></li>
                    <li><a href="/starmatch">StartMatch</a></li>
                </ul>
            </nav>
        </header>
    )
}