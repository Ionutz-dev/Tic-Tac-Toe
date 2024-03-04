import React, { useState } from 'react';
import './App.css';

import PlayerCard from '../Components/Player/player';
import StartPage from '../Components/StartPage/startPage';
import WinnerModal from '../Components/WinnerModal/winnerModal';

const tableInitialState = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

const App = () => {
  const [table, setTable] = useState(tableInitialState);
  const [prevValue, setPrevValue] = useState('');
  const [playerActive, setPlayerActive] = useState(true);
  const [names, setNames] = useState([]);
  const [start, setStart] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [winner, setWinner] = useState('');
  const [playersScore, setPlayersScore] = useState([0, 0]);

  const initializeNames = (event, idx) => {
    event.preventDefault();

    names[idx] = event.target.value;

    setNames(names);
  };

  const startGame = event => {
    event.preventDefault();

    if (names.length === 2) {
      setStart(false);
    }
  };

  const closeWinnerModal = () => {
    setShowModal(false);
  };

  const restartHandler = () => {
    setTable([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);

    let temp = names[0];
    names[0] = names[1];
    names[1] = temp;

    temp = playersScore[0];
    playersScore[0] = playersScore[1];
    playersScore[1] = temp;

    setNames(names);
    setPlayersScore(playersScore);
    setPrevValue('');
    setPlayerActive(names[0]);
    setWinner('');
  };

  const generateCells = () => {
    let cellsArray = [];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        cellsArray.push(
          <div
            key={Math.random()}
            className="box"
            onClick={() => changeCell(i, j)}
          >
            {table[i][j]}
          </div>
        );
      }
    }

    return cellsArray;
  };

  const changeCell = (row, column) => {
    if (winner === '') {
      if (table[row][column] === '') {
        if (prevValue === '') {
          table[row][column] = 'X';
        } else if (prevValue === 'X') {
          table[row][column] = 'O';
        } else if (prevValue === 'O') {
          table[row][column] = 'X';
        }

        setPlayerActive(!playerActive);
        setPrevValue(table[row][column]);
        setTable(table);

        if (
          (table[0][0] === 'X' && table[0][1] === 'X' && table[0][2] === 'X') ||
          (table[0][0] === 'X' && table[1][0] === 'X' && table[2][0] === 'X') ||
          (table[2][0] === 'X' && table[2][1] === 'X' && table[2][2] === 'X') ||
          (table[0][2] === 'X' && table[1][2] === 'X' && table[2][2] === 'X') ||
          (table[1][0] === 'X' && table[1][1] === 'X' && table[1][2] === 'X') ||
          (table[0][1] === 'X' && table[1][1] === 'X' && table[2][1] === 'X') ||
          (table[0][0] === 'X' && table[1][1] === 'X' && table[2][2] === 'X') ||
          (table[2][0] === 'X' && table[1][1] === 'X' && table[0][2] === 'X')
        ) {
          playersScore[0]++;
          setPlayersScore(playersScore);
          setShowModal(true);
          setWinner(names[0]);
        } else if (
          (table[0][0] === 'O' && table[0][1] === 'O' && table[0][2] === 'O') ||
          (table[0][0] === 'O' && table[1][0] === 'O' && table[2][0] === 'O') ||
          (table[2][0] === 'O' && table[2][1] === 'O' && table[2][2] === 'O') ||
          (table[0][2] === 'O' && table[1][2] === 'O' && table[2][2] === 'O') ||
          (table[1][0] === 'O' && table[1][1] === 'O' && table[1][2] === 'O') ||
          (table[0][1] === 'O' && table[1][1] === 'O' && table[2][1] === 'O') ||
          (table[0][0] === 'O' && table[1][1] === 'O' && table[2][2] === 'O') ||
          (table[2][0] === 'O' && table[1][1] === 'O' && table[0][2] === 'O')
        ) {
          playersScore[1]++;
          setPlayersScore(playersScore);
          setShowModal(true);
          setWinner(names[1]);
        }
      }
    }
  };

  let content = (
    <StartPage initializeNames={initializeNames} startHandler={startGame} />
  );

  if (!start) {
    content = (
      <div className="App">
        <WinnerModal
          winnerName={winner}
          clicked={closeWinnerModal}
          show={showModal}
        />
        <PlayerCard
          name={names[0]}
          num="1"
          active={playerActive}
          score={playersScore[0]}
        />
        <div className="game-board">{generateCells()}</div>
        <PlayerCard
          name={names[1]}
          num="2"
          active={!playerActive}
          score={playersScore[1]}
        />
        <div id="restart" className="buttonBox" onClick={restartHandler}>
          <button className="restart-button" onClick={restartHandler}>
            Restart
          </button>
          <div className="border"></div>
          <div className="border"></div>
        </div>
      </div>
    );
  }

  return content;
};

export default App;
