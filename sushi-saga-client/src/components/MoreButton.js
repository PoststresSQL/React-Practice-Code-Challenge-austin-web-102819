import React from 'react'

const MoreButton = ({ indices: { startIndex, endIndex }, sushiArrLength, updaters: { setStartIndex, setEndIndex } }) => {
  return (
    <button onClick={() => {
      if (endIndex < sushiArrLength) {
        setStartIndex(startIndex + 4)
        setEndIndex(endIndex + 4)
      } else {
        setStartIndex(0)
        setEndIndex(4)
      }
    }}>
      More sushi!
    </button>
  )
}

export default MoreButton