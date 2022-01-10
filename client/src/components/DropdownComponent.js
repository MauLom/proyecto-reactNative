import React, { useEffect, useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const DropdownComponent = () => {
    const [optionsArr, setOptionsArr] = useState([])
    let valueDropdown = undefined
    const getUserList = async () => {
        try {
            const response = await fetch("http://localhost:5000/getAllUsers")
            const jsonData = await response.json()
            let auxArr = []
            jsonData.forEach(eachUser => {
                let auxObj = { label: `${eachUser.user_first_name} ${eachUser.user_last_name}`, value: eachUser.user_id }
                auxArr.push(auxObj)
            })
            setOptionsArr(auxArr)

        } catch (err) {
            console.error(err.message)
        }
    }
    const handleChange = (slctdOption) => {
        valueDropdown = slctdOption
        sessionStorage.setItem("userId", slctdOption)
    }
    useEffect(() => {
        getUserList()
    }, [])
    return (
        < >
            <Dropdown options={optionsArr}
                value={valueDropdown}
                placeholder="Select an option"
                onChange={handleChange} />
        </>
    );
};

export default DropdownComponent;