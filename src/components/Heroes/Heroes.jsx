/* eslint-disable react/prop-types */
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './Heroes.css';

import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

import { heroesList } from './heroesList';

const Heroes = (props) => {
    const { classType } = props;

    if (classType === 'infantry') {
        return (
            <>
                <div className='heroes container'>
                    <div className='jumbotron center-text pb-5'>
                        <h1 className='display-4 mb-5'>Best Infantry Heroes</h1>
                        <p className='lead text'>
                            For an infantry blast attack, there can be only 4
                            infantry squads, so you only need to send 4 infantry
                            heroes for the squad ATK. The 5th hero can be of any
                            troop type since it won’t be fighting in the battle.
                            It&apos;s recommended to use your best army attack
                            hero
                        </p>
                    </div>
                    {/* <div className=' lineup mb-5 '>
                    <h2 classNmae='display-4'>Recommended Infantry Lineups</h2>
                </div> */}
                    <div className='hero-lineup'>
                        <h2>Lineup with 11k heroes</h2>
                        <div className='card'>
                            <img
                                src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Lords-Mobile-Infantry-Lineup-11k.jpg'
                                className='card-img-top'
                                alt='...'
                            />
                            <h5 className='card-title'>
                                Stats : 210% ATK, 210% HP, 50% DEF
                            </h5>
                            <div className='card-body'>
                                <p className='card-text'>
                                    Shapeshifter is a Cavalry hero, but she
                                    gives 60% Inf ATK and 30% Army HP, setting
                                    her way above other Infantry heroes. Grim
                                    Wolf gives an extra 50% DEF at the cost of
                                    25% HP compared to Demon Slayer and
                                    Oathkeeper, so the F2P heroes are the better
                                    option.
                                </p>
                            </div>
                        </div>
                        <h2>Lineup With P2P Non-11k Heroes</h2>
                        <div className='card'>
                            <img
                                src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Lords-Mobile-Infantry-Lineup-Non-11k.jpg'
                                className='card-img-top'
                                alt='...'
                            />
                            <h5 className='card-title'>
                                Stats : 140% ATK, 200% HP, 125% DEF
                            </h5>
                            <div className='card-body'>
                                <p className='card-text'>
                                    This is the best P2P lineup if you don’t
                                    want to buy 11k heroes. Berserker can be
                                    replaced with Lore Weaver or Songstress of
                                    the Sea for the same army stats. Grim wolf
                                    can be replaced with Pegasus from the Saint
                                    Seiya collab event for the same stats.
                                </p>
                            </div>
                        </div>
                        <h2>Lineup with F2P Heroes + Watcher</h2>
                        <div className='card'>
                            <img
                                src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Lords-Mobile-Infantry-Lineup-Watcher.jpg'
                                className='card-img-top'
                                alt='...'
                            />
                            <h5 className='card-title'>
                                Stats : 140% ATK, 125% HP, 25% DEF
                            </h5>
                            <div className='card-body'>
                                <p className='card-text'>
                                    This is the best infantry lineup with F2P
                                    heroes if you have unlocked watcher.
                                </p>
                            </div>
                        </div>{' '}
                        <h2>Lineup With F2P Heroes</h2>
                        <div className='card'>
                            <img
                                src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Lords-Mobile-Infantry-Lineup-F2P.jpg'
                                className='card-img-top'
                                alt='...'
                            />
                            <h5 className='card-title'>
                                Stats : 140% ATK, 100% HP, 0% DEF
                            </h5>
                            <div className='card-body'>
                                <p className='card-text'>
                                    Rose Knight is a cavalry hero, but gives 20%
                                    Army ATK and so is better to use compared to
                                    other Infantry heroes. Bombin Goblin can
                                    also be used instead of Rose Knight for F2P
                                    lineup.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Replacement Heroes</h2>
                        <h3>
                            All Infantry heroes ranked from best to worst in
                            terms of stats. Use this list to replace any of the
                            heroes in the above lineups if you don’t have the
                            best ones.
                        </h3>

                        <BootstrapTable
                            keyField='id'
                            data={heroesList.infantry}
                            columns={columns}
                            bootstrap4
                            wrapperClasses='table-responsive'
                            bordered
                        />
                    </div>
                </div>
            </>
        );
    }
    if (classType === 'ranged') {
        return (
            <>
                <div className='heroes container'>
                    <div className='jumbotron center-text pb-5'>
                        <h1 className='display-4 mb-5'>Best Ranged Heroes</h1>
                        <p className='lead text'>
                            For a ranged blast attack, there can be only 4
                            infantry squads, so you only need to send 4 infantry
                            heroes for the squad ATK. The 5th hero can be of any
                            troop type since it won’t be fighting in the battle.
                            It&apos;s recommended to use your best army attack
                            hero
                        </p>
                    </div>

                    <div className='hero-lineup'>
                        <h2>Lineup with 11k heroes</h2>
                        <div className='card'>
                            <img
                                src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Lords-Mobile-Ranged-Lineup-11k.jpg'
                                className='card-img-top'
                                alt='...'
                            />
                            <h5 className='card-title'>
                                Stats : 210% ATK, 210% HP, 75% DEF
                            </h5>
                            <div className='card-body'>
                                <p className='card-text'>
                                    Lightweaver is an Infantry hero, but she
                                    gives 60% Rng ATK and 30% Army HP, setting
                                    her way above other Ranged heroes. Petite
                                    Devil can also be used instead of Snow
                                    Queen.
                                </p>
                            </div>
                        </div>
                        <h2>Lineup With P2P Non-11k Heroes</h2>
                        <div className='card'>
                            <img
                                src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Lords-Mobile-Ranged-Lineup-Non-11k-Alternate-Army.jpg'
                                className='card-img-top'
                                alt='...'
                            />
                            <h5 className='card-title'>
                                Stats : 140% ATK, 225% HP, 100% DEF
                            </h5>
                            <div className='card-body'>
                                <p className='card-text'>
                                    This is the best P2P lineup if you don’t
                                    want to buy 11k heroes. Songstress of the
                                    Sea can be replaced with Berserker or Lore
                                    Weaver depending on which one is your
                                    leader, since they all have the same army
                                    stats.
                                </p>
                            </div>
                        </div>
                        <h2>Lineup with F2P Heroes + Watcher</h2>
                        <div className='card'>
                            <img
                                src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Lords-Mobile-Ranged-Lineup-Watcher.jpg.jpg'
                                className='card-img-top'
                                alt='...'
                            />
                            <h5 className='card-title'>
                                Stats : 130% ATK, 75% HP, 50% DEF
                            </h5>
                            <div className='card-body'>
                                <p className='card-text'>
                                    This is the best infantry lineup with F2P
                                    heroes if you have unlocked watcher.
                                </p>
                            </div>
                        </div>{' '}
                        <h2>Lineup With F2P Heroes</h2>
                        <div className='card'>
                            <img
                                src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Lords-Mobile-Ranged-Lineup-F2P.jpg'
                                className='card-img-top'
                                alt='...'
                            />
                            <h5 className='card-title'>
                                Stats : 140% ATK, 50% HP, 50% DEF
                            </h5>
                            <div className='card-body'>
                                <p className='card-text'>
                                    Rose Knight is a cavalry hero, but gives 20%
                                    Army ATK and so is better to use compared to
                                    other Ranged heroes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Replacement Heroes</h2>
                        <h3>
                            All Ranged heroes ranked from best to worst in terms
                            of stats. Use this list to replace any of the heroes
                            in the above lineups if you don’t have the best
                            ones.
                        </h3>

                        <BootstrapTable
                            keyField='id'
                            data={heroesList.infantry}
                            columns={columns}
                            bootstrap4
                            wrapperClasses='table-responsive'
                            bordered
                        />
                    </div>
                </div>
            </>
        );
    }
    if (classType === 'cavalry') {
        return (
            <>
                <div className='heroes container'>
                    <div className='jumbotron center-text pb-5'>
                        <h1 className='display-4 mb-5'>Best Cavalry Heroes</h1>
                        <p className='lead text'>
                            For a Cavalry blast attack, there can be only 4
                            cavalry type heroes. The 5th hero can be of any
                            troop type since it won’t be fighting in the battle.
                            It&apos;s recommended to use your best army attack
                            hero
                        </p>
                    </div>
                    {/* <div className=' lineup mb-5 '>
                <h2 classNmae='display-4'>Recommended Infantry Lineups</h2>
            </div> */}
                    <div className='hero-lineup'>
                        <h2>Lineup with 11k heroes</h2>
                        <div className='card'>
                            <img
                                src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Lords-Mobile-Cavalry-Lineup-11k.jpg'
                                className='card-img-top'
                                alt='...'
                            />
                            <h5 className='card-title'>
                                Stats : 210% ATK, 210% HP, 75% DEF
                            </h5>
                            <div className='card-body'>
                                <p className='card-text'>
                                    Dark Magistrar is a Ranged hero, but he
                                    gives 60% Cav ATK and 30% Army HP, setting
                                    him way above other Cavalry heroes.
                                </p>
                            </div>
                        </div>
                        <h2>Lineup With P2P Non-11k Heroes</h2>
                        <div className='card'>
                            <img
                                src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Lords-Mobile-Cavalry-Lineup-P2P-Non-11k-Heroes-1.jpeg'
                                className='card-img-top'
                                alt='...'
                            />
                            <h5 className='card-title'>
                                Stats : 140% ATK, 175% HP, 150% DEF
                            </h5>
                            <div className='card-body'>
                                <p className='card-text'>
                                    This is the best P2P lineup if you don’t
                                    want to buy 11k heroes. Lore Weaver can be
                                    replaced with Berserker or Songstress of the
                                    Sea in this lineup, since all 3 have the
                                    same army stats.
                                </p>
                            </div>
                        </div>
                        <h2>Lineup with F2P Heroes + Watcher</h2>
                        <div className='card'>
                            <img
                                src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Lords-Mobile-Cavalry-Lineup-Watcher.jpg'
                                className='card-img-top'
                                alt='...'
                            />
                            <h5 className='card-title'>
                                Stats : 100% ATK, 175% HP, 100% DEF
                            </h5>
                            <div className='card-body'>
                                <p className='card-text'>
                                    This is the best cavalry lineup with F2P
                                    heroes if you have unlocked watcher. If you
                                    have also unlocked Chaos Dragon, you can use
                                    that instead of Death Knight.
                                </p>
                            </div>
                        </div>{' '}
                        <h2>Lineup With F2P Heroes</h2>
                        <div className='card'>
                            <img
                                src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Lords-Mobile-Cavalry-Lineup-F2P-Hero.jpg'
                                className='card-img-top'
                                alt='...'
                            />
                            <h5 className='card-title'>
                                Stats : 100% ATK, 150% HP, 100% DEF
                            </h5>
                            <div className='card-body'>
                                <p className='card-text'>
                                    Bombin Goblin is a ranged hero, but gives
                                    20% Army ATK and so is better to use
                                    compared to other Cavalry heroes. Same as
                                    the above lineup, Chaos Dragon will replace
                                    Death Knight once you have unlocked it.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Replacement Heroes</h2>
                        <h3>
                            All Cavalry heroes ranked from best to worst in
                            terms of stats. Use this list to replace any of the
                            heroes in the above lineups if you don’t have the
                            best ones.
                        </h3>

                        <BootstrapTable
                            keyField='id'
                            data={heroesList.infantry}
                            columns={columns}
                            bootstrap4
                            wrapperClasses='table-responsive'
                            bordered
                        />
                    </div>
                </div>
            </>
        );
    }
    if (classType === 'defense') {
        return (
            <>
                <div className='heroes container'>
                    <div className='jumbotron center-text pb-5'>
                        <h1 className='display-4 mb-5'>
                            Best Fort & Wall Defense Heroes
                        </h1>
                        <p className='lead text'>
                            For defending rallies, since we don’t know the troop
                            type of the rally, it is important to use heroes
                            which give army attack stats and boost multiple
                            types. Another important factor to consider for
                            defense is the army HP. This becomes especially
                            important when defending rallies on your castle in
                            order to minimize troop losses.
                        </p>
                    </div>
                    <div className='hero-lineup'>
                        <h2>Lineup with 11k heroes</h2>
                        <div className='card'>
                            <img
                                src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Lords-Mobile-Defense-Heroes-Lineuup-11k.jpg'
                                className='card-img-top'
                                alt='...'
                            />
                            <h5 className='card-title'>
                                Stats : Infantry – 160% ATK, 140% HP 50% DEF
                                <br /> Ranged – 160% ATK, 140% HP, 50% DEF
                                <br />
                                Cavalry – 160% ATK, 140% HP, 50% DEF
                            </h5>
                            <div className='card-body'>
                                <p className='card-text'>
                                    Each of the three 11k heroes give 60% ATK
                                    for 2 troop types as well as 30% Army HP,
                                    setting them way above other P2P heroes for
                                    defense. Berserker can replace Songstress or
                                    Lore Weaver in this lineup, since they have
                                    the same stats.
                                </p>
                            </div>
                        </div>
                        <h2>Lineup With P2P Non-11k Heroes</h2>
                        <div className='card'>
                            <img
                                src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Lords-Mobile-Defense-Heroes-Lineuup-Non-11k.jpg'
                                className='card-img-top'
                                alt='...'
                            />
                            <h5 className='card-title'>
                                Stats : Infantry – 100% ATK, 125% HP, 75% DEF{' '}
                                <br />
                                Ranged – 100% ATK, 125% HP, 75% DEF <br />
                                Cavalry – 100% ATK, 125% HP, 75% DEF
                            </h5>
                            <div className='card-body'>
                                <p className='card-text'>
                                    This is the best P2P defense lineup if you
                                    don’t want to buy 11k heroes. Dream Witch
                                    can replace Watcher or Storm Fox in this
                                    lineup.
                                </p>
                            </div>
                        </div>
                        <h2>Lineup With F2P Heroes</h2>
                        <div className='card'>
                            <img
                                src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Lords-Mobile-Defense-Heroes-Lineuup-F2P.jpg'
                                className='card-img-top'
                                alt='...'
                            />
                            <h5 className='card-title'>
                                Stats : Infantry – 70% ATK, 50% HP, 0% DEF{' '}
                                <br />
                                Ranged – 70% ATK, 50% HP, 0% DEF <br />
                                Cavalry – 70% ATK, 100% HP, 0% DEF
                            </h5>
                            <div className='card-body'>
                                <p className='card-text'>
                                    This is the best defense lineup with F2P
                                    heroes. Rose Knight & Bombin Goblin give
                                    army attack and the other 3 heroes are the
                                    best from their troop type. If you have
                                    unlocked watcher, then replace one of Demon
                                    Slayer, Child of Light or Snow Queen with
                                    it.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Replacement Mix / Defense Heroes</h2>
                        <h3>
                            These are all the army defense heroes ranked from
                            best to worst in terms of stats. You can use this
                            list to replace any of the heroes in the above
                            lineups if you don’t have the best ones yet.
                        </h3>

                        <BootstrapTable
                            keyField='id'
                            data={heroesList.fortWallDefense}
                            columns={columnsDef}
                            bootstrap4
                            wrapperClasses='table-responsive'
                            bordered
                        />
                    </div>
                </div>
            </>
        );
    }
};

const columns = [
    {
        dataField: 'id',
        text: 'Rank',
    },
    {
        dataField: 'Heroes',
        text: 'Heroes',
    },
    {
        dataField: 'ATK',
        text: 'ATK',
    },
    {
        dataField: 'HP',
        text: 'HP',
    },
    {
        dataField: 'DEF',
        text: 'DEF',
    },
];

const columnsDef = [
    {
        dataField: 'id',
        text: 'Rank',
    },

    {
        dataField: 'Heroes',
        text: 'Heroes',
    },
    {
        dataField: 'Stat 1',
        text: 'Stat 1',
    },
    {
        dataField: 'Stat 2',
        text: 'Stat 2',
    },
    {
        dataField: 'Stat 3',
        text: 'Stat 3',
    },
];

export default Heroes;
