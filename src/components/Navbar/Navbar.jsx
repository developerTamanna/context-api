import React, { useContext } from 'react';
import NavbarCount from '../NavbarCount/NavbarCount';
import { AnotherContext } from '../../App';

const Navbar = () => {

    const [another, setAnother] = useContext(AnotherContext)

    return (
        <div>
            <NavbarCount></NavbarCount>
            <button onClick={()=> setAnother(another+1)}  className='btn mt-5'>navCount {another}</button>

            
        </div>
    );
};

export default Navbar;