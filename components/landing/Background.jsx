import React from 'react';
import Image from 'next/image';

function Background(props) {
    return (  
        /*The follow div is the background images. Should be set to absolute display in css, and one overlayed over the other
          with the coloured hue on top.*/
        <div className = "backgroundImages">
            <Image
                src = "/images/background.jpg"
                id = "telescope"
                alt = "telescope"
                height = "689"
                width = "981"
            >
            </Image>

            <Image
                src = "/images/galaxy.png"
                id = "galaxy"
                alt = "galaxy"
                height = "350"
                width = "525"
            >
            </Image>
        </div>
    );
}

export default Background;