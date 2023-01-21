import React from "react";
import { useState } from "react";
import "./style.css"

export const Form = () => {

    const [Name, setName] = useState(false)
    const [error, setError] = useState("")

    function Validate(e) {
        if (e.target.value === "") {
            setName(true)
            setError(e.target.name + " is required")
        } else { setName(false) }
    }

    return <>
        <div className="Form">
            <form>
                <fieldset>
                    <label><p>First Name</p><input required onBlur={Validate} name="firstName" placeholder="First Name" />
                    </label>
                    <label><p>Last Name</p><input required onBlur={Validate} name="lastName" placeholder="Last Name" />
                    </label>
                    <label><p>Age</p><input onBlur={Validate} name="age" type={"number"} placeholder="age" /></label>
                    <label><p>Gender</p><input onBlur={Validate} name="gender" className="rad" type={"radio"} value={"male"} />Male
                        <input onBlur={Validate} name="gender" className="rad" type={"radio"} value={"female"} />Female</label>
                    {Name ? <div className="red" style={{ color: "red" }}>{error}</div> : null}
                </fieldset>
                <fieldset>
                    <label><p>Position</p><input onBlur={Validate} name="position" placeholder="Position" /></label>
                    <label><p>Email</p><input onBlur={Validate} name="email" type={"email"} placeholder="Email" /></label>
                    <label><p>Phone Number</p><input onBlur={Validate} name="phoneNumber" type={"tel"} placeholder="Phone Number" /></label>
                    <label><p>Date of Birth</p><input onBlur={Validate} name="date" type={"date"} /></label>
                    <label><p>Profile Image</p><input name="image" type={"file"} /></label>
                    <label><input className="button" type="submit" value={"Save Changes"} /></label>
                </fieldset>
            </form>
        </div>
    </>
}
