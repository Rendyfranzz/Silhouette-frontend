import { useEffect, useState } from "react";
import Calendar from 'react-calendar';
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "../components/Checkbox";
import Navbar from "../components/Navbar";
import TimeButton from "../components/TimeButton";
import '../style/calender.css';
import axios from "axios";
import { useDispatch } from "react-redux";
import { addJam, addPaket, addTanggal } from "../feature/bookSlice";
import AnimatedPage from "../components/AnimatedPage";
import 'react-toastify/dist/ReactToastify.css';
import { Notification, Notify } from "../components/Notify";


const BookOnline = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [value, onChange] = useState(new Date());
  const [paket, setPaket] = useState("")
  const [jam, setJam] = useState("")
  const [pilihJam, setPilihJam] = useState("")
  const [temp,setTemp] = useState("")
  const [tempTime,setTempTime] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTanggal(value.toDateString()))
    dispatch(addJam(pilihJam))
    dispatch(addPaket(paket))
    if (pilihJam && paket) navigate("/booknext")
    Notification("Pilih jam dan paket")
  }
  const checked = (e) => {
    setPaket(e.target.value)
    let id = e.target.value
    // for (let i = 2; i < 9; i += 2) {
    //   document.getElementById(id).disabled=true
    // }
    document.getElementById(id)
    console.log(document.getElementById(id));
  }


  useEffect(() => {
    getJam(value)
  }, [value])

  const getJam = async (value) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL}/getjadwal/${value.toDateString()}`);
      setJam(response.data)
    } catch (err) {
      console.log(err);
    }
  }
  // const jamString = jam?.all?.map((tes) => tes.jam)
  // const available = jamString?.filter(x => jam.used.map(t => t.jam).includes(x));
  // console.log({jamString, available})
  return (
    <AnimatedPage>
      <>
        <Navbar />
        <div className='min-h-screen flex justify-center items-center'>
          <form className="w-full flex justify-center" onSubmit={handleSubmit}>
            <div className="w-full md:w-[80%] md:h-[70%]">
              <div className="flex flex-col justify-center items-center md:flex-row space-x-3">
                <div className="w-[60%] space-y-1 text-center">
                  <h1 className=" text-title">Pilih tanggal dan waktu</h1>
                  <div className="flex flex-col md:flex-row">
                    <Calendar onChange={onChange} value={value} />
                    <div className="w-full md:w-[50%] min-h-full overflow-hidden md:ml-4">
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        {jam &&
                          jam.all.map((data) => {
                            const isUsed = jam.used.map(t => t.jam).includes(data.jam)
                            return (isUsed ? <TimeButton key={data.uuid} value={data.uuid} className="w-14 md:w-32 border-solids border-2 border-black rounded-s bg-red-600" disabled>{data.jam}</TimeButton> :
                              <TimeButton key={data.uuid} value={data.uuid} className="w-14 md:w-32 border-solids border-2 border-black rounded-s" onClick={(e) => {setPilihJam(e.target.value);setTempTime(e.target.innerHTML)}}>{data.jam}</TimeButton>)
                          })
                        }
                      </div>
                    </div >
                  </div>
                </div>

                <div className="w-full md:w-[40%] mt-0 md:-mt-12 flex flex-col justify-center">
                  <h1 className="text-center text-title">Pilih paket</h1>
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-y-7 mt-4">
                      <Checkbox value={55000} id="2" onClick={(e) =>{ checked(e);setTemp(e.target.innerHTML)}}>berDua</Checkbox>
                      <Checkbox value={65000} id="4" onClick={(e) => { checked(e);setTemp(e.target.innerHTML)}}>berEMPAT</Checkbox>
                      <Checkbox value={80000} id="6" onClick={(e) =>{ checked(e);setTemp(e.target.innerHTML)}}>berENAM</Checkbox>
                    </div>
                    <div className="m-auto md:m-0">
                      <p>Kediri</p>
                      <p>{value.toDateString()} jam {tempTime} paket {temp}  </p>
                    </div>
                    <button type="submit" className="w-24 border-2 hover:bg-slate-500 m-auto md:m-0">
                      submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <Footer />
        <Notify />

      </>
    </AnimatedPage>
  )
}

export default BookOnline