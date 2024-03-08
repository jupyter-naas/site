import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <div className={styles.heroBanner}>
        {/* <div className="container"> */}
        <h1 className={styles.title}>️ 📗 Welcome to the Naas Docs</h1>
        <p className={clsx(styles.tagline, styles.textCenter)}>Discover the power of Naas, unlock the potential of data & AI products in your daily operations. Whether you're a data or a business professional, Naas offers an open and customizable way to put your data to work.</p>
        <div className={styles.buttonContainer}>
          <a
            className={styles.cta}
            href="/platform/introduction"
          >
            Learn more
          </a>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Naas Docs`}
      description="The open alternative to ChatGPT you can truly customize to your needs">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}

import React from 'react';
import  { Redirect } from 'react-router-dom';

// export default function Home() {
//   return <Redirect to='/platform/introduction' />;
// }