import Head from "next/head";
import { useEffect, useState } from "react";
import Image from 'next/image'
import { useAppContext } from "../AppContext";
import { useRouter } from "next/router";
const ProdItem = (props) => {
      const [appState, setAppState] = useAppContext()
    const router = useRouter()
    const[imgc,setimgc]=useState("")
    console.log(props)
    const handelrouter=(path)=>{
             router.push(`product/${path}`)
    }
        
    return (
        <div  className="p-2 col-12 col-lg-3 rel ">
    <div className="border border-secondary rounded-3 position-relative p-0 pb-2  mb-2 mt-5 w-100 shadow">
    <Head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@600&family=IBM+Plex+Sans+Arabic:wght@400;500&display=swap" rel="stylesheet"></link>
    </Head>
    
    <Image
      onClick={()=>handelrouter(props.item.code)}
      className='rounded-3 pointer1 '
      loader={() => `${props.item.img}?w=500px`}
      src={props.item.img}
      alt={props.item.title}
      width={600}
      height={600}
    />
     <img    
      className={`rounded-3 `}   
      src={imgc}    
    />
    <div className="px-3 w-100 row float">
        <h6 className="text-center col-3   h6 text-light bgg1 p-2 mx-2">
   للبيع 
    </h6>
    <h6 className="text-start col-2  p-2 mx-2 h6 itcolo">
   {props.item.title} 
    </h6>
    </div>
    <p className="text-end mx-4 h6 text-secondary">
   {props.item.adress} 
    </p>
    <h5  className="text-end  itcolo  p-2 mx-2"> 
    ر.س    {` ${props.item.price}`}   
    </h5>
    <div className="row w-100 container dfce">
      <div className="col-4 ">
        <span className="text-secondary">{props.item.space}</span>
        <i className="fa fa-inbox itcolo" aria-hidden="true"></i>
      </div>
      <div className="col-4 ">
        <span className="text-secondary">{props.item.bath}</span>
        <i className="fa fa-bath itcolo" aria-hidden="true"></i>
      </div>
      <div className="col-4 ">
        <span className="text-secondary">{props.item.room}</span>
        <i class="fa fa-bed itcolo" aria-hidden="true"></i>
      </div>
    </div>
    <a className="btn bgg1  mx-2 mt-2 " href="https://api.whatsapp.com/send?phone=0566642792">
    <i className="fa fa-whatsapp  fa-2x" aria-hidden="true"></i>تواصل</a>

</div>
</div>
      );
}
 
export default ProdItem;