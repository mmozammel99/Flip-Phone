import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({ category }) => {
    return (
        <Link to='/category:id' className={`card   text-primary-content ${category.bg}`} >
            <div className="card-body  text-canter text-secondary-content">
                <h2 className=" text-7xl mx-auto my-7"> <img src={category.icon} alt="" /></h2>
                <pc className='text-5xl font-medium'>{category.name}</pc>
                <div className="card-actions justify-end">
                </div>
            </div>
        </Link >
    );
};

export default CategoriesCard;