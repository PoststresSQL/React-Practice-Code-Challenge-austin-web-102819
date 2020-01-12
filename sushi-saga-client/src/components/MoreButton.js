import React from 'react'

const MoreButton = ({ updaters: { setStartIndex, setEndIndex }, indices: { startIndex, endIndex } }) => {
  return (
    <button onClick={() => {
      setStartIndex(startIndex + 4)
      setEndIndex(endIndex + 4)
    }}>
      More sushi!
    </button>
  )
}

export default MoreButton