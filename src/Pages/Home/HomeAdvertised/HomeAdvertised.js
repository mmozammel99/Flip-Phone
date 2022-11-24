import React from 'react';
import Card from '../../../Components/Card';

const HomeAdvertised = () => {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <>
        <h3 className='text-5xl text-center mt-10 font-bold'>Advertised</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  my-10 mx-1 ">

            {
                cards.map(c => <Card>

                </Card>)
            }
        </div>
        </>
    );
};

export default HomeAdvertised;