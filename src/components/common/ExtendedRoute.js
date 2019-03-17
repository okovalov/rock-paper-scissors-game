import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { MyContext } from '../../context/MyContext'

const ExtendedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.authenticated === true ? (
        <Component {...props} {...rest} context={MyContext} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

export { ExtendedRoute }
