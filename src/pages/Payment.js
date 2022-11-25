import React, { useEffect, useState } from 'react'
import QRCode from "qrcode";
import axios from 'axios';
const Payment = () => {
    const [code, setCode] = useState("")

    useEffect(() => {
        getQrCode()
    }, [])

    useEffect(() => {
        if (code) qr(code.qr_string)
    }, [code])

    
    const qr = async (text) => {
        try {
            const qr = await QRCode.toDataURL(text)
            setCode(qr)
        } catch (err) {
            console.log(err);
        }
    }
    const getQrCode = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/getcode/silhouette-1669385479565`);
            setCode(response.data)
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='h-screen items-center flex justify-center'>
            <div className="flex justify-center">
                <div className="block rounded-lg shadow-lg bg-slate-300 max-w-sm text-center">
                    <div className="py-3 px-6">
                        Pembayaran
                    </div>
                    <div className="p-6 space-y-2">
                        <img className='m-auto' src={code} alt="qrcode" />
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Special title treatment</h5>
                        <p className="text-gray-700 text-base mb-4">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment