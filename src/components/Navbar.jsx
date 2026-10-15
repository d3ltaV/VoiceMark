import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/blog', label: 'Blog' }
]

export default function Navbar() {
  return (
    <header className="nav">
      <Link to="/" className="nav-brand" aria-label="VoiceMark home">
        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="VoiceMark" className="nav-logo" />
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
