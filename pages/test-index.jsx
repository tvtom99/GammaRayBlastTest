import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../components/landing/Navbar';
import Content from '../components/landing/Content';
import Layout from '../components/layout';
import Background from '../components/landing/Background';

export default function Home( {allPostsData}) {
    /*useEffect(() =>
    {
        document.body.classList.add("backgroundImages");
        document.body.classList.add("content");
    });*/
    
    return(
        <Layout>
            <Head>
                {/* This is the font used on the website for everything */}
                <link href='https://fonts.googleapis.com/css?family=Poppins:wght@400;500;600;700;800;900' rel='stylesheet'></link>
            </Head>


            <Background />

            {/* The navbar is a JS object that handles page naviagation and provides subtle visual feedback on 
                what page is currently being visited. It doesn't need anything in it as it is already finalised */}
            <Navbar />

            <Content />
        </Layout>
    );
}