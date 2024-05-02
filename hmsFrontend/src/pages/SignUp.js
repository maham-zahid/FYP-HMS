import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import signValidation from './SignUpValidation'
import axios from 'axios'


export default function SignUp() {

        //bydefault field will be empty
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmpassword: ''
    })
    
    //for navigation to login page
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (Object.values(errors).every(error => error === '')) {
            // Clear the form by resetting values
            setValues({
                name: '',
                email: '',
                phone: '',
                password: '',
                confirmpassword: ''
            });
        }
    }, [errors]);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = signValidation(values);
        setErrors(validationErrors);
    
        if (Object.values(validationErrors).every(error => error === '')) {
            axios.post('http://localhost:8081/signup', values)
                .then(response => {
                    console.log(response.data);
                    window.alert("Successfully created new user");
                    navigate('/Dashboard');
                })
                .catch(err => {
                    window.alert("Error: Something went wrong");
                    console.log("Error:", err.response.data);
                });
        }
    };
    
        
  return (
    <div className='reset-container' style={{display: 'flex', height: '100vh', border: '25px solid #187A85'}}>
        
        <div className='p-3 rounded w-25 ' style={{ width: '400px', height: '535px', marginLeft: '580px', marginTop: '15px', border:'5px solid #187A85'}}>
            <form action="" onSubmit={handleSubmit}>
                <span>
                    <div>
                        <h1 className='mb-3' style={{ color: '#187A85', textAlign: 'center'}}>New User</h1>
                    </div>
                </span>

                <div className="mb-3">
                    <label htmlFor="name" className="name-label "  style={{ color: '#187A85' }}><strong>Name</strong></label>
                    <input name='name' type="text" id="name" onChange={(e) => setValues({ ...values, name: e.target.value })} className='form-control rounded-0 p-1' required style={{backgroundColor: '#cfcfcf'}}/>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="email-label " style={{ color: '#187A85' }}><strong>Email</strong></label>
                    <input name='email' type="email" id="email" onChange={(e) => setValues({...values, email: e.target.value})} className='form-control rounded-0 p-1' required style={{backgroundColor: '#cfcfcf'}}/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="phone" className="phone-label "  style={{ color: '#187A85' }}><strong>Phone</strong></label>
                    <input name='phone' type="text" id="phone" onChange={(e) => setValues({ ...values, phone: e.target.value })} className='form-control rounded-0 p-1' required style={{backgroundColor: '#cfcfcf'}}/>
                    {errors.phone && <span className='text-danger'>{errors.phone}</span>}
                </div>

            
                <div className="mb-3">
                    <label htmlFor="password" className="pwd-label" style={{ color: '#187A85' }}><strong>Create Password</strong></label>
                    <input name='password' type="password" id="password" onChange={(e) => setValues({...values, password: e.target.value})} className='form-control rounded-0 p-1' required style={{backgroundColor: '#cfcfcf'}}/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="confirmpassword" className="pwd-label" style={{ color: '#187A85' }}><strong>Confirm Password</strong></label>
                    <input name='confirmpassword' type="password" id="confirmpassword"  onChange={(e) => setValues({ ...values, confirmpassword: e.target.value })}className='form-control rounded-0 p-1' required style={{backgroundColor: '#cfcfcf'}}/>
                    {errors.confirmpassword && <span className='text-danger'>{errors.confirmpassword}</span>}
                </div>

            
                <button type='submit' className='btn w-100 mb-4 mt-2' style={{ backgroundColor: '#187A85', color: 'white' }}>Create User</button>
                
            </form>
        </div>       
    </div>
  )
}
