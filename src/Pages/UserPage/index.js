import './style.css'
import Header from '../../components/Header'
import AccountContent from '../../components/AccountContent'
import Footer from '../../components/Footer'
import { useSelector, useStore } from 'react-redux'
import { accountAmount, loadUser, logout } from '../../redux'
import { useEffect } from 'react'
import NameEditor from '../../components/NameEditor'



const UserPage = () => {
    const store = useStore()
    const userName = useSelector((state) => state.user)
    const amount = useSelector((state) => state.accountAmount)
    console.log(store)
    useEffect(() => {
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

            <AccountContent accountTitle="Argent Bank Checking" accountAmount={`${amount.checkingAmount}`} accountAmountDescription="Available Balance" />
            <AccountContent accountTitle="Argent Bank Saving" accountAmount={amount.savingAmount} accountAmountDescription="Available Balance" />
            <AccountContent accountTitle="Argent Bank credit Card" accountAmount={amount.creditAmount} accountAmountDescription="current Balance" />
        </main>
        <Footer />

    </div>
}

export default UserPage