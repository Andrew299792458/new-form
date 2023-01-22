import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../../context";
import "./style.css"

export const Form = () => {

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
        }
    )

    const { setProfile } = useGlobalContext()
    const change = (e) => {
        setChanges({ ...changes, [e.target.name]: e.target.value });

    }

    const SaveChanges = (e) => {
        e.preventDefault();
        setProfile(changes)
    }

    return <>
        <div className="Form">
            <form>
                <fieldset>
                    <label><p>First Name</p><input onChange={change} required name="firstName" placeholder="First Name" />
                    </label>
                    <label><p>Last Name</p><input onChange={change} required name="lastName" placeholder="Last Name" />
                    </label>
                    <label><p>Age</p><input onChange={change} name="age" type={"number"} placeholder="age" /></label>
                    <label><p>Gender</p><input onChange={change} name="gender" className="rad" type={"radio"} value={"male"} />Male
                        <input name="gender" onChange={change} className="rad" type={"radio"} value={"female"} />Female</label>
                </fieldset>
                <fieldset>
                    <label><p>Position</p><input onChange={change} name="position" placeholder="Position" /></label>
                    <label><p>Email</p><input onChange={change} name="email" type={"email"} placeholder="Email" /></label>
                    <label><p>Phone Number</p><input onChange={change} name="phoneNumber" type={"tel"} placeholder="Phone Number" /></label>
                    <label><p>Date of Birth</p><input onChange={change} name="date" type={"date"} /></label>
                    <label><p>Profile Image</p><input name="image" type={"file"} /></label>
                    <label><button onClick={SaveChanges} className="button" >Save Changes</button></label>
                </fieldset>
            </form>
        </div>
    </>
}
