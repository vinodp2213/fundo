import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../commons/isAuth'
import logo from '../../images/fundo-logo.JPG'
import '../../App.css';
const Header = (props) => {
    return (
        <div className="navbar-fixed">
            <nav className="black">
                <div>
                    <Link to='/' className="brand-logo"><img src={logo} className='logo' alt='logo'></img></Link>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to ='/campaign/list'>Browse campaign</Link></li>
                        <li><Link to='/how-it-works'>How it works?</Link></li>
                        {
                        !isAuthenticated(props.user) && (
                        <React.Fragment>
                            <li><Link to='/users/register'>Register</Link></li>
                            <li><Link to='/users/login'>Login</Link></li>
                        </React.Fragment>
                        )
                        }
                        {
                        isAuthenticated(props.user) && (
                        <React.Fragment>
                            <li><Link to = '/campaign/new'> Start fundraiser</Link></li>
                            <li><Link to='/users/logout'>Logout</Link></li>
                            <li><Link to='/users/account'>My Profile</Link></li>
                        </React.Fragment>
                        )
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      user:state.user
    }
  }
  
export default connect(mapStateToProps)(Header)