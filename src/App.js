import React, { Component } from 'react'
import NavBar from './navbar/NavBar'
import { MuiThemeProvider } from 'material-ui/styles'
import Search from './search/Search'

export class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <NavBar />
          <Search />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
