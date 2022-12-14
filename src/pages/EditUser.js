import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AdminLayout from './AdminLayout'
import axios from 'axios'
import { useEffect } from 'react'

const EditOrder = () => {
    const id = useParams()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const getUserById = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/users/${id.id}`);
                console.log(response);
                setName(response.data.name);
                setEmail(response.data.email);
                setRole(response.data.role);
            } catch (error) {
                console.log(error);
            }
        };
        getUserById();
    }, [id]);

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`${process.env.REACT_APP_URL}/users/${id.id}`, {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword,
                role: role,
            });
            navigate("/listuser");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <AdminLayout>
            <div className='text-black w-1/2 border rounded-md shadow-md m-auto mt-20 p-2'>
                <h1 className="">Users</h1>

                <form className='p-2 space-y-2' onSubmit={updateUser}>
                    <div className="">
                        <label className="block text-sm font-medium text-gray-700">Name</label>

                        <input
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                        />

                    </div>

                    <div className="">
                        <label className="block text-sm font-medium text-gray-700">Email</label>

                        <input
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />

                    </div>

                    <div className="">
                        <label className="block text-sm font-medium text-gray-700">Password</label>

                        <input
                            type="password"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="******"
                        />

                    </div>
                    <div className="">
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>

                        <input
                            type="password"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={confPassword}
                            onChange={(e) => setConfPassword(e.target.value)}
                            placeholder="******"
                        />

                    </div>
                    <div className="">
                        <label className="block text-sm font-medium text-gray-700">Role</label>

                        <select
                            className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>

                    </div>

                    <div className="mt-10">
                        <button type="submit" className="border rounded-md p-2 hover:bg-slate-200">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    )
}

export default EditOrder