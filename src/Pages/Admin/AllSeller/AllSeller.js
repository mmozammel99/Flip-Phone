import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUser = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers')
            const data = await res.json()
            return data
        }
    })

    const handleVerified = id => {
        fetch(`http://localhost:5000/sellers/${id}`, {
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
        fetch(`http://localhost:5000/sellers/${id}`, {
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
                            <th>Add verified</th>
                            <th>Delete</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            sellers.map((seller, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={seller.photoURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{seller.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {seller.email}
                                </td>

                                <th>
                                    {seller?.verified?
                                        <button className="btn btn-primary btn-xs" >verified</button>
                                        :
                                        <button onClick={() => handleVerified(seller._id)} className="btn btn-secondary btn-xs">Add verified</button>
                                    }
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(seller._id)} className="btn btn-accent btn-xs">Delete</button>
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