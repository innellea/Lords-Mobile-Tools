/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import EndingNotes from '../EndingNotes/EndingNotes';
import Jewels from '../Jewels/Jewels';

import { Gear } from './Gear';

export const RangedGear = () => {
    const classType = 'ranged';
    const reqType = 'gear';
    return (
        <div className='container'>
            <div className='jumbotron center-text'>
                <h1 className='display-4'>Ranged Gear</h1>
                <p className='lead'>
                    This is the list of the best gear & jewels to use for a
                    Ranged blast attack along with their stats comparisons and
                    replacement options.
                </p>
            </div>

            <Jewels classType={classType} />
            <Gear classType={classType} />
            <EndingNotes classType={classType} reqType={reqType} />
            <div className='container  sets'>
                <figure className='figure'>
                    <img
                        src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Ranged-ATK-Gear-Full-Champ-Lords-Mobile-e1618443617903-1536x1255.jpeg'
                        className='figure-img img-fluid rounded'
                    />
                    <figcaption className=''>
                        Overall best possible set for ranged blast attack using
                        a full champion set.
                    </figcaption>
                </figure>
                <figure className='figure'>
                    <img
                        src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Ranged-ATK-Gear-Non-Champ-Lords-Mobile-e1618443967645-1536x1274.jpeg'
                        className='figure-img img-fluid rounded'
                    />
                    <figcaption className=''>
                        Best possible set for ranged blast attack without
                        champion pieces.
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default RangedGear;
