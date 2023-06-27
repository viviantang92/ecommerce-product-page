import React from 'react';
import Button from '../Button/Button';
import Counter from '../Counter/Counter';
import style from './Content.module.css';
import { useGlobalContext } from '../../Context';


export default function Content() {
  const {counting, setIsItem} = useGlobalContext()

  const clickAddItem = () => {
    if (counting !== 0) {
      setIsItem(true)
    }
  }

  return (
    <section className={style.content}>
      <p className={style.company}>Sneaker Company</p>

      <h1>Fall Limited Edition Sneakers</h1>

      <p className={style.description}>
        These low-profile sneakers are your perfect casual wear companion. Featuring a
        durable rubber outer sole, they’ll withstand everything the weather can offer.
      </p>

      <div className={style.prices}>
          <div className={style.current}>
              <h2>$125.00</h2>
              <p>50%</p>
          </div>
          <div className={style.before}>
              <del>$250.00</del>
          </div>
      </div>

      <div className={style.counterCart}>
        <Counter />
        <Button title='Add to cart' onClick={clickAddItem}/>
      </div>

    </section>
  )
}
