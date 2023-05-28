import React from 'react';
import Image from 'next/image';
import Box from './Box';
import IntroSection from './IntroSection';

type Product = {
  title: string,
  description: string,
  image: string,
  ltr?: boolean | true
};

const defaults: Product[] = [
  {
    title: "ChatGPT Pro",
    description: `ChatGPT Pro is a cutting-edge AI tool that can carry out human-like text conversations. It's perfect for customer service, answering queries, and even for personal use as a virtual assistant.`,
    image: "/logo.png",
  },
  {
    title: "ChatGPT Pro",
    description: `ChatGPT Pro is a cutting-edge AI tool that can carry out human-like text conversations. It's perfect for customer service, answering queries, and even for personal use as a virtual assistant.`,
    image: "/logo.png",
    ltr: false
  },
  {
    title: "ChatGPT Pro",
    description: `ChatGPT Pro is a cutting-edge AI tool that can carry out human-like text conversations. It's perfect for customer service, answering queries, and even for personal use as a virtual assistant.`,
    image: "/logo.png",
  },
  // Add more products here
];

const UserProfile = () => {
  return (
    <Box>
      <a className="px-2 sm:px-4 py-1 sm:py-2 text-lg sm:text-xl font-bold text-black mr-4 hover:underline decoration-orange-500 decoration-4" href="/profile">Profile</a>
      <a className="px-2 sm:px-4 py-1 sm:py-2 text-lg sm:text-xl font-bold text-black mr-4 hover:underline decoration-orange-500 decoration-4" href="/settings">Settings</a>
      <a className="px-2 sm:px-4 py-1 sm:py-2 text-lg sm:text-xl font-bold text-black mr-4 hover:underline decoration-orange-500 decoration-4" href="/logout">Log out</a>
    </Box>
  );
};


const ProductDisplay = ({ product }: { product: Product }) => {
  return product.ltr == false || product.ltr != undefined ? (
    <div className="flex flex-row items-start justify-between p-6 bg-transparent rounded shadow-lg border-2 border-white">
      <div>
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p>{product.description}</p>
      </div>
      <div className="flex h-full md:w-400 md:h-400">
        <Image src={product.image} alt={product.title} width={400} height={400} />
      </div>
    </div>
  ) : (
    <div className="flex flex-row-reverse items-start justify-between p-6 bg-transparent rounded shadow-lg border-2 border-white">
      <div>
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p>{product.description}</p>
      </div>
      <div className="flex h-full md:w-400 md:h-400">
        <Image src={product.image} alt={product.title} width={400} height={400} />
      </div>
    </div>
  );
};

const ProductSection = ({ products = defaults }: { products?: Product[] }) => {
  return (
    <section className="flex flex-col gap-10 p-10">
      <IntroSection />
      {products.map((product) => (
        <ProductDisplay key={product.title} product={product} />
      ))}
    </section>
  );
};

export default ProductSection;