import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../../context";
import { GetUsers, GetUser } from "../../platform/API";
import "./style.css"

export const Products = () => {
    const { newProfile, setNewProfile, id, setId } = useGlobalContext();
    useEffect(() => {
        let x = localStorage.getItem("id")
        if (x) { setId(x) }
    }, [setId])
    const GetAll = async () => {
        const result = await GetUsers()
        if (result) {
            setNewProfile([...result.data])
        }
    }
    const Get = async () => {
        const result = await GetUser(id)
        if (result) {
            setNewProfile([result.data])
        }
    }
    return <div className="profiles">
        <button className="btn" onClick={Get}>Get Last</button>
        {newProfile ? newProfile.map((element, index) => {
            return <div key={index}>
                <div className="profile">
                    <div className="picture"><img src="" alt="ProfilePicture"></img></div>
                    <div className="name">Name;  {element.firstName} {element.lastName}</div>
                    <div className="position">Position;  {element.position}</div>
                    <div className="age">Age;  {element.age}</div>
                    <div className="gender">Gender;  {element.gender}</div>
                    <div className="tel">Tel;  {element.phoneNumber}</div>
                    <div className="date">Date of Birth{element.dateOfBirth}</div>
                </div>
            </div>
        }) : <div>no profile</div>}
        <button className="btn" onClick={GetAll}> Get All</button>
    </div>
}