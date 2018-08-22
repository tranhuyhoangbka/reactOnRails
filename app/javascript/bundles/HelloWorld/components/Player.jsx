import React from 'react';

const Player = (props) => {
  console.log(parseInt(props.match.params.number));
  const players = [
    {name: 'tran hoag', position: 'dev', number: 1},
    {name: 'hai ha', position: 'test', number: 2},
    {name: 'bao ngoc', position: 'leader', number: 3},
    {name: 'bao thoa', position: 'Intern', number: 5}
  ];
  const player = players.filter((p) => p.number === parseInt(props.match.params.number))[0];
  console.log(player);
  return (
    <div>
      <h1>{player.name} (#{player.number})</h1>
      <h2>{player.position}</h2>
    </div>
  );
}

export default Player;
