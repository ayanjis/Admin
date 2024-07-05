import React from 'react'
import axios from 'axios'


const Users = ({ id, name, email, phone, fetchData, setShowUpdatePopup, setPopupContent }) => {

  const clickToUpdateUser = () => {
    setPopupContent({ id, name, email, phone })
    setShowUpdatePopup(true)
  }

  const deleteUser = async () => {
    try {
      const response = await axios.delete(`http://localhost:4000/deleteUser/${id}`, {
        id,
      })
      fetchData()
      return response.data.json;
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='w-70 m-4 mb-0 p-3 rounded-md bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20 shadow-md 
    max-[320px]:w-full max-[320px]:text-base
    max-[375px]:w-full max-[375px]:text-base
    max-[425px]:w-full max-[425px]:text-base
    '>
      <div className='bg-gray-50 text-2xl flex items-center justify-between rounded-md 
      max-[320px]:w-full max-[320px]:flex-col
      max-[375px]:w-full max-[375px]:flex-col
      max-[425px]:w-full max-[425px]:flex-col
      '>
        <div className='w-full flex items-center justify-between mx-2 
        max-[320px]:flex-col
        max-[375px]:flex-col
        max-[425px]:flex-col
        '>
          <span className='m-2'>{name}</span>
          <span className='m-2'>{email}</span>
          <span className='m-2'>{phone}</span>
        </div>
        <div className='bg-yellow-200 flex flex-row rounded mx-1 
        max-[320px]:my-4
        max-[375px]:my-4
        max-[425px]:my-4
        '>
          <span className='m-2' onClick={() => clickToUpdateUser()}>
            <svg 
            className="w-6 h-6 text-gray-320 stroke-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path className = {'stroke-yellow-400'} stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="2" d="M7 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h1m4-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7.441 1.559a1.907 1.907 0 0 1 0 2.698l-6.069 6.069L10 19l.674-3.372 6.07-6.07a1.907 1.907 0 0 1 2.697 0Z" />
            </svg>
          </span>
          <span className='m-2' 
          // onClick={() => deleteUser(id)}
          >
            <svg className="w-6 h-6 text-gray-320 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path className = {'stroke-red-400'} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Users

