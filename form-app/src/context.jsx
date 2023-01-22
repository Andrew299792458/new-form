import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

const AppProvider = ({ children }) => {

    const [profile, setProfile] = useState({

        firstName: '-',
        lastName: '-',
        age: '',
        gender: '',
        position: 'no position',
        email: '',
        phoneNumber: '',
        dateOfBirth: '',
    })

    return <ProfileContext.Provider value={{ profile, setProfile }}>
        {children}
    </ProfileContext.Provider>

}

const useGlobalContext = () => {
    return useContext(ProfileContext)
}

export { AppProvider, useGlobalContext }