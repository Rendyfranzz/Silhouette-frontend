import { useEffect, useState } from "react";
import Calendar from 'react-calendar';
import { useNavigate } from "react-router-dom";
import { Checkbox } from "../components/Checkbox";
import Navbar from "../components/Navbar";
import TimeButton from "../components/TimeButton";
import '../style/calender.css';
import axios from "axios";
import { useDispatch } from "react-redux";
import { addJam,addPaket,addTanggal } from "../feature/bookSlice";

const BookOnline = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [value, onChange] = useState(new Date());
  const [paket, setPaket] = useState("")
  const [jam, setJam] = useState("")
  const [pilihJam, setPilihJam] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTanggal(value.toDateString()))
    dispatch(addJam(pilihJam))
    dispatch(addPaket(paket))
    navigate("/booknext")
  }
  const checked = (e) => {
    setPaket(e.target.value)
    const button = document.querySelector("input")
    console.log(button);
  }


  useEffect(() => {
    getJam(value)
    console.log(value);
    console.log(paket);
  }, [value, paket])

  const getJam = async (value) => {
    try {
      const response = await axios.get(`http://localhost:5000/getjadwal/${value.toDateString()}`);
      setJam(response.data)
    } catch (err) {
      console.log(err);
    }

  }
  // const jamString = jam?.all?.map((tes) => tes.jam)
  // const available = jamString?.filter(x => jam.used.map(t => t.jam).includes(x));
  // console.log({jamString, available})
  return (
    <>
      <Navbar />
      <div className='min-h-screen flex justify-center items-center'>
        <form className="w-full h-full flex justify-center" onSubmit={handleSubmit}>
          <div className=" w-[80%] h-[70%]">
            <div className="flex flex-col md:flex-row space-x-3">

              <div className="w-[60%] min-h-full space-y-1 text-center">
                <h1 className=" text-title">Pilih tanggal dan waktu</h1>
                <div className="flex flex-col md:flex-row">
                  <Calendar onChange={onChange} value={value} />
                  <div className=" w-[50%] min-h-full overflow-hidden ml-4">
                    {value.toDateString()}
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {jam &&
                        jam.all.map((data) => {
                          const isUsed = jam.used.map(t => t.jam).includes(data.jam)
                          return <div key={data.uuid}><TimeButton key={data.uuid} value={data.uuid} onClick={(e) => setPilihJam(e.target.value)}>{data.jam}</TimeButton><p>{JSON.stringify(isUsed)}</p></div>
                        })
                      }
                    </div>
                  </div >
                </div>
              </div>

              <div className="w-[40%] min-h-full">
                <h1 className="text-center text-title">Pilih paket</h1>
                <div className="flex flex-col gap-4 mt-4">
                  <div className="grid grid-cols-2 gap-y-7 mt-4">
                    <Checkbox value={2} id="berdua" onClick={(e) => checked(e)}></Checkbox>
                    <Checkbox value={4} id="berempat" onClick={(e) => checked(e)}></Checkbox>
                    <Checkbox value={6} id="berenam" onClick={(e) => checked(e)}></Checkbox>
                    <Checkbox value={8} id="berdelapan" onClick={(e) => checked(e)}></Checkbox>
                  </div>
                  <div>
                    <p>Kediri</p>
                    <p>{value.toDateString()} at </p>
                  </div>


                  <button type="submit" className="w-24 bg-slate-500">
                    submit
                  </button>
                </div>
              </div>
            </div>
            <div>

            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default BookOnline