import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';

export const Index = (): JSX.Element => {
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-3">
        <div>01</div>

        <div>09</div>
        <div>20</div>
      </div>

      <h2>Home Page</h2>
      <p>Next.js starter for your next blog or personal site. Built with:</p>
      <ul className="list-disc pl-4 my-6">
        <li>Next.js</li>
        <li className="mt-2">Typescript</li>
        <li className="mt-2">MDX</li>
        <li className="mt-2">Tailwind CSS</li>
      </ul>

      <Link href="/hard-baits" passHref>
        <span className="inline-block px-7 py-3 rounded-md text-white dark:text-white bg-blue-600 hover:bg-blue-700 hover:text-white dark:hover:text-white">
          Order Today!
        </span>
      </Link>
    </Layout>
  );
};

export default Index;
