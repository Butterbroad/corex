import React, { useEffect, useState } from 'react'
import './OnSale.scss'
import OnSaleItem from './OnSaleItem/OnSaleItem'
import OnSaleHeader from './OnSaleHeader/OnSaleHeader'
import { useSelector, useDispatch } from 'react-redux'
import { getProductsAsync } from '../../Store/actions/products'
import Loader from '../Loader/Loader'
import OnSaleItemMob from './OnSaleItemMob/OnSaleItemMob'
import itemImg from '../../assets/img/itemMob.png'
import itemImg1 from '../../assets/img/itemMob1.png'

function OnSale() {
  const mobImg = [itemImg, itemImg1]

  const [isMobile, setIsmobile] = useState(false);

  useEffect(() => {

    const resize = () => {

      setIsmobile(window.innerWidth < 1023);

    };

    window.addEventListener("resize", resize);

    resize();

    return () => window.removeEventListener('resize', resize);

  }, []);

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
        {
          isMobile ?
            <>
              {loading ? <Loader />
                : item.map((item, index) => (
                  <OnSaleItemMob key={index} info={item} />
                ))}
            </>
            :
            <>
              <OnSaleHeader />

              {loading ? <Loader />
                : item.map((item, index) => (
                  <OnSaleItem key={index} info={item} />
                ))}
            </>
        }
      </div>
    </div>
  )
}

export default OnSale
