import React from 'react'
import Locale from '../../../utils/locale'

const Footer = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <p>
        <strong>{Locale.trans('COMPANY_NAME')}</strong>&nbsp;by&nbsp;<a href="mailto:someone@yoursite.com?subject=Mail from The Game Site">Oleksandr Kovalov</a>.&nbsp;
        The source code is licensed&nbsp;<a href="http://opensource.org/licenses/mit-license.php">MIT</a>.&nbsp;
        The website content is licensed&nbsp;
        <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.&nbsp;
      </p>
    </div>
  </footer>
)

export default Footer
