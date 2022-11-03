import { useState } from "react"
import { NavLink } from "react-router-dom"
const Register = () => {
    const [data, setData] = useState({ email: "", password: "" })
    const styleinput = 'border-b-2 border-solid border-black focus:outline-0'
    const handleChange = (e) => {
        e.preventDefault();
        console.log(data);
    }
    return (
        <div className='h-screen flex justify-center items-center flex-col'>
            <button className='absolute left-0 top-0'>Back</button>
            <div className='w-[30%] h-[60%] bg-base'>
                <div className='flex flex-col justify-center items-center'>
                    <div><h1>Register</h1></div>
                    <div>Sudah Punya akun?<button><NavLink to="/Login" >Login</NavLink></button></div>
                </div>
                <form className='flex flex-col space-y-6' onSubmit={handleChange}>

                    <label>Email</label>
                    <input className={styleinput} type="email" name='email' onChange={e => setData(data => ({ ...data, email: e.target.value }))} required></input>

                    <label >Password</label>
                    <input className={styleinput} type="Password" name='Password' onChange={e => setData(data => ({ ...data, password: e.target.value }))} required ></input>

                    <button type="submit" className='bg-black text-white font-bold w-28 rounded-sm mx-auto' >Login</button>
                </form>
            </div>
        </div>
    )
}

export default Register