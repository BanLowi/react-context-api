import { useContext } from "react";
import { NavLink } from "react-router-dom";

import BudgetContext from "../context/BudgetContext";

export default function Navbar() {


    const { setBudgetMode, budgetMode } = useContext(BudgetContext);

    return (
        <>

            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand"> Fake Store </NavLink>
                    <div className="collapse navbar-collapse" id="navbarID">
                        <div className="navbar-nav">
                            <NavLink to="/" className="nav-link">Home Page</NavLink>
                            <NavLink to="/about" className="nav-link">Chi Siamo</NavLink>
                            <NavLink to="/products" className="nav-link">Prodotti</NavLink>
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={() => setBudgetMode(!budgetMode)}>BudgetMode</button>
                </div>
            </nav>

        </>
    )
}