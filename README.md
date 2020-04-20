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

<hr />

If you're planning on just testing locally without actually interfacing with an API, be sure to run the command `REACT_APP_FAKE_API=true yarn start` instead of `yarn start` to mock API requests and responses client-side.

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

## Architecture

### What libraries are you using? Where can I learn more about them?

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux Saga (Redux middleware)](https://redux-saga.js.org/)
- [Redux Logger (Redux debugger)](https://github.com/LogRocket/redux-logger)
- [Styled Components (Styling)](https://styled-components.com/)
- [Axios (Module to make HTTP requests)](https://github.com/axios/axios)
- [ESLint (linter)](https://eslint.org/)
- [Prettier (linter)](https://prettier.io/)
- [Husky (pre-commit hooks)](https://github.com/typicode/husky)

### Can you explain the various folders?

#### `assets`

You will notice an `assets` folder within the `./src` directory. This folder is where you can put any media files or fonts to import elsewhere in the application.

#### `containers`

You will notice a `containers` folder within the `./src` directory. Each of those containers is meant to follow the [recommended Redux style guide "Duck" pattern](https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-or-ducks) where each container maintains its own:

- `actions.js` (Redux action creators specific to that container's feature(s))
- `api.js` (API modules specific to that container's feature(s))
- `constants.js` (Redux action types scoped to that container)
- `middleware.js` (Redux middleware specific to that container's feature(s))
- `reducer.js` (Redux reducer specific to that container's feature(s))

This pattern typically makes it easier to maintain often the most complex parts of our application.

#### `pages`

You will notice a `pages` folder within the `./src` directory. Each page component may subscribe to one or more containers via [`react-redux`](https://react-redux.js.org/)'s `mapStateToProps` and `mapDispatchToProps` arguments for its [`connect`](https://react-redux.js.org/api/connect) module. A page maintains its own:

- `index.js` (React component that optionally connects to (a) container(s))
- `styles.js` (A file that maintains any [`styled-component`](https://styled-components.com/) modules that are to be used **only in that page**)

#### `primitives`

You will notice a `primitives` folder within the `./src` directory. Each primitive component should be ideally fully decoupled from the rest of the app and used 2 or more times in the other parts of the application. A primitive component maintains its own:

- `index.js` (React component that **never** connects to a container)
- `styles.js` (A file that maintains any [`styled-component`](https://styled-components.com/) modules that are to be used **only in that component**)

#### `store`

You will notice a `store` folder within the `./src` directory. This folder is responsible for setting up the Redux store, adding Redux middleware, setting up `react-router-dom` browser history, and connecting containers' reducers + middleware to the Redux store.

#### `utils`

You will notice a `utils` folder within the `./src` directory. This folder contains modules that are used throughout the application so as to keep the code DRY. For example, this is where we have a module that handles standard API request errors (e.g. [`sagaHelpers.js`](./src/utils/sagaHelpers.js)) as well as an [API request module](./src/utils/request.js).

## Contributing

When creating a branch, please use one of the following formats:

```
bugfix/[githubHandle]-[ticketNumber]-[truncatedTicketTitle]
feature/[githubHandle]-[ticketNumber]-[truncatedTicketTitle]
refactor/[githubHandle]-[ticketNumber]-[truncatedTicketTitle]
```

Please send up GitHub PRs against `master`. There's no required format for a PR description, but please consider adding a description of what your PR does, screenshots, and the acceptance criteria (if known) to aid other devs who might be reviewing it. And THANK YOU!! <3
