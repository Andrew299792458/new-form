import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../../context";
import { GetUsers } from "../../platform/API";
import "./style.css"

export const Products = () => {
    const { newProfile, setNewProfile } = useGlobalContext

    // useEffect(() => {
    //     Get()
    // }, [newProfile])

    const Get = async () => {
        const result = await GetUsers()
        if (result) {
            setNewProfile(...result.data)


            console.log(result.data);
        }
    }
    return <div>
        grno
    </div>

}