import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../AuthCoxtext/AuthProvider';
import Card from '../../../Components/Card';
import ConfirmationModel from '../../../Components/ConfirmationModel';
import NormalCard from '../../../Components/NormalCard';

const HomeAdvertised = ({ products, refetch }) => {
    const { user } = useContext(AuthContext);
    const [productInfo, setProductInfo] = useState(null)
    const [deleteAction, setDeleteAction] = useState(false)
    const [reportAction, setReportAction] = useState(false)

    const closeModal = () => {
        setProductInfo(null)
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
    // console.log(products);
    const handleDelete = id => {
        fetch(`https://resell-one.vercel.app/product/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('geniusToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                setProductInfo(null)
                toast.success('Successfully deleted product')
            })
    }

    return (
        <>
            <h3 className='text-3xl md:text-5xl text-center mt-10 font-bold'>Advertisement</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  my-10 mx-3 ">

                {
                    user?.email ?
                        <>  {
                            products.map((p) => <Card key={p._id}
                                product={p}
                                refetch={refetch}
                                setProductInfo={setProductInfo}
                                setDeleteAction={setDeleteAction}
                                setReportAction={setReportAction}
                            >

                            </Card>)
                        }
                        </>
                        :
                        <>
                            {
                                products.map((p) => <NormalCard key={p._id}
                                    product={p}
                                >

                                </NormalCard>)
                            }
                        </>
                }
            </div>
            {productInfo &&
                <ConfirmationModel
                    closeModal={closeModal}
                    info={productInfo}

                    deleteAction={deleteAction}
                    handleDelete={handleDelete}

                    handleReport={handleReport}
                    reportAction={reportAction}
                ></ConfirmationModel>
            }
        </>
    );
};

export default HomeAdvertised;