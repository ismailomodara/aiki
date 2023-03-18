import Head from 'next/head';

type AiHeadMeta = {
  title: string,
  description: string
}

export const AiHead = (props: AiHeadMeta) => {
  const { title, description } = props

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
