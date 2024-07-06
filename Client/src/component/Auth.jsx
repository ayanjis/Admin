import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UpdatePopup from './UpdatePopup.jsx'
import Users from './Users.jsx'


const Auth = () => {
  const [names, setNames] = useState("")
  const [emails, setEmails] = useState("")
  const [phones, setPhones] = useState("")
  const [users, setUsers] = useState([])
  const [showUpdatePopup, setShowUpdatePopup] = useState(false)
  const [popupContent, setPopupContent] = useState({})

  const fetchData = async () => {
    try {
      const respose = await axios.get('http://localhost:4000/getUsers')
      setUsers(respose.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const addUser = async (e) => {
    e.preventDefault()
    if (names.length === 0 && emails.length === 0 && phones.length === 0) return null
    await axios.post('http://localhost:4000/createuser',
      {
        ...users,
        name: names,
        email: emails,
        phone: phones
      },
    )
    fetchData()
    setNames("")
    setEmails("")
    setPhones("")
  }
  const usersArray = users.user

  return (
    <div className='font-sans h-lvh p-5 flex flex-col items-center bg-gradient-to-tr from-red-200 to-gray-50 
    max-[320px]:h-fit
    max-[375px]:h-fit
    max-[425px]:h-fit
    '>
      <div className='w-full flex justify-center'>
        <div className='p-5 bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 shadow-lg'>
          <div
            className="max-w-fit bg-gradient-to-t from-orange-50 to-slate-50 rounded-md p-8 rounded-lg">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl flex justify-center">Create New Users</h2>
            <form className="flex justify-center">
              <div className="flex flex-row items-center 
              max-[320px]:flex-col
              max-[375px]:flex-col
              max-[425px]:flex-col
              ">
                <div className="mr-6 
                max-[320px]:w-full max-[320px]:m-0 max-[320px]:mt-2
                max-[375px]:w-full max-[375px]:m-0 max-[375px]:mt-2
                max-[425px]:w-full max-[425px]:m-0 max-[425px]:mt-2
                ">
                  <label className="text-base font-medium text-gray-900"> Name </label>
                  <div className="">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      value={names}
                      onChange={(e) => setNames(e.target.value)}
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div className="mr-6 
                max-[320px]:w-full max-[320px]:m-0 max-[320px]:mt-2
                max-[375px]:w-full max-[375px]:m-0 max-[375px]:mt-2
                max-[425px]:w-full max-[425px]:m-0 max-[425px]:mt-2
                ">
                  <label className="text-base font-medium text-gray-900"> Email address </label>
                  <div className="">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      value={emails}
                      onChange={(e) => setEmails(e.target.value)}
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div className="mr-6 
                max-[320px]:w-full max-[320px]:m-0 max-[320px]:mt-2
                max-[375px]:w-full max-[375px]:m-0 max-[375px]:mt-2
                max-[425px]:w-full max-[425px]:m-0 max-[425px]:mt-2
                ">
                  <label className="text-base font-medium text-gray-900"> Phone </label>
                  <div className="">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your Phone Number"
                      value={phones}
                      onChange={(e) => setPhones(e.target.value)}
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div className='h-full flex justify-end flex-col 
                max-[320px]:w-full max-[320px]:mt-4
                max-[375px]:w-full max-[375px]:mt-4
                max-[425px]:w-full max-[425px]:mt-4
                '>
                  <button type="submit"
                    onClick={addUser}
                    className="min-w-20 h-13 inline-flex items-center justify-center w-full p-4 text-base font-semibold text-black  transition-all duration-200 bg-green-300 border border-transparent rounded-md focus:outline-none hover:text-white hover:bg-green-600 focus:bg-cyan-300">
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>  
      {
        usersArray && usersArray.map((user) => {
          const { _id, name, email, phone } = user;
          return <Users
            key={_id}
            id={_id}
            name={name}
            email={email}
            phone={phone}
            fetchData={fetchData}
            setShowUpdatePopup={setShowUpdatePopup}
            setPopupContent={setPopupContent} />
        })
      }
      {
        showUpdatePopup && <UpdatePopup
          setShowUpdatePopup={setShowUpdatePopup}
          fetchData={fetchData}
          popupContent={popupContent}
        />
      }
    </div>
  )
}

export default Auth
