import React from 'react'
import AdminLayout from './AdminLayout'
import axios from 'axios'
import { useEffect, useState, Fragment } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { Dialog, Transition } from '@headlessui/react'
import "../style/Style.css"
import { Notify, SuccessNotification } from '../components/Notify';
import { useNavigate } from 'react-router-dom';
const ListTime = () => {
    const [data, setData] = useState("")
    const [loading, setLoading] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [id, setId] = useState("")
    const [temp, setTemp] = useState("")

    useEffect(() => {
        getTime()
    }, [])


    const getTime = async () => {
        const response = await axios.get(`${process.env.REACT_APP_URL}/getalljadwal`)
        setLoading(false)
        setData(response.data)
    }
    const deleteJadwal = (id) => {
        openModal()
        setId(id)
    }

    const confirmDelete = async () => {
        await axios.delete(`${process.env.REACT_APP_URL}/jadwal/${id}`)
        closeModal()
        SuccessNotification("Berhasil Hapus ")
        getTime()
    }
    const addTime = async () => {
        await axios.post(`${process.env.REACT_APP_URL}/createjadwal/`, {
            jam: temp
        })
        closeModal2()
        SuccessNotification("Berhasil Ditambahkan")
        getTime()
    }


    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    function closeModal2() {
        setIsOpen2(false)
    }

    function openModal2() {
        setIsOpen2(true)
    }

    return (
        <AdminLayout>
            {
                loading ? <div className='h-screen flex justify-center items-center'>
                    <ClipLoader
                        color="#000000"
                        loading={loading}
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div> :
                    <div className="mt-20 min-h-screen">
                        <Transition appear show={isOpen} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-lg font-medium leading-6 text-gray-900"
                                                >
                                                    Apakah anda yakin?
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        Anda tidak dapat memulihkan data ini
                                                    </p>
                                                </div>

                                                <div className="mt-4 flex space-x-4">
                                                    <button onClick={confirmDelete}
                                                        type="button"
                                                        className="inline-flex justify-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"

                                                    >
                                                        Iya
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                        onClick={closeModal}
                                                    >
                                                        Tidak
                                                    </button>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>

                        <Transition appear show={isOpen2} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeModal2}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-lg font-medium leading-6 text-gray-900"
                                                >
                                                    Tambahkan Jam
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className=" text-black text-lg">
                                                        Jam
                                                    </p>
                                                    <input type="text" className='text-black outline-none border-b-2' placeholder='10:40?' value={temp} onChange={(e) => setTemp(e.target.value)}></input>
                                                </div>

                                                <div className="mt-4 flex space-x-4">
                                                    <button onClick={addTime}
                                                        type="button"
                                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"

                                                    >
                                                        Tambahkan
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="inline-flex justify-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                        onClick={closeModal2}
                                                    >
                                                        Tidak jadi
                                                    </button>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                        <div className="flex flex-col">
                            <div className="overflow-x-auto w-full">
                                <div className="py-3 pl-2">

                                    <div className="relative max-w-xs">
                                        <button className='bg-black' onClick={openModal2}>Tambah data</button>
                                    </div>

                                </div>

                                <div className="p-1.5 inline-block align-middle">
                                    <div className="overflow-hidden border rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                                    >
                                                        ID
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                                    >
                                                        Jam
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                                    >
                                                        Delete
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                {
                                                    data.map((data, index) => (
                                                        <tr key={data.uuid}>
                                                            <td className="px-4 py-2 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                                {index + 1}
                                                            </td>
                                                            <td className="px-4 py-2 text-sm text-gray-800 whitespace-nowrap">
                                                                {data.jam}
                                                            </td>
                                                            <td className="px-4 py-2 text-sm font-medium text-right whitespace-nowrap">
                                                                <button onClick={() => deleteJadwal(data.uuid)}
                                                                    className="text-red-500 hover:text-red-700"
                                                                >
                                                                    Delete
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
            }
            <Notify />
        </AdminLayout>
    )
}

export default ListTime