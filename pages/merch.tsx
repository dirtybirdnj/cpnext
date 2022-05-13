import React from 'react';
import Layout from '../components/Layout';

export const Merch = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Merch - Champlain Provisions',
      }}
    >
      <h1>Merch</h1>
      <p>
        Care for a shirt or a hat? Mabye a beer coozy? We have great designs and
        even better products to help you enjoy your next day on the water.
      </p>
    </Layout>
  );
};

export default Merch;
