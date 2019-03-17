import * as Locales from '../i18n'
import Storage from './storage'
import { LOCALE_KEY, DEFAULT_LOCALE } from '../configs/common'

let _translations = {}

const Locale = {
  init(lang = null) {
    let _locale = Storage.get(LOCALE_KEY) || DEFAULT_LOCALE

    if (lang && lang in Locales) {
      _locale = lang
    }

    Storage.set(LOCALE_KEY, _locale)
    _translations = Locales[_locale]
  },

  trans(key, data) {
    if (_translations[key]) {
      let translation = _translations[key]

      data &&
        Object.keys(data).forEach(key => {
          translation = translation.replace(':' + key, data[key])
        })

      return translation
    }

    return key
  }
}

export default Locale
