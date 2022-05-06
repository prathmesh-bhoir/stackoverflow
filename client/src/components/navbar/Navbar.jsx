import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import decode from 'jwt-decode'

import { setCurrentUser } from '../../actions/currentUser'
import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'



const Navbar = () => {

  const dispatch = useDispatch()
  var User = useSelector((state) => (state.currentUserReducer))

  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/')
    dispatch(setCurrentUser(null))
  }

  useEffect(() => {
    const token = User?.token
    if(token){
      const decodedToken = decode(token)
      if(decodedToken.exp * 1000 < new Date().getTime()){
        dispatch({ type: 'LOGOUT' });
        navigate('/')
        dispatch(setCurrentUser(null))
      }
    }
    dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
  }, [dispatch, navigate, User?.token])

  return (
    <nav className='main-nav'>
        <div className="navbar">
            <Link to='/' className="nav-item nav-logo">
                <img src={logo} alt='logo' />
            </Link>
            <Link to='/' className="nav-item nav-btn">About</Link>
            <Link to='/' className="nav-item nav-btn">Products</Link>
            <Link to='/' className="nav-item nav-btn">For Teams</Link>
            <form>
                <input type="text" placeholder='search...'/>
                <img src={search} alt='search' width="18px" className='search-icon'/>
            </form>
            {User === null ?
              <Link to='/Auth' className="nav-item  nav-links">Log in</Link> :
              <>
                <Avatar backgroundColor='#009dff' px="12px" py="4px" borderRadius="50%" fontSize="20px"><Link to={`/Users/${User?.result?._id}`} style={{color: "white", textDecoration: 'none' }}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar> 
                <button className="nav-item  nav-links" onClick={handleLogout}>Log Out</button>
              </>                  
            }

        </div>
    </nav>
  )
}

export default Navbar