import React from 'react'
import { Link } from 'react-router-dom'
const BookCard = ({data}) => {
    console.log(data)
  return (
    <>
      <Link> 
      <div className="bg-sky-500 rounded p-4 flex-col">
        <div className="bg-sky-500 rounded flex items-center justify-center">
        <img src={data.url} alt="/" className="h-[25vh]"/></div>
        <h2 className="mt-4 text-xl text-sky-500 font-semibold">{data.title}</h2>
        <p className="mt-2 text-sky-500 font-semibold">by {data.author}</p>
        <p className="mt-2 text-sky-500 font-semibold text-xl">₹ {data.price}</p>
        </div></Link>
    </>
  )
}

export default BookCard
