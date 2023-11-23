import { Itim } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'About My Library',
  description: 'Frontend 6B6 class 1 on React',
  keywords: 'React, Next, Javascript'
}

const omolade = Itim({ subsets: ['latin'], weight: ['400']})
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={omolade.className}>
        <Navbar/>
        <div className='min-h-[70vh]'>
        {children}
        </div>
     <Footer />
      </body>
    </html>
  )
}
