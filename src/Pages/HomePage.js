// import React from 'react'
// import '../index.css'
// import img from '../images/jk.png'
// import YouTubePlayer from '../Components/YouTubePlayer'
// import { Link, Navigate } from 'react-router-dom'

// export default function HomePage() {
//   return (
//     <div className="flex items-center justify-center h-full bg-indigo-200">
//       <div>
//      <img src={img} alt="Description of the image" class="mt-4 rounded-md mr-20"/>
//      </div>
//     <div className="bg-white p-8 rounded shadow-md w-96">
//       {/* <h2 className="text-2xl font-sign font-semibold mb-6 text-gray-800">Hellowwww</h2> */}
//       <form>
//         <div className="mb-4">
//           <label className="text-2xl text-gray-800 font-vibe">
//             Your name?
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className="w-full p-2 border border-gray-300 rounded mt-1"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="text-2xl text-gray-800 font-vibe">
//             Your zodiac sign?
//           </label>
//           <input
//             type="text"
//             id="color"
//             name="color"
//             className="w-full p-2 border border-gray-300 rounded mt-1"
//           />
//         </div>

//         <Link
//         to="/play"
//         //  videoId="kTlv5_Bs8aw"
//           type="submit"
//           className="w-full bg-gray-800 p-2 rounded text-white hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue"
//         >
//           Let's go
//         </Link>
//       </form>
//     </div>
//   </div>
//   )
// }


import React from 'react';
import '../index.css';
import { useState } from 'react';
import img from '../images/jk.png';
import YouTubePlayer from '../Components/YouTubePlayer';
import { Link, Navigate,useNavigate } from 'react-router-dom';

export default function HomePage() {

  const [formData, setFormData] = useState({
    name: '',
    zodiacSign: '',
  });

  const [showToast, setShowToast] = useState(false);
  const nav=useNavigate();

  const zodiacSigns = [
    { name: 'Aries', symbol: '♈' },
    { name: 'Taurus', symbol: '♉' },
    { name: 'Gemini', symbol: '♊' },
    { name: 'Cancer', symbol: '♋' },
    { name: 'Leo', symbol: '♌' },
    { name: 'Virgo', symbol: '♍' },
    { name: 'Libra', symbol: '♎' },
    { name: 'Scorpio', symbol: '♏' },
    { name: 'Sagittarius', symbol: '♐' },
    { name: 'Capricorn', symbol: '♑' },
    { name: 'Aquarius', symbol: '♒' },
    { name: 'Pisces', symbol: '♓' },
  ];
const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    if (formData.name && formData.zodiacSign) {
      // All data is entered, you can navigate or perform other actions
      console.log('Form submitted:', formData);
      nav('/play')
      // Add logic to navigate to the next page or perform other actions
    } else {
      // Not all data is entered, show a toaster message or modal
      setShowToast(true);
  
      // Reset showToast after a delay (e.g., 3 seconds)
      setTimeout(() => {
        setShowToast(false);
      }, 3000); // Adjust the delay as needed
    }
  };
  return (
    <div className="flex items-center justify-center h-full bg-indigo-200">
      <div>
        <img src={img} alt="Description of the image" class="mt-4 rounded-md mr-20" />
      </div>
      <div className="bg-white p-8 rounded shadow-md w-96">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="text-2xl text-gray-800 font-vibe">Your name?</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>

          <div className="mb-4">
            <label className="text-2xl text-gray-800 font-vibe">Your zodiac sign?</label>
            <select
              id="zodiacSign"
              name="zodiacSign"
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              defaultValue=""
            >
              <option value="" disabled hidden>
    Select your zodiac sign
  </option>
              {zodiacSigns.map((sign) => (
                <option key={sign.name} value={sign.name}>
                  {sign.name} - {sign.symbol}
                </option>
              ))}
            </select>
          </div>

          <button
            // to="/play"
            //  videoId="kTlv5_Bs8aw"
            type="submit"
            className="w-full bg-gray-800 p-2 rounded text-white hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue"
          >
            Let's go
          </button>
        </form>
        {showToast && (
          <div className="mt-4 p-2 bg-red-500 text-white rounded">
            Please enter all data.
          </div>
        )}
      </div>
    </div>
  );
}
