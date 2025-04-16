import React, { useContext } from 'react';
import { Passing } from '../App';

const Pass = () => {

    const [passing, setPassing]=useContext(Passing)
    return (
        <div>
            <button onClick={()=>setPassing(passing+1)} className='btn mt-10'>puss{passing}</button>
        </div>
    );
};

export default Pass;