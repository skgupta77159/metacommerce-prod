import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "../../axios"
import './usersignup.css'
import { AppContext } from '../../context/AppContext';
import { PageContext } from '../../context/PageContext';

export default function UserSignup() {

    const [errors, setErrors] = useState("");
    const [user, setUser] = useState({ userName: "", userEmail: "", password: "", cpassword: "" })
    const [isLoading, setIsLoading] = useState(false);
    const { setContext } = useContext(AppContext)
    const { setPage } = useContext(PageContext)

    const navigate = useNavigate();
    const gotoSignin = (e) => {
        e.preventDefault();
        navigate('/user/sign-in')
    }

    const handleChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        console.log(user)
        setIsLoading(true)
        setErrors(false);
        const config = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            }
        }
        try {
            const { data } = await axios.post("/api/auth/signup", user, config).catch(err => {
                if (err.response.status === 401) {
                    setErrors(err.response.data.error)
                    throw new Error(err.response.data.error);
                } else {
                    setErrors("Internal Server Error")
                    throw new Error(`Internal Server Error`);
                }
            });
            console.log(data)
            localStorage.setItem("userAuthToken", data.token);
            localStorage.removeItem("adminAuthToken");
            setContext()
            setIsLoading(false);
            setPage("home")
        } catch (err) {
            setIsLoading(false)
        }

    }

    return (
        <div className='signupPage'>
            <form onSubmit={handleSubmit} className='signupPageWrapper'>
                <div className="signupWrapper">
                    <div className="signupLeft">
                        <h3>User Sign Up</h3>
                        {errors ?
                            <div className="errorDiv">
                                <span className="errorMessage">{errors}</span>
                            </div> : null}
                        <input type="text" placeholder='Name' required name="userName" value={user.userName} onChange={handleChange} />
                        <input type="email" placeholder='Email' required name="userEmail" value={user.userEmail} onChange={handleChange} />
                        <input type="password" placeholder='Password' required name="password" value={user.password} onChange={handleChange} />
                        <input type="password" placeholder='Confirm Password' required name="cpassword" value={user.cpassword} onChange={handleChange} />
                        <button type="submit" className='signupButton' disabled={isLoading}>{isLoading ? "Loading..." : "Register"}</button>
                        <button className='gotosignInButton' onClick={()=> setPage('signin')} >Sign In</button>
                    </div>
                </div>
            </form>
        </div>
    )
}