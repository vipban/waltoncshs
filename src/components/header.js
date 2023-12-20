import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './stylesheets/header.css'

export default function Header() {
    function handleClick() {
        document.getElementById('hamburger-toggle').click()
    }

    return (
        <nav className='nav'>
            <Link to='/' className='site-title'>Walton CSHS</Link>
            <div className='mobile-nav'>
                <label class='hamburger-menu'>
                    <input type='checkbox' name='' id='hamburger-toggle' />
                </label>
                <aside className='sidebar'>
                    <ul>
                        <CustomLink to='/' onClick={handleClick}>Home</CustomLink>
                        <CustomLink to='upcoming-events' onClick={handleClick}>Upcoming Events</CustomLink>
                        <CustomLink to='sign-ups' onClick={handleClick}>Sign-Ups</CustomLink>
                        <CustomLink to='officers' onClick={handleClick}>Officers</CustomLink>
                    </ul>
                </aside>
            </div>
            <ul className='desktop-nav'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='upcoming-events'>Upcoming Events</CustomLink>
                <CustomLink to='sign-ups'>Sign-Ups</CustomLink>
                <CustomLink to='officers'>Officers</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}