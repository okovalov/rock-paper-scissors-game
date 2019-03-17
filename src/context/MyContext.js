import React from 'react'

export const MyContext = React.createContext({ a: 123, b: 'yours' })

export const MyProvider = MyContext.Provider
export const MyConsumer = MyContext.Consumer
