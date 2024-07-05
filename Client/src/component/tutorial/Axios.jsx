import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Axios() {
  const [data, setData] = useState([])
  const [isError, setIsError] = useState('')

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setData(res.data))
      .catch((error) => setIsError(error.message))
  }, [])

  return (
    <div>
      <h1 className='text-2xl font-bold text-gray-500 flex justify-center'>Axios</h1>
      <h3 className='font-bold text-gray-500 flex justify-center'>{ isError }</h3>
      <div className='grid gap-4 grid-cols-3 p-5'>
        {
          data.map((post) => {
            const { id, title, body } = post

            return (
              <div key={id} className='bg-gray-200 p-4 rounded flex flex-col items-center'>
                <h2 className='font-medium'>{title.slice(0, 15).toUpperCase()}</h2>
                <h2>{body.slice(0, 150)}</h2>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Axios
