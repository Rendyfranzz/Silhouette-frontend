import React, { useEffect } from 'react'
import AdminLayout from './AdminLayout'
import axios from 'axios'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
const Admin = () => {
  const [value, setValue] = useState("")
  const [data, setData] = useState("")
  useEffect(() => {
    getIncome()
  }, [value])
  const getIncome = async () => {
    const response = await axios.get(`${process.env.REACT_APP_URL}/getincome?month=Dec`)
    setData(response.data)
  }
  const people = [
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
  ]
  const [selected, setSelected] = useState(people[0])
  return (
    <AdminLayout>
      <>
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <select class="form-select appearance-none block w-full px-3 py-1.5
      text-base
      font-normal
      text-gray-700
      bg-black bg-clip-padding bg-no-repeat
      border border-solid border-gray-300 rounded
      transition ease-in-out duration-1000 m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="Des" onClick={(e) => setValue(e.target.value)}>One</option>
              <option value="jan" onClick={(e) => setValue(e.target.value)}>Two</option>
              <option value="feb" onClick={(e) => setValue(e.target.value)}>Three</option>
            </select>
          </div>
        </div>
        <p className='p text-black'>
          {data}
        </p>
      </>
    </AdminLayout>
  )
}

export default Admin