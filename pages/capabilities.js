import Head from 'next/head';
import Header from './components/Header';
import Grow from './components/Grow';
import Footer from './components/Footer';
import Landing from './components/Capabilities/Landing';
export default function Home() {
    return (
        <div className="container-mcl">
            <Head>
                <title>Minutecode Labs | Home</title>
                <meta name="description" content="Best web development agency in USA, Canada and Europe" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <div className="relative -top-5 z-10">
                <Header></Header>
            </div>

            {/* Landing page */}
            <div>
                <Landing></Landing>
            </div>


            <div className='md:mx-36 flex flex-row mx-auto'>
                <div className='w-3/12'>
                    <p className='Inter-Regular text-f16 p-2 text-gray-700'>How we do it</p>
                </div>
                <div className='w-9/12 text-f50 Inter-Regular leading-f50 text-gray-700'>
                    <h1>We let creativity meet strategy to</h1>
                    <h1>solve problems</h1>
                </div>

            </div>

            {/* Designing */}
            <div>
                
            </div>

            {/* Development */}
            <div>

            </div>


            {/* Grow */}
            <div>
                <Grow></Grow>
            </div>
            {/* Footer */}
            <div>
                <Footer></Footer>
            </div>

        </div>
    )
}