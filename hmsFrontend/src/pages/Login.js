import React, { useState } from 'react';
import axios from 'axios';
import loginValidation from './LoginValidation';
import { Link } from 'react-router-dom';

export default function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate input fields
        const validationErrors = loginValidation(values);
        setErrors(validationErrors);

        // Check if there are validation errors before making the request
        if (!validationErrors.email && !validationErrors.password) {
            axios.post('http://localhost:8081/login', { email: values.email, password: values.password })
                .then(res => {
                    console.log(res.data);
                    if (res.status === 200) {
                        
                        localStorage.setItem('userEmail', values.email);
                        // Redirect to the Dashboard if login is successful
                        window.location.href = res.data.redirectTo;
                    } else if (res.status === 401 && res.data.error === "No record found") {
                        // Show an alert if the status is 401 (Unauthorized) and error is "No record found"
                        window.alert("Record not found");
                    } else {
                        // Handle other specific server errors
                        window.alert("Record not found");
                    }
                })
                .catch(err => {
                    if (err.response) {
                        // Server responded with a status code outside of 2xx range
                        if (err.response.status === 400 && err.response.data.error === "Pattern mismatch") {
                            // Show an alert if the status is 400 (Bad Request) and error is "Pattern mismatch"
                            window.alert("Invalid pattern for email or password");
                        } else {
                            // Handle other server errors with specific status codes
                            window.alert("Record not found");
                        }
                    } else if (err.request) {
                        // The request was made but no response was received
                        window.alert("No response received from server");
                    } else {
                        // Something happened in setting up the request that triggered an error
                        window.alert("An error occurred while processing your request");
                    }
                    console.log(err);
                });
        }
    };

  return (
    
    <div className='login-container' style={{display: 'flex', height: '100vh', border: '25px solid #187A85'}}>
        
            <div className='picture-container ' style={{flex: '1', overFlow: 'hidden'}}>
                
                <img src='images/hv.jpg' alt="Background" className="background-image " style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
            </div>
            <div className='form-container' style={{background: 'linear-gradient(30deg, rgb(24, 122, 133) 0%, rgb(209, 209, 209) 100%)', flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className='p-3 rounded' style={{ width: '400px',backgroundColor: 'transparent', border:'5px solid #ffffff'}}>
                <form action="" onSubmit={handleSubmit}>
               <span>
                    <div>
                        <h1 className='mb-4' style={{ backgroundColor: 'transparent', color: '#ffffff', textAlign: 'center'}}>Admin Login</h1>
                        </div>
                </span>
                <div className="mb-3">
                    <label htmlFor="email" className="email-label " style={{ color: 'white' }}>Email</label>
                    <input name='email' type="email" id="email"  onChange={(e) => setValues({...values, email: e.target.value})} className='form-control rounded-1 p-1' required />
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>

                <div>
                <div className="mb-1">
                    <label htmlFor="password" className="pwd-label" style={{ color: 'white' }}>Password</label>
                    <input name='password' type="password" id="password" onChange={(e) => setValues({...values, password: e.target.value})} className='form-control rounded-1 p-1' required />
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                    <Link to="/forgotpwd" style={{color:'white', fontSize: '13px'}} className='forgot-pwd mb-4 mt-2'>Forgot Password?</Link>
        
                </div>
                <button type='submit' className='btn mb-3 mt-4' style={{ fontSize: '22px', width: '110px',fontWeight: 'bold', backgroundColor: '#ffffff', color: '#187A85', marginLeft: '249px' }}>Login</button>
                
            </form>
            </div>
        </div>
  </div>

  )
}
