import { useState } from 'react'

const emptyForm = {
  nama: '',
  whatsapp: '',
  properti: '',
  tanggal: '',
  waktu: '',
  pesan: '',
}

function getToday() {
  const d = new Date()
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

function Visit() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const today = getToday()

  const labelClass = 'block mb-1 text-sm font-semibold text-[color:var(--navy)]'
  const errorClass = 'mt-1 text-sm text-red-600'

  function inputClass(name) {
    const border = errors[name]
      ? 'border-red-500'
      : 'border-[color:var(--caramel)]'
    return `w-full rounded-lg border ${border} bg-white px-4 py-2.5 text-sm`
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
    setStatus('')
  }

  function validate() {
    const result = {}

    if (!form.nama.trim()) {
      result.nama = 'Nama wajib diisi.'
    } else if (form.nama.trim().length < 3) {
      result.nama = 'Nama minimal 3 karakter.'
    }

    const nomor = form.whatsapp.replace(/[\s-]/g, '')
    if (!nomor) {
      result.whatsapp = 'Nomor WhatsApp wajib diisi.'
    } else if (!/^(\+62|62|0)8\d{8,11}$/.test(nomor)) {
      result.whatsapp = 'Format nomor tidak sesuai. Contoh: 0812 3456 7890.'
    }

    if (!form.properti) {
      result.properti = 'Pilih salah satu properti.'
    }

    if (!form.tanggal) {
      result.tanggal = 'Tanggal kunjungan wajib diisi.'
    } else if (form.tanggal < today) {
      result.tanggal = 'Tanggal tidak boleh sebelum hari ini.'
    }

    if (!form.waktu) {
      result.waktu = 'Waktu kunjungan wajib diisi.'
    }

    return result
  }

  function handleSubmit(e) {
    e.preventDefault()
    const result = validate()
    setErrors(result)

    if (Object.keys(result).length > 0) {
      setStatus('error')
      return
    }

    setStatus('success')
    setForm(emptyForm)
  }

  return (
    <section id="visit" className="bg-[color:var(--cream)] py-16 px-4">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-start">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-[color:var(--brown)]">
            Jadwalkan Kunjungan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[color:var(--navy)]">
            Jadwalkan Kunjungan Property
          </h2>
          <p className="mt-3 text-[color:var(--navy)]/70">
            Isi formulir berikut untuk menjadwalkan kunjungan ke properti yang
            Anda minati. Tim kami akan segera menghubungi Anda.
          </p>
          <p className="mt-6 text-xl italic text-[color:var(--brown)]">
            Rumah impian menantikan Anda
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white p-6 rounded-2xl shadow grid gap-4 sm:grid-cols-2"
        >
          {status === 'success' && (
            <p
              role="status"
              className="sm:col-span-2 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-800"
            >
              Permintaan kunjungan berhasil dikirim. Tim kami akan segera
              menghubungi Anda lewat WhatsApp.
            </p>
          )}
          {status === 'error' && (
            <p
              role="alert"
              className="sm:col-span-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              Permintaan belum terkirim. Periksa kembali kolom yang ditandai.
            </p>
          )}

          <div className="sm:col-span-2">
            <label htmlFor="nama" className={labelClass}>
              Nama Lengkap
            </label>
            <input
              id="nama"
              name="nama"
              type="text"
              value={form.nama}
              onChange={handleChange}
              placeholder="Contoh: Budi Santoso"
              aria-invalid={Boolean(errors.nama)}
              className={inputClass('nama')}
            />
            {errors.nama && <p className={errorClass}>{errors.nama}</p>}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="whatsapp" className={labelClass}>
              Nomor WhatsApp
            </label>
            <input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              value={form.whatsapp}
              onChange={handleChange}
              placeholder="Contoh: 0812 3456 7890"
              aria-invalid={Boolean(errors.whatsapp)}
              className={inputClass('whatsapp')}
            />
            {errors.whatsapp && <p className={errorClass}>{errors.whatsapp}</p>}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="properti" className={labelClass}>
              Properti yang Diminati
            </label>
            <select
              id="properti"
              name="properti"
              value={form.properti}
              onChange={handleChange}
              aria-invalid={Boolean(errors.properti)}
              className={inputClass('properti')}
            >
              <option value="">-- Pilih properti --</option>
              <option>Medan Residence</option>
              <option>The Horizon Residences</option>
              <option>The Skyline Loft Presidence</option>
              <option>The Skyline Premium Presidence</option>
              <option>Cluster Aria Modern</option>
              <option>The Prestige Cluster Home</option>
              <option>BHG Minimalist Residence</option>
              <option>The Paddy View Villa</option>
              <option>The Oak Home</option>
              <option>The Tropical Heaven</option>
              <option>The Nordic House</option>
              <option>Griya Asri Type 45</option>
            </select>
            {errors.properti && <p className={errorClass}>{errors.properti}</p>}
          </div>

          <div>
            <label htmlFor="tanggal" className={labelClass}>
              Tanggal Kunjungan
            </label>
            <input
              id="tanggal"
              name="tanggal"
              type="date"
              min={today}
              value={form.tanggal}
              onChange={handleChange}
              aria-invalid={Boolean(errors.tanggal)}
              className={inputClass('tanggal')}
            />
            {errors.tanggal && <p className={errorClass}>{errors.tanggal}</p>}
          </div>

          <div>
            <label htmlFor="waktu" className={labelClass}>
              Waktu Kunjungan
            </label>
            <input
              id="waktu"
              name="waktu"
              type="time"
              value={form.waktu}
              onChange={handleChange}
              aria-invalid={Boolean(errors.waktu)}
              className={inputClass('waktu')}
            />
            {errors.waktu && <p className={errorClass}>{errors.waktu}</p>}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="pesan" className={labelClass}>
              Pesan (Opsional)
            </label>
            <textarea
              id="pesan"
              name="pesan"
              rows="3"
              value={form.pesan}
              onChange={handleChange}
              placeholder="Tulis pesan Anda..."
              className={inputClass('pesan')}
            ></textarea>
          </div>

          <button type="submit" className="btn-primary w-full sm:col-span-2">
            Kirim Permintaan
          </button>
        </form>
      </div>
    </section>
  )
}

export default Visit