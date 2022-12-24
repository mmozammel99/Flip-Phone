import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import useVerify from '../Hooks/useVerify';
import { GoVerified } from "react-icons/go";


const NormalCard = ({ product, setLoading }) => {
   
   

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
        advertisement,
        sold,
        booking
    } = product;

    const [isVerify] = useVerify(sellerEmail)


    const time = moment(postTime).format('LL')

    // if (isSellerOrAdminLoading || isAdminLoading || isVerifyLoading) {
    //     return <CardLoader></CardLoader>
    // }
    return (
        <>
            <div className="card bg-base-100 shadow-lg border relative overflow-hidden">
                {!sold && advertisement &&
                    <span className="absolute top-40 w-36 shadow-2xl left-0 px-5 py-1 text-xs font-medium tracking-wider text-center uppercase  text-white bg-accent">Advertisement</span>
                }
                {!sold &&
                    <span className="absolute top-32 shadow-2xl  w-36 left-0 px-5 py-1 text-xs font-medium tracking-wider text-center uppercase  text-white bg-primary">Available  </span>
                }

                {!sold && booking &&
                    <span className="absolute top-48 shadow-2xl  w-36 left-0 px-5 py-1 text-xs font-medium tracking-wider text-center uppercase  text-white bg-info">Booked  </span>
                }

                {sold &&
                    <span className="absolute top-72 shadow-2xl  w-full left-0 px-5 py-1 text-2xl font-medium tracking-wider text-center uppercase  text-white bg-black">Sold</span>
                }

                <div className='flex justify-between items-center p-2 md:p-6'>
                    <div className="flex justify-center items-center space-x-4">
                        <img alt="" src={sellerImg} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                        <div className="flex flex-col text-left space-y-1">
                            <div className='flex items-center gap-2'>
                                <p className="text-sm font-semibold">
                                    {sellerName}</p>
                                {
                                    isVerify &&
                                    <div className="tooltip tooltip-info  tooltip-right" data-tip="verified seller"> <GoVerified className='text-info' />
                                    </div>
                                }
                            </div>
                            <span className="text-xs text-gray-400">{sellerEmail}</span>
                            <span className="text-xs text-gray-400">{sellerPhone}</span>
                        </div>
                    </div>
                    <div className='flex gap-1 md:gap-2 justify-between items-center'>
                        <p className='text-xs font-semibold text-gray-400 '>{time}</p>

                    
                    </div>
                </div>

                <figure className="px-5 pt-5"><img src={productImg} alt="Album" className='h-80 rounded-lg' /></figure>
                <div className="card-body items-center text-center text-sm font-semibold">
                    <h2 className="card-title">{productName}</h2>
                    <p className='font-light'>{description}</p>
                    <p>Location : {area}</p>
                    <div className='flex justify-center gap-5 text-left'>
                        <div >
                            <p>Purchase Date : {purchaseYear}</p>
                            <p>Market Price : ${marketPrice}</p>
                        </div>
                        <div>
                            <p>Product Condition : {productCondition}</p>
                            <p>Reselling Price : ${sellingPrice}</p>
                        </div>
                    </div>
                    <div className="card-actions w-full justify-center items-center mt-5">
                        
                            <Link to='/login' className="btn btn-primary text-white">Book now</Link>
                      

                      
                    </div>
                </div>
            </div>
          
        </>
    );
};

export default NormalCard;