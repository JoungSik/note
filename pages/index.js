import Head from 'next/head'

import Header from "../components/organisms/header/header";
import AboutContainer from "../components/organisms/container/about";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Note</title>
        <meta name="description" content="아이디어를 메모하고 실현하는 곳" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AboutContainer />
    </div>
  )
}
