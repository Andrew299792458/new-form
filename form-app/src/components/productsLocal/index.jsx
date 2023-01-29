import { React, useEffect, useState } from "react";
import "./style.css"
export const ProductsLocal = () => {
    const [local, setLocal] = useState()
    useEffect(() => {
        setLocal(JSON.parse(localStorage.getItem("localProfile")))
    }, [])

    return <div className="products">
        <div className="productsHead">Products</div>
        <div className="database">
            {local === undefined || local === null ? <p>No Profiles</p> : local.map((element, index) => (
                <div className="newProfile" key={index}>
                    <div className="name">Name;  {element.firstName} {element.lastName}</div>
                    <div className="position">Position;  {element.position}</div>
                    <div className="age">Age;  {element.age}</div>
                    <div className="gender">Gender;  {element.gender}</div>
                    <div className="tel">Tel;  {element.phoneNumber}</div>
                    <div className="date">Date of Birth{element.dateOfBirth}</div>
                    <div className="picture"> Picture{element.file ? <img className="profileImage" src={URL.createObjectURL(element.file)} alt="img" /> : null}</div>
                </div>))}
        </div>
    </div>
}