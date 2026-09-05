import React from 'react'

export const ErrorMessage = ({ error }) => {
  if (!error) return null;

  return (
    <div className="max-w-md mx-auto mt-4 px-4 py-3 rounded-lg bg-red-950 border border-red-700 text-red-200 text-center text-sm font-medium">
      {error}
    </div>
  )
}