import Head from "next/head";

import MainTemplate from "../components/templates/main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Note</title>
        <meta name="description" content="아이디어를 메모하고 실현하는 곳" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainTemplate />
    </div>
  )
}
