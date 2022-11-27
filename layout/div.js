import Head from "next/head";

const Div = () => {
    return ( 
        
        <div className="w-100 bg-sdf">
            
            <Head>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@600&family=IBM+Plex+Sans+Arabic:wght@400;500&display=swap" rel="stylesheet"></link>
            </Head>
            <div className="container row">
                <img className="col-12 col-md-6 ddf" src="op.png" alt=""/>
            <div className="col-12 col-md-6">
                <h4 className="text-center text-light mt-4">الأهداف</h4>
                <h5 className="text-end ">لنجعل حياتك أجمل، أسهل، وأسعد..نهدف دوماً إلى</h5>
                <h6  className="text-end fg">توفير خدمات متكاملة تمتد من فكرة شراء العقار إلى ما بعد البيع</h6>
                <h6  className="text-end fg">تسهيل عملية البحث عن العقار واختياره وشرائه وتملّكه</h6>
                <h6  className="text-end fg">تنويع خيارات المساحات والديكور وكذلك المنطقة السكنية</h6>
                <h6  className="text-end fg">تحسين تجربتك باستمرار عبر فريق عمل متواجد على الدوام</h6>
                <h6  className="text-end fg">تطوير منهجية عملنا على الدوام لنواكب التغيرات باستمرار</h6>
            </div>
            </div>
            
        </div>
    );
}
 
export default Div;