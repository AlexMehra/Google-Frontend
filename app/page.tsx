import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import googlelogo from './images/google-logo.png'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="mb-8">
          <Image src={googlelogo} alt="Google" width={272} height={92} />
        </div>
        <SearchBar />
        <div className="mt-8 space-x-4">
          <button className="bg-zinc-800  px-4 py-2 rounded hover:shadow">Google Search</button>
          <button className="bg-zinc-800 px-4 py-2 rounded hover:shadow">I'm Feeling Lucky</button>
        </div>
      </main>

      <Footer />
    </div>
  )
}

