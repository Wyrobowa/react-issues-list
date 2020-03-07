# React Issues List

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a frontend part of App. Backend is build in Node.js. Project uses MongoDB database. Local backend host by default is [http://localhost:3001](http://localhost:3001).

It is an issue tracker. It shows a list of all issues that are added in a db. Every issue contains title, description and state (open, pending and closed). Issues with `open` state can be changed to `pending` or `closed` state. Issues with `pending` state can be only changed to `closed` state. `Closed` issues state can't be changed.

There is also prepared form to add new issues: [http://localhost:3000/add](http://localhost:3000/add).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Currently there are no tests added in the project but JEST test are prepared to be added.

Example: test files for `App.js` is `App.test.js`.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## What could be added?

1. Tests - e.g. [JEST](https://jestjs.io/)
2. Form validation
3. Displaying errors for user
