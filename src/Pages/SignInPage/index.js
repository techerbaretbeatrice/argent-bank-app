import './style.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useStore } from 'react-redux'
import { login } from '../../redux'
import { useNavigate } from 'react-router'

const SignInPage = () => {
    const store = useStore()
    const navigate = useNavigate()
    console.log(store)
    const handleSubmit = async (evt) => {
        evt.preventDefault()
        const form = evt.currentTarget
        const password = form.password.value
        const userName = form.username.value
        console.log(form.password.value)
        await login(store, {
            email: userName,
            password, rememberMe: form.rememberMe.checked
        })
        navigate("/user")
    }

    return <div>
        <Header withSignin />
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input name='username' type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input name='password' type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" name='rememberMe' id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    <button className="sign-in-button">Sign In</button>


                </form>
            </section>
        </main>
        <Footer />

    </div>
}


export default SignInPage