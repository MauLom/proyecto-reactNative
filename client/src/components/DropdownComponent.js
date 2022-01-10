import React, { Fragment, useEffect, useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const DropdownComponent = () => {
    const [optionsArr, setOptionsArr] = useState([])
    const [userLikes, setUserLikes] = useState([]);
    let userId = undefined;
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
    const getLikes = async () => {
        try {
            const response = await fetch("http://localhost:5000/getUserLikes/" + userId)
            const jsonData = await response.json()

            setUserLikes(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    };
    const handleChange = (slctdOption) => {
        valueDropdown = slctdOption.value
        userId = slctdOption.value;
        getLikes();
        console.log("userid:", userId)
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
            <Fragment>
                <table class="table mt-5 text-center">
                    <thead>
                        <tr>
                            <th>Likes of user</th>
                        </tr>
                    </thead>
                    <tbody>

                        {userLikes.map((eachLike, index) => (
                            <tr key={eachLike.todo_id}>
                                <td>{eachLike}</td>
                                <td>{eachLike.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        </>
    );
};

export default DropdownComponent;