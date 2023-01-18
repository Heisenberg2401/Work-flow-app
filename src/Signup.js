import React, { useState } from 'react';
import './Signup.css'
import { Link, useHistory } from "react-router-dom";

function Signup() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        localStorage.setItem(email,password);

        console.log(email, password);
        history.push('/Login');
    }


    return (
        <div className='login'>

            <div className='login__container'>
                
                <h1>Sign-up</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign Up</button>
                </form>

            </div>
        </div>
    )
}

export default Signup