'use client'
import React from 'react'

type Props = {
  error: Error
  reset: () => void
}

const ErrorBoundary = ({ error, reset }: Props) => {
  return (
    <div>
      {error.message} <button onClick={reset}>Try again</button>
    </div>
  )
}

export default ErrorBoundary
