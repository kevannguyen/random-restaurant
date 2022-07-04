import React from 'react';
import FastfoodIcon from '@mui/icons-material/Fastfood';

const Navbar = () => (
    <nav className="bg-red-500 p-4 text-white w-full text-xl top-0 sticky drop-shadow-md">
        <div className="flex gap-3 h-7 items-center">
            <FastfoodIcon />
            <div className="hidden sm:block">Random Restaurant</div>
        </div>
    </nav>
);

export default Navbar;
