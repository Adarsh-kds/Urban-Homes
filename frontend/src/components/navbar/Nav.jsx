import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './nav.css'

const Nav = () => {
    const [menu, setMenu] = useState(false);

    const showMenu = () => {
        setMenu(!menu);
    }

    let { user } = useContext(AuthContext);

    const navigate = useNavigate();
    function redirectToProfile() {
        navigate('/profile');
    }

    return (
        <div>
            <nav className="navbar">
                <div className="left">
                    <div className='logo'>
                        <img src="/logo.png" alt="" />
                        <div>Urban Homes</div>
                    </div>
                    <Link className="logo-seen" to='/'>
                        <img src="/logo.png" alt="" />
                        <span>Urban Homes</span>
                    </Link>
                    <Link to='/properties'>About</Link>
                    <Link to='/properties'>Listings</Link>
                    {user ? <Link to='/profile/createpost'>Add Listing</Link> : null}
                    <Link to='/profile'>User Profile</Link>
                </div>
                <img className='menu' src="/menu.png" alt="" onClick={showMenu} />
                <div className={!menu ? 'close-menu menu' : 'show-menu'}>
                    <Link to='/properties'>Listings</Link>
                    {user ? <Link to='/profile/createpost'>Add Listing</Link> : null}
                    {user ? <Link to='/profile'>User Profile</Link> : <Link to='/login'>Login</Link>}
                    {!user && <Link to='/register'>Register</Link>}
                </div>
                <div className="right">
                    {user ? <div className='login-register'><div className='user-pfp'><img onClick={redirectToProfile} src={user.avatar || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt="avatar" /></div></div> : <div className='login-register'><Link to='/login'>Login</Link> <Link to='/register'>Register</Link></div>}
                </div>
            </nav>
        </div>
    )
}

export default Nav