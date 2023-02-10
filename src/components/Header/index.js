import { Link } from 'react-router-dom'
import './style.css'
import { useSelector, useStore } from 'react-redux'
import { loadUser } from '../../redux'
import { useEffect } from 'react'
import { logOut } from '../../redux'



const Header = (props) => {
    const store = useStore()
    const userName = useSelector((state) => state.user)
    console.log(store)
    useEffect(() => {
        loadUser(store)
    })
    const signOut = async () => {
        await logOut(store)
    }
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
            {props.withSignin &&
                <div >
                    <Link className="main-nav-item" href="./sign-in.html" to="/signIn">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>}
            {props.withSignout && <div className='nav-user-page'>
                <a className="main-nav-item sign-out" href="./sign-in.html">
                    <i className="fa fa-user-circle "></i>
                    {userName.firstName}
                </a>
                <Link className="main-nav-item sign-out" href="./sign-in.html" to="/" onClick={signOut}>
                    <i className="fa fa-sign-out"></i>
                    Sign Out
                </Link>
            </div>}
        </nav>

    </div>
}

export default Header