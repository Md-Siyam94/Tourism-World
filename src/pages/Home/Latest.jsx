import React from 'react';
import { Link } from 'react-router-dom';

const Latest = () => {
    return (
        <div className='max-w-7xl py-20'>
            <div className='w-[90%] lg:w-[50%] text-center mx-auto'>
                <h1 className='text-5xl font-serif'><span className='font-semibold'>Get</span> The Latest News
                From All Over The World</h1>
                <p className='opacity-70 my-4'>Discover the newest trends, travel updates, and exciting destinations from around the world. Whether it's emerging travel hotspots, policy changes, or expert tips, we bring you the most up-to-date tourism news to keep you informed and inspired for your next adventure! </p>
                <Link to={""}><button className="px-10 py-3 rounded-full border-2 border-[#1a73e8] text-[#1a73e8] font-semibold hover:bg-[#1a73e8] hover:text-white">Subscribe</button></Link>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Latest;