/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import EndingNotes from '../EndingNotes/EndingNotes';
import Jewels from '../Jewels/Jewels';

import { Gear } from './Gear';

export const InfantryGear = () => {
    const classType = 'infantry';
    const reqType = 'gear';
    return (
        <div className='container gear'>
            <div className='jumbotron center-text'>
                <h1 className='display-4'>Infantry Gear</h1>
                <p className='lead'>
                    This is the list of the best gear & jewels to use for a
                    Infantry blast attack along with their stats comparisons and
                    replacement options.
                </p>
            </div>
            <Jewels classType={classType} />
            <Gear classType={classType} />
            <EndingNotes classType={classType} reqType={reqType} />
            <div className='container  sets'>
                <figure className='figure'>
                    <img
                        src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Infantry-Gear-Non-Champ-Lords-Mobile-e1612086856321-1536x1288.jpg'
                        className='figure-img img-fluid rounded'
                    />
                    <figcaption>
                        Overall best possible set for infantry blast attack
                        using a full champion set. Champion Faith can be used
                        instead of Champion Blessing in the accessory slot for
                        the same stats.
                    </figcaption>
                </figure>
                <figure className='figure'>
                    <img
                        src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Infantry-Gear-Full-Champ-Lords-Mobile-e1612086942820-1536x1290.jpg'
                        className='figure-img img-fluid rounded'
                    />
                    <figcaption>
                        Best possible set for infantry blast attack without
                        champion pieces.
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default InfantryGear;
