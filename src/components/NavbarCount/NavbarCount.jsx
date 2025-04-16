import React, { useContext } from 'react';
import LAstNAv from '../LastNAv/LAstNAv';
import { CountContext } from '../../App';
import Pass from '../pass';


const NavbarCount = () => {

    const [count, setCount] = useContext(CountContext)
    return (
        <div>
            <LAstNAv></LAstNAv>
            <button onClick={()=>setCount(count+1)} className='btn mt-5'>inside nav- {count}</button>
            <Pass></Pass>
        </div>
    );
};

export default NavbarCount;