import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <h1>Champlain Provisions</h1>
      <Link href="/">
        <a className="text-gray-900 dark:text-white pr-6 py-4">Home</a>
      </Link>
      <Link href="/hard-baits">
        <a className="text-gray-900 dark:text-white px-6 py-4">Hard Baits</a>
      </Link>
      <Link href="/soft-plastics">
        <a className="text-gray-900 dark:text-white px-6 py-4">Soft Plastics</a>
      </Link>
      <Link href="/merch">
        <a className="text-gray-900 dark:text-white px-6 py-4">Merch</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white px-6 py-4">About</a>
      </Link>
    </nav>
  );
};

export default Navigation;
