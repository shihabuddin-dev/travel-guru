import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FirebaseAuthContext } from '../../provider/FirebaseAuthContext';

const Login = () => {
    const [error, setError] = useState('')
    const { loginUser } = use(FirebaseAuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target; //just for reuseable
        const email = form.email.value
        const password = form.password.value
        loginUser(email, password)
            .then((userCredential) => {
                const currentUser = userCredential.user;
                alert(currentUser)
                // console.log(currentUser)
                // when user come from another pages that time after complete login redirect this pages 
                navigate(`${location?.state ? location.state : '/'}`)
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode)
            });
    }

    return (
        <div className="card mt-6 mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h3 className='text-center font-semibold text-xl md:text-2xl'>Login Your Account</h3>
                <form onSubmit={handleLogin} className="fieldset mt-2">
                    {/* email  */}
                    <label className="label font-semibold text-sm">Email</label>
                    <input name='email' type="email" className="input focus:outline-none focus:shadow-outline focus:border-2" placeholder="Enter Your Email" required />
                    {/* password  */}
                    <label className="label font-semibold text-sm">Password</label>
                    <input name='password' type="password" className="input focus:outline-none focus:shadow-outline focus:border-2" placeholder="Enter Your Password" required />
                    {
                        error && <p className='text-sm text-red-500'>{error}</p>
                    }
                    <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    <p className='text-center mt-4'>Don't have an Account?<Link to='/register' className='link link-hover text-secondary'> Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;