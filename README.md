# NCMA Chapter Admin Web App 🤩

## Purpose:

This repo is the main codebase for the NCMA Chapter Admin web app.

#### Login Page:

![Login page](https://projects.invisionapp.com/share/M3WQ9N5HPD5#/screens/412293631)

#### Events List Page:

![Events page](https://projects.invisionapp.com/share/M3WQ9N5HPD5#/screens/412293632)

### Create Event Page:

![Create event page](https://projects.invisionapp.com/share/M3WQ9N5HPD5#/screens/412293634)

### User profile page:

![User profile page](https://projects.invisionapp.com/share/M3WQ9N5HPD5#/screens/412869741)

## Getting started locally:

1. Make sure you have **Node v^10.10.0** installed (most of us use [nvm](https://github.com/nvm-sh/nvm)).
1. Install (`brew install yarn`) or upgrade yarn to the latest version (`yarn upgrade`) and run `yarn` to install all dependencies.
1. Run `yarn start`. The app should now be running on [localhost:3000](http://localhost:3000).

--

If you're planning on just testing locally without actually interfacing with an API, be sure to run the command `REACT_APP_FAKE_API=true yarn start` instead of `yarn start` to mock API requests and responses client-side.

## How do I work with styles in this app?

We use `styled-components` (https://github.com/styled-components/styled-components), which allows you to write styles very similar to SASS/SCSS.

## What libraries are you using? Where can I learn more about them?

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux Saga (Redux middleware)](https://redux-saga.js.org/)
- [Redux Logger (Redux debugger)](https://github.com/LogRocket/redux-logger)
- [Styled Components (Styling)](https://styled-components.com/)
- [Axios (Module to make HTTP requests)](https://github.com/axios/axios)
- [ESLint (linter)](https://eslint.org/)
- [Prettier (linter)](https://prettier.io/)
- [Husky (pre-commit hooks)](https://github.com/typicode/husky)

## Configure environment variables.

#### Current environment variables:

1. `REACT_APP_API_URL` (The base URL of the API you want to use.)
1. `REACT_APP_FAKE_API` (Whether you want to fake the API requests + responses.)

#### How to use different environment variables for development:

Open [package.json](./package.json) and modify the script `start` with any environment variables you wish to use locally. The default environment variables are inserted there already for convenience.

#### How to insert them into a build:

Run `REACT_APP_API_URL=https://api.ncmamonmouth.org REACT_APP_FAKE_API=false yarn build`.

## Create a production build.

1. Run `yarn build`. Notice that this creates a `./build` folder.
1. Upload the build folder contents to any file server (e.g. AWS S3 bucket, GCP bucket, etc.).

## Contributing

When creating a branch, please use one of the following formats:

```
bugfix/[githubHandle]-[ticketNumber]-[truncatedTicketTitle]
feature/[githubHandle]-[ticketNumber]-[truncatedTicketTitle]
refactor/[githubHandle]-[ticketNumber]-[truncatedTicketTitle]
```

Please send up GitHub PRs against `master`. There's no required format for a PR description, but please consider adding a description of what your PR does, screenshots, and the acceptance criteria (if known) to aid other devs who might be reviewing it. And THANK YOU!! <3
