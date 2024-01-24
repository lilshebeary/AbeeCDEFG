import logo from '../assets/ABeeCDEFG2.svg'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/headerStyle.css'

const Header = () => {
  return (
    <div className='header-container' typeof='container'>
           <div className="hamburger"><FontAwesomeIcon icon={faBars} size='5x' /></div>
        <img src={logo} alt="Bee with ABCDEFG" /> 
    
        
    </div>
  )
}

export default Header
