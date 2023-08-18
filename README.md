# Technical Assessment Backend - Boxful



## Description

This API allows to save an order depending on the user information, collecting address, state, city and some other details, you can find the Swagger documentation in the url `{uri}:{port}/docs`


## Tech Stack

- Node.js v18
- NestJS v10
- MongoDB
- Mongoose
- Docker
- Swagger

## Installation

```bash
$ npm install
```

## Running the app

There are two different options to run this project, locally or with Docker.

Add the environment variables described in the `.env.example` in a separated file called `.env`. And then you can run:

### Locally

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
### Docker

For this step, Docker must be installed in the pc.

```bash
# development
$ npm run start:docker:dev

# production mode
$ npm run start:docker:prod
```

Remember that for stopping the Docker processes the following command must be run:

```bash
$ docker compose down
```


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

