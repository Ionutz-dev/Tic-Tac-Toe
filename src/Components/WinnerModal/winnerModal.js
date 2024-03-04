import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

import './winnerModal.css';

const winnerModal = props => (
  <div>
    {props.show ? (
      <div className="Backdrop" onClick={props.clicked}></div>
    ) : null}
    {props.show ? (
      <div className="popup center active">
        <div className="icon">
          <FontAwesomeIcon icon={faTrophy} className="trophy" />
        </div>
        <div className="title">{props.winnerName} a castigat!</div>
        <div className="description">Esti prea jmecher la jocu asta 🥳</div>
        <div className="dismiss-btn">
          <button id="dismiss-popup-btn" onClick={props.clicked}>
            Continue
          </button>
        </div>
      </div>
    ) : (
      <div className="popup center">
        <div className="icon">
          <FontAwesomeIcon icon={faTrophy} className="trophy" />
        </div>
        <div className="title">{props.winnerName} a castigat!</div>
        <div className="description">Esti prea jmecher la jocu asta 🥳</div>
        <div className="dismiss-btn">
          <button id="dismiss-popup-btn" onClick={props.clicked}>
            Continue
          </button>
        </div>
      </div>
    )}
  </div>
);

export default winnerModal;
