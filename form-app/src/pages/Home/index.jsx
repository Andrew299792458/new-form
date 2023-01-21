import React from "react";
import { Form } from "../../components/Form";
import { Profile } from "../../components/Profile";
import "./style.css"

export const Home = () => {
    return <>
        <div>
            <Profile />

            <Form />
        </div>


    </>
}