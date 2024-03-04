import React from 'react';

import './startPage.css';

const startPage = props => (
  <div className="modal">
    <h2>Type your name</h2>
    <form onSubmit={event => props.startHandler(event)}>
      <div className="user-box">
        <input
          type="text"
          onChange={event => props.initializeNames(event, 0)}
        />
        <label>Player X</label>
      </div>
      <div className="user-box">
        <input
          type="text"
          onChange={event => props.initializeNames(event, 1)}
        />
        <label>Player O</label>
      </div>
      <button type="submit" className="button-submit">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </button>
    </form>
  </div>
);

export default startPage;
