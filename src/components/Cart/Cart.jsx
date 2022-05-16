import React from 'react';
import style from './Cart.module.css';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import { useGlobalContext } from '../../Context';

export default function Cart() {
  const {isItem, isCart} = useGlobalContext()

  return (
    <section className={isCart ? style.cart : style.close}>
      <div className={style.header}>
          <p>Cart</p>
      </div>
    {isItem ? 
    <>
      <CartItem/>
      <div className={style.footer}>
      <Button title='Checkout'/>
      </div> 
    </>
    : 
    <div className={style.empty}>
      <p>Your cart is empty</p>
    </div>}
    </section>
  )
}
