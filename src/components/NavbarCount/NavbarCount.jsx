import React, { useContext } from 'react';
import LAstNAv from '../LastNAv/LAstNAv';
import { CountContext } from '../../App';


const NavbarCount = () => {

    const countState = useContext(CountContext)
    return (
        <div>
            <LAstNAv></LAstNAv>
            <button className='btn mt-5'>inside nav- {countState}</button>
        </div>
    );
};

export default NavbarCount;