import React from 'react';
import { RoughNotation } from 'react-rough-notation';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Home`}
      description="We make cool things that change the world.">
      <div className={styles.hero}>
        <div>
          <h1>We make cool things that <RoughNotation type="underline" padding={13} animate={false} strokeWidth={5} show={true}><b>change the world</b></RoughNotation>.</h1>
          <div style={{ flexWrap: 'wrap', display: 'flex', justifyContent: 'center' }}>
            <img className={styles.card} style={{ boxShadow: '0 0 40px #009b3a' }} src="https://github.com/greenlight-solutions.png" alt="Greenlight AI Logo" />
            <img className={styles.card} style={{ boxShadow: '0 0 40px #00a1de' }} src="https://images.unsplash.com/photo-1661961110671-77b71b929d52" alt="Operator Logo" />
            <img className={styles.card} style={{ boxShadow: '0 0 40px #522398' }} src="https://images.unsplash.com/photo-1444464666168-49d633b86797" alt="Parakeet Logo" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
