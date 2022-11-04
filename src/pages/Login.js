import { useState,useEffect } from "react"
import { NavLink } from "react-router-dom"
import { useDispatch,useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../feature/authSlice"
const Login = () => {

    const [email ,setEmail] = useState("")
    const [password ,setPassword] = useState("")

    const styleinput = 'border-b-2 border-solid border-black focus:outline-0'
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user,isError,isSuccess,isLoading,message}= useSelector((state)=> state.auth)

    useEffect(()=>{
        if(user || isSuccess){
            navigate("/home")
        }
    },[user,isSuccess,navigate])

    const Auth = (e)=>{
        e.preventDefault();
        console.log({email,password});
        dispatch(loginUser({email,password}))
    }
    return (
        <div className='h-screen flex justify-center items-center flex-col'>
            <button className='absolute left-0 top-0'>Back</button>
            <div className='w-[30%] h-[60%] bg-base'>
                <div className='flex flex-col justify-center items-center'>
                <div><h1>LOGIN</h1></div>
                <div>Belum Punya akun?<button><NavLink to="/regsiter" >Daftar</NavLink></button></div>
                </div>
                <form className='flex flex-col space-y-6' onSubmit={Auth}>
                    { isError &&
                        <p>{message}</p>
                    }
                    
                    <label>Email</label>
                    <input className={styleinput} type="email" name='email' value={email} onChange={e=>setEmail(e.target.value)} required></input>

                    <label >Password</label>
                    <input className={styleinput} type="Password" name='Password' value={password} onChange={e=>setPassword(e.target.value)} required ></input>

                    <button type="submit" className='bg-black text-white font-bold w-28 rounded-sm mx-auto' >
                        {
                            isLoading ? "loading..." : "Login"
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login