import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import ProductFeed from '@/components/ProductFeed';
import { getSession } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ products }) {
  // console.log(products);
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon | clone</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      <main className="max-w-screen-xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* ProductFeed */}
        <div>
          <ProductFeed products={products} />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession();
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  );

  return {
    props: {
      products,
      session,
    },
  };
}
