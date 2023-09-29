import Image from 'next/image';
import Head from 'next/head';
import { Html } from 'next/document';
import Layout from '../../components/layout';
import Navbar from '../../components/landing/Navbar';
import { getSortedPostsData } from '../../lib/posts.js';
import utilStyles from '../_app.js';

export default function News({ allPostsData }) {
  return (
    <Layout>
        <Head>
            <link href='https://fonts.googleapis.com/css?family=Poppins:wght@400;500;600;700;800;900' rel='stylesheet'></link>
        </Head>

        
        <div id="background_images">
            <div class="photos">
                <img
                    src = "https://csiropedia.csiro.au/wp-content/uploads/2013/08/High_Resolution-1.jpg" 
                    id = "telescope"
                    alt = "telescope">
                </img>
            </div>
  
            <div class = "photos">
                <img
                    id = "galaxy"
                    src = "https://www.researchgate.net/profile/Bushra-Ahmed-17/publication/333882064/figure/fig1/AS:771630297018368@1560982407128/During-the-moonless-evenings-you-may-observe-the-Milky-Way-white-wide-line-along-the.jpg">
                </img>
            </div>
        </div>
  
        
  
        <div id="background_fade"></div>
  
        <div class="project_info">
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Posts</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                        {title}
                    <br />
                        {id}
                    <br />
                        {date}
                    </li>
                    ))}
                </ul>
            </section>
        </div>
        

        <Navbar/>
    </Layout>
  );
}

export async function getStaticProps() {
    const allPostsData=getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}