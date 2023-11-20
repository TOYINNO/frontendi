import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-[gold] flex items-center justify-center h-[30vh]'>
        <p>&copy; univelcity {new Date().getFullYear()}</p>
    </footer>
  )
}
