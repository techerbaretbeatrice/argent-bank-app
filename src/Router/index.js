import { Route, Routes, BrowserRouter } from 'react-router-dom'
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
    return <div>
        <UserPage />
    </div>
}



export default Router