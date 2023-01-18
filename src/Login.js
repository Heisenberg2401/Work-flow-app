import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        let pass = localStorage.getItem(email)
        console.log(pass);
        if(pass === password){
            sessionStorage.setItem(email,password);
        }
        else{
            console.log('Wrong Password');
        }
    }

    const register = e => {
        e.preventDefault();
        history.push('/Signup')
    }

    return (
        <div className='login'>

            <div className='login__container'>
                
                <h1>Log in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Log In</button>
                </form>

                <button onClick={register} className='login__registerButton'>Create your Account</button>
            </div>
        </div>
    )
}

export default Login