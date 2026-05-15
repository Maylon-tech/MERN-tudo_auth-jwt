
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div className="logo">
        <Link to='/'>TaskSetter</Link>
          </div>
          
          <ul className="navbar">
              
          </ul>
    </header>
  )
}

export default Header
