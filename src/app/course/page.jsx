import React from 'react'

const books = [{
  id: '001',
  title: 'Atomic Habit',
  author: 'James Clear'
},

{
    id: '002',
    title: 'Things Fall Apart',
    author: 'Chinua Achebe'
},
{
    id: '003',
    title: 'The Four Winds',
    author: 'Kristin Hannah'
},
{
    id: '004',
    title: 'Klara and the Sun',
    author: 'Kazuo Ishiguro'
},
 
{
    id: '005',
    title: 'Project Hail Mary',
    author: ' Andy Weir'
},
 
{
    id: '006',
    title: 'The Push',
    author: 'Ashley Audrain'
}
 
]

const bookCard = books.map(book=>(
  <section key={book.id} className='p-10 shadow-2xl'>
    <h2>{book.title}</h2>
    <p>{book.author}</p>
  </section>
))

export default function Course() {
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>{bookCard}</div>
  )
}
