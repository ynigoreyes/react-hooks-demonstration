import { useState } from 'react';

const useCountState = () => {
  const state = useState(0)
  return state
}

export default useCountState
