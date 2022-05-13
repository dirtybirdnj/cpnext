import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout';

export const Index = (): JSX.Element => {
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-3">
        <div>
          <h2>Hard Baits</h2>
          <Image
            src="/images/homepage/fire-tiger-bass-hardbait.jpeg"
            alt="Fire Tiger Largemouth Bass"
            width="300"
            height="400"
          />
          <Link href="hard-baits" passHref>
            <p>View Hard Baits</p>
          </Link>
        </div>

        <div>
          <h2>Soft Plastics</h2>
          <Image
            src="/images/homepage/walleye-plastic.jpeg"
            alt="Walleye loves Chartruse, at least this one did."
            width="300"
            height="400"
          />
          <Link href="hard-baits" passHref>
            <p>View Soft Plastics</p>
          </Link>
        </div>

        <div>
          <h2>Merch</h2>
          <Image
            src="/images/homepage/shirt-merch.png"
            alt="For the fisherman who has every bait, soft and hard goods to enhance any fishing experience."
            width="300"
            height="400"
          />
          <Link href="hard-baits" passHref>
            <p>View Soft Plastics</p>
          </Link>
        </div>
      </div>

      <Link href="/hard-baits" passHref>
        <span className="inline-block px-7 py-3 rounded-md text-white dark:text-white bg-blue-600 hover:bg-blue-700 hover:text-white dark:hover:text-white">
          Order Today!
        </span>
      </Link>
    </Layout>
  );
};

export default Index;
