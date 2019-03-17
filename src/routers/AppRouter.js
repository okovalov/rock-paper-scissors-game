import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from '../components/presentation/layout/Main'
import HomePage from '../components/presentation/pages/HomePage'
import NotFoundPage from '../components/presentation/pages/NotFoundPage'
import ExampleCommentsPage from '../components/presentation/pages/ExampleCommentsPage'
import { ExtendedRoute } from '../components/common/ExtendedRoute'

const AppRouter = props => (
  <BrowserRouter>
    <Main>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <ExtendedRoute
          path="/comments/"
          exact
          component={ExampleCommentsPage}
          authenticated={true}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </Main>
  </BrowserRouter>
)

export default AppRouter
