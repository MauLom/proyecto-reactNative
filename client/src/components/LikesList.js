import React, { Fragment, useEffect, useState } from "react";



const LikesList = () => {

    const [userLikes, setUserLikes] = useState([]);
    const userId = sessionStorage.getItem("userId")
    const getLikes = async () => {
        try {
            const response = await fetch("http://localhost:5000/getUserLikes/" + userId)
            const jsonData = await response.json()
            let auxArr =[]
            // jsonData.forEach(eachLike => {
            //     auxArr.push(eachLike.fan_of_music_group)
            // })
            console.log("mensaje", jsonData[0])

            setUserLikes(auxArr);
        } catch (err) {
            console.error(err.message)
        }
    };

    useEffect(() => {
        getLikes();
    }, []);

    console.log("HOLA", userLikes);

    return (
        <Fragment>
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Likes of user</th>
                    </tr>
                </thead>
                <tbody>

                    {userLikes.map((eachLike, index) => (
                        <tr key={"key-"+index}>
                            <td>{eachLike}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
};

export default LikesList;