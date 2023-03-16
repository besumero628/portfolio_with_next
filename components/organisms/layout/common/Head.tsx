import type { NextPage } from 'next';

import Head from 'next/head'

type Props = {

}

export const HeadInfo: NextPage<Props> = function HeadInfo(props) {
  return (
    <>
      <Head >
        <title>NARA SHUHEI -PORTFOLIO-</title>
        <meta property="og:image" content="ogp.png"/>
      </Head>
    </>
  )
}