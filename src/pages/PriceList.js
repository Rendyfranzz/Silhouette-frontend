import Navbar from "../components/Navbar"
import { useDispatch } from "react-redux"
import { getMe } from '../feature/authSlice';
import { useEffect } from 'react';

const PriceList = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getMe()) 
    },[dispatch])
    const garis = "w-full border-b-2 border-dashed border-black"
    const card = "w-[30%] h-72 rounded-md text-center bg-abu flex flex-col justify-center space-y-2"
    return (
        <>
            <Navbar />
            <div className='min-h-screen justify-center items-center flex flex-col font-popin overflow-x-hidden'>
                {/* Pricelist Atas */}
                <div className='w-full p-4 md:p-0 md:w-[60%] mt-20'>
                    <div className='text-center'><h1 className="text-center text-title">Normal PriceList</h1></div>
                    <div><h1 className=" text-title">Self Photo Studio</h1>
                        <ul className='list-disc text-isi ml-6'>
                            <li><p>Unlimited Shoot</p></li>
                            <li><p>Max 6 orang</p></li>
                            <li><p>Free 10 SoftFiles</p></li>
                        </ul>
                        <div className='flex flex-row h-4 justify-evenly relative overflow-hidden'>
                            <div className='w-[90%] -ml-8 border-b-2 border-dashed border-black'></div>
                            <div className='absolute -bottom-1 right-0'><p>20k</p></div>
                        </div>

                    </div>

                    <div className=''><h1 className="text-title">Tambahan</h1>
                        <div className='flex flex-row'>
                            <div className='w-[40%]'>
                                <ul className='list-disc text-isi ml-6'>
                                    <li><p>Waktu Max 5 Menit/Sesi</p></li>
                                    <li><p>Tambahan 1 Orang</p></li>
                                    <li><p>Tambahan 1x Cetak</p></li>
                                </ul>
                            </div>
                            <div className='w-[60%]'>
                                <ul className='p-2 space-y-6 ml-4'>
                                    <li><div className={garis}></div></li>
                                    <li><div className={garis}></div></li>
                                    <li><div className={garis}></div></li>
                                </ul>
                            </div>
                            <div>
                                <ul className='text-isi'>
                                    <li><p>20k</p></li>
                                    <li><p>20k</p></li>
                                    <li><p>20k</p></li>
                                </ul>
                            </div>
                        </div></div>

                    <div><h1 className="text-title">All Soft Files</h1>
                        <div className='flex flex-row'>
                            <div className='w-[40%]'>
                                <ul className='list-disc text-isi ml-6'>
                                    <li><p>Colored all soft file</p></li>
                                </ul>
                            </div>
                            <div className='w-[60%]'>
                                <ul className='p-2  mt-2 ml-4'>
                                    <li><div className={garis}></div></li>
                                </ul>
                            </div>
                            <div>
                                <ul className='text-isi'>
                                    <li><p>20k</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Price List Bawah */}
                <div className='w-full md:w-[60%] mt-10 justify-center relative '>
                    <div className='text-center'><h1 className='text-title'>Price List Paket Kamu</h1></div>

                    <div className='flex flex-row justify-evenly absolute w-full '>
                        <div className="w-[30%] h-72 rounded-md text-center bg-abu flex flex-col justify-center space-y-2 mt-10">
                            <div><h1 className='tetx-lg md:text-title'>berDua</h1></div>
                            <div>
                                <ul>
                                    <li>
                                        <p>Unlimited Shoot</p>
                                    </li>
                                    <li>
                                        <p>Durasi 10 Menit</p>
                                    </li>
                                    <li>
                                        <p>Maks 2 orang</p>
                                    </li>
                                    <li>
                                        <p>Free Cetak 2x</p>
                                    </li>
                                    <li>
                                        <p>All softfile</p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className='text-title'>55k</p>
                            </div>
                        </div>

                        <div className={card}>
                            <div><h1 className='text-title'>berEMPAT</h1></div>
                            <div>
                                <ul>
                                    <li>
                                        <p>Unlimited Shoot</p>
                                    </li>
                                    <li>
                                        <p>Durasi 10 Menit</p>
                                    </li>
                                    <li>
                                        <p>Maks 4 orang</p>
                                    </li>
                                    <li>
                                        <p>Free Cetak 3x</p>
                                    </li>
                                    <li>
                                        <p>All softfile</p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className='text-title'>65k</p>
                            </div>
                        </div>

                        <div className="w-[30%] h-72 rounded-md text-center bg-abu flex flex-col justify-center space-y-2 mt-10">
                            <div><h1 className='text-title'>berENAM</h1></div>
                            <div>
                                <ul>
                                    <li>
                                        <p>Unlimited Shoot</p>
                                    </li>
                                    <li>
                                        <p>Durasi 10 Menit</p>
                                    </li>
                                    <li>
                                        <p>Maks 6 orang</p>
                                    </li>
                                    <li>
                                        <p>Free Cetak 4x</p>
                                    </li>
                                    <li>
                                        <p>All softfile</p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className='text-title'>80k</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-20'></div>
                    <div className='w-full h-80 bg-abu2 rounded-tl-md rounded-tr-md mt-10 flex text-white justify-center'>
                        <div className=' mt-40 p-2'>
                            <div><h1 className='text-title text-center'>Tambahan:</h1></div>
                            <div>
                                <ul className='text-isi list-disc space-y-2'>
                                    <li><p>Tambah waktu : 10k(5 menit)</p></li>
                                    <li><p>Tambah Orang : 10k(per Orang)</p></li>
                                    <li><p>Tambah Cetak : 10k(per Lembar)</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PriceList