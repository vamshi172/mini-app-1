import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Account from './components/Account'
import Popular from './components/Popular'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/account" component={Account} />
      <Route exact path="/popular" component={Popular} />
    </Switch>
  </BrowserRouter>
)

export default App
