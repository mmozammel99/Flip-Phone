import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import Card from '../../Components/Card';
import Loading from '../Shared/Loading/Loading';

const Categories = () => {
    const products = useLoaderData()
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {

        axios
            .get("http://localhost:5000/categories")
            .then(data => setCategories(data.data))
            .catch(error => console.log(error));
    }, [])

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
    const handleAdvertise = id => {
        setLoading(true)
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('geniusToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    setLoading(false)
                    toast.success('Successfully Advertise product')
                }
            })

    }
    // console.log(products);
    const handleDelete = id => {
        setLoading(true)
        fetch(`http://localhost:5000/product/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('geniusToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                console.log(data);
                toast.success('Successfully deleted product')
            })
    }
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
                <div className="drawer-content  ">

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Select Category</label>
                    <h3 className='text-3xl md:text-5xl text-center mt-10 font-bold'>Category Name </h3>
                    <div className='grid gap-10 m-10 grid-cols-1 md:grid-cols-2 text-center '>

                        {
                            products.map((p) => <Card
                                key={p._id}
                                product={p}
                                handleReport={handleReport}
                                handleAdvertise={handleAdvertise}
                                handleDelete={handleDelete}
                            >

                            </Card>)
                        }
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-400 text-base-content">

                        <div className='grid gap-5  grid-cols-1 text-center'>
                            {
                                categories.map(category =>
                                    <Link to={`/categories/${category._id}`} className={`card   text-primary-content ${category.bg}`} >
                                        <div className="card-body  text-canter text-secondary-content">
                                            <h2 className=" text-xl mx-auto my-2">
                                                <img src={category.icon} alt="" />
                                            </h2>
                                            <h5 className='text-xl font-medium'>{category.name}</h5>
                                        </div>
                                    </Link >)
                            }

                        </div>
                    </ul>

                </div>
            </div>



        </div>
    );
};

export default Categories;