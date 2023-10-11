import React from 'react';

function Guess({ guess=[] }) {
  return (
    <p key={crypto.randomUUID()} className="guess">
      { guess.length > 0 && guess.map( ({letter, status}, index) => (
        <span key={index} className={`cell ${status}`}>{letter}</span>
      ))}
      { guess.length === 0 && (
        <>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
        </>
      )}
    </p>
  );
}

export default Guess;
