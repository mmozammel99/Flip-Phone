import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({ category }) => {
    return (
        <Link to={`/categories/${category._id}`} className={`card   text-primary-content ${category.bg}`} >
            <div className="card-body  text-canter text-secondary-content">
                <h2 className=" text-7xl mx-auto my-7"> <img src={category.icon} alt="" /></h2>
                <h5 className='text-5xl font-medium'>{category.name}</h5>
            </div>
        </Link >
    );
};

export default CategoriesCard;