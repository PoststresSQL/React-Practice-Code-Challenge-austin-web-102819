import React, { Fragment, useState } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = ({ addToTableSushi, budget, sushiArr, tableSushi }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);
  const sushiArrLength = sushiArr.length // 100

  return (
    <Fragment>
      <div className="belt">
        {
          // map through all the sushi, assign a property to each individual sushi
          sushiArr
            .slice(startIndex, endIndex)
            .map((sushi) => (
              <Sushi
                addToTableSushi={addToTableSushi}
                budget={budget}
                key={`${sushi.id}-${sushi.name}`}
                sushi={sushi}
                sushiArr={sushiArr}
                tableSushi={tableSushi}
              />
            ))
        }
        <MoreButton
          indices={{ startIndex, endIndex }}
          sushiArrLength={sushiArrLength}
          updaters={{ setStartIndex, setEndIndex }}
        />
      </div>
    </Fragment>
  )
}

export default SushiContainer