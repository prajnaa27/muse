import React from 'react'
import '../index.css'
import img from '../images/jk.png'
import YouTubePlayer from '../Components/YouTubePlayer'
import { Link, Navigate } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="flex items-center justify-center h-full bg-indigo-200">
      <div>
     <img src={img} alt="Description of the image" class="mt-4 rounded-md mr-20"/>
     </div>
    <div className="bg-white p-8 rounded shadow-md w-96">
      {/* <h2 className="text-2xl font-sign font-semibold mb-6 text-gray-800">Hellowwww</h2> */}
      <form>
        <div className="mb-4">
          <label className="text-2xl text-gray-800 font-vibe">
            Your name?
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="text-2xl text-gray-800 font-vibe">
            Favorite color?
          </label>
          <input
            type="text"
            id="color"
            name="color"
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        <Link
        to="/play"
        //  videoId="kTlv5_Bs8aw"
          type="submit"
          className="w-full bg-gray-800 p-2 rounded text-white hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue"
        >
          Let's go
        </Link>
      </form>
    </div>
  </div>
  )
}
