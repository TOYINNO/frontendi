import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
        <ul className="flex justify-around md:flex-row flex-col bg-[gold] text-slate-800 md:h-[100px] h-screen items-center">
        <Link href='/'>
        <li>Home</li>
        </Link>

        <Link href='/about'>
        <li>About</li>
        </Link>

        <Link href='/contact'>
        <li>Contacts</li>
        </Link>

        <Link href='/course'>
        <li>Courses</li>
        </Link>

        </ul>
    </nav>
  )
}
