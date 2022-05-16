import React from 'react';
import style from './CartItem.module.css';
import thumbnail1 from '../../images/image-product-1-thumbnail.jpg';
import trash from '../../images/icon-delete.svg';
import { useGlobalContext } from '../../Context';

export default function CartItem() {
  const {counting, setCounting, setIsItem} = useGlobalContext()

  const clickDeleteItem = () => {
    setIsItem(false)
    setCounting(0)
  }

  return (
    <div className={style.main}>
    <img src={thumbnail1} alt="Product" />
    <div className={style.description}>
        <p>Fall Limited Edition Sneakers</p>
        <div className={style.prices}>
            <div className={style.price}>
                <p>{`$125.00 x ${counting}`} <span className={style.total}>{`$${counting*125}`}</span></p>
            </div>
        </div>
    </div>
    <img src={trash} alt="Trashcan" onClick={clickDeleteItem} className={style.trash}/>
    </div>

  )
}
