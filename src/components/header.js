import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './stylesheets/header.css'

export default function Header() {
    return (
        <nav className='nav'>
            <Link to='/' className='site-title'>Walton CSHS</Link>
            <ul>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='calendar'>Calendar</CustomLink>
                <CustomLink to='events'>Events</CustomLink>
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