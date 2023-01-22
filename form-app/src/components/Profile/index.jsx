import React from "react";
import { useGlobalContext } from "../../context";
import "./style.css"

export const Profile = () => {

    const { profile } = useGlobalContext()


    return <>
        <div className="profile">
            <div className="picture"><p>img</p></div>
            <div>
                <p>{profile.firstName}  {profile.lastName}</p>
                <h2>{profile.position}</h2>
            </div>
        </div>
    </>
}