import React from 'react'

const Hero = () => {
  return (
    <div className="h-[75vh] flex">
      <div className="w-full lg:w-3/6 flex flex-col items-center lg:items-start justify-center">
      <h1 className=" text-4xl lg:text-6xl font-semibold text-sky-600 text-center lg:text-left">Explore Your Next Great Read</h1>
      <p className="mt-4 text-xl text-sky-500 text-center lg:text-left">Uncover captivating stories, enriching knowledge, and endless inspiration in our curated collection of books </p>
      <div className="mt-8">
        <button className="text-sky-600 text-xl lg:text-2xl font-semibold border border-sky-600 px-10 py-3 hover:bg-blue-500 rounded-full">Discover Books</button>
      </div>
      </div>
      <div className="w-full  lg:w-3/6">
      <img src="./Hero.png" alt="hero" />
      </div>
    </div>
  )
}

export default Hero
