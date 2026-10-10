import Navbar from './components/Navbar.jsx'

export default function App() {
  return (
    <>
      <Navbar />

      <main id="home">
        <section className="px-6 py-12">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-3xl font-semibold">
              Selamat Datang di Rumah Karsa
            </h1>

            <p className="mt-3">
              Temukan hunian yang sesuai dengan kebutuhan Anda.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}