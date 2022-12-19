import Head from "next/head";

const Itemes = () => {
    return ( 
        <div className="w-100 ">
            <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'></link>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous"></script>
</Head>
<div className="container  bs">
<div className="mt-3 row jsw bs">
<div className="col-12 col-md-4 row  p-3 bs">
<div className=" text-center h3 bs ite text-dark p-1 rounded">363</div>
<div className=" text-center h5 bs mt-2 text-secondary">وحدة تم تطويرها</div>
</div>
<div className="col-12 col-md-4 row  p-3 bs">
<div className=" text-center h3 bs ite text-dark p-1 rounded">50000</div>
<div className=" text-center h5 bs mt-2 text-secondary">متر مربع تم تطويره</div>
</div>
<div className="col-12 col-md-4 row  p-3 bs">
<div className=" text-center h3 bs ite text-dark p-1 rounded">13</div>
<div className=" text-center h5 bs mt-2 text-secondary">عامًا من الخبرة لفريق عملنا</div>
</div>
</div>
</div>
        </div>
     );
}
 
export default Itemes;