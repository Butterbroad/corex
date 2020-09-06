import React, { useEffect, useState } from 'react'
import './OnSale.scss'
import OnSaleItem from './OnSaleItem/OnSaleItem'
import OnSaleHeader from './OnSaleHeader/OnSaleHeader'
import { useSelector, useDispatch } from 'react-redux'
import { getProductsAsync } from '../../Store/actions/products'
import Loader from '../Loader/Loader'
import OnSaleItemMob from './OnSaleItemMob/OnSaleItemMob'
import itemImg from '../../assets/img/itemMob.png'

function OnSale() {
  const dispatch = useDispatch();

  const item = useSelector(store => store.products.allProducts)
  const loading = useSelector(store => store.loader.show)

  const [isMobile, setIsmobile] = useState(false);

  useEffect(() => {

    dispatch(getProductsAsync());

    const resize = () => {

      setIsmobile(window.innerWidth < 1024);

    };

    window.addEventListener("resize", resize);

    resize();

    return () => window.removeEventListener('resize', resize);

  }, []);

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
                  <OnSaleItemMob key={index} info={item} img={itemImg} />
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
