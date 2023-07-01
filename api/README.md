# Auction App API

## Run Locally
- clone the repository
```bash
git clone git@github.com:TurtoiseMan/Auction-App.git
```
- `cd` into `api` directory
```bash
cd api/
```
- install dependencies
```bash
yarn
```
- create `.env` file from `.env.example`
```
DATABASE_URL= # URL of your postgresql instance
USE_SSL= # specify whether to use ssl or not. For local instance set to false
PORT= # specify the port to use
```
For example, if you have a `PostgreSQL` instance with the following credentials in your local machine :
```
POSTGRES_USER postgres
POSTGRES_PASSWORD password
POSTGRES_DB auction
PORT 5432
```
Then your database URL will be as following: 
`postgresql://postgres:password@localhost:5432/auction`
> If you don't have postgresql setup, refer to the Database setup section
- start the app
```bash
yarn start
```
> For now we have enabled `sync()` in `Sequelize`. So no need to run migration. **Please remember, it's not recommended in production**

## Seed
To seed the database with dummy data, run 
```bash
yarn seed
```

### Database
For database there are three options from which you can choose.
- [Download & install postgresql locally](https://www.postgresql.org/download/)
- If you have `Docker` installed then follow the instructions below:
  - Go to the root directory
  - You may modify the `Dockerfile` or leave it as it is
  - `docker build -t pg-image .`
  - `docker run -d --name pg-container -p 5432:5432 pg-image`
  -  If you don't modify the `Dockerfile` your database URL will be `postgresql://postgres:password@localhost:5432/auction`
- If you have `Postgres` instance in any cloud provider, copy and paste the database URL from the provider into the `.env` file

## App Architecture

```
index.js -> entrypoint of the application.

db.js -> database configuration file. Sequelize is initialized in this file. Schema of the Item table is also defined.

app.js -> express app is initialized. All routes are defined.

controllers.js -> route requests are handled here.

seeder.js -> seeder file that inserts some dummy data into the database initially to ease the development process.

.env -> all environment variables are defined here.
```
