import React from 'react';
import img from '../../../Assets/contact.png'
const Contact = () => {
    return (
        <div className='bg-gray-100 text-gray-800 py-10 max-w-screen-xl rounded-lg mx-auto mb-5'>
            <div className="space-y-2">
                <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-center my-3">Contact Us</h2>

            </div>
            <div className="grid  grid-cols-1 gap-12 px-8   md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">

                <img src={img} alt=""  />

                <form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid mt-6">
                    <div>
                        <label for="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded border" />
                    </div>
                    <div>
                        <label for="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded border" />
                    </div>
                    <div>
                        <label for="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded border"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-primary text-gray-50">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;