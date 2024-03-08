<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework for create user accounts and authenticate users using JWT (JSON Web Tokens).


## Installation
1. Clone this repository:
```bash
$ git clone https://github.com/rodrigostuqui/AuthNestAPI.git
```
2. Install Dependencies
```bash
$ cd user-authentication-api
$ npm install
```
3. Setup Environment

Create a `.env` file in the root directory of the project and add the following variables:
```bash
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE

JWT_SECRET=your_jwt_secret_here
```
4. Migrate the prisma schema to the database
```bash
npx prisma migrate dev --name init
```
## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
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
## Endpoints

### 1. Create User
- **URL:** `/users`
- **Method:** `POST`
- **Header**
```bash
Authorization: Bearer your_jwt_token_here
```
- **Request Body:**
```json
{
  "email": "johndoe@gmail.com",
  "name" : "John Doe",
  "password": "abcd@1234"
}
```
### 2. Login

- **URL:** `/login`
- **Method:** `POST`
- **Request Body:**
```json
{
  "email": "johndoe@gmail.com",
  "password": "abcd@1234"
}
```
- **Response**
```json
{
  "access_token" : "your_access_token"
}
```
### 3. Hello World
- **URL:** `/users`
- **Method:** `POST`
- **Header**
```bash
Authorization: Bearer your_jwt_token_here
```
- **Response: 200 OK**
```json
Hello World!
```

## Note
The /login endpoint demonstrates the usage of a decorator (@isPublic()) to control permissions, making the token nonessential.

To create a user, make sure to free the endpoint first with the @IsPublic() decorator.

If the creation of users in your application is restricted, remove the IsPublic() decorator, as future creations must be authenticated by an existing user.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
