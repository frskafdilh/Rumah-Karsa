import { useEffect, useState } from "react";

import imgMedanResidence from "../assets/properties/apartemen_medan_residence.jpg";
import imgHorizon from "../assets/properties/apartemen_mewah.jpg";
import imgSkylinePremium from "../assets/properties/apartemen_premium.jpg";
import imgClusterAtria from "../assets/properties/rumah_cluster.jpg";
import imgBHG from "../assets/properties/rumah_minimalis.jpg";
import imgPaddyView from "../assets/properties/rumah_minimalis_2.jpg";
import imgOakHome from "../assets/properties/rumah_modern_sederhana.jpg";
import imgTropicalHaven from "../assets/properties/rumah_modern_tropis.jpg";
import imgNordicHouse from "../assets/properties/rumah_scandinavian.jpg";
import imgGriyaAsri from "../assets/properties/rumah_tipe_45.jpg";

const propertiesData = [
  {
    nama: "Medan Residence",
    kategori: "Apartemen",
    tipe: "Apartemen",
    gambarUtama: imgMedanResidence,
    status: ["Dijual", "Disewakan"],
    lokasi: "Medan, Sumatera Utara",
    hargaJual: "1.250.000.000",
    hargaSewa: "45.000.000/tahun",
    kamarTidur: "2",
    kamarMandi: "1",
    luasBangunan: "72 m²",
    deskripsi: "Unit apartemen nyaman dengan pemandangan kota dan perbukitan melalui jendela panoramic. Interior modern dengan nuansa hangat, cocok untuk hunian pribadi atau investasi.",
    fasilitas: ["Kolam Renang", "Keamanan 24 Jam", "Area Parkir", "City & Mountain View", "Semi-Furnished"],
  },
  {
    nama: "The Horizon Residences",
    kategori: "Apartemen",
    tipe: "Apartemen Mewah",
    gambarUtama: imgHorizon,
    status: ["Dijual"],
    lokasi: "Mega Kuningan, Jakarta Selatan",
    hargaJual: "9.200.000.000",
    kamarTidur: "3",
    kamarMandi: "2",
    luasBangunan: "165 m²",
    deskripsi: "Apartemen mewah dengan city view memukau. Interior modern elegan dengan sentuhan marmer. Ruang tamu luas terhubung dengan balkon, dapur dilengkapi island marmer eksklusif.",
    fasilitas: ["Infinity Pool", "Sky Lounge", "Gym", "Keamanan 24 Jam", "Balkon City View", "Smart Home System"],
  },
  {
    nama: "The Skyline Premium Residence",
    kategori: "Apartemen",
    tipe: "Apartemen Premium",
    gambarUtama: imgSkylinePremium,
    status: ["Dijual", "Disewakan"],
    lokasi: "SCBD, Jakarta Selatan",
    hargaJual: "6.500.000.000",
    hargaSewa: "180.000.000/tahun",
    kamarTidur: "3",
    kamarMandi: "2",
    luasBangunan: "145 m²",
    deskripsi: "Apartemen mewah dengan city view spektakuler. Interior modern elegan dengan konsep open plan dan balkon luas. Dilengkapi fasilitas rooftop infinity pool.",
    fasilitas: ["Infinity Pool", "Rooftop Garden", "Gym", "Balkon City View", "Smart Home System", "One Gate System"],
  },
  {
    nama: "Cluster Atria Modern",
    kategori: "Rumah",
    tipe: "Rumah Cluster (2 Lantai)",
    gambarUtama: imgClusterAtria,
    status: ["Dijual"],
    lokasi: "Serpong, Tangerang Selatan",
    hargaJual: "1.850.000.000",
    kamarTidur: "3",
    kamarMandi: "2",
    luasTanah: "90 m²",
    luasBangunan: "120 m²",
    deskripsi: "Hunian cluster modern minimalis dengan desain fasad elegan. Dapur island mewah lengkap dengan built-in oven. Ruang tamu luas terhubung taman belakang. Kamar mandi utama dengan skylight.",
    fasilitas: ["One Gate System 24 Jam", "Kitchen Set Lengkap", "Taman Belakang", "Kamar Mandi Skylight", "Lantai Granit Premium", "Carport"],
  },
  {
    nama: "BHG Minimalist Residence",
    kategori: "Rumah",
    tipe: "Rumah Minimalis (2 Lantai)",
    gambarUtama: imgBHG,
    status: ["Disewakan"],
    lokasi: "Kemang, Jakarta Selatan",
    hargaSewa: "120.000.000/tahun",
    kamarTidur: "2",
    kamarMandi: "2",
    luasTanah: "75 m²",
    luasBangunan: "110 m²",
    deskripsi: "Hunian minimalis 2 lantai bergaya industrial-Scandinavian. Desain built-in furniture kayu memaksimalkan ruang. Taman dalam (courtyard) memberikan pencahayaan alami ke setiap ruangan.",
    fasilitas: ["Taman Dalam (Indoor Garden)", "Balkon Lantai 2", "Kamar Mandi Skylight", "Dapur U-Shape Beton", "Full Furnished", "Carport"],
  },
  {
    nama: "The Paddy View Villa",
    kategori: "Rumah",
    tipe: "Rumah / Villa (2 Lantai)",
    gambarUtama: imgPaddyView,
    status: ["Dijual", "Disewakan"],
    lokasi: "Ubud, Bali",
    hargaJual: "4.800.000.000",
    hargaSewa: "250.000.000/tahun",
    kamarTidur: "2",
    kamarMandi: "2",
    luasTanah: "300 m²",
    luasBangunan: "160 m²",
    deskripsi: "Hunian minimalis 2 lantai berkonsep tropical resort dengan pemandangan sawah. Dek kayu luas, dapur semi-outdoor, kolam ikan koi, serta kamar utama dengan view sawah dan kamar mandi bernuansa spa.",
    fasilitas: ["Kolam Ikan Koi", "Taman Stepping Stone", "Dapur Outdoor", "Balkon Sawah", "Kamar Mandi Batu Alam", "Material Kayu Solid"],
  },
  {
    nama: "The Oak Home",
    kategori: "Rumah",
    tipe: "Rumah Modern Sederhana",
    gambarUtama: imgOakHome,
    status: ["Dijual"],
    lokasi: "BSD City, Tangerang Selatan",
    hargaJual: "3.250.000.000",
    kamarTidur: "3",
    kamarMandi: "2",
    luasTanah: "120 m²",
    luasBangunan: "100 m²",
    deskripsi: "Rumah modern minimalis berkonsep open-plan dengan perpaduan warna netral dan aksen kayu. Pencahayaan alami optimal dan siap huni.",
    fasilitas: ["Carport", "Taman", "Lemari Built-in", "Kitchen Set Modern", "AC", "Lantai Kayu"],
  },
  {
    nama: "The Tropical Haven",
    kategori: "Rumah",
    tipe: "Rumah Modern Tropis (1 Lantai)",
    gambarUtama: imgTropicalHaven,
    status: ["Dijual"],
    lokasi: "Sleman, Yogyakarta",
    hargaJual: "2.850.000.000",
    kamarTidur: "3",
    kamarMandi: "2",
    luasTanah: "150 m²",
    luasBangunan: "120 m²",
    deskripsi: "Rumah bungalow modern tropis dengan perpaduan batu alam dan kayu. Interior earth tone bernuansa hijau sage dan krem. Ruang tamu terbuka ke taman belakang.",
    fasilitas: ["Taman Tropis", "Dapur Open Plan", "Aksen Wood Slat", "Drop Ceiling Hidden Light", "Wardrobe Built-in", "Pintu Sliding Besar"],
  },
  {
    nama: "The Nordic House",
    kategori: "Rumah",
    tipe: "Rumah Scandinavian (2 Lantai)",
    gambarUtama: imgNordicHouse,
    status: ["Dijual"],
    lokasi: "BSD City, Tangerang Selatan",
    hargaJual: "5.200.000.000",
    kamarTidur: "3",
    kamarMandi: "3",
    luasTanah: "160 m²",
    luasBangunan: "180 m²",
    deskripsi: "Hunian 2 lantai bergaya Scandinavian modern dengan nuansa kayu alami dan dinding putih. Konsep open-concept menghubungkan ruang tamu dan dapur dengan kitchen island besar.",
    fasilitas: ["Balkon Lantai 2", "Kitchen Island Luas", "Rain Shower Frameless", "Partisi Wood Slat", "Open Shelving", "Taman Xeriscape"],
  },
  {
    nama: "Griya Asri Type 45",
    kategori: "Rumah",
    tipe: "Rumah Tipe 45 (1 Lantai)",
    gambarUtama: imgGriyaAsri,
    status: ["Dijual", "Disewakan"],
    lokasi: "Bandung, Jawa Barat",
    hargaJual: "850.000.000",
    hargaSewa: "65.000.000/tahun",
    kamarTidur: "2",
    kamarMandi: "1",
    luasTanah: "72 m²",
    luasBangunan: "45 m²",
    deskripsi: "Rumah satu lantai minimalis modern dengan konsep open-plan pada ruang tamu dan dapur. Dapur dilengkapi oven dan backsplash estetik. Cocok untuk pasangan muda.",
    fasilitas: ["Carport & Taman", "Kitchen Set (Oven, Kompor, Hood)", "Lantai Granit Putih", "Closet Duduk & Shower", "Jendela Besar"],
  },
];

export default function PropertySection() {
  const [selectedType, setSelectedType] = useState("Semua");
  const [selectedStatus, setSelectedStatus] = useState("Semua");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);

  const filteredProperties = propertiesData.filter((property) => {
    const matchType = selectedType === "Semua" || property.kategori === selectedType;
    const matchStatus = selectedStatus === "Semua" || property.status.includes(selectedStatus);
    const matchLocation = property.lokasi.toLowerCase().includes(selectedLocation.toLowerCase());
    return matchType && matchStatus && matchLocation;
  });

  const specifications = selectedProperty
    ? [
        { label: "Kamar Tidur", value: selectedProperty.kamarTidur },
        { label: "Kamar Mandi", value: selectedProperty.kamarMandi },
        { label: "Luas Tanah", value: selectedProperty.luasTanah },
        { label: "Luas Bangunan", value: selectedProperty.luasBangunan },
      ].filter((item) => item.value)
    : [];

    useEffect(() => {
    if (!selectedProperty) return;
    document.body.style.overflow = "hidden";
    const handleEscape = (e) => e.key === "Escape" && setSelectedProperty(null);
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProperty]);

  return (
    <section id="properties" className="bg-[#F7F3ED] px-6 py-16">
      <div className="mx-auto max-w-7xl">

        <div className="property-heading">
          <div className="property-title">
            <span className="property-eyebrow">PROPERTI PILIHAN</span>
            <h2>Temukan Properti Terbaik Untuk Anda</h2>
          </div>
          
          <div className="property-filters">
            <span className="filter-label">Filter:</span>

            <div className="filter-group" aria-label="Kategori properti">
              {["Semua", "Rumah", "Apartemen"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setSelectedType(type)}
                  className={`filter-chip ${selectedType === type ? "active" : ""}`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="filter-group" aria-label="Status properti">
              {["Semua", "Dijual", "Disewakan"].map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setSelectedStatus(status)}
                  className={`filter-chip ${
                    selectedStatus === status
                      ? status === "Dijual" ? "active-sold" : status === "Disewakan" ? "active-rent" : "active"
                      : ""
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            <label className="location-search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m16 16 4 4" />
              </svg>
              <input
                type="search"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                placeholder="Cari lokasi..."
              />
            </label>
          </div>
        </div>

        <p className="mt-4 text-sm text-[#18344B]/70">
          Menampilkan {filteredProperties.length} properti
        </p>

        {filteredProperties.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {filteredProperties.map((property) => (
              <article key={property.nama} className="overflow-hidden rounded-xl border border-[#18344B]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <button type="button" onClick={() => setSelectedProperty(property)} className="group block w-full text-left">
                  <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden bg-[#EFE7DB]">
                    <img
                      src={property.gambarUtama}
                      alt={property.nama}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#18344B]">
                      {property.status.join(" & ")}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-[#F7F3ED] px-2 py-1 text-xs font-medium text-[#B68157]">
                        {property.kategori}
                      </span>
                      <span className="text-xs font-medium text-[#B68157]">Detail →</span>
                    </div>
                    <h3 className="mt-3 line-clamp-2 min-h-10 text-sm font-semibold leading-snug text-[#18344B]">
                      {property.nama}
                    </h3>
                    <p className="mt-2 truncate text-xs text-[#18344B]/70">{property.lokasi}</p>
                    {property.hargaJual && <p className="mt-3 text-sm font-semibold text-[#18344B]">Rp {property.hargaJual}</p>}
                    {property.hargaSewa && <p className="mt-1 text-xs text-[#18344B]/70">Sewa Rp {property.hargaSewa}</p>}
                  </div>
                </button>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-8 rounded-xl border border-[#18344B]/10 bg-white p-6 text-center text-sm text-[#18344B]/70">
            Tidak ada properti yang sesuai dengan filter tersebut.
          </p>
        )}
      </div>

      {selectedProperty && (
        <div className="modal-overlay" onClick={() => setSelectedProperty(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            <div className="modal-image-col">
              <h3 className="text-sm font-semibold">⌂ Detail Properti</h3>
              <div className="modal-image-wrap mt-4">
                <img src={selectedProperty.gambarUtama} alt={selectedProperty.nama} className="modal-image" />
              </div>
            </div>

            <div className="modal-info-col">
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  <span className="modal-badge">{selectedProperty.tipe}</span>
                  <span className="modal-badge">{selectedProperty.status.join(" & ")}</span>
                </div>
                <button onClick={() => setSelectedProperty(null)} className="shrink-0 rounded-full px-2 py-1 text-xl leading-none transition hover:bg-white/10">
                  ×
                </button>
              </div>
              
              <h3 className="mt-4 text-xl font-semibold leading-snug">{selectedProperty.nama}</h3>
              <p className="mt-2 text-sm text-[#F7F3ED]/70">{selectedProperty.lokasi}</p>
              
              {(selectedProperty.hargaJual || selectedProperty.hargaSewa) && (
                <div className="mt-4 space-y-1">
                  {selectedProperty.hargaJual && <p className="text-xl font-bold text-[#D0A078]">Rp {selectedProperty.hargaJual}</p>}
                  {selectedProperty.hargaSewa && <p className="text-sm text-[#F7F3ED]/80">Sewa Rp {selectedProperty.hargaSewa}</p>}
                </div>
              )}
              
              {specifications.length > 0 && (
                <div className="modal-spec-grid">
                  {specifications.map((item) => (
                    <div key={item.label} className="modal-spec-item">
                      <p className="text-xs text-[#F7F3ED]/60">{item.label}</p>
                      <p className="mt-1 text-sm font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {selectedProperty.deskripsi && (
                <div className="mt-5">
                  <h4 className="text-sm font-semibold">Deskripsi</h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#F7F3ED]/75">{selectedProperty.deskripsi}</p>
                </div>
              )}
              
              {selectedProperty.fasilitas.length > 0 && (
                <div className="mt-5">
                  <h4 className="text-sm font-semibold">Fasilitas</h4>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {selectedProperty.fasilitas.map((facility) => (
                      <li key={facility} className="rounded-full bg-white/5 px-3 py-1 text-xs">{facility}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                <a href="#calculator" onClick={() => setSelectedProperty(null)} className="flex-1 rounded-lg border border-[#F7F3ED]/30 px-3 py-2.5 text-center text-xs font-semibold transition hover:bg-white/10">
                  Simulasi Cicilan
                </a>
                <a href="#visit" onClick={() => setSelectedProperty(null)} className="flex-1 rounded-lg bg-[#D0A078] px-3 py-2.5 text-center text-xs font-semibold text-[#18344B] transition hover:opacity-90">
                  Jadwalkan Kunjungan
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}