import React from 'react'
import Locale from '../../../utils/locale'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>{Locale.trans('HEADER_TITLE')}</h1>
    <ul>
      <li>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/comments">Example of comments</Link>
        </p>
      </li>
    </ul>
  </header>
)

export default Header
