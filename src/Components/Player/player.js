import React from 'react';
import './player.css';

const player = props => (
  <div className={props.active ? 'card active' : 'card'}>
    <h1>{props.name}</h1>
    <p className="title">Player {props.num === '1' ? 'X' : 'O'}</p>
    <p className="score">Score: {props.score}</p>
  </div>
);

export default player;
