import { books } from "../page";
import Link from "next/link";

const memoirBooks = books.filter(book => book.type === 'Memoir')
const bookCard = memoirBooks.map(book =>(
    <section  key={book.id} className="p-[4rem] shadow-2xl">
        <Link href={`/books/${book.title.split(' ').join('-')}`} title={`${book.title} by ${book.author}`}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
        </Link>

    </section>
))

export default function Memoir(){
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">{bookCard}</div>
    )
}