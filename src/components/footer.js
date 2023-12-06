import React from 'react'
import { Link } from 'react-router-dom'
import './stylesheets/footer.css'

export default function Footer() {
    return (
        <section className='footer'>
            <nav className='footer-nav'>
                <h2>Navigation</h2>
                <ul>
                    <CustomLink to='/'>Home</CustomLink>
                    <CustomLink to='upcoming-events'>Upcoming Events</CustomLink>
                    <CustomLink to='sign-ups'>Sign-Ups</CustomLink>
                </ul>
            </nav>

            <section className='contact'>
                <h2>Contact Us</h2>
                <p>waltoncshs@gmail.com</p>
                <p><b>Club Sponsor:</b> Mr. Hubbard (Room 119)</p>
            </section>
        </section>
    )
}

function CustomLink({ to, children, ...props}) {
    return (
        <li>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}