## Initial State

const game = {
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

## API ENDPOINTS
You can find the entire documentation for each endpoint running
```bash
cd slot-machine-server
yarn install
yarn start:dev
```

Go to and check the swagger documentation generated.
`http://localhost:4000/api`

