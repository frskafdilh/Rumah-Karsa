function Visit() {
  const inputClass =
    "w-full rounded-lg border border-[color:var(--caramel)] bg-white px-4 py-2.5 text-sm";
  const labelClass =
    "block mb-1 text-sm font-semibold text-[color:var(--navy)]";

  return (
    <section
      id="visit"
      className="bg-[color:var(--cream)] py-16 px-4"
    >
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-start">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-[color:var(--brown)]">
            Jadwalkan Kunjungan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[color:var(--navy)]">
            Jadwalkan Kunjungan Property
          </h2>
          <p className="mt-3 text-gray-600">
            Isi formulir berikut untuk menjadwalkan kunjungan ke properti yang
            Anda minati. Tim kami akan segera menghubungi Anda.
          </p>
          <p className="mt-6 text-xl italic text-[color:var(--brown)]">
            Rumah impian menantikan Anda
          </p>
        </div>

        <form className="bg-white p-6 rounded-2xl shadow grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="nama" className={labelClass}>
              Nama Lengkap
            </label>
            <input
              id="nama"
              name="nama"
              type="text"
              placeholder="Contoh: Budi Santoso"
              className={inputClass}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="whatsapp" className={labelClass}>
              Nomor WhatsApp
            </label>
            <input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              placeholder="Contoh: 0812 3456 7890"
              className={inputClass}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="properti" className={labelClass}>
              Properti yang Diminati
            </label>
            <select id="properti" name="properti" className={inputClass}>
              <option value="">-- Pilih properti --</option>
              <option>Properti 1</option>
              <option>Properti 2</option>
              <option>Properti 3</option>
              <option>Properti 4</option>
              <option>Properti 5</option>
              <option>Properti 6</option>
              <option>Properti 7</option>
              <option>Properti 8</option>
              <option>Properti 9</option>
              <option>Properti 10</option>
              <option>Properti 11</option>
              <option>Properti 12</option>
            </select>
          </div>

          <div>
            <label htmlFor="tanggal" className={labelClass}>
              Tanggal Kunjungan
            </label>
            <input
              id="tanggal"
              name="tanggal"
              type="date"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="waktu" className={labelClass}>
              Waktu Kunjungan
            </label>
            <input
              id="waktu"
              name="waktu"
              type="time"
              className={inputClass}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="pesan" className={labelClass}>
              Pesan (Opsional)
            </label>
            <textarea
              id="pesan"
              name="pesan"
              rows="3"
              placeholder="Tulis pesan Anda..."
              className={inputClass}
            ></textarea>
          </div>

          <button type="submit" className="btn-primary w-full sm:col-span-2">
            Kirim Permintaan
          </button>
        </form>
      </div>
    </section>
  );
}

export default Visit;