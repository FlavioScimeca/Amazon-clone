import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket } from '@/slices/basketSlice';

const MAX_RATING = 5;
const MIN_RATNG = 1;

const Product = ({ product }) => {
  const { id, title, price, description, category, image } = product;
  const [rating, setRating] = useState();
  const [hasPrime, setHasPrime] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATNG + 1)) + MIN_RATNG
    );
    // Math.random() genera un numero compreso tra 0 e 1
    setHasPrime(Math.random() < 0.5);
  }, [product]);

  const { format } = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  });

  const addItemToBasket = () => {
    const item = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
      rating,
    };
    dispatch(addToBasket(item));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <div className="flex justify-center h-[200px]">
        <Image
          alt={title}
          src={image}
          height={200}
          width={200}
          style={{ objectFit: 'contain' }}
        />
      </div>

      <h4>{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, index) => (
            <StarIcon key={index} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <p>{format(price)}</p>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-1">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">Free Next-day Delivery</p>
        </div>
      )}

      <button onClick={() => addItemToBasket()} className="mt-auto button">
        Add to basket
      </button>
    </div>
  );
};

export default Product;
