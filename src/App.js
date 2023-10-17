import { useEffect, useState } from 'react';
import './App.css';
import Hangman from './components/Hangman';
import Keyboard from './components/Keyboard';
import GetRandomWord from './utilities/GetRandomWord';

function App() {

  const [word, setWord] = useState("");
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [guesses, setGuesses] = useState([]); // as we click the keyboard characters will be added to the array
  const [wrongGuesses, setWrongGuesses] = useState([]); // as we click the keyboard characters will be added to the array

  useEffect(() => {
    GetRandomWord().then((word) => {
      setWord(word);
    });
  }, []);

  return (
    <div className="App">
      <div class="row">
        <div class="col-12">
          <Hangman word={word} guesses={guesses} />
          <Keyboard wrongGuesses={wrongGuesses} guesses={guesses} />
        </div>
      </div>
    </div>
  );
}

export default App;
