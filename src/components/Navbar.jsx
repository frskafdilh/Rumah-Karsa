import { useState } from 'react'
import logoImg from '../assets/logo.png'

const links = [
  { label: 'Beranda', href: '#home' },
  { label: 'Properti', href: '#properties' },
  { label: 'Tentang', href: '#about' },
  { label: 'Simulasi KPR', href: '#calculator' },
  { label: 'Kontak', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="site-nav">
        <a href="#home" className="site-brand" onClick={closeMenu}>
          <img
            src={logoImg}
            alt="Logo Rumah Karsa"
            className="brand-logo"
            style={{ height: '48px', width: 'auto', display: 'block' }}
          />
          <span>Rumah Karsa</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? '×' : '☰'}
        </button>

        <div
          id="primary-navigation"
          className={`site-menu ${menuOpen ? 'is-open' : ''}`}
        >
          <ul className="site-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link" onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#visit" className="btn-primary visit-button" onClick={closeMenu}>
            Jadwalkan Kunjungan
          </a>
        </div>
      </nav>
    </header>
  )
}