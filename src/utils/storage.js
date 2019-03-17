const Storage = {
  set(key, value) {
    if (null === value) {
      return this.remove()
    }

    window.localStorage.setItem(key, value)
  },

  get(key) {
    return window.localStorage.getItem(key)
  },

  remove(key) {
    window.localStorage.removeItem(key)
  }
}

export default Storage
