import { useEffect } from 'react'

function useTitleEffect(title) {
  return useEffect(() => {
    document.title = `Current Count: ${title}`
    console.log('use effect')
    return () => {
      console.log('no longer using effect')
    }
  })
}

export default useTitleEffect
