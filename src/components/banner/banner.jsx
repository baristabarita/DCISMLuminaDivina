import React from 'react';
import bannerImg from '../../assets/banner3.png';

const Banner = () => {
    return (
        <section className='banner relative h-screen flex items-center justify-center animate-fade-in' id="home">
            <img
                src={bannerImg}
                alt="Banner"
                className="object-cover w-full h-full"
            />
        </section>
    );
};

export default Banner;
