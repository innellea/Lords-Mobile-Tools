/* eslint-disable react/prop-types */
import React from 'react';

import { jewels } from '../Items/Items';

const Jewels = (props) => {
    const jewelRedirect = () => {
        window.location = 'https://lordsmobile.fandom.com/wiki/Jewel';
    };
    return (
        <div className='container jewels-container '>
            <h2>
                Best{' '}
                {props.classType == 'infantry'
                    ? 'Infantry'
                    : props.classType == 'ranged'
                    ? 'Ranged'
                    : props.classType == 'cavalry'
                    ? 'Cavalry'
                    : props.classType == 'mixed'
                    ? 'Mixed'
                    : 'Cavalry'}{' '}
                Jewels
            </h2>
            <div className='row'>
                {Object.values(jewels[props.classType]).map((item) => (
                    <div className='pt-2 col-sm' key={item.id}>
                        <h5>{item.name}</h5>
                        <img
                            onClick={jewelRedirect}
                            className=''
                            style={{ width: '100px', cursor: 'pointer' }}
                            src={item.url}
                            alt="jewels"
                        />
                        <h5 className='pt-2'>{item.effects.join(' / ')}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Jewels;
