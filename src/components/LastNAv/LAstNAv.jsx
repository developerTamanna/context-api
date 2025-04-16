import React, { useContext } from 'react';
import { CountContext } from '../../App';

const LAstNAv = () => {

    const [count, setCount] = useContext(CountContext)
    return (
        <div>
            <button onClick={()=> setCount(count +1)} className='btn'>last nav-{count}</button>
        </div>
    );
};

export default LAstNAv;