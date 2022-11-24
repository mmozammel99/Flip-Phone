import React from 'react';
import { FaApple,FaGoogle } from "react-icons/fa";
import { SiSamsung ,SiOneplus} from "react-icons/si";
const HomeProductCategories = () => {
    return (
        <div className='grid gap-10 m-10 grid-cols-1 md:grid-cols-2 text-center'>
            <div className="card  bg-neutral text-primary-content">
                <div className="card-body  text-canter text-secondary-content">
                    <h2 className=" text-7xl mx-auto my-7"><FaApple></FaApple></h2>
                    <pc className='text-5xl font-medium'>Appel</pc>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card  bg-secondary text-primary-content">
                <div className="card-body  text-canter text-secondary-content">
                    <h2 className="text-9xl mx-auto"><SiSamsung></SiSamsung></h2>
                    <pc className='text-5xl font-medium '>Samsung</pc>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card bg-accent text-primary-content">
                <div className="card-body  text-canter text-secondary-content">
                    <h2 className=" text-7xl mx-auto my-7"><FaGoogle></FaGoogle></h2>
                    <pc className='text-5xl font-medium'>Google</pc>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card bg-primary text-primary-content">
                <div className="card-body  text-canter text-secondary-content">
                    <h2 className=" text-7xl mx-auto my-7"><SiOneplus></SiOneplus></h2>
                    <pc className='text-5xl font-medium'>Oneplus</pc>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProductCategories;