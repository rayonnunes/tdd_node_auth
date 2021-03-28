# tdd_node_auth
This repository contains a basic REST API with a simple jwt login endpoint and middleware to check authentication but implemented using concepts of TDD

## Technologies
---
- Nodejs
- Express
- PostgreSQL
- SQLite (for tests)
- Docker
- SequelizeORM
- Jest

## Installing dependencies
---
To manage the dependencies, this project uses preferably yarn, but you can feel free to use npm instead. If you want to use yarn but don't have it yet, check out the [installation guide from official documentation](https://yarnpkg.com/getting-started/install)

With yarn installed open your favorite shell in the root folder of this project and then run:
```bash
yarn
```
Or if you choose to use npm, run:
```bash
npm i
```

## Running Application (Development)
---
Running the application in development mode allows it to take advantage of nodemon to restart the server for every change, to start the server in development mode, simply run:
```bash
yarn dev
```


## Running Tests 
---
To test the application, the environment is changed in such a way that the DB becomes SQLite instead of PostgreSQL to not affect the possible production database. 

All the migrations are executed before the tests and undone after the tests (see `pretest` and `posttest` scripts respectively in the `package.json` file for more info)

Also, the database is truncated before every test in order to avoid any bias on tests

```bash
yarn test
```

## Future Plannings
- Change the implementation to Typescript
- Create a deployment guide

## Acknowledgment
[@rocketseat-content](https://github.com/rocketseat-content) for sharing the content that allowed me to practice and learn about TDD, check out the [video (in portuguese)](https://www.youtube.com/watch?v=2G_mWfG0DZE&t=929s) or [the repo](https://github.com/rocketseat-content/youtube-nodejs-tdd-jest)
