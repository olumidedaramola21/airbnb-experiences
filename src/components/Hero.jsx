import hero from '../images/group77.png' 

export default function Hero() {
    return (
        <section className='hero--section'>
            <img src={hero} alt=""  className="hero--image"/>
                <h1 className='hero--header'>Online Experiences</h1>
                <p className='hero--text'>Unique activities to do from home, including cooking experiences with world-renowned chefs.</p>
            
        </section>
    )
}