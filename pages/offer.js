import Head from "next/head";

const Offer = () => {
    return (
    <div className="w-100 h-100">
          <Head>
        <title>عروض المساكن الرائدة العقارية</title>
        <meta name="description" content="احصل على عروض المساكن الرائدة" />
        <meta name="keywords" content="عقارية,شقق,عقارات" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@600&family=IBM+Plex+Sans+Arabic:wght@400;500&display=swap" rel="stylesheet"></link>
 </Head>
      <div className="rel10 fill">
       {/* <img className="w-100 rel10 h-100" src="bg101.jpg" alt=""/> */}
       <a className="btn ab101 bgg1  mx-2 mt-2 " href="https://api.whatsapp.com/send?phone=0566642792">
    <i className="fa fa-whatsapp   fa-2x" aria-hidden="true"></i>تواصل</a>
       </div>
      </div>
    
      );
}
 
export default Offer;