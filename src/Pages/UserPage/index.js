import './style.css'
import Header from '../../components/Header'
import AccountContent from '../../components/AccountContent'
import Footer from '../../components/Footer'
import { useSelector, useStore } from 'react-redux'
import { accountAmount, loadUser, logOut } from '../../redux'
import { useEffect } from 'react'
import NameEditor from '../../components/NameEditor'
import { useNavigate } from 'react-router'

/**
 *  user profile Page 
 */

const UserPage = () => {
    const store = useStore()
    const userName = useSelector((state) => state.user)
    const navigate = useNavigate()

    const amount = useSelector((state) => state.accountAmount)
    useEffect(() => {
        if (store.getState().login.token === null) {
            navigate('/')
            return
        }
        // we extract the payload from the jwt
        const [, payload] = store.getState().login.token.split('.')
        if (payload) {
            // we extract the expiration date from the payload exp is in second => we must pass it in millisecond to Date()
            const expiredAt = new Date(JSON.parse(atob(payload)).exp * 1000)
            if (expiredAt < new Date()) {
                logOut(store)
                navigate('/signIn')
                return
            }
        }

        loadUser(store)
        accountAmount(store)
    })

    return <div className='user-page'>
        <Header withSignout />
        <main className='main bg-dark' id='auto'>
            <div className="header">
                <h1>Welcome back<br />{userName.firstName} {userName.lastName}</h1>
                <NameEditor />

            </div>

            <AccountContent accountTitle="Argent Bank Checking (x8349)" accountAmount={`${amount.checkingAmount}`} accountAmountDescription="Available Balance" />
            <AccountContent accountTitle="Argent Bank Saving (x6712)" accountAmount={amount.savingAmount} accountAmountDescription="Available Balance" />
            <AccountContent accountTitle="Argent Bank credit Card (x8349)" accountAmount={amount.creditAmount} accountAmountDescription="current Balance" />
        </main>
        <Footer />

    </div>
}

export default UserPage