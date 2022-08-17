# Start the app
```bash
cd slot-machine-server
yarn install
yarn start:dev
```

Backend server is initiated in `http://localhost:4000`

```bash
cd slot-machine-ui
yarn install
yarn start
```

Fronted is initiated in `http://localhost:3000`

## Initial State

The idea is to have the state in an object with all the required information.
```js
const game = {
  credits: 10, // How many credits the user currently has, initial to 10
  cost: 1, // What is the cost of rolling the machine, initial is 1, I decided to make this dynamic so we can adjust this anytime.
  result: [null, null, null], // The result of the rolling, initial is null.
  symbols: [ // All the symbols supported for the machine, with the icon to display and the reward when winning.
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
```

## API ENDPOINTS
You can find the entire documentation for each endpoint running
```bash
cd slot-machine-server
yarn install
yarn start:dev
```

Go to and check the swagger documentation generated.
`http://localhost:4000/api`

## UI components
App: RootComponent to start the game with the button.
Initializer: Component with information to start the game.
SlotMachine: Container for the game to
  GameReporter: UI to display all the game information

## UI packages
* /api, Service to consume all resources from backend using axios and organized in the same file.
* react-hooks-util: This is a open source package created by myself with a lot of reusable react hooks, in this case I'm using `useFetch` to have all the data from server in a react state and calling all the resource in api.

### Requirements heads-up
- A New player has 10 credits to start. `DONE`
- Spinning the slots cost 1 credit.  `DONE`
- There are 4 possible symbols: cherry (10 credits reward), lemon (20 credits reward), orange (30 credits reward), and watermelon (40 credits reward).  `DONE`
- The game (session) state has to be kept on server.  `DONE`
- If the player keeps winning, they can play forever.  `DONE`
- When a user opens the app, a session is created on the server, and they have 10 starting credits.  `DONE`
- When a user has less than 40 credits in the game session, their rolls are truly random.  `DONE`
- If a user has between 40 and 60 credits, then the server begins to slightly cheat:  `DONE`
  - For each winning roll, before communicating back to client, the server does one 30% chance roll which decides if server will re-roll the that round.
  - If that roll is true, then server re-rolls and communicates the new result back.
- If user has above 60 credits, the server acts the same, but in this case the chance of re-rolling the round increases to 60%.  `DONE`
  - If that roll is true, then server re-rolls and communicates the new result back.
- There is a cash-out endpoint which moves credits from the game session to user's account and closes the session.  `DONE`
- There should be a counter for how many times the computer has cheated.  `DONE`
- There should be a button to start the game.  `DONE`
- There should be a display of the current credits for the user.  `DONE`
- The game should have 3 characters displayed in a row.
  - The components for each sign can be a starting letter (C for cherry, L for lemon, O for orange, W for watermelon).  `DONE`
  - There should be a button to "spin" the characters components.  `IN PROGRESS`
  - After submitting a roll-request to server, all blocks should enter a spinning state (can be 'X' character spinning, but bonus points for getting spinner SVG from the internet). `IN PROGRESS`
  - After receiving response from server, the first sign should spin for 1 second more and then display the result, then display the second sign at 2 seconds, then the third sign at 3 seconds. `IN PROGRESS`
  - If the user wins the round, their session credit is increased by the amount from the server response, else it is deducted by 1. `DONE`
- Include a button on the screen that says "CASH OUT" `DONE`
- BONUS: when the user hovers it, there is 50% chance that button moves in a random direction by 300px, and 40% chance that it becomes unclickable (this roll should be done on client side). If they succeed to hit it, credits from session are moved to their account. `IN PROGRESS`
