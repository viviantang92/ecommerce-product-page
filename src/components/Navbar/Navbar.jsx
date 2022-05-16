import React from 'react';
import style from './Navbar.module.css'
import Logo from '../../images/logo.svg';
import Cart from '../../images/icon-cart.svg';
import Avatar from '../../images/image-avatar.png';
import MenuOpen from '../../images/icon-menu.svg';
import MenuClose from '../../images/icon-close.svg';
import { useGlobalContext } from '../../Context';
import Navlist from '../Navlist/Navlist';

export default function Navbar() {

  const {counting, isCart, setIsCart, isItem, isMenuOpen, setIsMenuOpen} = useGlobalContext()

  const clickCart = () => {
	  setIsCart(!isCart)
  }

  return (
    <nav>
        <div className={style.nav}>
			<img src={isMenuOpen ? MenuClose : MenuOpen} alt='Menu' className={style.menu} onClick={() => setIsMenuOpen(!isMenuOpen)}/>
			<img src={Logo} alt='Sneakers Logo' className={style.logo} />
			{/* <ul className={`${style.links} ${isMenuOpen ? style.sidebar : ''}`}>
				<li> Collections</li>
				<li> Men</li>
				<li> Women</li>
				<li> About</li>
			</ul> */}
				<Navlist />
		</div>
		<div className={style.user}>
			<div className={style.cartCount}>
				<span className={counting === 0 ? style.close : style.span}>{isItem ? counting:''}</span>
				{/* <i className={`fa-solid fa-cart-shopping ${style.cart}`} onClick={clickCart}></i> */}
				<img src={Cart} alt='Cart' onClick={clickCart} className={style.cart}/>
			</div>
			<div><img src={Avatar} alt="User" className={style.userImage}/></div>
		</div>
    </nav>
  )
}
