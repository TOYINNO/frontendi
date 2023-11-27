import React from "react"
import Link from "next/link"
export default function Courses() {
    return (
        <nav className="flex justify-around h-10 bg-blue-800 text-white text-2xl">
            <Link href = '/course'><li>All</li></Link>

            <Link href = '/course/Fiction'><li>Fiction</li></Link>

            <Link href = '/course/NonFiction'><li>NonFiction</li></Link>

           <Link href = '/course/SelfHelp'><li>SelfHelp</li></Link> 

           <Link href = '/course/Thriller'><li>Thriller</li></Link> 

           <Link href = '/course/Memoir'><li>Memoir</li></Link> 

           <Link href = '/course/Fantasy'><li>Fantasy</li></Link> 

           <Link href = '/course/Classic'><li>Classic</li></Link> 
        </nav>
    )
    
  }