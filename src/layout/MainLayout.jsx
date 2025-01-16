import React from 'react';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <header>
                <Navbar></Navbar>
            </header>
            <main className='min-h-[calc(100vh-246px)] '>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
        
    );
};

export default Main;