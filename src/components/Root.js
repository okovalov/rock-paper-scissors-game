import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import AppRouter from '../routers/AppRouter'
import { MyContext } from '../context/MyContext'

const Root = ({ store }) => (
  <Provider store={store} context={MyContext}>
    <div>
      <AppRouter />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
