import React from 'react'
import './OnSaleHeader.scss'

function OnSaleHeader() {
  return (
    <div className="onSaleHeader">
      <div className="onSaleHeader__release">
        Release
          </div>
      <div className="onSaleHeader__manufacturer">
        Manufacturer
          </div>
      <div className="onSaleHeader__model">
        Model
          </div>
      <div className="onSaleHeader__hash">
        Hash
          </div>
      <div className="onSaleHeader__algorithm">
        Algorithm
          </div>
      <div className="onSaleHeader__efficiency">
        Efficiency
          </div>
      <div className="onSaleHeader__profit">
        Profit
          </div>
      <div className="onSaleHeader__price">
        Price
          </div>
    </div>
  )
}

export default OnSaleHeader
