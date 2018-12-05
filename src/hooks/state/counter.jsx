import { useState } from 'react'

function useCountState(initState = 0) {
  const state = useState(initState)
  return state
}

export default useCountState

