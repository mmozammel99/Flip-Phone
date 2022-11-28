import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthCoxtext/AuthProvider';
import Loading from '../Shared/Loading/Loading';


const AllSeller = () => {
    const { user } = useContext(AuthContext)

    const { data: booking, isLoading, refetch } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/booking/myproduct?email=${user?.email}`, {
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
                            <th>Price</th>
                            <th>Make Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            booking.map((book, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={book.productImg} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{book.productName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    $ {book.price}
                                </td>

                                <th>
                                    {book?.paid ?
                                        <button className="btn btn-primary btn-xs" >Paid</button>
                                        :
                                        <Link to={`/dashboard/payment/${book._id}`} className="btn btn-secondary btn-xs">Make Payment</Link>
                                    }
                                </th>
                               
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllSeller;