import React from 'react';
import {NavLink as Link} from 'react-router-dom';

const FullRoster = () => {
  const players = [
    {name: 'tran hoag', position: 'dev', number: 1},
    {name: 'hai ha', position: 'test', number: 2},
    {name: 'bao ngoc', position: 'leader', number: 3},
    {name: 'bao thoa', position: 'Intern', number: 5}
  ];
  return (
    <ul>
      {players.map((player) => (
        <li key={player.number}><Link to={`/roster/${player.number}`}>{player.name}</Link></li>
      ))}
    </ul>
  );
};

export default FullRoster;
