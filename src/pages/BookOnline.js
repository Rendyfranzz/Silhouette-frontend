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
import { ClipLoader } from "react-spinners";


const BookOnline = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [value, onChange] = useState(new Date());
  const [paket, setPaket] = useState("")
  const [jam, setJam] = useState("")
  const [pilihJam, setPilihJam] = useState("")
  const [temp,setTemp] = useState("")
  const [tempTime,setTempTime] = useState("")
  const [loading,setLoading] = useState(true)
  const newtanggal = value.toDateString()

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
    setLoading(true)
    getJam(value)
  }, [value])

  const getJam = async (value) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL}/getjadwal/${newtanggal.slice(0,10)}`);
      setJam(response.data)
      setLoading(false)
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
        <div className='min-h-screen flex justify-center items-center text-black'>
          <form className="w-full flex justify-center -mt-20 md:mt-0" onSubmit={handleSubmit}>
            <div className="w-full md:w-[80%] md:h-[70%]">
              <div className="flex flex-col justify-center items-center md:flex-row space-x-3">
                <div className="w-[60%] space-y-1 text-center">
                  <p className="h1 mb-0 md:mb-2 mt-10 md:mt-0" >Pilih tanggal dan waktu</p>
                  <div className="flex flex-col md:flex-row">
                    <Calendar onChange={onChange} value={value} />
                    <div className="w-full md:w-[50%] min-h-full overflow-hidden md:ml-4">
                      <div className="grid grid-cols-2 gap-4 mt-4 md:m-0 overflow-hidden">
                        {
                          loading ? <ClipLoader
                          color="#000000"
                          loading={loading}
                          size={100}
                          aria-label="Loading Spinner"
                          data-testid="loader"
                      /> : jam &&
                        jam.all.map((data) => {
                          const isUsed = jam.used.map(t => t.jam).includes(data.jam)
                          return (isUsed ? <TimeButton key={data.uuid} value={data.uuid} className="w-14 md:w-32 border-solids border-2 border-black rounded-s bg-red-600 ml-4 md:ml-0" disabled>{data.jam}</TimeButton> :
                            <TimeButton key={data.uuid} value={data.uuid} className="w-14 md:w-32 border-solids border-2 border-black rounded-s ml-4 md:ml-0" onClick={(e) => {setPilihJam(e.target.value);setTempTime(e.target.innerHTML)}}>{data.jam}</TimeButton>)
                        })
                      }
                        
                        
                      </div>
                    </div >
                  </div>
                </div>

                <div className="w-full md:w-[40%] mt-0 md:-mt-12 flex flex-col justify-center">
                  <p className="text-center h1">Pilih paket</p>
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-y-7 mt-4 m-auto">
                      <Checkbox value={55000} id="2" onClick={(e) =>{ checked(e);setTemp(e.target.innerHTML)}}>berDua</Checkbox>
                      <Checkbox value={65000} id="4" onClick={(e) => { checked(e);setTemp(e.target.innerHTML)}}>berEMPAT</Checkbox>
                      <Checkbox value={80000} id="6" onClick={(e) =>{ checked(e);setTemp(e.target.innerHTML)}}>berENAM</Checkbox>
                    </div>
                    <div className="m-auto md:m-0">
                      <p className="p text-black">Kediri</p>
                      <p className="p text-black">{value.toDateString()} jam {tempTime} paket {temp}  </p>
                    </div>
                    <button type="submit" className="w-24 border-2 overflow-hidden hover:bg-slate-500 m-auto md:m-0">
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