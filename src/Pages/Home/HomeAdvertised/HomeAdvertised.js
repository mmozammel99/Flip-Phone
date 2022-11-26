import React from 'react';
import toast from 'react-hot-toast';
import Card from '../../../Components/Card';

const HomeAdvertised = ({ products, refetch }) => {

    const handleReport = id => {
        fetch(`http://localhost:5000/report/${id}`, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully Product Reported')
                }
            })

    }
    // console.log(products);
    const handleDelete = id => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('geniusToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                toast.success('Successfully deleted product')
            })
    }

    return (
        <>
            <h3 className='text-3xl md:text-5xl text-center mt-10 font-bold'>Advertisement</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  my-10 mx-1 ">

                {
                    products.map((p) => <Card key={p._id}
                        product={p}
                        handleDelete={handleDelete}
                        handleReport={handleReport}
                    >

                    </Card>)
                }
            </div>
        </>
    );
};

export default HomeAdvertised;