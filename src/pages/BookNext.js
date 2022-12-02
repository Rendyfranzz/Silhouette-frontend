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

const BookNext = () => {
    const navigate = useNavigate();
    const [choice, setChoice] = useState("")
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
        const Id = +new Date();
        const qrId = `silhouette-${Id}`
        dispatch(addQr(qrId))
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_URL}/transaction`, {
                name: user.name,
                price: paket,
                lunas: "belum",
                tanggal: tanggal,
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
                <div className='h-screen w-screen flex flex-row items-center justify-center font-popin'>
                    <div className='w-full flex justify-center'>
                        <form className='flex flex-row space-x-8' onSubmit={createTransaction}>
                            <div className='flex flex-col w-72'>
                                {
                                    user ? "" : <p>Login untuk Pemesanan</p>
                                }
                                {
                                    user ? <><label>Nama</label>
                                        <input className={styleinput} type="text" name='name' value={user.name} required></input>
                                        <label>Email</label>
                                        <input className={styleinput} type="email" name='email' value={user.email} required></input>
                                        <label>Nomor Hp</label>
                                        <input className={styleinput} type="number" name='no'></input>
                                        <label>Pesan</label>
                                        <input className={styleinput} type="text" name='pesan' ></input></> : ""
                                }
                            </div>

                            <div className=''>
                                <div className='flex flex-col space-y-2'>
                                    <h1 className='font-bold'>Detail Pembayaran</h1>
                                    <p className=' text-isi'>Kediri</p>
                                    <p>{tanggal} {choice.jam}</p>

                                    <div className='flex flex-row space-x-3'>
                                        <p>Total Bayar:Rp {paket}</p>
                                    </div>
                                </div>
                                <button type="submit" className="w-24 bg-slate-500" >Bayar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        </AnimatedPage>
    )
}

export default BookNext