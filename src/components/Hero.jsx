import heroImg from '../assets/hero.png'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <img src={heroImg} alt="Rumah Karsa" className="hero-image" />
      <div className="hero-overlay" />

      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-eyebrow">Rumah Karsa</p>

          <h1 className="hero-title">Temukan Rumah, Wujudkan Karsa</h1>

          <p className="hero-description">
            Temukan hunian ideal bersama Rumah Karsa.
          </p>

          <a href="#visit" className="btn-primary hero-button">
            Jadwalkan Kunjungan
          </a>
        </div>
      </div>
    </section>
  )
}