import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminLayout from './AdminLayout';

const EditOrder = () => {
    const [lunas, setLunas] = useState("")
    const id = useParams()
    const navigate = useNavigate()
    console.log(id.id);

    useEffect(() => {
        const getTransId = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_URL}/transaction/${id.id}`);
                setLunas(response.data.lunas)
            } catch (error) {
                console.log(error);
            }
        };
        getTransId();
    }, [id]);

    const updateTrans = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`${process.env.REACT_APP_URL}/transaction/${id.id}`, {
                lunas: lunas
            });
            navigate("/listorder");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AdminLayout>
            <div className='text-black m-auto mt-20 w-1/2'>
                <h1 className="">Update Order</h1>

                <form onSubmit={updateTrans}>
                    <div className="mt-10">
                        <label className="h2 text-black">Status</label>
                        <div className="">
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block text-sm font-medium text-gray-700">Status</label>
                                <select className='class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"'
                                    value={lunas}
                                    onChange={(e) => setLunas(e.target.value)}
                                >
                                    <option value="cancel">cancel</option>
                                    <option value="lunas">lunas</option>
                                </select>
                            </div>

                        </div>
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