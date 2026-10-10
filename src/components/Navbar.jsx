import { useState } from 'react'

const links = [
  { label: 'Beranda', href: '#home' },
  { label: 'Properti', href: '#properties' },
  { label: 'Tentang', href: '#about' },
  { label: 'Simulasi', href: '#calculator' },
  { label: 'Kontak', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen((open) => !open)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="bg-var(--cream) text-var(--navy)">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-semibold text-inherit no-underline" onClick={closeMenu}>
          Rumah Karsa
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-var(--navy)/20 text-xl md:hidden"
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
        </button>

        <div
            id="primary-navigation"
            className={`
                ${menuOpen ? 'flex' : 'hidden'}
                w-full flex-col gap-5 pt-5
                md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:pt-0
            `}
        >
          <ul className="m-0 flex list-none flex-col gap-4 p-0 md:flex-row md:items-center md:gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#visit" className="btn-primary" onClick={closeMenu}>
            Jadwalkan Kunjungan
          </a>
        </div>
      </nav>
    </header>
  )
}