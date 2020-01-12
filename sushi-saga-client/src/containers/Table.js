import React, { Fragment } from 'react'

const Table = ({ budget, tableSushi }) => {
  // map through tableSushi, reduce prices into a total, decrement budget by accumulated prices
  const bill = (eatenSushiArr) => (
    eatenSushiArr.reduce((total, sushi) => (total += sushi.price), 0)
  )

  const renderPlates = (array) => {
    return array.map((sushi, index) => {
      return <div key={sushi.id} className="empty-plate" style={{ top: -7 * index }} />
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${budget - bill(tableSushi)} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(tableSushi)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table