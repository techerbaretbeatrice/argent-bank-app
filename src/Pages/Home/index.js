import './style.css'
import Header from '../../components/Header'
import FeatureItem from '../../components/FeatureItem'
import Footer from '../../components/Footer'

const HomePage = () => {
    return <div>
        <Header />
        <main>
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className="features">
                <FeatureItem urlImg='./images/icon-chat.png' title='You are our #1 priority' contain='Need to talk to a representative? You can get in touch through our
                        24/7 chat or through a phone call in less than 5 minutes.'/>
                <FeatureItem urlImg='./images/icon-money.png' title='More savings means higher rates' contain='The more you save with us, the higher your interest rate will be!' />
                <FeatureItem urlImg='./images/icon-security.png' title='Security you can trust' contain='We use top of the line encryption to make sure your data and money
                        is always safe.'/>
            </section>
        </main>
        <Footer />
    </div>
}

export default HomePage