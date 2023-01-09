import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ErrorPage from '../Pages/ErrorPage'
import SignInPage from '../Pages/SignInPage'
import UserPage from '../Pages/UserPage'
import HomePage from '../Pages/Home'

const Router = () => <BrowserRouter >
    <div>
        <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/signIn" element={<SignIn />}>
            </Route>
            <Route path="/user" element={<User />} >
            </Route>
            <Route path="*" element={<Error />}>
            </Route>
        </Routes>
    </div>
</BrowserRouter>

function Home() {
    return <div>
        <HomePage />
    </div>
}

function SignIn() {
    return <div>
        <SignInPage />
    </div>
}

function User() {
    // chercher dans le store que le token est bien present
    // si oui, tu renvoie le composant UserPage
    // si non, tu Navigate to login
    return <div>
        <UserPage />
    </div>
}

function Error() {
    return <ErrorPage />
}

export default Router