import React, { Fragment, useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const InputTodo = () => {
    const [userArr, setUserArr] = useState([])
    const [optionsArr, setOptionsArr] = useState([])     
        fetch("http://localhost:5000/getAllUsers", {
            headers: { "Content-Type": "application/json" },
        })
            .then(response => {
                return response.json()
            })
            .then(res => {
                setUserArr(res)
                let auxArr = []
                userArr.map(eachUser => {
                    let auxObj = { label: `${eachUser.user_first_name} ${eachUser.user_last_name}`, value: eachUser.user_id }
                    auxArr.push(auxObj)
                })
                setOptionsArr(auxArr)
            })
            .catch(error => { console.error(error) }) 
    const defaultOption = optionsArr[0];
    return (
        <>
            <Dropdown options={optionsArr} value={defaultOption} placeholder="Select an option" />
        </>
    );
};

export default InputTodo;
