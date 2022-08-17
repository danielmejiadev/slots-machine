import { useState } from 'react'
import { useFetch } from 'react-hooks-util';
import gameService from '../api';

function GameReporter({ game, play }) {
  return (
    <>
      <span>House cheated times: {game.houseCheats}</span>
        <span>User Credits: {game.credits}</span>
        <div className='slots'>
          {game.result.map((value, index) => (
            <div key={value || index}> 
              {game.symbols[value || index].icon}
            </div>
          ))}
        </div>
        {game.credits > 0 
          ? (
          <button onClick={play}>
            Roll
          </button>
          ): (
            <span>No more credits available</span>
          )
        }

        <button onClick={() => gameService.castOut()}>
          CASH_OUT
        </button>
    </>
  )
}

function SlotMachine() {
  const [plays, setPlays] = useState(0);
  const [game, loading, error] = useFetch(() => {
    if (plays === 0) {
      return gameService.getGame();
    }

    return gameService.play();
  }, [plays]);

  if (!game || loading) {
    return null;
  }

  if (error) {
    return <span>There was an error during Initialization, please try again</span>
  }

  return (
    <div className='Slot-machine'>
      <GameReporter game={game} play={() => setPlays(prev => prev + 1)} />
    </div>
  )
}

export default SlotMachine;