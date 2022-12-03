import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { getMe } from '../feature/authSlice'
import ClipLoader from "react-spinners/ClipLoader";

const UserPayment = () => {

    const dispatch = useDispatch();
    const uuid = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getTransaction()
    }, [])

    useEffect(() => {
        dispatch(getMe())
    }, [dispatch])

    const getTransaction = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/usertrans/${uuid.uuid}`)
            setData(response.data)
            setLoading(false)
            console.log(loading);
        } catch (err) {
            console.log(err);
        }
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
                        <div className="flex flex-col">
                            <h1 className='text-center font-bold text-xl'>Riwayat Transaksi</h1>
                            <div className="flex justify-center">
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
                                                            data.lunas === "lunas" ? <td className="px-6 py-4 text-sm bg-green-400 text-black whitespace-nowrap">
                                                                {data.lunas}
                                                            </td> : <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                                {data.lunas}
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