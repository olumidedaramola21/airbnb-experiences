import './App.css'
import Navbar from './components/Navbar'
// import Hero from './components/Hero'
import Card from './components/Card'
import img from './images/picture1.png'

function App() {
    

    return (
      <div className='app--container'>
      <Navbar />
      {/* <Hero /> */}
      <Card img={img}/>
      </div>
    )
}

export default App
