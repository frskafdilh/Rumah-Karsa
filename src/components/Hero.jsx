import heroImg from '../assets/hero.png'

export default function Hero() {
  return (
    <section id="home" className="hero relative isolate flex items-center">
      <img
        src={heroImg}
        alt="Rumah modern Rumah Karsa"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div className="hero-overlay absolute inset-0 z-0" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="max-w-2xl">
          <p className="hero-eyebrow mb-2 text-xs font-semibold uppercase tracking-[0.2em] sm:mb-3 sm:text-sm">
            Rumah Karsa
          </p>
          <h1 className="mb-3 max-w-xl text-3xl font-bold leading-tight text-white sm:mb-4 sm:text-4xl lg:text-5xl">
            Temukan Rumah Impian
            <br />
            Untuk Masa Depan Anda
          </h1>
          <p className="mb-5 max-w-lg text-sm leading-6 text-[#F3F1ED] sm:mb-7 sm:text-base">
            Kami hadir untuk membantu Anda menemukan properti terbaik,
            dengan proses yang mudah, aman, dan terpercaya.
          </p>
        </div>
      </div>
    </section>
  )
}
