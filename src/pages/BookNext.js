import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getMe } from '../feature/authSlice';
import { useEffect } from 'react';
import { addQr } from "../feature/bookSlice";
import axios from 'axios'
import AnimatedPage from '../components/AnimatedPage'
import { Notification, Notify } from "../components/Notify";
import Footer from '../components/Footer'

const BookNext = () => {
    const navigate = useNavigate();
    const [choice, setChoice] = useState("")
    const [pesan,setPesan] = useState("")
    const { user } = useSelector((state) => state.auth)
    const { jam, tanggal, paket } = useSelector((state) => state.book)
    const styleinput = 'border-2 border-solid border-gray-500 focus:outline-0'

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMe())
    }, [dispatch])

    useEffect(() => {
        getChoice(jam)
    },[jam])

    const createTransaction = async (e) => {
        if(!user) return Notification("Harap Login ke Akun Anda")
        const Id = +new Date();
        const qrId = `silhouette-${Id}`
        dispatch(addQr(qrId))
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_URL}/transaction`, {
                name: user.name,
                price: paket,
                lunas: "belum",
                tanggal:tanggal ,
                pesan : pesan,
                timeid: jam,
                qrId: qrId,
                uuid: user.uuid
            });
            await axios.get(`${process.env.REACT_APP_URL}/getqr/${qrId}&&${paket}`);
            navigate("/payment")
        }
        catch (error) {
            if (error.response) {
                console.log(error.response.msg);
            }

        }
    }

    const getChoice = async (time) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/getjadwalid/${time}`);
            setChoice(response.data)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <AnimatedPage>
            <>
                <Navbar />
                <div className='h-screen w-screen flex flex-row items-center justify-center font-popin text-black'>
                    <div className='w-full flex justify-center p-4'>
                        <form className='flex flex-col md:flex-row justify-center items-center md:space-y-0 space-y-8 md:space-x-8' onSubmit={createTransaction}>
                            <div className='flex flex-col w-72'>
                                {
                                    user ? "" : <p className='text-center md:text- h2 md:h1'>Login untuk Pemesanan</p>
                                }
                                {
                                    user ? <><label>Nama</label>
                                        <input className={styleinput} type="text" name='name' defaultValue={user.name} disabled></input>
                                        <label>Email</label>
                                        <input className={styleinput} type="email" name='email' defaultValue={user.email} disabled></input>
                                        <label>Nomor Hp</label>
                                        <input className={styleinput} type="text" name='no' defaultValue={user.hp} disabled></input>
                                        <label>Pesan</label>
                                        <input className={styleinput} type="text" name='pesan' value={pesan} onChange={(e)=>setPesan(e.target.value)}></input></> : ""
                                }
                            </div>

                            <div className=''>
                                <div className='flex flex-col space-y-2'>
                                    <h1 className='font-bold'>Detail Pembayaran</h1>
                                    <p className='p text-black font-medium'>Kediri</p>
                                    <p className='p text-black'>{tanggal} {choice.jam}</p>

                                    <div className='flex flex-row space-x-3'>
                                        <p className='p text-black'>Total Bayar:Rp {paket}</p>
                                    </div>
                                </div>
                                <button type="submit" className="w-24 bg-slate-500" >Bayar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <Notify/>
                <Footer/>
            </>
        </AnimatedPage>
    )
}

export default BookNext