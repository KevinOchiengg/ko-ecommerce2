import React, { useState } from 'react';

const ProductImage = ({ images = [[]] }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <>
      <img src={images} alt='' id='product__img' />

      <div className='small__img__row'>
        {images.map((image, index) => {
          return (
            <div className='small__img__col'>
              <img
                src={image.url}
                alt=''
                key={index}
                className={`${image.url === main.url ? 'active' : null}`}
                onClick={() => setMain(images[index])}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductImage;
