import './style.css'
import Header from '../../components/Header'
import AccountContent from '../../components/AccountContent'
import Footer from '../../components/Footer'

const UserPage = () => {
    return <div>
        <Header />
        <main className='main bg-dark auto'>
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <AccountContent accountTitle="" acountAmount="" accountAmountDescription="" />
            <AccountContent />
            <AccountContent />
        </main>
        <Footer />

    </div>
}

export default UserPage