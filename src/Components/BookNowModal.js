import React from 'react';

const BookNowModal = () => {


    return (
        <>
            < input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box w-11/12 max-w-5xl">
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">BOOKING NOW</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <div className="flex justify-center ">
                            
                            <button className="btn btn-primary shadow-sm text-gray-50">Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default BookNowModal;