import { Injectable } from '@nestjs/common';

const getRandomResult = () => {
  return 0;
};

const slightlyCheat = () => {
  return 0;
};

const cheat = () => {
  return 0;
};

const game = {
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
    let result;
    if (game.credits < 40) {
      result = getRandomResult();
    } else if (game.credits >= 40 && game.credits < 60) {
      game.houseCheats += 1;
      result = slightlyCheat();
    } else {
      game.houseCheats += 1;
      result = cheat();
    }

    return {
      ...game,
      result,
      credits: game.credits - game.cost,
    };
  }

  cashOut(): UserAccount {
    userAccount = {
      ...userAccount,
      credits: game.credits,
    };

    return userAccount;
  }
}
