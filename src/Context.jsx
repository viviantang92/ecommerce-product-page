import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)

export default function Context({children}) {

  const [activeProduct, setActiveProduct] = useState(0);
  const [isLightbox, setIsLightbox] = useState(false);
  const [counting, setCounting] = useState(0)
  const [isCart, setIsCart] = useState(false)
  const [isItem, setIsItem] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const clickActive = (index) => {
    setActiveProduct(index)
  }
  const clickLightbox = () => {
    setIsLightbox(!isLightbox)
  }
  

  


  const contextValue = {
    activeProduct,
    setActiveProduct,
    clickActive,
    isLightbox,
    setIsLightbox,
    clickLightbox,
    counting,
    setCounting,
    isCart,
    setIsCart,
    isItem,
    setIsItem,
    isMenuOpen,
    setIsMenuOpen
  }
  return (
    <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>
  )
}
