import IndexPageContent from '../components/indexPageContent';
import Head from 'next/head';

export default function Home() {
  return (
      <>  
          <Head>
            <title>Homepage</title>            
          </Head>
          <IndexPageContent />
      </>
  )
}
