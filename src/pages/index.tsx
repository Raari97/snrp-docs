import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

function generateStars(count: number, width: number, height: number) {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    stars.push(`${x}px ${y}px #FFF`);
  }
  return stars.join(', ');
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  
  useEffect(() => {
    const root = document.documentElement;
    const width = window.innerWidth * 2;
    const height = window.innerHeight * 2;
    root.style.setProperty('--stars-small', generateStars(1000, width, height));  // increased from 700
    root.style.setProperty('--stars-medium', generateStars(300, width, height));  // increased from 200
    root.style.setProperty('--stars-big', generateStars(150, width, height));     // increased from 100
    root.style.setProperty('--stars-height', `${height}px`);
  }, []);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <img src={useBaseUrl('/img/Supernova-Grain.png')} alt="Supernova RP" />
        </Heading>
        
        <div className={styles.buttons}>
          <Link
            className="button button--modern button--lg"
            to="https://cfx.re/join/4793k5">
            Play now
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={``}
      description="">
      <main>
        <HomepageHeader />
      </main>
      <footer></footer>
    </Layout>
  );
}
