import React from 'react';
import ImageGallery from 'react-image-gallery';


function GALLERY()
{
    const images = [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
      ];
    return ( 
     <div style={{
        textAlign:"center",
        padding: "40px",

        
     }}>
        <br></br>
        <ImageGallery items={images}/>
     </div>

    )
}
export default GALLERY;
