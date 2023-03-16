import Head from "next/head";
import { FC } from "react";
import { MetaType } from "./type";

type Props = {
  meta: MetaType
}

export const CommonMeta: FC<Props> = function CommonMeta(props: Props) {
  const {meta} = props
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:image" content={meta.imageUrl} />
    </Head>
  )
}