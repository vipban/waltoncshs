import React, { useState } from 'react'
import './stylesheets/officer-dashboard.css'

export default function OfficerDashboard() {
    const [password, setPassword] = useState('')
    const officerPassword = 'waltoncshsofficers'
    
    function handleSubmit(event) {
        event.preventDefault()
        const inputtedPassword = event.target.elements.password.value
        setPassword(inputtedPassword)
    }
    
    if (password === officerPassword) {     // Correct Input
        return (
            <section className="officer-dashboard">
                <h1>Officer Dashboard</h1>
                <div className='officer-buttons'>
                    <button>Sign-Up Details</button>
                    <button>Important Links</button>
                    <button>Important Website Information</button>
                </div>
            </section>
        )
    } else if (password === '') {   // No Input
        return (
            <form onSubmit={handleSubmit} className='officer-password-form'>
                <label htmlFor='password'>Enter the Walton CSHS Officer Password:</label>
                <input type="password" id='password' name='password' className='officer-input'/>
                <input type='submit' value='Submit' className='officer-submit'/>
            </form>
        )
    } else {    // Wrong Input
        return (
            <>
                <form onSubmit={handleSubmit} className='officer-password-form'>
                    <label htmlFor='password'>Enter the Walton CSHS Officer Password:</label>
                    <input type="password" id='password' name='password' className='officer-input'/>
                    <input type='submit' value='Submit' className='officer-submit'/>
                </form>
                <h1>Incorrect Password</h1>
            </>
        )
    }
}