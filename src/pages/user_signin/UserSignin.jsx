import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "../../axios"
import { AppContext } from '../../context/AppContext';
import { PageContext } from '../../context/PageContext';
import './usersignin.css'

export default function UserSignin() {
    const [errors, setErrors] = useState("");
    const [user, setUser] = useState({ userEmail: "", password: "" })
    const [isLoading, setIsLoading] = useState(false);
    const { setContext } = useContext(AppContext)
    const { setPage } = useContext(PageContext);


    const navigate = useNavigate();
    const gotoSignup = (e) => {
        e.preventDefault();
        navigate('/user/sign-up')
    }

    const handleChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        setErrors(false);
        const config = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            }
        }
        try {
            const { data } = await axios.post("/api/auth/signin", user, config).catch(err => {
                if (err.response.status === 401) {
                    setErrors(err.response.data.error)
                    throw new Error(err.response.data.error);
                } else {
                    setErrors("Internal Server Error")
                    throw new Error(`Internal Server Error`);
                }
            });
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
        <div className='signinPage'>
            <form onSubmit={handleSubmit}>
                <div className="signinWrapper">
                    <div id="closeBtn">
                        <button>
                            X
                        </button>
                    </div>
                    <h3>User Sign In</h3>
                    {errors ?
                        <div className="errorDiv">
                            <span className="errorMessage">{errors}</span>
                        </div> : null}
                    <input type="email" placeholder='Email' required name="userEmail" value={user.userEmail} onChange={handleChange} />
                    <input type="password" placeholder='Password' required name="password" value={user.password} onChange={handleChange} />
                    <button type="submit" className='signinButton' disabled={isLoading}>{isLoading ? "Loading..." : "Login"}</button>
                    <button className='gotosignUpButton' onClick={() => setPage("signup")} >Register</button>
                </div>
            </form>
        </div>
    )
}