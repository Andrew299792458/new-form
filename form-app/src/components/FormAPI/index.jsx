import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { PostUsers } from "../../platform/API";
import "./style.css"

export const FormAPI = () => {

    const nav = useNavigate()

    const [changes, setChanges] = useState(
        {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            position: '',
            email: '',
            phoneNumber: '',
            dateOfBirth: '',
            file: null,
            flag: true
        }
    )
    const { newProfile, setNewProfile } = useGlobalContext()


    const change = (e) => {
        setChanges({ ...changes, [e.target.name]: e.target.value });

    }
    const Valid = () => {
        let valid = false

        if (changes.firstName !== "") {
            setNewProfile([...newProfile, changes])
            // console.log("valid true")
            valid = true
        } else { console.log("errorValid") }
        return valid
    }

    // const SavePicture = (e) => {
    //     setChanges({ ...changes, file: e.target.files[0] })
    // }

    const SaveChanges = async () => {

        if (Valid()) {
            const result = await PostUsers(changes)
            console.log("result")
            if (result) {
                setNewProfile([...newProfile, result.data])
                localStorage.setItem("id", result.data._id)
                localStorage.setItem("data", JSON.stringify(result.data))
                nav("/Products")
            }
        } else { console.log("errorSave") }
    }

    return <div className="Form">
        <div className="form">
            <div className="fieldset">
                <div><p>First Name</p><input onChange={change} required name="firstName" placeholder="First Name" />
                </div>
                <div><p>Last Name</p><input onChange={change} required name="lastName" placeholder="Last Name" />
                </div>
                <div><p>Age</p><input onChange={change} name="age" type={"number"} placeholder="age" /></div>
                <div><p>Gender</p><input onChange={change} name="gender" className="rad" type={"radio"} value={"male"} />Male
                    <input name="gender" onChange={change} className="rad" type={"radio"} value={"female"} />Female</div>
            </div>
            <div className="fieldset">
                <div><p>Position</p><input onChange={change} name="position" placeholder="Position" /></div>
                <div><p>Email</p><input onChange={change} name="email" type={"email"} placeholder="Email" /></div>
                <div><p>Phone Number</p><input onChange={change} name="phoneNumber" type={"tel"} placeholder="Phone Number" /></div>
                <div><p>Date of Birth</p><input onChange={change} name="date" type={"date"} /></div>
                <div><p>Profile Image</p><input name="image" type={"file"} /></div>
                <div><button onClick={SaveChanges} className="button" >Save Changes</button></div>
            </div>
        </div>
    </div>


}
