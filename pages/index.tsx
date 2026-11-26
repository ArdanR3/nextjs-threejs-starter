import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Scene = dynamic(() => import('../components/Scene'), { ssr: false });

const Home: NextPage = () => (
  <>
    <Head>
      <title>Next.js + Three.js Starter</title>
    </Head>
    <main style={{ width: '100vw', height: '100vh' }}>
      <Scene />
    </main>
  </>
);

export default Home;