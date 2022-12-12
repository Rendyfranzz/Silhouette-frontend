import React, { useEffect, useState, Fragment } from 'react'
import AdminLayout from './AdminLayout'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import ClipLoader from "react-spinners/ClipLoader";
import { Dialog, Transition } from '@headlessui/react'
import { Notify, SuccessNotification } from '../components/Notify';
import "../style/Style.css"

const ListOrder = () => {
    const [transaction, setTransaction] = useState([])
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [pages, setPages] = useState(0);
    const [rows, setRows] = useState(0);
    const [keyword, setKeyword] = useState("");
    const [query, setQuery] = useState("");
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [transdel, setTransdel] = useState("")
    //   const [jam ,setJam] = useState("")
    useEffect(() => {
        getTransaction();
    }, [page, keyword])


    const getTransaction = async () => {
        const response = await axios.get(
            `${process.env.REACT_APP_URL}/transaction?search_query=${keyword}&page=${page}&limit=${limit}`
        );
        console.log(response.data.result);
        setLoading(false)
        setTransaction(response.data.result);
        setPage(response.data.page);
        setPages(response.data.totalPage);
        setRows(response.data.totalRows);
    }

    const deleteTrans = (userId) => {
        openModal()
        setTransdel(userId)
    }

    const confirmDelete = async () => {
        await axios.delete(`${process.env.REACT_APP_URL}/deltrans/${transdel}`)
        closeModal()
        SuccessNotification("Berhasil Hapus ")
        getTransaction()
    }

    //   const getTime = async (time) => {
    //     try {
    //         const response = await axios.get(`${process.env.REACT_APP_URL}/getjadwalid/${time}`);
    //         setJam(response.data.jam)
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    const changePage = ({ selected }) => {
        setPage(selected);
        if (selected === 9) {
            setMsg(
                "Jika tidak menemukan data yang Anda cari, silahkan cari data dengan kata kunci spesifik!"
            );
        } else {
            setMsg("");
        }
    };
    const searchData = (e) => {
        e.preventDefault();
        setPage(0);
        setMsg("");
        setKeyword(query);
    };
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <AdminLayout>
            {
                loading ? <div className='h-screen flex justify-center items-center'>
                <ClipLoader
                    color="#000000"
                    loading={loading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>:  <div className="mt-20 min-h-screen">
            <Transition appear show={isOpen} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-lg font-medium leading-6 text-gray-900"
                                                >
                                                    Apakah anda yakin?
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        Anda tidak dapat memulihkan data ini
                                                    </p>
                                                </div>

                                                <div className="mt-4 flex space-x-4">
                                                    <button
                                                        type="button"
                                                        className="inline-flex justify-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                        onClick={confirmDelete}
                                                    >
                                                        Iya
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                        onClick={closeModal}
                                                    >
                                                        Tidak
                                                    </button>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                <div className="flex flex-col">
                    <div className="overflow-x-auto w-full">
                        <div className="py-3 pl-2">
                            <div className="relative max-w-xs">
                                <form onSubmit={searchData}>
                                    <label htmlFor="hs-table-search" className="sr-only">
                                        Search
                                    </label>
                                    <input
                                        type="text"
                                        name="hs-table-search"
                                        id="hs-table-search"
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                        placeholder="pencarian..."
                                    />
                                </form>
                            </div>
                        </div>

                        <div className="p-1.5 w-full inline-block align-middle">
                            <div className="overflow-hidden border rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                ID
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                Email
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                Jam
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                            >
                                                Edit
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                            >
                                                Delete
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {
                                            transaction.map((data, index) => (
                                                <tr key={data.transuuid}>
                                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                        {index + 1}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                        {data.name}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                        {data.user.email}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                        {data.lunas}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                        {
                                                            data.jadwal.jam
                                                        }
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                        <button
                                                            className="text-green-500 hover:text-green-700"
                                                        >
                                                            Edit
                                                        </button>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                        <button
                                                             onClick={()=>deleteTrans(data.transuuid)} className="text-red-500 hover:text-red-700"
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </table>
                            </div>
                            <p className='p text-black'>
                                Total Rows: {rows} Page: {rows ? page + 1 : 0} of {pages}
                            </p>
                            <p className="p text-red-600 ">{msg}</p>
                        </div>
                    </div>
                </div>
                <nav
                    className='rounded-md shadow-sm'
                    key={rows}
                    role="navigation"
                    aria-label="pagination"
                >
                    <ReactPaginate
                        // previousLabel={"< Prev"}
                        // nextLabel={"Next >"}
                        pageCount={Math.min(10, pages)}
                        onPageChange={changePage}
                        // containerClassName={"page-list"}
                        // pageLinkClassName={"pagination-link"}
                        // previousLinkClassName={"pagination-previous"}
                        // nextLinkClassName={"pagination-next"}
                        activeLinkClassName={"pagination-link is-current"}
                        disabledLinkClassName={"pagination-link is-disabled"}

                        previousLabel="Previous"
                        nextLabel="Next"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        // pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        // onPageChange={handlePageChange}
                        containerClassName="pagination"
                        activeClassName="active"
                    // forcePage={pageOffset}
                    />
                </nav>
            </div>
            }
        <Notify/>
        </AdminLayout>
    )
}

export default ListOrder