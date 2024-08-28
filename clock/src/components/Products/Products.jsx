import React, { useState } from 'react';
import './Products.css';
import A from '../../assets/1.jpg';
import B from '../../assets/2.jpg';
import C from '../../assets/3.jpg';
import D from '../../assets/4.jpg';
import E from '../../assets/5.jpg';
import F from '../../assets/6.jpg';
import G from '../../assets/back.jpg'
import H from '../../assets/forward.jpg'

const Products = () => {
  const [startIndex, setStartIndex] = useState(0);
  const images = [A, B, C, D, E, F];

  const nextSlide = () => {
    setStartIndex(prevIndex => Math.min(prevIndex + 3, images.length - 3));
  };

  const prevSlide = () => {
    setStartIndex(prevIndex => Math.max(0, prevIndex - 3));
  };

  return (
    <div className='products'>
          <div className="page">
      <h1 className="heading">PRODUCTS</h1>
      <p className="sub-heading">Elegant Pieces</p>
      <div className="product">
        <button className="nav-button prev" onClick={prevSlide}><img src={G}/></button>
        <div className="slider">
          {images.slice(startIndex, startIndex + 3).map((image, index) => (
            <img key={index} src={image} alt={`Slide ${startIndex + index}`} />
          ))}
        </div>
        <button className="nav-button next" onClick={nextSlide}><img src={H}/></button>
      </div>
    </div>
    </div>

  );
};

export default Products;
