import React from 'react'
import Link from 'next/link'

export const books = [
  {
    id: '001',
    title: 'Atomic Habit',
    author: 'James Clear',
    year: 2018,
    type: 'SelfHelp',
    summary: 'A guide to building good habits and breaking bad ones, backed by scientific research and real-life examples.'
  },
  {
    id: '002',
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    year: 1958,
    type: 'Fiction',
    summary: 'A novel that explores the effects of British colonialism and Christian missionary efforts on the Igbo society in Nigeria.'
  },
  {
    id: '003',
    title: 'The Four Winds',
    author: 'Kristin Hannah',
    year: 2021,
    type: 'Fiction',
    summary: 'Set during the Great Depression, this novel follows a woman\'s journey from Texas to California in search of a better life.'
  },
  {
    id: '004',
    title: 'Klara and the Sun',
    author: 'Kazuo Ishiguro',
    year: 2021,
    type: 'Fiction',
    summary: 'A thought-provoking story about an Artificial Friend named Klara and her observations of human behavior.'
  },
  {
    id: '005',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    year: 2021,
    type: 'Fiction',
    summary: 'A gripping tale of a lone astronaut on a mission to save humanity, filled with humor, science, and unexpected twists.'
  },
  {
    id: '006',
    title: 'The Push',
    author: 'Ashley Audrain',
    year: 2021,
    type: 'Thriller',
    summary: 'A psychological novel that explores the complexities of motherhood and the impact of intergenerational trauma.'
  },
  // Additional entries with years, type, and summary
  {
    id: '007',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    year: 2019,
    type: 'Thriller',
    summary: 'A psychological mystery about a woman\'s sudden violence against her husband and her subsequent silence.'
  },
  {
    id: '008',
    title: 'Educated',
    author: 'Tara Westover',
    year: 2018,
    type: 'Memoir',
    summary: 'The memoir of a woman who grows up in a strict and abusive household but eventually escapes to pursue education.'
  },
  {
    id: '009',
    title: 'The Night Circus',
    author: 'Erin Morgenstern',
    year: 2011,
    type: 'Fantasy',
    summary: 'A magical tale of a mysterious circus that appears only at night, showcasing fantastical wonders and illusions.'
  },
  {
    id: '010',
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    year: 2014,
    type: 'NonFiction',
    summary: 'A thought-provoking exploration of the history of Homo sapiens, from the emergence of our species to modern times.'
  },
  {
    id: '011',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    type: 'Classic',
    summary: 'A timeless classic that explores the American Dream and the decadence of the Jazz Age through the story of Jay Gatsby.'
  },
  {
    id: '012',
    title: 'Eleanor Oliphant Is Completely Fine',
    author: 'Gail Honeyman',
    year: 2017,
    type: 'Fiction',
    summary: 'A heartwarming and quirky novel about an eccentric woman\'s journey towards self-discovery and connection with others.'
  }
]

const bookCard = books.map(book=>(
  <section key={book.id} className='p-10 shadow-2xl'>
    <Link href = {`/books/${book.title.split(' ').join('-')}`} title = {`${book.title} by ${book.author}`}>
    <h2>{book.title}</h2>
    <p>{book.author}</p>
    </Link>
  </section>
))

export default function Course() {
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>{bookCard}</div>
  )
}
