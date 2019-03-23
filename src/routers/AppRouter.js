import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from '../components/presentation/layout/Main'
import HomePage from '../components/presentation/pages/HomePage'
import NotFoundPage from '../components/presentation/pages/NotFoundPage'
import ExampleCommentsPageDefault from '../components/presentation/pages/ExampleCommentsPage'
import GamePageDefault from '../components/presentation/pages/GamePage'
import ContactUsPageDefault from '../components/presentation/pages/ContactUsPage'
import { ExtendedRoute } from '../components/common/ExtendedRoute'

const AppRouter = props => (
  <BrowserRouter>
    <Main>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <ExtendedRoute
          path="/game/"
          exact={true}
          component={GamePageDefault}
          authenticated={true}
        />
        <ExtendedRoute
          path="/contact-us/"
          exact={true}
          component={ContactUsPageDefault}
          authenticated={true}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </Main>
  </BrowserRouter>
)

export default AppRouter
