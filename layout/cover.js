import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState } from "react";

const Cover = (props) => {
       return (  
        <div className="mt-1 rela">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous">
</script>
<Carousel infiniteLoop="true" autoPlay={true} interval={5000} showStatus={false}	showThumbs={false}>
               
                  { props.data.map((item) => (
             <div key={item}>
             <img src={item} alt="فرسان الإنشاءات"/>
             </div>
            ))}
              </Carousel>
              {/* <a className="btn btn-success btn-sm d-block d-lg-none dfe" href="https://drive.google.com/file/d/1Nga38UIB2yQCUrH3BvVUSTRZsx1wL7_1/view?usp=sharing" download>تحميل بروفايل الشركة</a>
              <a className="btn btn-success btn-lg d-none d-lg-block d-xl-block dfee" href="https://drive.google.com/file/d/1Nga38UIB2yQCUrH3BvVUSTRZsx1wL7_1/view?usp=sharing" download>تحميل بروفايل الشركة</a> */}

</div>
    );
}
 
export default Cover;