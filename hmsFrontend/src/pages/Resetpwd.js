import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Resetpwd() {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { token } = useParams();
    //console.log('Token before request:', token);


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                'http://localhost:8081/Resetpwd',
                { token: token, password },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            console.log('Full Response:', response);

            if (response && response.data && response.data.message) {
                console.log(response.data.message);
                window.alert('Password reset successfully');
                navigate('/Login');
            } else {
                console.error('Invalid response format');
                window.alert('Error: Something went wrong');
            }
        
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                console.error('Error:', error.response.data.message);
                window.alert('Error: Something went wrong');
            } else {
                console.error('Unexpected error format');
                window.alert('Unexpected error occurred');
            }
        }
    };

    return (
        <div className='reset-container' style={{display: 'flex', height: '100vh', border: '25px solid #187A85'}}>
        
            <div className='p-3 rounded w-25' style={{ width: '400px', height: '320px', marginLeft: '500px', marginTop: '100px', border:'5px solid #187A85'}}>
                <form action='' onSubmit={handleSubmit}>
                    <span>
                        <div>
                            <h1 className='mb-4 mt-2' style={{ color: '#187A85', textAlign: 'center' }}>
                                Reset Password
                            </h1>
                        </div>
                    </span>

                    <div className='mb-3'>
                        <label htmlFor='password' className='pwd-label ' style={{ color: '#187A85' }}>
                            <strong>New Password</strong>
                        </label>
                        <input
                            name='password'
                            type='password'
                            id='password'
                            onChange={(e) => setPassword(e.target.value)}
                            className='form-control rounded-0 p-1' style={{backgroundColor: '#cfcfcf'}}
                            required
                        />
                        <label htmlFor='password' className='pwd-label ' style={{ color: '#187A85' }}>
                            <strong>Confirm Password</strong>
                        </label>
                        <input
                            name='password'
                            type='password'
                            id='password'
                            onChange={(e) => setPassword(e.target.value)}
                            className='form-control rounded-0 p-1' style={{backgroundColor: '#cfcfcf'}}
                            required
                        />
                    </div>

                    <button type='submit' className='btn mb-3 mt-3' style={{ backgroundColor: '#187A85', color: 'white', width: '100px', marginLeft: '185px' }}>
                        Reset
                    </button>
                </form>
            </div>
        </div>
    );
}
