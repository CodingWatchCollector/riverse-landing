import Head from 'next/head'
// import Main from '../components/Main'

// Questions:
// header logo with link or not (main nav contains home link already)?
// header 'proposer un projet' button should be inside nav or not?

// TODO:
// escape chars (apostrophes)
// skip link
// update head
// import images
// use Link instead of a
// expand button functionality

export default function Home () {
  return (
    <>
      <Head>
        <title>Riverse IO</title>
        <meta name='description' content='Riverse IO landing page' />
      </Head>
      <div className='container'>{/* <Main /> */}</div>
    </>
  )
}
