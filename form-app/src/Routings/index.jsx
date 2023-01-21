import React from "react";
import { NavLink } from "react-router-dom"
import "./style.css"

export const Routing = () => {

    return <>

        <ul>
            <li><NavLink to="Home">Home</NavLink></li>
            <li><NavLink to="Dashboard">Dashboard</NavLink></li>
            <li><NavLink to="Products">Products</NavLink></li>
        </ul>
    </>

}