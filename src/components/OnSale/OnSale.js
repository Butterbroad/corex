import React, { useEffect } from 'react'
import './OnSale.scss'
import OnSaleItem from './OnSaleItem/OnSaleItem'
import OnSaleHeader from './OnSaleHeader/OnSaleHeader'
import { useSelector, useDispatch } from 'react-redux'
import { getProductsAsync } from '../../Store/actions/products'
import Loader from '../Loader/Loader'

function OnSale() {
  const dispatch = useDispatch();

  const item = useSelector(store => store.products.allProducts)
  const loading = useSelector(store => store.loader.show)

  useEffect(() => {
    dispatch(getProductsAsync())
  }, [])
  return (
    <div className="onSale">
      <div className="onSale__title">
        ON SALE
        </div>
      <div className="onSale__wrapper">

        <OnSaleHeader />

        {loading ? <Loader />
          : item.map((item, index) => (
            <OnSaleItem key={index} info={item} />
          ))}

      </div>
    </div>
  )
}

export default OnSale
