import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-sm text-gray-600">
      <div className="px-8 py-3 border-b border-gray-300">
        <span>India</span>
      </div>
      <div className="flex flex-col sm:flex-row justify-between px-8 py-3">
        <div className="flex space-x-6 mb-4 sm:mb-0">
          <Link href="#" className="hover:underline">About</Link>
          <Link href="#" className="hover:underline">Advertising</Link>
          <Link href="#" className="hover:underline">Business</Link>
          <Link href="#" className="hover:underline">How Search works</Link>
        </div>
        <div className="flex space-x-6">
          <Link href="#" className="hover:underline">Privacy</Link>
          <Link href="#" className="hover:underline">Terms</Link>
          <Link href="#" className="hover:underline">Settings</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

