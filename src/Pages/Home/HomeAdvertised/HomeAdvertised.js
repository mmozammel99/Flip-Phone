import React from 'react';
import Card from '../../../Components/Card';

const HomeAdvertised = ({ products }) => {

    return (
        <>
            <h3 className='text-3xl md:text-5xl text-center mt-10 font-bold'>Advertisement</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  my-10 mx-1 ">

                {
                    products.map((p) => <Card key={p._id}
                        product={p}>

                    </Card>)
                }
            </div>
        </>
    );
};

export default HomeAdvertised;