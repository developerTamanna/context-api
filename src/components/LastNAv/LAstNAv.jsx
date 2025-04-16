import React, { useContext } from 'react';
import { CountContext } from '../../App';

const LAstNAv = () => {

    const countState = useContext(CountContext)
    return (
        <div>
            <button className='btn'>last nav-{countState}</button>
        </div>
    );
};

export default LAstNAv;