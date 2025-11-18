import { useContext } from "react";

import Card from "../components/Card";

import BudgetContext from "../context/BudgetContext";

export default function Products({ products }) {

    /*
    log di products quando entro in products
    console.log(products); */

    const { budgetMode } = useContext(BudgetContext);
    const filteredProducts = products.filter(product => product.price <= 30);


    return (
        <>
            <h1>Pagina Prodotti</h1>

            <div className="container">
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">

                    {
                        budgetMode === true ?
                            <Card products={filteredProducts} /> :

                            <Card products={products} />
                    }


                </div>
            </div>
        </>
    )
}