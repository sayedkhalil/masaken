import Head from "next/head";

const About = (props) => {
  
    return (  
        <div className="mt-5">
        <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@600&family=IBM+Plex+Sans+Arabic:wght@400;500&display=swap" rel="stylesheet"></link>
     
        </Head>
        <div className=" aboo w-100">
     <div className="bgabout h-100 w-100 p-4">
    <div className="col-12 rev row "> 
   
    <div className="col-12 col-md-7 ">
    <h4 className=" text-center itcolo">
    لماذا نحن سنكون اختيارك
    </h4>
    <p className="text-center text-light">
     نحن متخصصون لإدارة وتسويق وإنشاء العقارات, تأسست على أيدي مجموعة من المستثمرين والمطورين ذو الخبرة 
    الطويلة والمتخصصة في المجال العقاري، حيث انبثقت فكرة تكوين المساكن
    الرائدة العقارية من خلال دراسة السوق العقاري في المملكة وفهم احتياجات السوق العقاري 
    وتقديم الخدمات العقارية للملاك والمستثمرين العقاريين والمستهلكين.
    </p>
    </div>
    <div className="col-12 col-md-4 row">
 <div className="col-4 row">
 <i class="fa fa-diamond fa-3x col-12 text-center itcolo" aria-hidden="true"></i>
 <h6 className="col-12 text-center text-light">الجودة</h6>
 </div>
 <div className="col-4 row">
 <i class="fa fa-crosshairs fa-3x col-12 text-center itcolo" aria-hidden="true"></i>
 <h6 className="col-12 text-center text-light">الدقة</h6>
 </div>
 <div className="col-4 row">
 <i class="fa fa-check-circle fa-3x col-12 text-center itcolo" aria-hidden="true"></i>
 <h6 className="col-12 text-center text-light">الاحترافية</h6>
 </div>
</div>
    </div>

</div>

</div>
<div className=" aboo2 w-100">
     <div className="bgabout2 h-100 w-100 pb-4">
    <div className="col-12 rev row "> 
   <div className="w-50 w-md-25 h4 text-center m-auto fod p-3">خدماتنا</div>
     
    <div className="col-12 row">
 <div className="col-12 col-md-4 row">
 <i class="fa  fa-home fa-3x col-12 text-center itcolo" aria-hidden="true"></i>
 <h6 className="col-12 text-center text-dark">البيع وإدارة المشاريع
</h6>
<p className="col-12 text-center">
قدم المساكن الرائدة العقارية للمشـروع الخدمات التسـويقية الكاملة وتقديم الخدمات اللوجسـتية وإدارة المبيعات بشكل احترافي وتقديم الحلول البنكية والعمل على الإنتاج الرقمي وتقديم تقارير الاعمال.
</p>
 </div>
 <div className="col-12 col-md-4 row">
 <i class="fa fa-bullhorn fa-3x col-12 text-center itcolo" aria-hidden="true"></i>
 <h6 className="col-12 text-center text-dark">التسويق
</h6>
<p className="col-12 text-center">
التسويق الاحترافي للمنتجات العقارية للأفراد والشركات وتوفير الوقت والجهد لشركاء النجاح.

</p>
 </div>
 <div className="col-12 col-md-4 row">
 <i class="fa fa-microphone fa-3x col-12 text-center itcolo" aria-hidden="true"></i>
 <h6 className="col-12 text-center text-dark">استشارة عقارية
</h6>
<p className="col-12 text-center">
تقديم المشورة المناسبة والاقتراحات للأفراد والشركات للاستثمار والشراء في المجال العقاري.


</p>
 </div>
</div>
    </div>

</div>

</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous">
</script>

</div>
    );
}
 
export default About;