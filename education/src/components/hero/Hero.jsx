
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import {Link} from 'react-scroll'
function Hero() {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>we Ensure beter education for a better world</h1>
        <p>our cutting-edge curriculum is designed to empower students with the knowladge, skills, and experiences needed to excel in the dynamic field of education</p>
        <Link to='about' offset={-150} className='btn' >Explore more <img src={dark_arrow} alt="" /></Link>
      </div>

      
    </div>
  )
}

export default Hero
