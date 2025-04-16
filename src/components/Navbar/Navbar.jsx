import React from 'react';
import NavbarCount from '../NavbarCount/NavbarCount';

const Navbar = () => {
    return (
        <div>
            <NavbarCount></NavbarCount>
            <button  className='btn mt-5'>navCount</button>
        </div>
    );
};

export default Navbar;