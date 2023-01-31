import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

const AppProvider = ({ children }) => {

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
    const [newProfile, setNewProfile] = useState([])
    const [id, setId] = useState()


    return <ProfileContext.Provider value={{ newProfile, setNewProfile, changes, setChanges, id, setId }}>
        {children}
    </ProfileContext.Provider>

}

const useGlobalContext = () => {
    return useContext(ProfileContext)
}

export { AppProvider, useGlobalContext }