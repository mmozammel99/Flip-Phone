import React from 'react';
import img1 from '../../../Assets/banner/banner1.png'
import img2 from '../../../Assets/banner/banner2.png'
import img3 from '../../../Assets/banner/banner3.png'
import img4 from '../../../Assets/banner/banner4.png'
const HomeTopBanner = () => {
    return (
        <div className="carousel w-full my-10">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={img1} className="w-1/2" alt="" />
                        <div className='text-center'>
                            <p className="text-2xl md:text-4xl  lg:text-left font-bold py-6">This is the best place for buy or sell your used smartphone</p>
                            <button className="btn btn-primary mx-auto">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={img2} className="w-1/2 p-5" alt="" />
                        <div className='text-center'>
                            <p className="text-2xl md:text-4xl font-bold py-6">This is the best place for buy or sell your used smartphone</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={img3} className="w-1/2" alt="" />
                        <div className='text-center'>
                            <p className="text-2xl md:text-4xl font-bold py-6">This is the best place for buy or sell your used smartphone</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={img4} className="w-1/2 lg:p-12" alt="" />
                        <div className='text-center'>
                            <p className="text-2xl md:text-4xl font-bold py-6">This is the best place for buy or sell your used smartphone</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default HomeTopBanner;