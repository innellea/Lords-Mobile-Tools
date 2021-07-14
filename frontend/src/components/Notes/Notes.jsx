/* eslint-disable react/prop-types */
import React from 'react';

function Notes(props) {
    return (
        <div className='container notes'>
            <h4>Notes:</h4>
            <div className='row '>
                {Object.values(notes.infantry[props.type]).map((item) => (
                    <div className='p-3 col-sm' key={item.id}>
                        <h6>{item.note}</h6>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Notes;

const notes = {
    infantry: {
        mainhand: {
            '3OayPUASk1JJFJwpKW7u': {
                id: '3OayPUASk1JJFJwpKW7u',
                note: 'Champion blade is overall less powerful than Ghastly Cane, because it doesn’t give HP. Good for a mixed set. ',
            },
            '5N3y7DfjZwFTPxoyg3La': {
                id: '5N3y7DfjZwFTPxoyg3La',
                note: 'Ghastly Cane has really good stats, however Cottageroar’s Forbidden Tome is quite costly to obtain.',
            },
            '7mOdjVqp9co87Ymkvk9F': {
                id: '7mOdjVqp9co87Ymkvk9F',
                note: 'Terror Lash is a decent piece, but the it will divert seeds away from terror shield, so recommend upgrading after that.',
            },
            '7mOdjVqp9co87gmkvk9F': {
                id: '7mOdjVqp9co87gmkvk9F',
                note: 'Frostwing sword makes a great starter piece for Inf set.',
            },
        },
        offhand: {
            G6qQaEqzWcMytMI3W7re: {
                id: 'G6qQaEqzWcMytMI3W7re',
                note: 'Champion Light has a very minor boost compared to the non-champ piece. Not a huge advantage unless going for the training boost, or mix inf cav stats.',
            },
            HF8vtnhZS0xeBB8kPLJZ: {
                id: 'HF8vtnhZS0xeBB8kPLJZ',
                note: 'Eerie Lantern has good stats, but pretty costly to make. Would recommend working on Ghastly Cane first.',
            },
            RIatpdNzjYeRc4JmJ8y9: {
                id: 'RIatpdNzjYeRc4JmJ8y9',
                note: 'Call of the deep has good stats, but diverts Glistening Pearls from Storm Tasset. Recommend working on tasset before this.',
            },
            '7mOdjVqp9co87gmkvk9F': {
                id: '7mOdjVqp9co87gmkvk9F',
                note: 'Dark Aegis is a great piece of gear to use in the beginning. It’s easy to make and works well in a mix set too because of it’s army stats.',
            },
        },
        helmet: {
            SWd1lptNeW5rnZvKgEco: {
                id: 'SWd1lptNeW5rnZvKgEco',
                note: 'Champ Visor gives only minor improvement in stats over beast helm, probably not worth the high price.',
            },
            UHjQnPUGFzaV4RWqiNOZ: {
                id: 'UHjQnPUGFzaV4RWqiNOZ',
                note: 'Beasthelm is a great piece to make. It’s relatively easy to make since saberfang material is not used anywhere else and also a decent piece for Cav gear.',
            },
        },
        armor: {
            '3OayPUASk1JJFJwpKW7u': {
                id: '3OayPUASk1JJFJwpKW7u',
                note: 'Champion Mail is a very minor improvement over Terror Shield, not worth the high price. ',
            },
            G6qQaEqzWcMytMI3W7re: {
                id: 'G6qQaEqzWcMytMI3W7re',
                note: 'Terror Shield though insanely difficult to make, has amazing stats and is the best non-champ piece to use here.',
            },
            SWd1lptNeW5rnZvKgEco: {
                id: 'SWd1lptNeW5rnZvKgEco',
                note: 'Firewall Plate is easier to make and is needed for Cavalry as well. It’s a good piece to use while you upgrade Terror Shield.',
            },
        },
        legs: {
            '3OayPUASk1JJFJwpKW7u': {
                id: '3OayPUASk1JJFJwpKW7u',
                note: 'Champion Boots give a 28% ATK and a 16.8% HP boost over storm tasset. Using 5 crimson manes, they are definitely a great piece to make.',
            },
            '5N3y7DfjZwFTPxoyg3La': {
                id: '5N3y7DfjZwFTPxoyg3La',
                note: 'Storm Tassets are the best non-champ piece, and have great stats. They are very difficult to make since they need 11 pearls, but are also a good option for a mix set.',
            },
            '7mOdjVqp9co87Ymkvk9F': {
                id: '7mOdjVqp9co87Ymkvk9F',
                note: 'Dragon’s Talons are a good replacement to use while you work on Storm Tassets.',
            },
        },
        accessories: {
            '3OayPUASk1JJFJwpKW7u': {
                id: '3OayPUASk1JJFJwpKW7u',
                note: 'The champ pieces have the same stats as Ambrosial Cups, and definitely very costly.',
            },
            '5N3y7DfjZwFTPxoyg3La': {
                id: '5N3y7DfjZwFTPxoyg3La',
                note: 'Ambrosial Cups are far above any other piece, but need 13 halos and are pretty costly to upgrade.',
            },
            '7mOdjVqp9co87Ymkvk9F': {
                id: '7mOdjVqp9co87Ymkvk9F',
                note: 'Terror Vial is a good option for 1 or 2 slots while working on the cups.',
            },
        },
    },
    ranged: {},
};
