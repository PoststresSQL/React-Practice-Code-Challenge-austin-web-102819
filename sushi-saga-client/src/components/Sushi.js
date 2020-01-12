import React, { useState } from 'react'

const Sushi = ({
  addToTableSushi,
  budget,
  sushi,
  sushi: {
    img_url,
    name,
    price,
  },
  tableSushi
}) => {
  const [eaten, setEaten] = useState(false)
  const totalCost = tableSushi.reduce((total, sushi) => (total += sushi.price), 0)


  return (
    <div className="sushi">
      <div className="plate"
        onClick={() => {
          if (budget > (totalCost + price)) {
            setEaten(true)
            addToTableSushi(sushi)
          } else {
            alert('broke ass nigga alert')
          }
        }}>
        {
          eaten
            ? null
            : <img src={img_url} width="100%" alt={name} />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi