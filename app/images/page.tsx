import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SearchBar from '../../components/SearchBar'
import ImageSearchResults from '../../components/ImageSearchResults'

export const metadata = {
  title: 'Google Images',
  description: 'Find images with Google Image Search',
}

export default function ImageSearch() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <SearchBar />
          <ImageSearchResults />
        </div>
      </main>

      <Footer />
    </div>
  )
}

