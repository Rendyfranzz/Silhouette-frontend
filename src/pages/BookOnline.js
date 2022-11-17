import { useEffect, useState } from "react";
import Calendar from 'react-calendar';
import { NavLink } from "react-router-dom";
import { Button } from "../components/Button";
import Navbar from "../components/Navbar";
import TimeButton from "../components/TimeButton";
import '../style/calender.css';
const BookOnline = () => {
  const [value, onChange] = useState(new Date());
  const [paket, setPaket] = useState("")
  useEffect(() => {
    console.log(value);
    console.log(paket);
  }, [paket, value]);
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("klik")
  }

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
                      <TimeButton>10.00</TimeButton>
                      <TimeButton>10.15</TimeButton>
                      <TimeButton>10.30</TimeButton>
                      <TimeButton>10.35</TimeButton>
                      <TimeButton>10.50</TimeButton>
                      <TimeButton>11.05</TimeButton>
                      <TimeButton>10.00</TimeButton>
                      <TimeButton>10.00</TimeButton>
                      <TimeButton>10.00</TimeButton>
                      <TimeButton>10.00</TimeButton>
                      <TimeButton>10.00</TimeButton>
                    </div>
                  </div >
                </div>
              </div>

              <div className="w-[40%] min-h-full">
                <h1 className="text-center text-title">Pilih paket</h1>
                <div className="flex flex-col gap-4 mt-4">
                  <div className="grid grid-cols-2 gap-y-7 mt-4">
                    <Button value={0} onClick={(e) => setPaket(e.target.value)}>berDua</Button>
                    <Button value={1} onClick={(e) => setPaket(e.target.value)}>berEmpat</Button>
                    <Button value={2} onClick={(e) => setPaket(e.target.value)}>berEnam</Button>
                    <Button value={3} onClick={(e) => setPaket(e.target.value)}>Normal</Button>
                  </div>
                  <div>
                    <p>Kediri</p>
                    <p>{value.toDateString()} at </p>
                  </div>
                  <button type="submit" className="w-24 bg-slate-500" >
                    <NavLink to="/booknext">Next</NavLink>
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