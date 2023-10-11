import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import {checkGuess} from '../../game-helpers'


function GuessInput({ previousGuesses, setPreviousGuesses, answer}) {
  const [guess, setGuess] = React.useState('');
  const [isWinner, setIsWinner] = React.useState(false)

  function enviaPalabra(evento){
    evento.preventDefault();
    console.info({ guess });
    
    setIsWinner(answer == guess);

    if(previousGuesses.length >= NUM_OF_GUESSES_ALLOWED){
      window.alert('¡Lástima Margarito!');
      return;
    }
    
    setPreviousGuesses([...previousGuesses, checkGuess(guess, answer)]);
    setGuess('');
  }
  return (
    <>
    <form className="guess-input-wrapper" onSubmit={(event) => enviaPalabra(event)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input"
        type="text"
        maxLength="5"
        pattern="[A-Za-z]{5}"
        value={guess}
        onChange={(event) => setGuess((event.target.value).toUpperCase())}
        required
        title='5 letras ;)'
        disabled={isWinner || previousGuesses.length >= NUM_OF_GUESSES_ALLOWED}
      />
    </form>
    {isWinner && (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{previousGuesses.length} guesses</strong>.
        </p>
      </div>
    )}
    {(!isWinner && previousGuesses.length >= NUM_OF_GUESSES_ALLOWED) && (
      <div class="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    )}
    </>
  );
}

export default GuessInput;
