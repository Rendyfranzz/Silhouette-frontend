import axios from "axios"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import AnimatedPage from "../components/AnimatedPage"
const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confPassword, setConfPassword] = useState("")
    const [hp, setHp] = useState("")
    const [msg, setMsg] = useState("")
    const styleinput = 'border-b-2 border-solid border-black focus:outline-0'

    const navigate = useNavigate();
    const register = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_URL}/users`, {
                name: name,
                email: email,
                hp: hp,
                password: password,
                confPassword: confPassword,
                role: "user"
            });
            navigate("/login")
        }
        catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }

        }
    }

    const handleClick = () => {
        navigate(-1)
    }
    return (
        <AnimatedPage>
            <div className='h-screen text-black flex justify-center items-center flex-col space-y-4 md:space-y-0'>
                <button className='font-bold absolute left-10 top-24' onClick={handleClick}>{`< Back`}</button>
                <div className='w-[80%] md:w-[30%] h-[70%] md:h-[90%]'>
                    <div className='flex flex-col justify-center items-center'>
                        <p className="h1">Register</p>
                        <div className="flex flex-row items-center justify-center "><p className="p text-black">Sudah Punya akun?</p><p className="overflow-hidden"><NavLink className="text-black p underline italic" to="/Login" >Login</NavLink></p></div>
                    </div>
                    <form className='flex flex-col space-y-2 md:space-y-4 p-2' onSubmit={register}>
                        {
                            msg ? <p className="p text-black">{msg}</p> : ""
                        }
                        <label>Nama</label>
                        <input className={styleinput} type="text" name='name' value={name} onChange={e => setName(e.target.value)} required></input>

                        <label>Email</label>
                        <input className={styleinput} type="email" name='email' value={email} onChange={e => setEmail(e.target.value)} required></input>

                        <label>No Hp</label>
                        <input className={styleinput} type="text" name='hp' value={hp} onChange={e => setHp(e.target.value)} required></input>

                        <label >Password</label>
                        <input className={styleinput} type="Password" name='Password' value={password} onChange={e => setPassword(e.target.value)} required ></input>

                        <label >Ulangi Password</label>
                        <input className={styleinput} type="Password" name='confPassword' value={confPassword} onChange={e => setConfPassword(e.target.value)} required ></input>

                        <button type="submit" className='bg-black text-white font-bold w-28 rounded-sm mx-auto' >Daftar</button>
                    </form>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Register