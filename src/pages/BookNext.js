import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from "react-redux"

const BookNext = () => {
    const { user } = useSelector((state) => state.auth)
    const styleinput = 'border-2 border-solid border-gray-500 focus:outline-0'


    const test = (e) => {
        e.preventDefault();
        console.log("hai");
    }
    return (
        <>
            <Navbar />
            <div className='h-screen w-screen flex flex-row items-center justify-center font-popin'>
                <div className='w-full flex justify-center'>
                    <form className='flex flex-row space-x-8' onSubmit={test}>
                        <div className='flex flex-col w-72'>
                            {
                                user ? "" : <p>Login untuk lebih cepat</p>
                            }
                            <label>Nama</label>
                            <input className={styleinput} type="text" name='email' required></input>
                            <label>Email</label>
                            <input className={styleinput} type="email" name='email' required></input>
                            <label>Nomor Hp</label>
                            <input className={styleinput} type="number" name='email' required></input>
                            <label>Pesan</label>
                            <input className={styleinput} type="text" name='Password' required ></input>

                        </div>

                        <div className='border-2'>
                            <div className='flex flex-col space-y-2'>
                                <h1 className='font-bold'>Detail Pembayaran</h1>
                                <p className=' text-isi'>Kediri</p>
                                <p>Oktober atdyadhjasss</p>

                                <div className='flex flex-row space-x-3'>
                                    <p>Total Bayar:</p>
                                    <p>600K</p>
                                </div>
                            </div>
                            <button type="submit" className="w-24 bg-slate-500" >
                                Bayar
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default BookNext