import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Singup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')


    const handleEmail = email => {
        setEmail(email.target.value)
    }

    const handlePassword = password => {
        setEmail(password.target.value)
    }

    const handleConfirmPassword = confirmPassword => {
        setEmail(confirmPassword.target.value)
    }

    const handleCreateUser = user => {
        user.preventDefault()
        if( password  !== confirmPassword) {
            setError("Password din't match")
            return
        }
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassword} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPassword} type="password" name="confirm-password" id="" />
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" required />
                </form>
                <p>
                    Already Have an account? <Link className='form-link' to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Singup;