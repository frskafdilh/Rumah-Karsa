
function Footer() {
return (
    <footer className="rk-footer" id="footer">
    <div className="rk-footer-container">

        <div className="rk-footer-grid">

        <div className="rk-footer-brand">
            <div className="rk-brand-heading">
            <img
                src="/logo.png"
                alt="Logo Rumah Karsa"
                className="rk-footer-logo"
            />

            <div>
                <h3>Rumah Karsa</h3>
                <span>Temukan Rumah, Wujudkan Karsa.</span>
            </div>
            </div>

            <p>
            Rumah Karsa membantu Anda menemukan hunian
            yang nyaman dan sesuai kebutuhan.
            Jelajahi berbagai pilihan properti
            untuk mewujudkan rumah impian Anda.
            </p>
        </div>

        <nav
            className="rk-footer-column"
            aria-label="Navigasi footer"
        >
            <h3>Jelajahi</h3>
            <ul>
            <li><a href="#home">Beranda</a></li>
            <li><a href="#properties">Properti</a></li>
            <li><a href="#about">Tentang</a></li>
            <li><a href="#calculator">Simulasi KPR</a></li>
            <li><a href="#contact">Kontak</a></li>
            </ul>
        </nav>

        <div className="rk-footer-column">
            <h3>Layanan Kami</h3>
            <ul>
            <li><a href="#properties">Jual Beli Properti</a></li>
            <li><a href="#properties">Sewa Properti</a></li>
            <li><a href="#calculator">Simulasi KPR</a></li>
            <li><a href="#visit">Kunjungan Properti</a></li>
            </ul>
        </div>

        <div className="rk-footer-column rk-footer-contact">
            <h3>Hubungi Kami</h3>

            <div className="rk-contact-item">
            <span aria-hidden="true">☎</span>
            <div>
                <strong>Telepon</strong>
                <a href="#contact">Lihat kontak kami</a>
            </div>
            </div>

            <div className="rk-contact-item">
            <span aria-hidden="true">⌖</span>
            <div>
                <strong>Lokasi</strong>
                <p>Medan, Sumatera Utara</p>
            </div>
            </div>

            <div className="rk-contact-item">
            <span aria-hidden="true">◷</span>
            <div>
                <strong>Jam Operasional</strong>
                <p>Lihat informasi di bagian Kontak</p>
            </div>
            </div>

            <a href="#contact" className="rk-contact-link">
            Informasi Kontak →
            </a>
        </div>

        </div>

        <div className="rk-footer-bottom">
        <p>
            © {new Date().getFullYear()} Rumah Karsa.
            Semua Hak Dilindungi.
        </p>

        <p>Temukan Rumah, Wujudkan Karsa.</p>
        </div>

    </div>
    </footer>
);
}

export default Footer;
