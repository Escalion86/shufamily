import Head from 'next/head'
import TitleBlock from '@blocks/TitleBlock'

export default function Home(props) {
  return (
    <>
      <Head>
        <title>{`История любви семьи Шу`}</title>
        <meta name="description" content="История любви семьи Шу" />
      </Head>
      <div className="relative">
        <div className="relative w-full bg-white">
          <TitleBlock />
        </div>
      </div>
    </>
  )
}
