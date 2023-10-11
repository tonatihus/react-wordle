import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils'
import Guess from '../Guess/Guess';

function PreviousGuesses({previousGuesses}) {
  const EMPTY = NUM_OF_GUESSES_ALLOWED - previousGuesses.length
  return (
    <div className="guess-results">
      {previousGuesses.map((previousGuess, index) => (
        <Guess key={index} guess={previousGuess} />
      ))}
      {range(EMPTY).map((_,index) => (
        <Guess key={index} />
      ))}
    </div>
  );
}

export default PreviousGuesses;
