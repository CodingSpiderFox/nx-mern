# NX Mern Starter

[NX Workspaces](https://nx.dev/) is a powerful tool for scaffolding enterprise level starting points for node.js monorepos with both backend and frontend code in the same repo.This is a starter for developing MERN (MongoDB, Express, React, Node) apps with NX workspaces, JWT and cookies.

![NX Mern](nx-mern.png 'NX Mern')

## Structure

Each app in the monorepo lives in it's own folder with the `apps` folder.

```
apps
├── frontend
└── backend

```

The root of the project also includes a libs folder which provides a library with typescript types that can be consumed by both the frontend and backend.

```
libs
├── types
```

## Clone the app

Run the following command in your terminal.

```
git clone git@github.com:codsworth9/nx-mern.git
```

## Rename the .env.example file to .env

In the .env file update the strings for `NX_CONNECTION_STRING` and `NX_JWT_SECRET`. You can leave the rest as it is.

```
NX_CONNECTION_STRING=YOUR-MONGO-DB-CONNECTION-STRING
NX_JWT_SECRET=YOUR-SECRET
```

## Run the app locally

Install the dependencies for the monorepo

```
yarn
```

Then run the development command

```
yarn dev
```

## Bump all your dependencies

Update all dependencies at once with the command below

```
yarn update
```

If all changes look ok run

```
yarn
```

Commit to dependency migration file

```
yarn nx migrate --run-migrations=migrations.json
```

## Deploy app to Heroku

Sign up for a [free account at Heroku here](https://signup.heroku.com/). Install the Heroku CLI by running the command below in the terminal.

```
brew tap heroku/brew && brew install heroku
```

Run the heroku login command

```
heroku login
```

Heroku will ask you to authenticate yourself in the browser.
![Heroku login](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/omasa83uvze5yvnzrapk.png)
Once it's complete you can return to the terminal. You're now logged in.

## Create a Heroku deploy target

Run the CLI command for creating a new deploy target in your Heroku account.

```
heroku create
```

Once it's finished it will look like this.
![Heroku deploy target](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/i1ruo0w4v2j2r59z8x35.png)

## Set environment variables in heroku

Post your environments variables to heroku from the terminal.

```
heroku config:set NX_CONNECTION_STRING=YOUR-MONGO-DB-CONNECTION-STRING
NX_JWT_SECRET=YOUR-JWT-SECRET
NX_SITE_URL=YOUR-HEROKU-APP-URL
```

## Procfile in the root of your project

Create a <code>Procfile</code> in the root of your project and add the following

```
web: yarn start
```

## Deploy code to Heroku

Make sure all your changes in the repo are commited. Then run

```
git push heroku master
```

## Visit your deployed fullstack app

Use the CLI command below to open up your deployed app in your default browser.

```
heroku open
```

## Demo

Your NX Mern app is [now deployed and running on Heroku](https://salty-depths-34298.herokuapp.com/login).

## Credit

This repo uses some ideas [from the excellent Devistry MERN repo](https://github.com/jgbijlsma/mern-auth-template-tutorial).
