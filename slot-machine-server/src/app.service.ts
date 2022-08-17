import { Injectable } from '@nestjs/common';

function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomResult = (): [number, number, number] => {
  return [
    randomIntFromInterval(0, 3),
    randomIntFromInterval(0, 3),
    randomIntFromInterval(0, 3),
  ];
};

const wonRound = (result: [number, number, number]): boolean => {
  return result.every((value) => value === result[0]);
};

const cheat = (chance: number): [number, number, number] | undefined => {
  const percentage = randomIntFromInterval(1, 100);
  const reRollResult = getRandomResult();

  if (percentage <= chance && wonRound(reRollResult)) {
    // Meaning chance% of enter here
    return reRollResult;
  }
};

let game = {
  houseCheats: 0,
  credits: 10,
  cost: 1,
  result: [null, null, null],
  symbols: [
    {
      name: 'cherry',
      icon: '🍒',
      reward: 10,
    },
    {
      name: 'lemon',
      icon: '🍋',
      reward: 20,
    },
    {
      name: 'orange',
      icon: '🟠',
      reward: 30,
    },
    {
      name: 'watermelon',
      icon: '🍉',
      reward: 40,
    },
  ],
};

let userAccount = {
  name: '',
  credits: 0,
};

export type UserAccount = typeof userAccount;
export type GameType = typeof game;

@Injectable()
export class AppService {
  getGame(): GameType {
    return game;
  }

  play(): GameType {
    let playResult = getRandomResult();
    let reward = 0;
    let houseCheats = game.houseCheats;

    if (wonRound(playResult)) {
      if (game.credits > 60) {
        playResult = cheat(60) || playResult;
        houseCheats += 1;
      } else if (game.credits <= 60 && game.credits >= 40) {
        houseCheats += 1;
        playResult = cheat(30) || playResult;
      }

      if (wonRound(playResult)) {
        const [indexWinner] = playResult;
        reward = game.symbols[indexWinner].reward;
      }
    }

    game = {
      ...game,
      result: playResult,
      houseCheats,
      credits: game.credits - game.cost + reward,
    };

    return game;
  }

  cashOut(): UserAccount {
    userAccount = {
      ...userAccount,
      credits: game.credits,
    };

    return userAccount;
  }
}
