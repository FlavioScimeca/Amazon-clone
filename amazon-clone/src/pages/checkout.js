import CheckoutProduct from '@/components/CheckoutProduct';
import Header from '@/components/Header';
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

const Checkout = () => {
  const items = useSelector(selectItems);
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-xl mx-auto">
        {/* Left */}
        <div>
          <Image
            alt=""
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            style={{ objectFit: 'contain' }}
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0 ? 'Your Basket is empty' : 'Shopping Basket'}
            </h1>
          </div>
          {/* checkout Products */}
          <div>
            {items.map((product, i) => (
              <CheckoutProduct key={i} product={product} />
            ))}
          </div>
        </div>
        {/* Right */}
        <div></div>
      </main>
    </div>
  );
};

export default Checkout;
