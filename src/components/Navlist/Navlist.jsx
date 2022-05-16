import React from 'react';
import { useGlobalContext } from '../../Context';
import style from './Navlist.module.css'


export default function Navlist() {
  const {isMenuOpen} = useGlobalContext()
  return (
    <div className={isMenuOpen ? style.darkBg : ''}>
        <ul className={`${style.links} ${isMenuOpen ? style.sidebar : ''}`}>
            <li className={style.link}> Collections</li>
            <li className={style.link}> Men</li>
            <li className={style.link}> Women</li>
            <li className={style.link}> About</li>
        </ul>
    </div>
  )
}
