import React, { useEffect, useState } from 'react'
import QRCode from "qrcode";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Payment = () => {
    const [code, setCode] = useState("")
    const { qr } = useSelector((state) => state.book)
    const { user } = useSelector((state) => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        getQrCode()
    }, [])

    useEffect(() => {
        if (code) qrCode(code.qr_string)
    }, [code])



    const qrCode = async (text) => {
        try {
            const qr = await QRCode.toDataURL(text)
            setCode(qr)
        } catch (err) {
            console.log(err);
        }
    }
    const getQrCode = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/getcode/${qr}`);
            setCode(response.data)
        } catch (err) {
            console.log(`getcode ${err}`);
        }
    }

    const getTrans = async () => {
        navigate(`/userdetail/${user.uuid}`)
    }
    return (
        <div className='h-screen items-center flex justify-center text-black'>
            <div className="flex justify-center">
                <div className="block border-2 w-72 md:w-full rounded-lg shadow-lg max-w-sm text-center p-4">
                    <div className="py-3 px-6 text-xl font-medium">
                        Pembayaran
                    </div>
                    <div className="p-6 space-y-2">
                        <img className='m-auto' src={code} alt="qrcode" />
                        <p className="text-gray-900 text-xl font-medium mb-2">Scan Qris di Atas</p>
                        <p className="text-gray-700 text-base mb-4">

                        </p>
                    </div>
                    <div className=''>
                        <button className='border-2 text-sm p-2 border-black rounded-md hover:bg-green-500' onClick={getTrans}>Lihat Riwayat Transaksi</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment