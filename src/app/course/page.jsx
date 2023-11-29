"use client"
import Link from 'next/link'
import { useState } from 'react'


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
  },
  {
    id: '014',
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    year: 2003,
    type: 'Thriller',
    summary: 'Dan Brown\'s "The Da Vinci Code" is a pulse-pounding thriller that follows symbologist Robert Langdon as he is drawn into a mysterious web of secrets, codes, and ancient symbols. The discovery of a murder victim in the Louvre Museum sets off a chain of events that lead Langdon and cryptologist Sophie Neveu on a quest to unravel a hidden truth guarded for centuries. As they navigate through cryptic messages and historical mysteries, the duo must stay one step ahead of a relentless adversary. With twists and turns at every corner, "The Da Vinci Code" keeps readers on the edge of their seats in this high-stakes race against time.'

  },
  {
    id: '015',
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    year: 1997,
    type: 'Fantasy',
    summary: 'J.K. Rowling\'s "Harry Potter and the Sorcerer\'s Stone" introduces readers to the magical world of Hogwarts and the young wizard, Harry Potter. As Harry discovers his wizarding abilities and befriends Ron Weasley and Hermione Granger, they embark on a journey to uncover the mystery behind the Sorcerer\'s Stone. With its enchanting characters, magical creatures, and rich world-building, this fantasy novel captivates readers of all ages. Rowling weaves a tale of friendship, courage, and the triumph of good over evil, setting the stage for the epic adventures that follow in the rest of the series.'
  },
  {
    id: '016',
    title: 'The Glass Castle',
    author: 'Jeannette Walls',
    year: 2005,
    type: 'Memoir',
    summary: 'Jeannette Walls\'s "The Glass Castle" is a compelling memoir that unveils the author\'s tumultuous and unconventional childhood. Raised by eccentric parents who held unconventional views on life, Walls recounts her experiences with humor and resilience. From their nomadic lifestyle to the challenges of poverty and her parents\' unorthodox approach to parenting, Walls provides a candid and introspective look into her past. "The Glass Castle" is a poignant exploration of family dynamics, resilience, and the enduring impact of a unique and challenging upbringing.'
  },
  {
    id: '017',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    type: 'Classic',
    summary: 'Harper Lee\'s "To Kill a Mockingbird" is a timeless classic that explores themes of racial injustice, moral growth, and compassion in the American South during the 1930s. Through the eyes of Scout Finch, the novel follows her father, attorney Atticus Finch, as he defends a black man wrongly accused of raping a white woman. Lee masterfully addresses issues of prejudice, empathy, and the complexities of human nature. "To Kill a Mockingbird" is a powerful narrative that resonates with readers for its profound insights into the human condition and its enduring relevance in today\'s society.'
  },
  {
    id: '018',
    title: 'The Immortal Life of Henrietta Lacks',
    author: 'Rebecca Skloot',
    year: 2010,
    type: 'NonFiction',
    summary: 'Rebecca Skloot\'s "The Immortal Life of Henrietta Lacks" is a riveting work of non-fiction that delves into the story of Henrietta Lacks, whose cells were unknowingly used for scientific research and became instrumental in medical advancements. Skloot intricately weaves together the scientific journey of HeLa cells with the personal history of the Lacks family. The book raises thought-provoking ethical questions about medical consent, the commercialization of human tissues, and the impact of scientific progress on individuals. "The Immortal Life of Henrietta Lacks" is a captivating exploration of the intersection between science, ethics, and the human experience.'

  },
  {
    id: '019',
    title: 'Gone Girl',
    author: 'Gillian Flynn',
    year: 2012,
    type: 'Thriller',
    summary: 'Gillian Flynn\'s "Gone Girl" is a psychological thriller that twists and turns with every page. When Amy Dunne goes missing on her fifth wedding anniversary, suspicion falls on her husband Nick. As the media frenzy intensifies, secrets and lies unravel, leading to a gripping narrative that challenges perceptions and keeps readers guessing until the shocking conclusion. Flynn skillfully explores the complexities of marriage, deception, and the public perception of crime in this dark and compelling thriller.'
  },
  {
    id: '020',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    year: 1954,
    type: 'Fantasy',
    summary: `J.R.R. Tolkien's "The Lord of the Rings" is an epic fantasy trilogy that transports readers to the enchanting world of Middle-earth. The quest to destroy the One Ring and thwart the dark lord Sauron unfolds across a vast landscape inhabited by diverse races, cultures, and magical creatures. Tolkien's intricate world-building, rich mythology, and memorable characters make this fantasy classic a masterpiece of the genre. With themes of friendship, sacrifice, and the battle between good and evil, "The Lord of the Rings" has captivated readers for generations.`

  },
  {
    id: '021',
    title: 'Bossypants',
    author: 'Tina Fey',
    year: 2011,
    type: 'Memoir',
    summary: `Tina Fey's "Bossypants" is a hilarious and candid memoir that offers a glimpse into the life and career of the acclaimed comedian and writer. From her early days in improv comedy to becoming the first female head writer of "Saturday Night Live", Fey shares anecdotes and insights with her trademark wit. "Bossypants" is not only a memoir but also a celebration of female empowerment and resilience in the male-dominated world of comedy. Fey's storytelling prowess and humor make this memoir an entertaining and inspiring read.`
  },
  {
    id: '022',
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    type: 'Classic',
    summary: 'A dystopian novel that explores themes of totalitarianism, surveillance, and the manipulation of truth.'
  },
  {
    id: '023',
    title: 'The Power of Habit',
    author: 'Charles Duhigg',
    year: 2012,
    type: 'NonFiction',
    summary: 'An exploration of the science behind habits, why they exist, and how they can be changed to transform our lives.'
  },
  {
    id: '024',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    year: 2019,
    type: 'Thriller',
    summary: 'A psychological thriller about a woman\'s sudden violence against her husband and her subsequent silence.'
  },
  {
    id: '025',
    title: 'The Name of the Wind',
    author: 'Patrick Rothfuss',
    year: 2007,
    type: 'Fantasy',
    summary: 'The first book in the Kingkiller Chronicle series, following the life and adventures of the gifted young musician Kvothe.'
  },
  {
    id: '026',
    title: 'Eat, Pray, Love',
    author: 'Elizabeth Gilbert',
    year: 2006,
    type: 'Memoir',
    summary: 'A memoir chronicling the author\'s journey of self-discovery through Italy, India, and Indonesia after a difficult divorce.'
  },
  {
    id: '027',
    title: 'Moby-Dick',
    author: 'Herman Melville',
    year: 1851,
    type: 'Classic',
    summary: 'A classic novel exploring the obsession of Captain Ahab with the white whale Moby-Dick and the themes of fate and revenge.'
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

  const [searchBook, setSearchBook] = useState('')
  const filteredBook = books.filter(book => book.title.toLowerCase().includes(searchBook.toLowerCase()))

  function onSubmit(e){
    e.preventDefault()
    setSearchBook(e.target.search.value)
  }

  const bookCard = filteredBook.map(book =>(
    <section key={book.id} className='p-[4rem] shadow-2xl'>
      <Link href={`/books/${book.title.split(' ').join('-')}`} title={`${book.title} by ${book.author}`}>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
      </Link>
    </section>
  ))
  return (
    <div>
      <form className='flex items-center justify-center' onSubmit={onSubmit}>
        <input type="text" name="search" id="search" placeholder='search for book or Author' className='w-3/5 outline-none rounded-[40px] border-2 border-gray-700 border-solid p-4 my-5 m-auto'
        defaultValue={searchBook} />
      </form>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
      {bookCard}
      </div>
      </div>
  )
}
