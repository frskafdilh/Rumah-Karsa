import { useState } from 'react'

const BUNGA_TAHUNAN = 8

const DP_MAKSIMAL = 90

const PILIHAN_TENOR = [60, 120, 180, 240, 300, 360]

const MAKS_DIGIT_HARGA = 13

const formatAngka = (angka) => new Intl.NumberFormat('id-ID').format(angka)

const hanyaAngka = (teks) => teks.replace(/\D/g, '')

const formatRupiah = (angka) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(angka)

function hitungCicilan(pokok, bungaTahunan, bulan) {
  const i = bungaTahunan / 12 / 100
  if (i === 0) return pokok / bulan
  return (pokok * i) / (1 - Math.pow(1 + i, -bulan))
}

const kelasInput =
  'w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-(--cream) ' +
  'placeholder:text-(--cream)/50 focus:border-(--caramel) focus:ring-2 focus:ring-(--caramel)/40'

export default function Calculator() {
  const [harga, setHarga] = useState('')
  const [dpPersen, setDpPersen] = useState('')
  const [tenor, setTenor] = useState('')
  const [error, setError] = useState('')
  const [hasil, setHasil] = useState(null)

  const hargaAngka = Number(harga) || 0
  const dpRupiah = Math.round((hargaAngka * (Number(dpPersen) || 0)) / 100)

  function resetHasil() {
    setHasil(null)
    setError('')
  }

  function handleHargaChange(e) {
    setHarga(hanyaAngka(e.target.value).slice(0, MAKS_DIGIT_HARGA))
    resetHasil()
  }

  function handleDpPersenChange(e) {
    const bersih = hanyaAngka(e.target.value)
    resetHasil()
    if (bersih === '') {
      setDpPersen('')
      return
    }
   setDpPersen(String(Math.min(Number(bersih), DP_MAKSIMAL)))
  }

  function handleTenorChange(e) {
    setTenor(e.target.value)
    resetHasil()
  }

  function tampilkanError(pesan) {
    setHasil(null)
    setError(pesan)
  }

  function handleHitung(e) {
    e.preventDefault()
    if (hargaAngka <= 0) {
      return tampilkanError('Masukkan harga properti lebih dari Rp 0.')
    }
    if (!tenor) {
      return tampilkanError('Pilih jumlah bulan cicilan terlebih dahulu.')
    }
    const pokok = hargaAngka - dpRupiah
    if (pokok <= 0) {
      return tampilkanError('Uang muka harus lebih kecil dari harga properti.')
    }

    const bulan = Number(tenor)
    const cicilanPerBulan = Math.round(hitungCicilan(pokok, BUNGA_TAHUNAN, bulan))
    const totalPembayaran = cicilanPerBulan * bulan

    setError('')
    setHasil({
      cicilanPerBulan,
      totalPembayaran,
      pokok,
      totalBunga: totalPembayaran - pokok,
    })
  }

  return (
    <section
      id="calculator"
      aria-labelledby="calculator-title"
      className="bg-(--navy) px-6 py-12 text-(--cream)"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_2fr]">
        <div>
          <span className="mb-1 block text-[0.7rem] font-bold tracking-[0.12em] text-(--caramel)">
            SIMULASI KPR
          </span>
          <h2
            id="calculator-title"
            className="font-[Georgia,'Times_New_Roman',serif] text-[clamp(1.25rem,2vw,1.8rem)] font-bold leading-tight"
          >
            Hitung Estimasi Cicilan KPR Anda
          </h2>
        </div>

        <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 md:grid-cols-[1.2fr_1fr]">
          <form onSubmit={handleHitung} noValidate className="space-y-4">
            <div>
              <label htmlFor="harga" className="mb-1 block text-sm">
                Harga Properti (Rp)
              </label>
              <input
                id="harga"
                type="text"
                inputMode="numeric"
                autoComplete="off"
                placeholder="Contoh: 500.000.000"
                value={harga ? formatAngka(harga) : ''}
                onChange={handleHargaChange}
                className={kelasInput}
              />
            </div>

            <div>
              <p className="mb-1 text-sm">Uang Muka (DP)</p>
              <div className="grid grid-cols-[1fr_2fr] gap-3">
                <div className="relative">
                  <label htmlFor="dp-persen" className="sr-only">
                    DP dalam persen
                  </label>
                  <input
                    id="dp-persen"
                    type="text"
                    inputMode="numeric"
                    autoComplete="off"
                    placeholder="20"
                    value={dpPersen}
                    onChange={handleDpPersenChange}
                    className={`${kelasInput} pr-9`}
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-(--cream)/60"
                  >
                    %
                  </span>
                </div>
                <div>
                  <label htmlFor="dp-rupiah" className="sr-only">
                    DP dalam rupiah 
                  </label>
                  <input
                    id="dp-rupiah"
                    type="text"
                    readOnly
                    placeholder="Terisi otomatis"
                    value={dpRupiah ? `Rp ${formatAngka(dpRupiah)}` : ''}
                    className={`${kelasInput} cursor-default bg-white/5`}
                  />
                </div>
              </div>
              <p className="mt-1 text-xs text-(--cream)/60">
                Maksimal {DP_MAKSIMAL}%, disarankan minimal 20%.
              </p>
            </div>

            <div>
              <label htmlFor="tenor" className="mb-1 block text-sm">
                Jumlah Bulan Cicilan
              </label>
              <select
                id="tenor"
                value={tenor}
                onChange={handleTenorChange}
                className={kelasInput}
              >
                <option value="" className="bg-white text-(--navy)">
                  Pilih jumlah bulan
                </option>
                {PILIHAN_TENOR.map((bulan) => (
                  <option key={bulan} value={bulan} className="bg-white text-(--navy)">
                    {bulan} bulan ({bulan / 12} tahun)
                  </option>
                ))}
              </select>
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-lg bg-red-500/15 px-3 py-2 text-sm text-red-200"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="btn-primary min-h-11 w-full cursor-pointer focus-visible:ring-2 focus-visible:ring-(--cream)"
            >
              Hitung Cicilan
            </button>
          </form>

          <div
            aria-live="polite"
            className="rounded-xl border border-white/10 bg-white/5 p-4"
          >
            <h3 className="text-base font-semibold text-(--caramel)">
              Hasil Simulasi
            </h3>

            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="text-(--cream)/70">Cicilan per Bulan</dt>
                <dd className="mt-1 text-xl font-semibold">
                  {formatRupiah(hasil ? hasil.cicilanPerBulan : 0)}
                </dd>
              </div>
              <div className="border-t border-white/10 pt-4">
                <dt className="text-(--cream)/70">Total Pembayaran</dt>
                <dd className="mt-1 text-lg font-semibold">
                  {formatRupiah(hasil ? hasil.totalPembayaran : 0)}
                </dd>
              </div>
              <div className="space-y-3 border-t border-white/10 pt-4 text-xs">
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-(--cream)/70">Pokok Pinjaman</dt>
                  <dd className="font-medium">
                    {formatRupiah(hasil ? hasil.pokok : 0)}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-(--cream)/70">Total Bunga</dt>
                  <dd className="font-medium">
                    {formatRupiah(hasil ? hasil.totalBunga : 0)}
                  </dd>
                </div>
              </div>
            </dl>

            <p className="mt-4 text-xs leading-relaxed text-(--cream)/60">
              *Perhitungan memakai asumsi bunga tetap {BUNGA_TAHUNAN}% per
              tahun. Hasil hanya estimasi dan dapat berubah sesuai ketentuan
              bank.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}