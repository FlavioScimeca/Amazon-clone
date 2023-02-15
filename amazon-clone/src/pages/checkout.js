import CheckoutProduct from '@/components/CheckoutProduct';
import Header from '@/components/Header';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '../slices/basketSlice';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC);

const Checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post('/api/create-payment-intent', {
      items: items,
      email: session.user.email,
    });

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  /* format */
  const { format } = new Intl.NumberFormat('de-DE', {
    currency: 'EUR',
    style: 'currency',
  });
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-xl mx-auto">
        {/* Left */}
        <div className="w-fit p-5">
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
        {items.length > 0 && (
          <div className="flex flex-col bg-white p-10 shadow-md">
            <>
              <h3>
                SubTotal ({items.length} items):{' '}
                <span className="font-bold">{format(total)}</span>
              </h3>
              <button
                role="link"
                onClick={createCheckoutSession}
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'
                }`}
              >
                {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
              </button>
            </>
          </div>
        )}
      </main>
    </div>
  );
};

export default Checkout;
