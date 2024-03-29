import Head from "next/head";
import { db, storage } from "../firebase";
import { collection, addDoc ,getDocs,doc,Timestamp,deleteDoc , setDoc, query, where} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import Image from 'next/image'
import { useRouter } from "next/router";
import { useAppContext } from "../AppContext";
import { async } from "@firebase/util";
const Cart = () => {
  const [cart,setcart]=useState({})
  const [dblock,setdblock]=useState("")
  const [none,setnone]=useState("d-none")
  const [categ,setcateg]=useState([])
  const [mycart,setmycart]=useState([])
  const [appState, setAppState] = useAppContext()
  useEffect(()=>{
    const o =[]
    const myArrayFromLocalStorage = localStorage.getItem('mycart')
    if (myArrayFromLocalStorage && myArrayFromLocalStorage.length) {
    var myArray = JSON.parse(myArrayFromLocalStorage)}else{var myArray=[]  }
    setcateg(myArray)
    var my=myArray.forEach(et=>o.push({code:et.code,title:et.title}))
    setmycart(o)
       return myArrayFromLocalStorage
  },[])
  const onname = (e) => setcart({...cart,name:e.target.value})
  const ontele = (e) => setcart({...cart,tele:e.target.value})
  const onemail = (e) => setcart({...cart,email:e.target.value})
  const onmsg = (e) => setcart({...cart,msg:e.target.value})
  const onbank = (e) => setcart({...cart,bank:e.target.value})
  const onesal = (e) => setcart({...cart,sal:e.target.value})
  const onsup = (e) => setcart({...cart,sup:e.target.value})
  const onsend = async(e)=>{
    e.preventDefault() 
      const docRef = await setDoc(doc(db, "orders", cart.tele), cart); 
      setcart({name:"",tele:"",email:"",msg:"",mycart:"",bank:"",sal:""}) 
      setcateg([])
      setmycart([])
      localStorage.removeItem("mycart")
      setAppState([])

    

  }
const akar =(x)=>{
setcart({...Cart,mycart:x})
setdblock("d-none")
setnone("")
}
    return ( 
        <div className="container">
            <div className="mt-5">
            <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
    <title>مصنع فرسان الإنشاءات  للصناعة</title>
   <link rel="icon" href="wew.png" type="image/x-icon" />
   <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@600&family=IBM+Plex+Sans+Arabic:wght@400;500&display=swap" rel="stylesheet"></link>
            </Head>
   
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
    crossOrigin="anonymous">
    </script>
    <div className="row w-100">
    <h4 className="col-12 col-lg-3 title ms-auto">طلب عقار</h4></div>
    <div className={`row col-12 flex-row-reverse my-5  ${dblock} `}>
    <div className="col-6 col-md-3 p-1" onClick={()=>akar("فيلا")}>
      <div className="w-100 border-1 border border-secondary pointer" >
      <i class="fa fa-home fa-2x text-center itcolo d-block w-100 my-3" aria-hidden="true"></i>
       <p className="text-center w-100 text-dark">  فيلا</p>
      </div>
    </div>
    <div className="col-6 col-md-3 p-1" onClick={()=>akar("شقة")}>
      <div className="w-100 border-1 border border-secondary pointer">
      <i class="fa fa-building fa-2x text-center itcolo d-block w-100 my-3" aria-hidden="true"></i>
       <p className="text-center w-100 text-dark">  شقة</p>
      </div>
    </div>
    <div className="col-6 col-md-4 p-1"onClick={()=>akar("أرض")}>
      <div className="w-100 border-1 border border-secondary pointer">
      <i class="fa fa-inbox fa-2x text-center itcolo d-block w-100 my-3" aria-hidden="true"></i>
       <p className="text-center w-100 text-dark">  أرض</p>
      </div>
    
    
    </div>
                  
  </div>
  <form className={`${none}`} onSubmit={onsend}>
  <div className="input-group input-group-lg border-success mb-3 w-75 ms-auto required">
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"onChange={onname} value={cart.name} required/>
  <span className="input-group-text bg-light text-dark " id="inputGroup-sizing-sm">الاسم</span>
</div>
<div className="input-group input-group-lg border-success mb-3 w-75 ms-auto required">
  <input type="tele" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={cart.tele} onChange={ontele} required/>
  <span className="input-group-text bg-light text-dark" id="inputGroup-sizing-sm">رقم الجوال</span>
</div>
<div className="input-group input-group-lg border-success mb-3 w-75 ms-auto">
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={cart.bank} onChange={onbank}/>
  <span className="input-group-text bg-light text-dark" id="inputGroup-sizing-sm">بنك</span>
</div>
<div className="input-group input-group-lg border-success mb-3 w-75 ms-auto">
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={cart.sal} onChange={onesal}/>
  <span className="input-group-text bg-light text-dark" id="inputGroup-sizing-sm"> الراتب</span>
</div>
<input type="radio" onChange={onsup} value={cart.sup}></input>
<div className="input-group input-group-lg border-success mb-3 w-75 ms-auto">
  <input type="email" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={cart.email} onChange={onemail}/>
  <span className="input-group-text bg-light text-dark" id="inputGroup-sizing-sm">البريد الإلكتروني</span>
</div>
<div className="input-group  mb-3 w-75 ms-auto">
  <textarea className="form-control" aria-label="With textarea" onChange={onmsg} value={cart.msg}></textarea>
  <span className="input-group-text bg-light text-dark">اكتب رسالتك</span>
</div>
< input type="submit" className="btn btn-success my-3"value="طلب العقار" onSubmit={onsend}/>
</form>
    </div>
    
    </div>
     );
}
 
export default Cart;
