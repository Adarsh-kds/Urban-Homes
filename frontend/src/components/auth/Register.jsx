import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './authentication.css'
import axios from 'axios'

const Register = () => {
    const [data, setData] = useState('');
    
    const navigate = useNavigate();

    const submitForm = async function (e) {
        e.preventDefault();
        const username = e.target[0].value.toLowerCase();
        // console.log(username);
        const email = e.target[1].value;
        const password = e.target[2].value;

        await axios.post("https://house-rental-backend-p9wx.onrender.com/auth/register", {
            username,
            email,
            password
        }).then((res) => {
            setData(res.data.message);
            navigate('/login');
        }).catch((err) => {
            setData(err.response.data.message);
        })
    }

    return (
        <div>
            <div className="auth-page">
                <div className="auth-left">
                    <div className="signup auth">
                        <h2>Sign Up</h2>

                        <form onSubmit={submitForm}>
                            <input type="text" placeholder="Username" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Sign Up</button>
                        </form>
                        <div>{data}</div>
                        <Link to="/login">Already have an account?</Link>
                    </div>
                </div>
                <div className="auth-right">
                    <img src="./bg.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Register