import React from 'react';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

import { isMobile } from 'react-device-detect';

import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import { items } from '../Items/Items';

import './Gear.css';
if (isMobile) {
    require('./mobile.css');
}
const itemPool = [
    'mainhand',
    'offhand',
    'helmet',
    'armor',
    'legs',
    'accessories',
];
export const Gear = (props) => {
    if (
        props.classType == 'infantry' ||
        props.classType == 'ranged' ||
        props.classType == 'cavalry'
    ) {
        return itemPool.map((slotType) => {
            return (
                <div
                    key={items.infantry[`${slotType}`].id}
                    className=' container pt-5'
                >
                    <h2>
                        Best{' '}
                        {slotType == 'mainhand'
                            ? 'Main Hand'
                            : slotType == 'offhand'
                            ? 'Off Hand'
                            : slotType == 'helmet'
                            ? 'Helmet'
                            : slotType == 'armor'
                            ? 'Armor'
                            : slotType == 'legs'
                            ? 'Legs'
                            : slotType == 'accessories'
                            ? 'Accessories'
                            : 'else'}{' '}
                        Items
                    </h2>
                    <BootstrapTable
                        keyField='id'
                        data={items[`${props.classType}`][`${slotType}`]}
                        columns={columns}
                        bootstrap4
                        wrapperClasses='table-responsive'
                        bordered={true}
                    />
                </div>
            );
        });
    }
    if (props.classType == 'mixed') {
        return itemPool.map((slotType) => {
            return (
                <div
                    key={items.infantry[`${slotType}`].id}
                    className='container pt-5'
                >
                    <h2>
                        Best{' '}
                        {slotType == 'mainhand'
                            ? 'Main Hand'
                            : slotType == 'offhand'
                            ? 'Off Hand'
                            : slotType == 'helmet'
                            ? 'Helmet'
                            : slotType == 'armor'
                            ? 'Armor'
                            : slotType == 'legs'
                            ? 'Legs'
                            : slotType == 'accessories'
                            ? 'Accessories'
                            : 'else'}{' '}
                        Items
                    </h2>
                    <BootstrapTable
                        keyField='id'
                        data={items[`${props.classType}`][`${slotType}`]}
                        columns={columnsMixed}
                        bootstrap4
                        wrapperClasses='table-responsive'
                        bordered={false}
                    />
                    {/* <Notes type={`${slotType}`} /> */}
                </div>
            );
        });
    }
};

const columns = [
    {
        dataField: 'id',
        text: 'Rank',
    },
    {
        dataField: 'image',
    },
    {
        dataField: 'itemPrimary',
        text: 'Best Item',
    },
    {
        dataField: 'itemAtk',
        text: 'ATK',
    },
    {
        dataField: 'itemHP',
        text: 'HP',
    },
    {
        dataField: 'itemDef',
        text: ' Def',
    },

    // {
    //     dataField: 'other',
    //     text: 'Notes',
    // },
    { dataField: 'notes', text: 'Notes' },
];

const columnsMixed = [
    {
        dataField: 'id',
        text: 'Rank',
    },
    {
        dataField: 'image',
    },
    {
        dataField: 'itemPrimary',
        text: 'Best Item',
    },
    {
        dataField: 'itemAtk',
        text: 'ATK',
    },
    {
        dataField: 'itemHP',
        text: 'HP',
    },
    {
        dataField: 'itemDef',
        text: ' Def',
    },

    // {
    //     dataField: 'other',
    //     text: 'Notes',
    // },
    { dataField: 'notes', text: 'Notes' },
];
