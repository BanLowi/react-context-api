import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

import Card from "../components/Card"

export default function Product() {

    const { id } = useParams()
    const [thisProduct, setThisProduct] = useState({})

    function fetchProduct() {

        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setThisProduct(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(fetchProduct, [id]);

    return (

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8">

                    <div className="card text-center">
                        <div className="card-header">
                            {thisProduct.category}
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title">{thisProduct.title}</h5>
                            <img src={thisProduct.image} alt="" className="card-img-center" />
                            <div className="d-flex justify-content-between">
                                {Number(id) > 1 ? <Link to={`/products/${Number(id) - 1}`} className="btn btn-primary d-block">Precedente</Link > : ""}
                                <Link to={"/products"} className="btn btn-primary d-block">Torna al catalogo</Link >
                                <Link to={`/products/${Number(id) + 1}`} className="btn btn-primary d-block">Prossimo</Link >

                            </div>
                        </div>
                        <div className="card-footer text-body-secondary">
                            {thisProduct.price} &#8364;
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}