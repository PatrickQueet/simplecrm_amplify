/* src/App.js */
import React, { Component, useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import Routes from './routes'
import awsExports from "./aws-exports";
import './App.css';
import 'fontsource-roboto';

Amplify.configure(awsExports);

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#00599e'
    },
    primary: {
      main: '#94b91c'
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});


class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </div>
    );
  }
}

export default withAuthenticator(App)