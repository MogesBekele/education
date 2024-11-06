import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonail from './components/testimonials/Testimonail'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import VideoPlayer from './components/videoPlayer/VideoPlayer'

function App() {
  const [playState, setPlayState] = useState(false)
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle= 'Our PROGRAM' title ='What We Offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subTitle= 'Gallery' title =' Campus photos'/>
      <Campus/>
      <Title subTitle= 'TESTIMONAILS' title ='What Student Says'/>
      <Testimonail/>
      <Title subTitle= 'Contact Us' title ='Get in Touch'/>
      <Contact/>
      <Footer/>

      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    
      
    </div>
  )
}

export default App