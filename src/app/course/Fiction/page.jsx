import { books } from "../page";
import Link from "next/link";

const fictionBooks = books.filter(book => book.type === 'Fiction')
const bookCard = fictionBooks.map(book =>(
    <section  key={book.id} className="p-[4rem] shadow-2xl">
        <Link href={`/books/${book.title.split(' ').join('-')}`} title={`${book.title} by ${book.author}`}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
        </Link>

    </section>
))

export default function Fiction(){
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">{bookCard}</div>
    )
}