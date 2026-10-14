import { useEffect, useState } from "react";
const propertyImages = import.meta.glob("../assets/properties/*/*.jpg", {
  eager: true,
  import: "default",
  query: "?url",
});
const getPropertyImages = (folder) =>
  Object.entries(propertyImages)
    .filter(([path]) => path.includes(`/properties/${folder}/`))
    .sort(([firstPath], [secondPath]) => {
      const firstNumber = Number(firstPath.match(/\/(\d+)\.jpg$/)?.[1] ?? 0);
      const secondNumber = Number(secondPath.match(/\/(\d+)\.jpg$/)?.[1] ?? 0);
      return firstNumber - secondNumber;
    })
    .map(([, imageUrl]) => imageUrl);
const createProperty = (nama, kategori, tipe, details = {}) => {
  const { folder, ...propertyDetails } = details;
  return {
    nama,
    kategori,
    tipe,
    gambar: getPropertyImages(folder),
    status: [],
    lokasi: "",
    hargaJual: "",
    hargaSewa: "",
    kamarTidur: "",
    kamarMandi: "",
    luasTanah: "",
    luasBangunan: "",
    deskripsi: "",
    fasilitas: [],
    ...propertyDetails,
  };
};
const properties = [
  createProperty("Medan Residence", "Apartemen", "Apartemen", {
    folder: "apartemen-medan-residence",
    status: ["Dijual", "Disewakan"],
    lokasi: "Medan, Sumatera Utara",
    hargaJual: "1.250.000.000",
    hargaSewa: "45.000.000/tahun",
    kamarTidur: "2",
    kamarMandi: "1",
    luasBangunan: "72 m²",
    deskripsi:
      "Unit apartemen nyaman dengan pemandangan kota dan perbukitan melalui jendela panoramic. Interior modern dengan nuansa hangat, cocok untuk hunian pribadi atau investasi.",
    fasilitas: [
      "Kolam Renang",
      "Keamanan 24 Jam",
      "Area Parkir",
      "City & Mountain View",
      "Semi-Furnished",
    ],
  }),
  createProperty("The Horizon Residences", "Apartemen", "Apartemen Mewah", {
    folder: "apartemen-mewah",
    status: ["Dijual"],
    lokasi: "Mega Kuningan, Jakarta Selatan",
    hargaJual: "9.200.000.000",
    kamarTidur: "3",
    kamarMandi: "2",
    luasBangunan: "165 m²",
    deskripsi:
      "Apartemen mewah dengan city view memukau. Interior modern elegan dengan sentuhan marmer. Ruang tamu luas terhubung dengan balkon, dapur dilengkapi island marmer eksklusif.",
    fasilitas: [
      "Infinity Pool",
      "Sky Lounge",
      "Gym",
      "Keamanan 24 Jam",
      "Balkon City View",
      "Smart Home System",
    ],
  }),
  createProperty(
    "The Skyline Loft Residence",
    "Apartemen",
    "Apartemen (Penthouse / Loft)",
    {
      folder: "apartemen-mewah-2",
      status: ["Dijual"],
      lokasi: "Sudirman, Jakarta Pusat",
      hargaJual: "15.500.000.000",
      kamarTidur: "2 (1 Master, 1 Mezzanine)",
      kamarMandi: "3",
      luasBangunan: "250 m²",
      deskripsi:
        "Apartemen eksklusif konsep loft dengan plafon tinggi (double height) dan jendela floor-to-ceiling. Ruang tamu luas dengan perapian modern, dapur terbuka, dan area mezzanine privat.",
      fasilitas: [
        "Infinity Pool",
        "Sky Garden",
        "Gym & Spa",
        "Concierge Service 24 Jam",
        "Balkon Luas",
        "Smart Home System",
      ],
    },
  ),
  createProperty(
    "The Skyline Premium Residence",
    "Apartemen",
    "Apartemen Premium",
    {
      folder: "apartemen-premium",
      status: ["Dijual", "Disewakan"],
      lokasi: "SCBD, Jakarta Selatan",
      hargaJual: "6.500.000.000",
      hargaSewa: "180.000.000/tahun",
      kamarTidur: "3",
      kamarMandi: "2",
      luasBangunan: "145 m²",
      deskripsi:
        "Apartemen mewah dengan city view spektakuler. Interior modern elegan dengan konsep open plan dan balkon luas. Dilengkapi fasilitas rooftop infinity pool.",
      fasilitas: [
        "Infinity Pool",
        "Rooftop Garden",
        "Gym",
        "Balkon City View",
        "Smart Home System",
        "One Gate System",
      ],
    },
  ),
  createProperty("Cluster Atria Modern", "Rumah", "Rumah Cluster (2 Lantai)", {
    folder: "rumah-cluster",
    status: ["Dijual"],
    lokasi: "Serpong, Tangerang Selatan",
    hargaJual: "1.850.000.000",
    kamarTidur: "3",
    kamarMandi: "2",
    luasTanah: "90 m²",
    luasBangunan: "120 m²",
    deskripsi:
      "Hunian cluster modern minimalis dengan desain fasad elegan. Dapur island mewah lengkap dengan built-in oven. Ruang tamu luas terhubung taman belakang. Kamar mandi utama dengan skylight.",
    fasilitas: [
      "One Gate System 24 Jam",
      "Kitchen Set Lengkap",
      "Taman Belakang",
      "Kamar Mandi Skylight",
      "Lantai Granit Premium",
      "Carport",
    ],
  }),
  createProperty(
    "The Prestige Cluster Home",
    "Rumah",
    "Rumah Cluster (2 Lantai)",
    {
      folder: "rumah-cluster-2",
      status: ["Dijual"],
      lokasi: "Bintaro, Tangerang Selatan",
      hargaJual: "8.500.000.000",
      kamarTidur: "4",
      kamarMandi: "4",
      luasTanah: "200 m²",
      luasBangunan: "250 m²",
      deskripsi:
        "Hunian cluster eksklusif dengan arsitektur modern megah. Ruang tamu high ceiling berstruktur kayu, dapur modular dengan kitchen island batu alam, dan material premium.",
      fasilitas: [
        "Double Height Ceiling",
        "Dapur Modular",
        "Balkon Lantai 2",
        "Ensuite Bathroom",
        "Built-in Oven",
        "Taman & Pagar Minimalis",
      ],
    },
  ),
  createProperty(
    "BHG Minimalist Residence",
    "Rumah",
    "Rumah Minimalis (2 Lantai)",
    {
      folder: "rumah-minimalis",
      status: ["Disewakan"],
      lokasi: "Kemang, Jakarta Selatan",
      hargaSewa: "120.000.000/tahun",
      kamarTidur: "2",
      kamarMandi: "2",
      luasTanah: "75 m²",
      luasBangunan: "110 m²",
      deskripsi:
        "Hunian minimalis 2 lantai bergaya industrial-Scandinavian. Desain built-in furniture kayu memaksimalkan ruang. Taman dalam (courtyard) memberikan pencahayaan alami ke setiap ruangan.",
      fasilitas: [
        "Taman Dalam (Indoor Garden)",
        "Balkon Lantai 2",
        "Kamar Mandi Skylight",
        "Dapur U-Shape Beton",
        "Full Furnished",
        "Carport",
      ],
    },
  ),
  createProperty("The Paddy View Villa", "Rumah", "Rumah / Villa (2 Lantai)", {
    folder: "rumah-minimalis-2",
    status: ["Dijual", "Disewakan"],
    lokasi: "Ubud, Bali",
    hargaJual: "4.800.000.000",
    hargaSewa: "250.000.000/tahun",
    kamarTidur: "2",
    kamarMandi: "2",
    luasTanah: "300 m²",
    luasBangunan: "160 m²",
    deskripsi:
      "Hunian minimalis 2 lantai berkonsep tropical resort dengan pemandangan sawah. Dek kayu luas, dapur semi-outdoor, kolam ikan koi, serta kamar utama dengan view sawah dan kamar mandi bernuansa spa.",
    fasilitas: [
      "Kolam Ikan Koi",
      "Taman Stepping Stone",
      "Dapur Outdoor",
      "Balkon Sawah",
      "Kamar Mandi Batu Alam",
      "Material Kayu Solid",
    ],
  }),
  createProperty("The Oak Home", "Rumah", "Rumah Modern Sederhana", {
    folder: "rumah-modern-sederhana",
    status: ["Dijual"],
    lokasi: "BSD City, Tangerang Selatan",
    hargaJual: "3.250.000.000",
    kamarTidur: "3",
    kamarMandi: "2",
    luasTanah: "120 m²",
    luasBangunan: "100 m²",
    deskripsi:
      "Rumah modern minimalis berkonsep open-plan dengan perpaduan warna netral dan aksen kayu. Pencahayaan alami optimal dan siap huni.",
    fasilitas: [
      "Carport",
      "Taman",
      "Lemari Built-in",
      "Kitchen Set Modern",
      "AC",
      "Lantai Kayu",
    ],
  }),
  createProperty(
    "The Tropical Haven",
    "Rumah",
    "Rumah Modern Tropis (1 Lantai)",
    {
      folder: "rumah-modern-tropis",
      status: ["Dijual"],
      lokasi: "Sleman, Yogyakarta",
      hargaJual: "2.850.000.000",
      kamarTidur: "3",
      kamarMandi: "2",
      luasTanah: "150 m²",
      luasBangunan: "120 m²",
      deskripsi:
        "Rumah bungalow modern tropis dengan perpaduan batu alam dan kayu. Interior earth tone bernuansa hijau sage dan krem. Ruang tamu terbuka ke taman belakang.",
      fasilitas: [
        "Taman Tropis",
        "Dapur Open Plan",
        "Aksen Wood Slat",
        "Drop Ceiling Hidden Light",
        "Wardrobe Built-in",
        "Pintu Sliding Besar",
      ],
    },
  ),
  createProperty("The Nordic House", "Rumah", "Rumah Scandinavian (2 Lantai)", {
    folder: "rumah-scandinavian",
    status: ["Dijual"],
    lokasi: "BSD City, Tangerang Selatan",
    hargaJual: "5.200.000.000",
    kamarTidur: "3",
    kamarMandi: "3",
    luasTanah: "160 m²",
    luasBangunan: "180 m²",
    deskripsi:
      "Hunian 2 lantai bergaya Scandinavian modern dengan nuansa kayu alami dan dinding putih. Konsep open-concept menghubungkan ruang tamu dan dapur dengan kitchen island besar.",
    fasilitas: [
      "Balkon Lantai 2",
      "Kitchen Island Luas",
      "Rain Shower Frameless",
      "Partisi Wood Slat",
      "Open Shelving",
      "Taman Xeriscape",
    ],
  }),
  createProperty("Griya Asri Type 45", "Rumah", "Rumah Tipe 45 (1 Lantai)", {
    folder: "rumah-tipe-45",
    status: ["Dijual", "Disewakan"],
    lokasi: "Bandung, Jawa Barat",
    hargaJual: "850.000.000",
    hargaSewa: "65.000.000/tahun",
    kamarTidur: "2",
    kamarMandi: "1",
    luasTanah: "72 m²",
    luasBangunan: "45 m²",
    deskripsi:
      "Rumah satu lantai minimalis modern dengan konsep open-plan pada ruang tamu dan dapur. Dapur dilengkapi oven dan backsplash estetik. Cocok untuk pasangan muda.",
    fasilitas: [
      "Carport & Taman",
      "Kitchen Set (Oven, Kompor, Hood)",
      "Lantai Granit Putih",
      "Closet Duduk & Shower",
      "Jendela Besar",
    ],
  }),
];
export default function PropertySection() {
  const [selectedType, setSelectedType] = useState("Semua");
  const [selectedStatus, setSelectedStatus] = useState("Semua");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const filteredProperties = properties.filter((property) => {
    const matchesType =
      selectedType === "Semua" || property.kategori === selectedType;
    const matchesStatus =
      selectedStatus === "Semua" || property.status.includes(selectedStatus);
    const matchesLocation = property.lokasi
      .toLowerCase()
      .includes(selectedLocation.trim().toLowerCase());
    return matchesType && matchesStatus && matchesLocation;
  });
  const selectedImages = selectedProperty?.gambar ?? [];
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
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function handleEscape(event) {
      if (event.key === "Escape") setSelectedProperty(null);
    }
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProperty]);
  function openProperty(property) {
    setSelectedProperty(property);
    setSelectedImageIndex(0);
  }
  function closeProperty() {
    setSelectedProperty(null);
  }
  function changeImage(direction) {
    setSelectedImageIndex((currentIndex) => {
      return (
        (currentIndex + direction + selectedImages.length) %
        selectedImages.length
      );
    });
  }
  return (
    <section id="properties" className="bg-(--cream) px-6 py-16">
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
                  aria-pressed={selectedType === type}
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
                  aria-pressed={selectedStatus === status}
                  onClick={() => setSelectedStatus(status)}
                  className={`filter-chip ${
                    selectedStatus === status
                      ? status === "Dijual"
                        ? "active-sold"
                        : status === "Disewakan"
                          ? "active-rent"
                          : "active"
                      : ""
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
            <label className="location-search">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m16 16 4 4" />
              </svg>
              <input
                type="search"
                value={selectedLocation}
                onChange={(event) => setSelectedLocation(event.target.value)}
                placeholder="Cari lokasi..."
                aria-label="Cari lokasi properti"
              />
            </label>
          </div>
        </div>
        <p className="mt-4 text-sm text-(--navy)/70" aria-live="polite">
          Menampilkan {filteredProperties.length} properti
        </p>
        {filteredProperties.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {filteredProperties.map((property) => (
              <article
                key={property.nama}
                className="overflow-hidden rounded-xl border border-(--navy)/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => openProperty(property)}
                  aria-haspopup="dialog"
                  aria-label={`Lihat detail ${property.nama}`}
                  className="group block w-full text-left"
                >
                  <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden bg-(--beige) text-sm text-(--navy)/60">
                    {property.gambar[0] ? (
                      <img
                        src={property.gambar[0]}
                        alt={property.nama}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      "Foto properti"
                    )}
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-(--navy)">
                      {property.status.join(" & ")}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-(--cream) px-2 py-1 text-xs font-medium text-(--brown)">
                        {property.kategori}
                      </span>
                      <span className="text-xs font-medium text-(--brown)">
                        Detail →
                      </span>
                    </div>
                    <h3 className="mt-3 line-clamp-2 min-h-10 text-sm font-semibold leading-snug text-(--navy)">
                      {property.nama}
                    </h3>
                    <p className="mt-2 truncate text-xs text-(--navy)/70">
                      {property.lokasi}
                    </p>
                    {property.hargaJual && (
                      <p className="mt-3 text-sm font-semibold text-(--navy)">
                        Rp {property.hargaJual}
                      </p>
                    )}
                    {property.hargaSewa && (
                      <p className="mt-1 text-xs text-(--navy)/70">
                        Sewa Rp {property.hargaSewa}
                      </p>
                    )}
                  </div>
                </button>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-8 rounded-xl border border-(--navy)/10 bg-white p-6 text-center text-sm text-(--navy)/70">
            Tidak ada properti yang sesuai dengan filter tersebut.
          </p>
        )}
      </div>
      {selectedProperty && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-6"
          onClick={closeProperty}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="property-detail-title"
            className="grid max-h-[90vh] w-full max-w-5xl grid-cols-1 overflow-y-auto rounded-2xl border border-white/10 bg-(--navy) text-(--cream) shadow-2xl md:grid-cols-[1.1fr_0.9fr]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="min-w-0 p-4 sm:p-5">
              <h3 className="text-sm font-semibold">⌂ Detail Properti</h3>
              <div className="relative mt-4 flex aspect-4/3 items-center justify-center overflow-hidden rounded-xl bg-(--beige) text-sm text-(--navy)/70">
                {selectedImages[selectedImageIndex] ? (
                  <img
                    src={selectedImages[selectedImageIndex]}
                    alt={`${selectedProperty.nama} - Foto ${selectedImageIndex + 1}`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  "Foto properti akan ditampilkan di sini"
                )}
                {selectedImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Foto sebelumnya"
                      onClick={() => changeImage(-1)}
                      className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-(--navy) shadow transition hover:bg-white"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      aria-label="Foto berikutnya"
                      onClick={() => changeImage(1)}
                      className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-(--navy) shadow transition hover:bg-white"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>
              {selectedImages.length > 1 && (
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {selectedImages.map((image, index) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      aria-label={`Lihat foto ${index + 1}`}
                      aria-pressed={selectedImageIndex === index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`aspect-4/3 overflow-hidden rounded-md border-2 ${
                        selectedImageIndex === index
                          ? "border-(--caramel)"
                          : "border-transparent"
                      }`}
                    >
                      <img
                        src={image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="flex min-w-0 flex-col border-t border-white/10 p-5 sm:p-6 md:border-l md:border-t-0">
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
                    {selectedProperty.tipe}
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
                    {selectedProperty.status.join(" & ")}
                  </span>
                </div>
                <button
                  type="button"
                  aria-label="Tutup detail properti"
                  onClick={closeProperty}
                  className="shrink-0 rounded-full px-2 py-1 text-xl leading-none transition hover:bg-white/10"
                >
                  ×
                </button>
              </div>
              <h3
                id="property-detail-title"
                className="mt-4 text-xl font-semibold leading-snug"
              >
                {selectedProperty.nama}
              </h3>
              <p className="mt-2 text-sm text-(--cream)/70">
                {selectedProperty.lokasi}
              </p>
              {(selectedProperty.hargaJual || selectedProperty.hargaSewa) && (
                <div className="mt-4 space-y-1">
                  {selectedProperty.hargaJual && (
                    <p className="text-xl font-bold text-(--caramel)">
                      Rp {selectedProperty.hargaJual}
                    </p>
                  )}
                  {selectedProperty.hargaSewa && (
                    <p className="text-sm text-(--cream)/80">
                      Sewa Rp {selectedProperty.hargaSewa}
                    </p>
                  )}
                </div>
              )}
              {specifications.length > 0 && (
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {specifications.map((item) => (
                    <div key={item.label} className="rounded-lg bg-white/5 p-3">
                      <p className="text-xs text-(--cream)/60">{item.label}</p>
                      <p className="mt-1 text-sm font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>
              )}
              {selectedProperty.deskripsi && (
                <div className="mt-5">
                  <h4 className="text-sm font-semibold">Deskripsi</h4>
                  <p className="mt-2 text-sm leading-relaxed text-(--cream)/75">
                    {selectedProperty.deskripsi}
                  </p>
                </div>
              )}
              {selectedProperty.fasilitas.length > 0 && (
                <div className="mt-5">
                  <h4 className="text-sm font-semibold">Fasilitas</h4>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {selectedProperty.fasilitas.map((facility) => (
                      <li
                        key={facility}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs"
                      >
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                <a
                  href="#calculator"
                  onClick={closeProperty}
                  className="flex-1 rounded-lg border border-(--cream)/30 px-3 py-2.5 text-center text-xs font-semibold transition hover:bg-white/10"
                >
                  Simulasi Cicilan
                </a>
                <a
                  href="#visit"
                  onClick={closeProperty}
                  className="flex-1 rounded-lg bg-(--caramel) px-3 py-2.5 text-center text-xs font-semibold text-(--navy) transition hover:opacity-90"
                >
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