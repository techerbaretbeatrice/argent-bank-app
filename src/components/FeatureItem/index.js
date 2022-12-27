import './style.css'

const FeatureItem = (props) => {
    const { urlImg, title, contain } = props
    return <div className='feature-item'>
        <img
            src={urlImg}
            alt="Chat Icon"
            className="feature-icon"
        />
        <h3 className="feature-item-title">{title}</h3>
        <p>
            {contain}
        </p>
    </div>
}

export default FeatureItem