import React from 'react'
import players from '../src/Data'
import Player from './Player'
const Playerlist = () => {
  return (
    <div className="player-list-container">
    <h2 className="text-center my-4">Player List</h2>
    <div className="d-flex flex-wrap justify-content-center gap-3">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  </div>
);
};

export default Playerlist;
