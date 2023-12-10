import picture from '../images/picture1.png'
import star from '../images/star 1.png'

export default function Card() {
    return (
        <div className="card--image">
            <img src={picture} alt="" className='card--image'/>
            <div className='card--stats'>
                <img src={star} alt="" />
                <span>5.0</span>
                <span>(6) . </span>
                <span>USA</span>
                <p className='card--location'>Life lessons with Katie Zaferes</p>
                <p className='card--price'>From $136 / person</p>
            </div>
        </div>
    )
}