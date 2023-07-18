import React, { useState } from 'react'
import axios from 'axios'
import { apiKey } from '../api';

const Content = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState({})

  const onSearchHandler = () => {
    if (!searchTerm) {
      return
    }
    axios({
      method: 'GET',
      url: `http://www.omdbapi.com/?t=${searchTerm}&&apiKey=${apiKey}`
      // url:"https://www.omdbapi.com/?s=man&apikey=4a3b711b"
    }).then((response) => {
      setData(response.data)
      console.log(response.data)
    })

    setSearchTerm("")
  }

  return (
    <div className='h-screen bg-slate-800 pt-7'>
      <div className='w-full flex items-center justify-center'>
        <input type='text' placeholder='Search Movies here...' className='text-[19px] mr-4 outline-none rounded-md p-2 w-[45%]' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button className='border border-white rounded-md p-2 text-white font-bold w-28' onClick={onSearchHandler}>Search</button>
      </div>

      { Object.keys(data).length>0 &&
        <div className='mt-10 w-full flex items-center justify-center text-white font-bold'>
          <div>
            <img src={data.Poster} alt="#" className='border border-white rounded-lg ' />
          </div>
          <div className='ml-5 bg-slate-700 p-2 rounded-md '>
            <h1>Title : {data.Title}</h1>
            <div className='pt-2' />
            <p>Actors : {data.Actors} </p>
            <div className='pt-2' />
            <p>Boxoffice collection : {data.Boxoffice} </p>
            <div className='pt-2' />
            <p> Genre : {data.Genre} </p>
            <div className='pt-2' />
            <p> Language : {data.Language} </p>
            <div className='pt-2' />
            <p> Plot: {data.Plot} </p>
            <div className='pt-2' />
            <p> Year: {data.Year} </p>
            <div className='pt-2' />
            <p> imdbRating: {data.imdbRating} </p>
          </div>
        </div>
      }
    </div>
  )
}

export default Content