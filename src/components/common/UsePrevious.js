import { useRef, useEffect } from 'react'

export default function UsePrevious(value) {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  })

  return ref.current
}