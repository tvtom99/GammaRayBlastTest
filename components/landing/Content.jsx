import React from 'react';
import Body from './Body';
import Image from 'next/image';

function Content(props)
{
    return (
        /* This div holds the lower screen components (basically the content). */
        <div className = "content">
            <div id = "logo">
                <Image
                    src = "/images/logo.png"
                    height = {350}
                    width = {350}
                >
                </Image>
            </div>

            <div id = "aboutUs">
                <div id="title">ABOUT US</div>
                <Body text = "Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now. Hello I am Person Name, you can contact me on XXXXXXX or using my email example@emailprovider.com.au. My work involves doing things and other tasks, the rest of this is just filler so you can stop reading now."/>
            </div>
        </div>
    );
}

export default Content;