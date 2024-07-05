import React, { useState } from 'react'
import axios from 'axios'


function UpdatePopup({ setShowUpdatePopup, popupContent, fetchData }) {
  const [updateNames, setUpdatNames] = useState(popupContent.name)
  const [updateEmails, setUpdatEmails] = useState(popupContent.email)
  const [updatePhones, setUpdatePhones] = useState(popupContent.phone)

  const updateUser = async () => {
    try {
      const response = await axios.put(`http://localhost:4000/updateUser/${popupContent.id}`, {
        name: updateNames,
        email: updateEmails,
        phone: updatePhones,
      })
      .then (setShowUpdatePopup(false))
      fetchData()
      return response.data.json;
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div id="popup-modal" tabIndex="-1" className="backdrop-blur-sm backdrop-brightness-50 flex justify-center items-center absolute top-0 left-0 z-50 h-screen w-screen">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className=" bg-white rounded-lg shadow dark:bg-gray-700">
          <button type="button"
            onClick={() => setShowUpdatePopup(false)}
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            <h1 className='text-3xl text-yellow-600 flex justify-center items-center mb-5'>Update the User</h1>
            <input type="name" value={updateNames} onChange={(e) => setUpdatNames(e.target.value)} id="default-search" className="block w-full mb-5 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write here the Name want to update..." required />
            <input type="email" value={updateEmails} onChange={(e) => setUpdatEmails(e.target.value)} id="default-search" className="block w-full mb-5 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write here the Email want to update..." required />
            <input type="tel" value={updatePhones} onChange={(e) => setUpdatePhones(e.target.value)} id="default-search" className="block w-full mb-5 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write here the Phone want to update..." required />
            <button data-modal-hide="popup-modal" type="button"
              onClick={updateUser}
              className="text-white bg-yellow-600 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
              Yes, I'm sure
            </button>
            <button data-modal-hide="popup-modal" type="button"
              onClick={() => setShowUpdatePopup(false)}
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdatePopup
