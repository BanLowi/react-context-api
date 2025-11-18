import { Link } from "react-router-dom";

export default function Card({ products }) {

    return (
        products.map(product => (
            <div key={product.id} className="col">
                <div className="card h-100">
                    <div className="card-header bg-transparent border-0 text-center h-50">
                        <h6>{product.title}</h6>
                    </div>
                    <img src={product.image} alt={product.title} className="card-img-top object-fit-contain" height={100} />
                    <div className="card-body text-center">
                        <Link className="btn btn-sm btn-primary" to={`/products/${product.id}`}>VIEW</Link>
                    </div>
                </div>
            </div>
        ))
    )
}