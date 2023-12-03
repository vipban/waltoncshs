import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './header.css'
import { useImperativeHandle } from 'react'

export default function Header() {
    return <nav className='nav'>
        <Link to='/' className='site-title'>Recycler</Link>
        <ul>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='materials'>Materials</CustomLink>
            <CustomLink to='locations'>Locations</CustomLink>
        </ul>
    </nav>
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