const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//get all users
app.get("/getAllUsers", async(req,res) =>{
    try {
       const getAllUsers = await pool.query("SELECT user_id, user_first_name, user_last_name FROM users")
       res.json(getAllUsers.rows); 
    } catch (err) {
        console.error(err.message)
    }
})
app.get("/getUsersLikes/:id", async(req,res) =>{
    try {
        const {id} = req. params;
        const userLikes = await pool.query("SELECT * FROM user_likes WHERE user_id = $1", [
            id
        ]);
       res.json(userLikes.rows); 
    } catch (err) {
        console.error(err.message)
    }
})
//get all users

app.listen(5000, () =>{
    console.log("server has started on port 5000");
});

