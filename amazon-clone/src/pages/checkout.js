import Header from '@/components/Header';
import Image from 'next/image';
import React from 'react';

const Checkout = () => {
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
            <h1>Your shopping Basket</h1>
          </div>
        </div>
        {/* Right */}
        <div></div>
      </main>
    </div>
  );
};

export default Checkout;
