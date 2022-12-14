import axios from 'axios'
import React, { useEffect, useState, Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { getMe } from '../feature/authSlice'
import ClipLoader from "react-spinners/ClipLoader";
import { Dialog, Transition } from '@headlessui/react'

const UserPayment = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const uuid = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        getTransaction()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        dispatch(getMe())
    }, [dispatch])

    const getTransaction = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/usertrans/${uuid.uuid}`)
            setData(response.data)
            setLoading(false)
        } catch (err) {
            console.log(err);
        }
    }

    const handleSubmit = async (data) => {
        const response = await axios.get(`${process.env.REACT_APP_URL}/getstatus?date=${data.tanggal}&time=${data.jadwal.uuid}`)
        console.log(response.data);
        if (response.data != null) {
            openModal()
        } else {
            navigate(`/payback/${data.qrId}`)
        }

    }

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <Navbar />


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
                    <div className="mt-20 min-h-screen font-popin w-full transition-all duration-1000 text-black">
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
                                                    Yahhh :(
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        Jadwal ini sudah lebih dahulu dibayar oleh orang lain
                                                    </p>
                                                </div>

                                                <div className="mt-4">
                                                    <button
                                                        type="button"
                                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                        onClick={closeModal}
                                                    >
                                                        Mengerti,Thanks
                                                    </button>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                        <div className="flex flex-col">
                            <h1 className='text-center font-bold text-xl'>Riwayat Transaksi</h1>

                            <div className="flex justify-center flex-col items-center">
                                <div className='flex justify-start text-left'>
                                    <p className='p text-left text-gray-900'><span className='p text-black font-semibold'>Note:</span>Jika ingin melakukan cancel dapat menghubungi nomor berikut : <a className='underline italic' href='https://wa.me/085758093907'>085758093907</a></p>
                                </div>
                                <table className="w-[80%] scale-50 md:scale-100 divide-y divide-gray-200 border rounded-lg">
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
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                Harga
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                Tanggal
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                Jam
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                Status
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {
                                            data.map((data, index) => {
                                                const tanggal = data.tanggal;
                                                return (
                                                    <tr key={data.transuuid}>
                                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                            {index + 1}
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                            {data.name}
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                            Rp{data.price}
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                            {tanggal.slice(0, 10)}
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                            {data.jadwal.jam}
                                                        </td>
                                                        {
                                                            data.lunas === "lunas" || data.lunas === "cancel" ? <td className="px-6 py-4 text-sm bg-green-400 text-black whitespace-nowrap">
                                                                {data.lunas}
                                                            </td> : <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                                {data.lunas} <button onClick={() => handleSubmit(data)} >|Bayar Sekarang</button>
                                                            </td>
                                                        }

                                                    </tr>)
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


            }

        </>
    )
}

export default UserPayment