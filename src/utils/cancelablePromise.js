const makeCancelable = (promise, name = 'default promise name') => {
  let hasCanceled_ = false

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(val =>
      hasCanceled_ ? reject({ isCanceled: true }) : resolve(val)
    )
    promise.catch(error =>
      hasCanceled_ ? reject({ isCanceled: true }) : reject(error)
    )
  })

  return {
    promise: wrappedPromise,
    cancel() {
      console.log('cancelling... ', name)
      hasCanceled_ = true
    }
  }
}

const getCancelable = (resolver, name) => {
  return makeCancelable(
    new Promise(resolve => {
      resolve(resolver)
    }),
    name
  )
}

export { makeCancelable, getCancelable }
