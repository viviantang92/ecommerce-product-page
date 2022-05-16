import React from 'react';
import style from './Lightbox.module.css';

import product1 from '../../images/image-product-1.jpg';
import product2 from '../../images/image-product-2.jpg';
import product3 from '../../images/image-product-3.jpg';
import product4 from '../../images/image-product-4.jpg';
import thumbnail1 from '../../images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../../images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../../images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../../images/image-product-4-thumbnail.jpg';
import previous from '../../images/icon-previous.svg';
import next from '../../images/icon-next.svg';
import close from '../../images/icon-close.svg';
import { useGlobalContext } from '../../Context';


export default function Lightbox() {
  const products = [product1,product2,product3,product4];
  const thumbnails = [thumbnail1,thumbnail2,thumbnail3,thumbnail4];
  
  const {activeProduct, setActiveProduct, clickActive, isLightbox, clickLightbox} = useGlobalContext()


  const clickNext = () => {
    if (activeProduct === products.length - 1) {
      setActiveProduct(0);
    } else {
      setActiveProduct(activeProduct + 1)
  }}
  const clickPrev = () => {
    if (activeProduct === 0) {
      setActiveProduct(products.length - 1);
    } else {
      setActiveProduct(activeProduct - 1)
  }}


  return (
    <section className={isLightbox ? style.lightbox : style.lightboxClose}>
        <div className={style.lightboxs}>
        <img src={close} alt="Close X" className={style.close} onClick={clickLightbox}/>
        <img src={products[activeProduct]} alt="Product" className={style.product} />
          <div className={style.arrows}>
              <img src={previous} alt="Arrow" onClick={clickPrev}/>
              <img src={next} alt="Arrow" onClick={clickNext}/>
          </div>
        </div>
        <div className={style.thumbnails}>
          {thumbnails.map((thumb, index) => (
              <img src={thumb} alt="Product" key={index} onClick={() => clickActive(index)} className={index === activeProduct ? `${style.thumbnail} ${style.active}` : style.thumbnail}/>
          ))}
        </div>
    </section>
  )
}
