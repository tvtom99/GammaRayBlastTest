import Image from 'next/image';
import Head from 'next/head';
import { Html } from 'next/document';
import Layout from '../components/layout';
import Body from '../components/landing/Body';
import Navbar from '../components/landing/Navbar';


export default function Home({ allPostsData }) {
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
  
        <div class="logo">
            <div id="logo_circle">
                <Image
                    id = "logo"
                    src = "/images/logo.png"
                    height = {350}    
                    width = {350}>
                </Image>
            </div>
    
            <div id="logo_title" class="element">
                <div id="logo_title_start">PANRADIO</div>
                <div id="logo_title_end">GRB</div>
            </div>
        </div>
  
        <div id="background_fade"></div>
  
        <div class="about_us">
            <div id="about_us_title">ABOUT US</div>
            <Body text="Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now."/>
        </div>
        

        <Navbar />
    </Layout>
  );
}