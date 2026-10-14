function Contact() {
  const itemClass = "flex items-start gap-3";
  const iconClass =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--caramel)]/30";
  const titleClass = "text-sm font-semibold text-[color:var(--navy)]";
  const textClass = "text-sm text-[color:var(--navy)]/70";

  return (
    <section id="contact" className="bg-[color:var(--cream)] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-widest uppercase text-[color:var(--brown)]">
          Kontak Kami
        </p>
        <h2 className="mt-2 text-3xl font-bold text-[color:var(--navy)]">
          Hubungi Kami
        </h2>
        <p className="mt-3 max-w-xl text-[color:var(--navy)]/70">
          Kami siap membantu Anda mendapatkan informasi lebih lengkap mengenai
          properti dan layanan kami.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className={itemClass}>
            <span className={iconClass} aria-hidden="true">📞</span>
            <div>
              <h3 className={titleClass}>Telepon</h3>
              <p className={textClass}>+62 812-3456-7890</p>
            </div>
          </div>

          <div className={itemClass}>
            <span className={iconClass} aria-hidden="true">✉️</span>
            <div>
              <h3 className={titleClass}>Email</h3>
              <p className={textClass}>info@rumahkarsa.com</p>
            </div>
          </div>

          <div className={itemClass}>
            <span className={iconClass} aria-hidden="true">📍</span>
            <div>
              <h3 className={titleClass}>Alamat Kantor</h3>
              <p className={textClass}>
                Jl. Melati No. 12, Medan, Sumatera Utara
              </p>
            </div>
          </div>

          <div className={itemClass}>
            <span className={iconClass} aria-hidden="true">🕗</span>
            <div>
              <h3 className={titleClass}>Jam Operasional</h3>
              <p className={textClass}>08.00 - 20.00, Senin - Minggu</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Chat via WhatsApp
          </a>

          <ul className="m-0 flex list-none gap-4 p-0">
            <li>
              <a href="#" className="nav-link">Instagram</a>
            </li>
            <li>
              <a href="#" className="nav-link">Facebook</a>
            </li>
            <li>
              <a href="#" className="nav-link">TikTok</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;