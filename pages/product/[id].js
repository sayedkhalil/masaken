import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { db, storage } from "../../firebase";
import { collection, addDoc ,getDocs,doc,Timestamp,deleteDoc , setDoc,getDoc, query, where } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import Image from 'next/image'
import { useRouter } from "next/router";
import { useAppContext } from "../../AppContext";
import { RWebShare } from "react-web-share";
const Product = ({item}) => {
    const router = useRouter()
    const [appState, setAppState] = useAppContext()
    const [categ,setcateg]=useState([])
    const [count,setcount]=useState(1)
    const [namee,setnamee]=useState("")    
   const product=JSON.parse(item)
   const img =product.imges
   const category=product.category
   const [totalprice,settotalprice]=useState(product.price)
   const onnamee=(e)=>{
       setnamee(e.target.value)
   }
    useEffect(async()=>{
    const pro=[]
    const prodlist = collection(db, 'broductes');
    const q = query(prodlist, where("category", "==",category));
    const prodsnapshot= await getDocs(q);
     prodsnapshot?prodsnapshot.forEach(doc =>{ pro.push({code:doc.data().code,
        title:doc.data().title,category:doc.data().category,imges:doc.data().imges[0]})  }):pro
       const mu= pro.length>4?pro.slice(0,4):pro
        setcateg(mu)

   },[])
   const handelrouter=(e,path)=>{
    e.preventDefault() 
    router.push(`../product/${path}`)
}
   const oncart =async()=> {
    const myArrayFromLocalStorage = localStorage.getItem('mycart')
    if (myArrayFromLocalStorage && myArrayFromLocalStorage.length) {
    var myArray = JSON.parse(myArrayFromLocalStorage)}else{var myArray=[]  }
    if(myArray.find(it=>it.code==product.code)){var i = myArray.find(z=>z.code==product.code  )
    i.count=parseInt(i.count)+1
    setcount(count+1)
    i.totalprice=parseInt(i.totalprice)+ parseInt(product.price)
    localStorage.setItem("mycart", JSON.stringify(myArray))
    console.log("yes")
    }else{
        console.log("no")
         myArray.push({"code":product.code,"title":product.title,"img":product.imges[0],"count":count,"price":product.price ,"totalprice":totalprice})
        localStorage.setItem("mycart", JSON.stringify(myArray))
        setAppState(myArray)
        myArray=[]
        }  }
   return (  
        <div className="container">
            <div className="mt-5">
            <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>    <meta name="description" content={product.des} />
    <meta name="keywords" content={product.key} />
    <link rel="icon" href={img[0]} type="image/x-icon" />
    <title>تهادوا:{product.title}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@600&family=IBM+Plex+Sans+Arabic:wght@400;500&display=swap" rel="stylesheet"></link>
            </Head>
   
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
    crossOrigin="anonymous">
    </script>
    <RWebShare 
             data={{
             text: `${product.title}`,
              url:`${product.code}`,
              title:` ${product.title}`,
                }}
               >
             <i class="fa fa-share-alt fa-2x text-danger" aria-hidden="true"></i>
             </RWebShare>
    <div className="row w-100">
        <div className="col-12 col-lg-12">
    <h1 className=" title ms-auto">{product.title}</h1>
    <h4 className=" d-block ms-auto text-right text-secondary mb-4">ر.س {product.price}</h4>
    </ div>

</div>
    <div className="col-12 col-lg-8 mx-auto ">
    <Carousel infiniteLoop="true"	>
    {
       img.map((item)=>(
            <div className="" key={item} >
             <img className=""  src={item}  alt={product.title} />
            
        </div>
        ))
    }
     </Carousel>
                  </div>
                  <div>
                  <h3 className="col-12 col-lg-6 title ms-auto">وصف العقار</h3>
    <div className="col-12 col-lg-8 mx-auto mt-2 border border-danger rounded p-4">
       <p className="font-weight-bold text-center">{product.des}</p> 
    </div>
    <h3 className="col-12 col-lg-6 title ms-auto">مواصفات العقار</h3>
    <div className="col-12 row mx-auto mt-2  p-4">
      <div className="col-12 text-end col-md-3  mt-3 ">
        <span className="text-dark h5 p-2">{product.space}</span>
        <span className="text-secondary p-2">مساحة العقار</span>
        <i className="fa fa-inbox fa-2x itcolo" aria-hidden="true"></i>
      </div>
      <div className="col-12 text-end col-md-3 mt-3 ">
        <span className="text-dark h5 p-2">{product.bath}</span>
        <span className="text-secondary p-2">عدد دورات المياه</span>
        <i className="fa fa-bath fa-2x itcolo" aria-hidden="true"></i>
      </div>
      <div className="col-12 text-end col-md-3 mt-3 ">
        <span className="text-dark h5 p-2">{product.room}</span>
        <span className="text-secondary p-2">عدد غرف النوم</span>
        <i class="fa fa-bed fa-2x itcolo" aria-hidden="true"></i>
      </div>
      <div className="col-12 text-end col-md-3 mt-3">
        <span className="text-dark h5 p-2">{product.living}</span>
        <span className="text-secondary p-2">عدد غرف الجلوس</span>
        <i class="fa fa-coffee fa-2x itcolo" aria-hidden="true"></i>
      </div>
      <div className="col-12 text-end col-md-3 mt-3">
        <span className="text-dark h5 p-2">{product.age}</span>
        <span className="text-secondary p-2">عمر العقار</span>
        <i class="fa fa-calendar fa-2x itcolo" aria-hidden="true"></i>
      </div>
    </div>
   
 

   <div className="cartstatic w-100 row">
   <button onClick={()=>router.push("../cart")} type="button" className="btn btn-success mt-3 w-50">طلب العقار</button>
    <a className="btn btn-light mt-3 mx-2 w-50" href="https://api.whatsapp.com/send/?phone=966569204439&text&app_absent=0"><img className="whats" src="/WhatsApp.svg.png"  alt="" />تواصل واتساب</a>
   </div>
   <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD35BqzwUgt0DG4VeQw_rtvsqxLMlP64tk&q=معمل طيبة د. محمد الفولة" className="w-100 mt-3" frameborder="1px"></iframe>

    <h3 className="col-12 col-lg-3 title ms-auto mt-3">عقارات مشابهة</h3>
    <div className="row">
    {
        categ.map((item)=>(
            <div className="col-12 col-lg-3 p-4 " key={item.code} >
             <Image className="col-12 col-lg-3 border border-info p-1 pointer1" onClick={(e)=>handelrouter(e,item.code)}  loader={() => `${item.imges}?w=500px`} src={item.imges} unoptimized="false"    width={"500px"}
      height={"400px"}/>
            <h6 className=" ms-auto m-3 title-img"> {item.title} </h6>
            <button type="button" className="btn btn-success" onClick={()=>router.push("../cart")} >طلب العقار</button>
        </div>
        ))
    }
    </div>



   
</div>    
</div>
    </div>
     );
}
 
export default Product;
export async function getStaticPaths() {
    const pro=[]
    const prodlist = collection(db, 'broductes');
    const prodsnapshot = await getDocs(prodlist);
     prodsnapshot.docs?prodsnapshot.docs.map(doc =>{ pro.push({code:doc.data().code});   }):[]
    const paths =pro.map((item)=>{
       return{ 
           params:{id:item.code}
       }
    })
  
    return{
        paths,fallback:false
    }
  }
  export async function getStaticProps(context) {
const id        =context.params.id
const docRefpar = doc(db,'broductes',id);
const docSnapar = await getDoc(docRefpar);
const getpartn =  docSnapar.data()?docSnapar.data():[]
   
    return {
      props: {item:JSON.stringify(getpartn)}
    }
  }