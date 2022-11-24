import React, { useEffect, useState } from 'react';
import axios from "axios";
import CategoriesCard from './CategoriesCard';
const HomeProductCategories = () => {
    const [categories, setCategories] = useState([])
 
    useEffect(() => {

        axios
            .get("http://localhost:5000/categories")
            .then(data => setCategories(data.data))
            .catch(error => console.log(error));
    }, [])

    return (
        <div className='grid gap-10 m-10 grid-cols-1 md:grid-cols-2 text-center'>
            {
                categories.map(c => <CategoriesCard
                    key={c._id}
                    category={c}
                ></CategoriesCard>)
            }
           
        </div>
    );
};

export default HomeProductCategories;