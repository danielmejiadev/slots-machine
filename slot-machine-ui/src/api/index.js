import axios from 'axios';

class GameService {
  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL });
  }

  getGame = () => {
    return this.instance.get('/game').then(({ data })=> data);
  }

  play = () => {
    return this.instance.post('play').then(({ data })=> data);
  }

  castOut = () => {
    return this.instance.post('cash-out').then(({ data })=> data);
  }
}

const gameService = new GameService('http://localhost:4000');
export default gameService