import { Link } from 'react-router-dom'
import './style.css'


const Header = () => {
    return <div className='Header-style'>
        <nav className="main-nav">
            <Link className="main-nav-logo" href="./index.html" to="/">
                <img
                    className="main-nav-logo-image"
                    src="./images/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link className="main-nav-item" href="./sign-in.html" to="/signIn">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>
        </nav>

    </div>
}

export default Header