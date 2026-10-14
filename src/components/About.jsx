import gambarTentang from '../assets/about/foto-tentang.jpg'

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-(--cream) px-6 py-10"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_2fr]">
        <img
          src={gambarTentang}
          alt="Foto-tentang"
          loading="lazy"
          className="w-full rounded-2xl object-cover shadow-sm"
        />

        <div>
          <span className="mb-1 block text-[0.7rem] font-bold tracking-[0.12em] text-(--brown)">
            TENTANG KAMI
          </span>
          <h2
            id="about-title"
            className="font-[Georgia,'Times_New_Roman',serif] text-[clamp(1.25rem,2vw,1.8rem)] font-bold leading-tight text-(--navy)"
          >
            Tentang Rumah Karsa
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-(--navy)/80">
            Rumah Karsa adalah platform properti terpercaya yang menghubungkan
            Anda dengan rumah dan apartemen terbaik di berbagai lokasi
            strategis. Kami hadir untuk memberikan solusi properti yang aman,
            mudah, dan menguntungkan.
          </p>
        </div>
      </div>
    </section>
  )
}
