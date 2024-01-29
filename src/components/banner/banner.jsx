import React from 'react';
import bannerImg from '../../assets/banner3.png';

const Banner = () => {
    return (
        <section className='overflow-hidden mt-10 h-96 banner relative md:mt-5 lg:h-[100vh] w-[100vw] flex items-center justify-center animate-fade-in bg-black' id="home" >
            <img
                src={bannerImg}
                alt="Banner"
                className="object-cover w-full h-full lg:h-[100vh]  "
            />
        </section>
    );
};

export default Banner;
