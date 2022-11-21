import axios from "axios"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const Register = () => {

    const [name,setName]= useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confPassword, setConfPassword] = useState("")
    const [msg ,setMsg] = useState("")
    const styleinput = 'border-b-2 border-solid border-black focus:outline-0'

    const navigate = useNavigate();
    const register = async(e) => {
        e.preventDefault();
        try{
            await axios.post(`${process.env.REACT_APP_URL}/users`,{
                name:name,
                email:email,
                password:password,
                confPassword:confPassword,
                role:"user"
            });
            navigate("/login")
        }
        catch(error){
            if(error.response){
                setMsg(error.response.msg);
            }

        }
    }
    return (
        <div className='h-screen flex justify-center items-center flex-col'>
            <button className='absolute left-10 top-24'>Back</button>
            <div className='w-[80%] md:w-[30%] h-[80%] md:h-[60%]'>
                <div className='flex flex-col justify-center items-center'>
                    <div><h1>Register</h1></div>
                    <div>Sudah Punya akun?<button><NavLink to="/Login" >Login</NavLink></button></div>
                </div>
                <form className='flex flex-col space-y-2 md:space-y-6' onSubmit={register}>
                    {
                        msg ? <p>{msg}</p> : ""
                    }
                    <label>Nama</label>
                    <input className={styleinput} type="text" name='name' value={name} onChange={e => setName(e.target.value)} required></input>

                    <label>Email</label>
                    <input className={styleinput} type="email" name='email' value={email} onChange={e => setEmail(e.target.value)} required></input>

                    <label >Password</label>
                    <input className={styleinput} type="Password" name='Password' value={password} onChange={e => setPassword(e.target.value)} required ></input>

                    <label >Ulangi Password</label>
                    <input className={styleinput} type="Password" name='confPassword' value={confPassword} onChange={e => setConfPassword(e.target.value)} required ></input>

                    <button type="submit" className='bg-black text-white font-bold w-28 rounded-sm mx-auto' >Daftar</button>
                </form>
            </div>
        </div>
    )
}

export default Register