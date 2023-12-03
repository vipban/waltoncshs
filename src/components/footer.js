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
                    <CustomLink to='materials'>Materials</CustomLink>
                    <CustomLink to='locations'>Locations</CustomLink>
                </ul>
            </nav>

            <section className='contact'>
                <h2>Contact the Developer</h2>
                <p>(470) 515-3049</p>
                <p>developer@recycler.com</p>
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