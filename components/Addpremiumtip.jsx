import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from 'axios';

export const Addpremiumtip = () => {
  const router = useRouter();
  useEffect(() => {
    const token = sessionStorage.getItem('jwtToken');
    if (!token) {
      router.push('/');
    }
  }, []);

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
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
      setMessage(response.data.message);
      setTimeout(() => {
        setMessage('');
      }, 5000);
    } catch (error) {
      console.error('Error:', error);
      console.log(error.message);
      if (error.message) {
        setError(error.message);
        setTimeout(() => {
          setError(null);
        }, 5000);
      } else {
        setError('An error occurred. Please try again later.');
        setTimeout(() => {
          setError(null);
        }, 5000);
      }
    }
  };

  return (
    <div className='flex justify-center items-center'>
      <div>
        <h1 className="text-center text-xl">Add Premium Tip</h1>
        <form className='text-app-black' onSubmit={handleSubmit}>
          <div className='mt-4'>
            <input
              type='text'
              name='date'
              value={formData.date}
              onChange={handleInputChange}
              placeholder='Date'
              className='p-3'
            />
          </div>
          <div className='mt-4'>
            <input
              type='text'
              name='time'
              placeholder='Time'
              value={formData.time}
              onChange={handleInputChange}
              className='p-3'
            />
          </div>
          <div className='mt-4'>
            <input
              type='text'
              name='league'
              placeholder='League'
              value={formData.league}
              onChange={handleInputChange}
              className='p-3'
            />
          </div>
          <div className='mt-4'>
            <input
              type='text'
              name='match'
              placeholder='Match'
              value={formData.match}
              onChange={handleInputChange}
              className='p-3'
            />
          </div>
          <div className='mt-4'>
            <input
              type='text'
              name='odds'
              placeholder='Odds'
              value={formData.odds}
              onChange={handleInputChange}
              className='p-3'
            />
          </div>
          <div className='mt-4'>
            <input
              type='text'
              name='tip'
              placeholder='Tip'
              value={formData.tip}
              onChange={handleInputChange}
              className='p-3'
            />
          </div>
          <div className='mt-4'>
            <input
              type='text'
              name='scores'
              placeholder='Scores'
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
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};
