/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './Gear.css';

import React from 'react';

import EndingNotes from '../EndingNotes/EndingNotes';
import Jewels from '../Jewels/Jewels';
import { Gear } from './Gear';

export const MixedGear = () => {
    const classType = 'mixed';
    const reqType = 'gear';
    return (
        <div className='container '>
            <div className='jumbotron center-text'>
                <h1 className='display-4'>Mixed Gear</h1>
                <p className='lead'>
                    Whether you are looking to fight for forts or defend rallies
                    on your castle you will need a good setup of mix gear,
                    heroes, familiars and talents to give you balanced stats for
                    each troop type. This is a recommended list of the best gear
                    & jewels to use for a mixed set for defense & fort rallies.
                </p>
            </div>
            <Jewels classType={classType} />
            <Gear classType={classType} />

            <EndingNotes classType={classType} reqType={reqType} />
            <div className='container sets'>
                <figure style={{ flex: 0.6 }} className='figure'>
                    <img
                        src='https://lordsmobilepro.com/wp-content/uploads/2021/02/Mixed-Gear-Set-Lords-Mobile-e1612312065315-1536x1186.jpg'
                        className='figure-img img-fluid rounded'
                    />
                    <figcaption>
                        Best possible mixed gear set without champion pieces.
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default MixedGear;
