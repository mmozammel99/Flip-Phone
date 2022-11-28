import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import bg from '../../Assets/Payment-Methods.png'
import { AuthContext } from '../../AuthCoxtext/AuthProvider';


const Payment = () => {

    const { user } = useContext(AuthContext);
const product = useLoaderData()

    return (
        <>
            <div className="flex justify-center items-center   py-5">
                <div className="flex flex-col lg:flex-row justify-center items-center w-full  ">

                    {/* Payment Info */}

                    <div className="lg:card lg:flex-shrink-0 w-[90%] lg:w-auto ">
                        <form className="lg:card-body">
                            <h2 className='text-4xl font-bold'>Check Out</h2>
                            <div className="form-control text-neutral-focus">
                                <label className="label">
                                    <span className="label-text " >Name</span>
                                </label>
                                <input type="text" name='name' defaultValue={user?.displayName} readOnly className="input input-bordered text-neutral-focus" />
                                <label className="label">
                                </label>
                            </div>
                            <div className="form-control text-neutral-focus">
                                <label className="label">
                                    <span className="label-text ">Email</span>
                                </label>
                                <input type="email" name='email' defaultValue={user?.email} readOnly className="input input-bordered text-neutral-focus" />
                            </div>
                            <div className="form-control text-neutral-focus">
                                <label className="label">
                                    <span className="label-text ">Meeting Location</span>
                                </label>
                                <input type="text" name='uid' defaultValue={product?.meetingLocation} readOnly className="input input-bordered text-neutral-focus" />
                                <label className="label">
                                </label>
                            </div>
                            
                            {/* payment method info */}
                            <h2 className='mt-1 font-medium'>payment method</h2>
                            <img src={bg} className='w-96' alt="" />
                            <div className="form-control mt-3">
                                <input type="number" placeholder='Card Number' className="input input-bordered text-neutral-focus" />
                            </div>
                            <div className="form-control mt-3">
                                <input type="text" placeholder='Name on Card' className="input input-bordered text-neutral-focus" />
                            </div>
                            <div className='flex flex-col lg:flex-row'>
                                <div className="form-control lg:mr-2 mt-3">
                                    <input type="text" placeholder='MM / YY' className="input input-bordered text-neutral-focus" />
                                </div>
                                <div className="form-control mt-3">
                                    <input type="text" placeholder='Security cord' className="input input-bordered text-neutral-focus " />
                                </div>
                            </div>
                            <p><input type="checkbox" className="checkbox checkbox-xs mt-3" /> Remember this card</p>
                        </form>
                    </div>

                    {/* Product info */}

                    <div className='card w-96 bg-base-100 justify-center items-center text-neutral-focus rounded-none'>
                        <figure className="px-10 pt-10">
                            <figure><img src={product.productImg} alt="Movie" /></figure>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{product.productName}</h2>
                            <p className='text-justify'>{product.description}</p>
                            <div className="card-actions">
                                <button className='btn btn-outline btn-primary w-full'><input type="radio" className="radio radio-primary  mr-1" checked />Price only $ {product.price}</button>
                            </div>
                        </div>

                        {/* Buy info */}
                        <div className="form-control mb-3">

                            <label className="input-group">
                                <input type="text" placeholder="Voucher Code" className="input input-bordered text-neutral-focus" />
                                <span className="btn btn-primary">Apply</span>
                            </label>
                        </div>
                        <div className="overflow-x-auto ">
                            <table className="table w-full  text-neutral-focus">
                                <tbody>
                                    <tr>
                                        <td>Course Price </td>
                                        <td>+</td>
                                        <td>{product.price}</td>
                                    </tr>
                                    <tr>
                                        <td>Tax </td>
                                        <td>+</td>
                                        <td> 0</td>
                                    </tr>
                                    <tr>
                                        <td>Voucher </td>
                                        <td>-</td>
                                        <td> 0</td>
                                    </tr>
                                    <tr>
                                        <th>Total </th>
                                        <td> = </td>
                                        <th>{product.price}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button className="btn my-3 btn-primary">Buy now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Payment;