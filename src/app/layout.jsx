import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '@/components/footer'


export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Navbar/>
        <div className='h-[70vh]'>
        {children}
        </div>
     <Footer />
      </body>
    </html>
  )
}
