import React from 'react';

import { endNotes } from '../Items/Items';

// import './EndingNotes.css';
const EndingNotes = (props) => {
    const { classType, reqType } = props;

    if (reqType === 'gear') {
        return (
            <div className='ending-note container pt-5'>
                <h2> Ending Notes: </h2>
                <h5>{endNotes.gear[`${classType}`]}</h5>
            </div>
        );
    }
    return 'unknown';
};

export default EndingNotes;
