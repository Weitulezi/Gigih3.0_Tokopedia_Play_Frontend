import React from 'react'
import { useEffect } from 'react'

const useRedirectLoggedInUser = (authData, history) => {
  useEffect(() => {
    if (authData) {
        if (authData.token) {
            history.push(`/`)
        }
    }
  }, [authData])
}

export default useRedirectLoggedInUser