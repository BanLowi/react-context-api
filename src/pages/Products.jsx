

import Card from "../components/Card";

export default function Products({ products }) {

    /*
    log di products quando entro in products
    console.log(products); */


    return (
        <>
            <h1>Pagina Prodotti</h1>

            <div className="container">
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">

                    <Card products={products} />

                </div>
            </div>
        </>
    )
}