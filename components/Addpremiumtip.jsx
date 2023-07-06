import { useState } from "react";
import axios from 'axios';

export default function Addpremiumtips() {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    league: '',
    match: '',
    odds: '',
    tip: '',
    scores: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'https://tasty-duck-coveralls.cyclic.app/v1/premium';
      const response = await axios.post(url, formData);
      console.log(response.data); // Handle the response as needed
      // Reset form data if needed
      setFormData({
        date: '',
        time: '',
        league: '',
        match: '',
        odds: '',
        tip: '',
        scores: ''
      });
    } catch (error) {
      console.error('Error:', error);
      console.log(error.message)
      if (error.response) {
        // Handle error response from the backend
        const errorMessage = error.response.data.error; // Adjust the property name based on your backend response structure
        // Update your state or display the error message on the page
        setError(errorMessage); // Assuming you have an error state variable called "error"
      } else {
        // Handle other errors (network, server, etc.)
        setError('An error occurred. Please try again.'); // Display a generic error message
      }
    }
  };

  return (
    <div className='flex justify-center items-center'>
      <div>
        <h1 className="text-center text-3xl">Add Premium Tip</h1>
        <form className='text-app-black' onSubmit={handleSubmit}>

          <div className='mt-4'>
            <input
              type='text'
              name='date'
              value={formData.date}
              onChange={handleInputChange}
              placeholder='date'
              className='p-3 w-full'
            />
          </div>
          <div className='mt-4'>
            <input
              type='text'
              name='time'
              placeholder='time'
              value={formData.time}
              onChange={handleInputChange}
              className='p-3'
            />
          </div>

          <div className='mt-4'>
            <input
              type='text'
              name='league'
              placeholder='league'
              value={formData.league}
              onChange={handleInputChange}
              className='p-3'
            />
          </div>

          <div className='mt-4'>
            <input
              type='text'
              name='match'
              placeholder='match'
              value={formData.match}
              onChange={handleInputChange}
              className='p-3'
            />
          </div>

          <div className='mt-4'>
            <input
              type='text'
              name='odds'
              placeholder='odds'
              value={formData.odds}
              onChange={handleInputChange}
              className='p-3'
            />
          </div>

          <div className='mt-4'>
            <input
              type='text'
              name='tip'
              placeholder='tip'
              value={formData.tip}
              onChange={handleInputChange}
              className='p-3'
            />
          </div>

          <div className='mt-4'>
            <input
              type='text'
              name='scores'
              placeholder='scores'
              value={formData.scores}
              onChange={handleInputChange}
              className='p-3'
            />
          </div>

          <button className='mt-4 h-[2.25rem] w-[6.8rem] grid place-items-center bg-gradient-to-r from-app-orange via-app-sky to-app-orange p-[1px] rounded-lg cursor-pointer hover:p-[2px] text-white'>
            <span className='bg-app-black w-full h-full p-[1px] text-sm rounded-lg inline-grid place-items-center'>Add tip</span>
          </button>
        </form>
        {error && <p className="bg-red-500">{error}</p>}

      </div>
    </div>
  );
}
