import React from 'react';
import style from './Counter.module.css';
import Minus from '../../images/icon-minus.svg';
import Plus from '../../images/icon-plus.svg';
import { useGlobalContext } from '../../Context';

export default function Counter() {

  const {counting, setCounting} = useGlobalContext()

  const clickMinus = () => {
    if (counting > 0) {
        setCounting(counting -1)
    }
  }
  const clickPlus = () => {
    setCounting(counting +1)
  }

  return (
    <div className={style.counter}>
      <img src={Minus} alt="Minus" onClick={clickMinus} className={style.minus}/>
      <p className={style.number}>{counting}</p>
      <img src={Plus} alt="Plus" onClick={clickPlus} className={style.plus}/>
    </div>
  )
}
