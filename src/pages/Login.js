import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../feature/authSlice"
import AnimatedPage from "../components/AnimatedPage"
import { Notify, SuccessNotification } from "../components/Notify"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const styleinput = 'border-b-2 border-solid border-black focus:outline-0'
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if (user && isSuccess && !isLoading) {
            SuccessNotification("Berhasil Login")
            navigate("/home")
        }
        if (user && user.role === "admin" && !isLoading) {
            SuccessNotification("Berhasil Login")
            navigate("/admin")
        }
    }, [user, isSuccess, navigate, isLoading])


    const Auth = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }))
    }

    const handleClick = () => {
        navigate(-1)
    }
    return (
        <AnimatedPage>
            <div className='h-screen flex justify-center items-center flex-col text-black'>
                <button className='absolute left-10 top-24' onClick={handleClick}>Back</button>
                <div className='w-[80%] md:w-[30%] h-[60%]'>
                    <div className='flex flex-col justify-center items-center'>
                        <div><p className="h1">LOGIN</p></div>
                        <div className="flex flex-row items-center justify-center"><p className="p text-black">Belum Punya akun?</p><p className=" overflow-hidden"><NavLink className="text-black p" to="/register" >Daftar</NavLink></p></div>
                    </div>
                    <form className='flex flex-col space-y-6' onSubmit={Auth}>
                        {isError &&
                            <p className="p text-black">{message}</p>

                        }
                        <label>Email</label>
                        <input className={styleinput} type="email" name='email' value={email} onChange={e => setEmail(e.target.value)} required></input>

                        <label >Password</label>
                        <input className={styleinput} type="Password" name='Password' value={password} onChange={e => setPassword(e.target.value)} required ></input>

                        <button type="submit" className='bg-black text-white font-bold w-28 rounded-sm mx-auto' >
                            {
                                isLoading ? "loading..." : "Login"
                            }
                        </button>
                    </form>
                </div>
            </div>
            <Notify />
        </AnimatedPage>
    )
}

export default Login