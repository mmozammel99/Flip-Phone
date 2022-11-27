import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllUser = () => {
    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/users', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('geniusToken')}`
                    }
                })
                const data = await res.json()
                return data
            }
            catch (err) {

            }
        }
    })

    const handlemakeAdmin = id => {
        fetch(`http://localhost:5000/users/makeadmin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('geniusToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Successfully verified seller')
                }
            })

    }

    const handleDelete = id => {
        fetch(`http://localhost:5000/users/delete/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('geniusToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
                toast.success('Successfully deleted seller')
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th className='text-center'>Role</th>
                            <th className='text-center'> Admin</th>
                            <th className='text-center'>Delete</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.photoURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td className='text-center'>
                                    {user?.role === '' ?
                                    <button className="btn btn-success text-white btn-xs" >Buyers</button>
                                    :
                                    <button className="btn btn-success text-white btn-xs" >{user.role}</button>
                                    }
                                </td>

                                <th className='text-center'>
                                    {user?.role === 'admin' ?
                                        <button className="btn btn-xs" >Admin</button>
                                        :
                                        <button onClick={() => handlemakeAdmin(user._id)} className="btn btn-secondary btn-xs">Make Admin</button>
                                    }
                                </th>
                                <th className='text-center'>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-accent btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllUser;