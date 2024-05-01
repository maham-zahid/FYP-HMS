import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Forgotpwd() {

    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:8081/Forgotpwd', { email });
    
            if (response && response.data && response.data.message) {
                console.log(response.data.message);
                window.alert("Check your email for reset password link");
                navigate('/Login');
            } else {
                console.error("Invalid response format");
                window.alert("Error: Something went wrong");
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                console.error("Error:", error.response.data.message);
                window.alert("Error: Something went wrong");
            } else {
                console.error("Unexpected error format");
                window.alert("Unexpected error occurred");
            }
        }
    };
    
  return (
    <div className='forgot-container' style={{display: 'flex', height: '100vh', border: '25px solid #187A85'}}>
        
        <div className='p-3 rounded' style={{ width: '400px', height: '300px', marginLeft: '500px', marginTop: '100px', border:'5px solid #187A85'}}>
            <form action="" onSubmit={handleSubmit}>
                <span>
                    <div>
                        <h1 className='mb-4 mt-2' style={{color: '#187A85', textAlign: 'center'}}>Forgot Password</h1>
                    </div>
                </span>

                <div className="mb-3">
                    <label htmlFor="email" className="email-label " style={{ color: '#187A85' }}><strong>Enter Email</strong></label>
                    <input name='email' type="email" id="email" onChange={(e) => setEmail(e.target.value)} className='form-control rounded-1 p-1' style={{backgroundColor: '#cfcfcf'}} required/>
                </div>
            
                <button type='submit' className='btn mb-4 mt-5' style={{ backgroundColor: '#187A85', color: 'white', width: '100px', marginLeft: '254px'}}>Send</button>
                
            </form>
        </div>
    </div>       
    
  )
}
