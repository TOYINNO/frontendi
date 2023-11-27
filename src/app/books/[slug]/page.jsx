import React from 'react'
import { books } from '../../course/page'
import Image from 'next/image'
import styles from './books.module.css'
import Link from 'next/link'
export default function page({params}) {
  const card = books.find(book => book.title.split(' ').join('-') == params.slug)

  const filteredBooks = books.filter(book => book.type == card.type || book.author == card.author)
  return (
  <section className="w-4/5 m-auto">
    <section className="text-center py-8">
      <h1 className="text-5xl font-semibold py-4 border-b-8 border-double border-[gold]">Title: {card.title}</h1>
      <h2 className="text-3xl font-medium p-4">Author: {card.author}</h2>
      <p className="p-2 text-xl capitalize">Year of Publication: {card.year}</p>
      <p className="p-2 text-xl capitalize">Type: {card.type}</p>
    </section>
  
  <figure className={`flex flex-col shadow-2xl items-centre justify-center ${styles.image}`}>
    <Image src ={`https://robohash.org/${card.title}`} alt = {card.title} width = {500} height = {490}/>
    <figcaption>{card.title} by {card.author} published in {card.year} </figcaption>
  </figure>
  <section>
    <h2>Summary</h2>
    <p>{card.summary}</p>
  </section>

<section>
  <h2 className='text-3xl py-3 font-'>Related Books</h2>
  <aside className='grid grid-cols-4 gap-4'>
     {filteredBooks.map((buk, index) =>
     (<section key={index}>
    <Link href ={`/book/${buk.title.split(' ').join('-')}`}>
    <Image src = {`https://robohash.org/${buk.title}`} alt ={buk.title} width={100} height={100}/> 
    <h3>{buk.title}</h3>
    </Link>
    </section>))}
   </aside>
  </section>
</section>
  )
}
