import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthCoxtext/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MySelling = () => {
    const { user ,loading } = useContext(AuthContext)

    const url = `http://localhost:5000/mysell?email=${user?.email}`
    const { data: products, isLoading } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            try {
                const res = await fetch(url, {
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

console.log(user?.email);
    if (isLoading||loading) {
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
                            <th>Product Name</th>
                            <th>Buyer Email</th>
                            <th>Payment Status</th>
                            <th>Price</th>
                            <th>Transaction Id</th>

                        </tr>
                    </thead>

                    {
                        products.length &&
                        <tbody>

                            {
                                products.map((p, i) => <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>
                                        {p.productName}
                                    </td>
                                    <td>
                                        {p.buyerEmail}
                                    </td>


                                    <th>
                                        {p?.paid ?
                                            <button className="btn btn-primary btn-xs" >paid</button>
                                            :
                                            <button className="btn btn-xs">Booked</button>
                                        }
                                    </th>
                                    <td>{p.price}
                                    </td>
                                    <td>{p.transactionId}
                                    </td>

                                </tr>)
                            }

                        </tbody>
                    }

                </table>
            </div>

        </div>
    );
};

export default MySelling;