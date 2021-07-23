/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import React from 'react';

import EndingNotes from '../EndingNotes/EndingNotes';
import Jewels from '../Jewels/Jewels';
import { Gear } from './Gear';

export const CavalryGear = () => {
    const classType = 'cavalry';
    const reqType = 'gear';
    return (
        <div className='container'>
            <div className='jumbotron center-text'>
                <h1 className='display-4'>Cavalry Gear</h1>
                <p className='lead'>
                    This is the list of the best gear & jewels to use for a
                    Cavalry blast attack along with their stats comparisons and
                    replacement options.
                </p>
            </div>
            <Jewels classType={classType} />
            <Gear classType={classType} />
            <EndingNotes classType={classType} reqType={reqType} />
            <div className='container  sets'>
                <figure>
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Cavalry-Gear-Full-Champ-Lords-Mobile-e1612087100804-1536x1274.jpg' />
                    <figcaption>
                        This is the gear to use if you are building a full
                        champion set. Champion Faith can be replaced with
                        Champion Valor.
                    </figcaption>
                </figure>
                <figure>
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Cavalry-Gear-Non-Champ-Lords-Mobile-New-e1613978364279-1536x1243.jpg' />
                    <figcaption>
                        Best possible set for cavalry blast attack without
                        champion pieces.
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default CavalryGear;
