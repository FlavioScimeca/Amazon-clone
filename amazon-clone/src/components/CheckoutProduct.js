import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '@/slices/basketSlice';

const CheckoutProduct = ({ product }) => {
  const { id, title, price, description, category, image, rating, hasPrime } =
    product;

  const { format } = new Intl.NumberFormat('de-DE', {
    currency: 'EUR',
    style: 'currency',
  });

  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const item = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
    };
    dispatch(addItemToBasket({ payload: item }));
  };
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="grid grid-cols-5">
      <Image
        alt={title}
        src={image}
        width={200}
        height={200}
        style={{ objectFit: 'contain' }}
      />
      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex items-center space-x-2">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <p>{format(price)}</p>
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">Free Next-day Delivery</p>
          </div>
        )}
      </div>
      {/* Right add/remove buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <div className="button text-center">Add to Basket</div>
        <div
          onClick={() => removeItemFromBasket()}
          className="button text-center"
        >
          Remove frome Basket
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
