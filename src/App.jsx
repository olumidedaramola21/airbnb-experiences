import './App.css'
import Navbar from './components/Navbar'
// import Hero from './components/Hero'
import Card from './components/Card'


function App() {
    

    return (
      <div className='app--container'>
      <Navbar />
      {/* <Hero /> */}
      <Card img='/picture1.png' rating="5.0" reviewCount={"(6)"} country="USA" title="Life lessongs with Katie Zaferes" price={136}/>
      </div>
    )
}

export default App
