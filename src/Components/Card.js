import React, { useContext } from 'react';
import moment from 'moment';
import { MdReport } from "react-icons/md";
import { AuthContext } from '../AuthCoxtext/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useSeller from '../Hooks/useSeller';
import { Link } from 'react-router-dom';
import CardLoader from './CardLoader';
const Card = ({ product,handleDelete,handleAdvertise }) => {
    const { user } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const [isSeller, isSellerLoading] = useSeller(user?.email)

    const {
        productName,
        marketPrice,
        sellingPrice,
        area,
        description,
        purchaseYear,
        productCondition,
        productImg,
        sellerName,
        sellerEmail,
        sellerImg,
        sellerPhone,
        postTime,
        _id
    } = product;
    const time = moment(postTime).format('LL')
    if (isSellerLoading || isAdminLoading) {
        return <CardLoader></CardLoader>
    }
    return (
        <div className="card bg-base-100 shadow-lg border">
            <div className='flex justify-between items-center p-6'>
                <div className="flex justify-center items-center space-x-4">
                    <img alt="" src={sellerImg} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-semibold">{sellerName}</p>
                        <span className="text-xs text-gray-400">{sellerEmail}</span>
                        <span className="text-xs text-gray-400">{sellerPhone}</span>
                    </div>
                </div>
                <div className='flex gap-2 justify-between items-center'>
                    <p className='text-xs font-semibold text-gray-400 '>{time}</p>

                    {user?.uid && !isSeller && !isAdmin &&
                        <button className="tooltip tooltip-accent" data-tip="Report">
                            <MdReport className='text-error text-2xl' />
                        </button>
                    }
                </div>
            </div>
            <figure className="px-5 pt-5"><img src={productImg} alt="Album" className='h-80 rounded-lg' /></figure>
            <div className="card-body items-center text-center text-sm font-medium">
                <h2 className="card-title">{productName}</h2>
                <p>{description}</p>
                <p>Location : {area}</p>
                <div className='flex justify-center gap-5 text-left'>
                    <div >
                        <p>Purchase Date : {purchaseYear}</p>
                        <p>Market Price : ${marketPrice}</p>
                    </div>
                    <div>
                        <p>Product Condition : {productCondition}</p>
                        <p>Selling Price : ${sellingPrice}</p>
                    </div>
                </div>
                <div className="card-actions w-full justify-center items-center mt-5">
                    {!user?.uid && !isSeller && !isAdmin &&
                        <Link to='/login' className="btn btn-primary text-white">Book now</Link>
                    }
                    {user?.uid && !isSeller && !isAdmin &&
                        <button className="btn btn-primary text-white">Book now</button>
                    }
                    {user?.uid && isAdmin &&
                        <button onClick={()=>handleDelete(_id)} className="btn btn-accent text-white">Delete</button>
                    }
                    {user?.uid && isSeller &&
                        <div className="card-actions w-full justify-between items-center mt-5">
                            <button onClick={()=>handleAdvertise(_id)} className="btn btn-warning text-white">Advertise</button>
                            <button onClick={()=>handleDelete(_id)} className="btn btn-accent text-white">Delete</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;