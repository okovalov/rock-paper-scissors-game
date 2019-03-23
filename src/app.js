import React from 'react'
import ReactDOM from 'react-dom'

import { createBrowserHistory } from 'history'
import configureStore from './store/configureStore'

import 'normalize.css/normalize.css'
import Locale from './utils/locale'
import './styles/styles.scss'

import Root from './components/Root'

Locale.init('en')

const history = createBrowserHistory()
const store = configureStore(history)

/** Run application **/
ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('app')
)
