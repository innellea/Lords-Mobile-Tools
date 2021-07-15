/* eslint-disable react/prop-types */
import React from 'react';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import BootstrapTable from 'react-bootstrap-table-next';

import { heroesList } from '../heroesList';

import './Heroes.css';
export const Heroes = (props) => {
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
                            bordered={true}
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
                            bordered={true}
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
                            bordered={true}
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
                            bordered={true}
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
        text: ' Def',
    },
];
