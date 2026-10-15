import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/mission', label: 'Mission' },
  { to: '/product', label: 'Product' },
  { to: '/blog', label: 'Blog' },
  { to: '/stories', label: 'Stories' }
]

export default function Navbar() {
  return (
    <header className="nav">
      <Link to="/" className="nav-brand" aria-label="VoiceMark home">
        <img src="/logo.png" alt="VoiceMark" className="nav-logo" />
      </Link>
      <nav className="nav-links">
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            className={({ isActive }) => 'nav-link' + (isActive ? ' is-active' : '')}
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
