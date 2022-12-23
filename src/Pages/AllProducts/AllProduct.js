import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthCoxtext/AuthProvider';
import Card from '../../Components/Card';
import ConfirmationModel from '../../Components/ConfirmationModel';
import useTitle from '../../Hooks/useTitle';
import Loading from '../Shared/Loading/Loading';

const AllProducts = () => {
    const { loading } = useContext(AuthContext);

    const [productInfo, setProductInfo] = useState(null)
    const [deleteAction, setDeleteAction] = useState(false)
    const [advertiseAction, setAdvertiseAction] = useState(false)
    const [reportAction, setReportAction] = useState(false)

    useTitle('All Products')

    const closeModal = () => {
        setProductInfo(null)
    }

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('https://resell-one.vercel.app/allproducts')
                const data = await res.json()
                return data
            }
            catch (err) {

            }
        }
    })

    const handleAdvertise = id => {
        fetch(`https://resell-one.vercel.app/product/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('geniusToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    refetch()
                    setProductInfo(null)
                    toast.success('Successfully Advertise product')
                }
            })

    }
    const handleReport = id => {

        fetch(`https://resell-one.vercel.app/report/${id}`, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setProductInfo(null)
                    toast.success('Successfully Product Reported')
                }
            })

    }

    const handleDelete = id => {
        fetch(`https://resell-one.vercel.app/product/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('geniusToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                refetch()
                setProductInfo(null)
                toast.success('Successfully deleted product')
            })
    }

    if (isLoading || loading) {
        return <Loading></Loading>
    }

    return (
        <>
            <div className='overflow-y-hidden'>
                <h3 className='text-4xl text-center mt-10 font-bold'>All Product</h3>
                <div className="grid grid-cols-1  lg:grid-cols-2 gap-10  my-10 mx-3 md:mx-10 ">

                    {
                        products?.map((p) => <Card key={p._id}
                            product={p}
                            refetch={refetch}
                            setProductInfo={setProductInfo}
                            setDeleteAction={setDeleteAction}
                            setAdvertiseAction={setAdvertiseAction}
                            setReportAction={setReportAction}>

                        </Card>)
                    }
                </div>
            </div>
            {productInfo &&
                <ConfirmationModel
                    closeModal={closeModal}
                    info={productInfo}

                    deleteAction={deleteAction}
                    handleDelete={handleDelete}

                    advertiseAction={advertiseAction}
                    handleAdvertise={handleAdvertise}

                    handleReport={handleReport}
                    reportAction={reportAction}
                ></ConfirmationModel>
            }
        </>
    );
};

export default AllProducts;