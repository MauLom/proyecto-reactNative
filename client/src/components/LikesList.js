import React, { Fragment, useEffect, useState } from "react";



const LikesList = () => {

    const [userLikes, setUserLikes] = useState([]);
    const userId = sessionStorage.getItem("userId")
    const getLikes = async () => {
        try {
            const response = await fetch("http://localhost:5000/getUserLikes/" + userId)
            const jsonData = await response.json()

            setUserLikes(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    };

    useEffect(() => {
        getLikes();
    }, []);

    console.log(userLikes);

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
                        <tr key={eachLike.todo_id}>
                            <td>{eachLike}</td>
                            <td>{eachLike.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
};

export default LikesList;