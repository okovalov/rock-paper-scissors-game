const Url = {
  compose(path, data) {
    if (!data) {
      return path
    }
    Object.keys(data).forEach(
      key => (path = path.replace(':' + key, data[key]))
    )

    return path
  },

  params(data) {
    return Object.keys(data)
      .map(key => `${key}=${data[key]}`)
      .join('&')
  }
}

export default Url
