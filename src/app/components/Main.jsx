import Image from 'next/image'
import React from 'react'
import pic from '../image/book1.jpg'

export default function Main() {
  return (
    <div>
        <h1 className='text-5xl'>Omolade's Library</h1>
        <section className='grid grid-cols-2'>
        <Image src='/media/nick-fewings-f2Bi-VBs71M-unsplash.jpg' alt='books' width={600} height={500}/>
        <Image src='/media/toa-heftiba-ip9R11FMbV8-unsplash.jpg' alt= 'books' width={600} height={500}/>
        <Image src='https://images.unsplash.com/photo-1571193161738-deaba9b6cc26?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt= 'books' width={600} height={500}/>
        <Image src={pic} alt= 'books' width={600} height={500}/>
        </section>
       
        
        
    </div>
  )
}
