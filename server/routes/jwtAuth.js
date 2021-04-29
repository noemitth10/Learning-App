const router = require("express").Router()
const pool = require("../db")
const bcrypt = require('bcrypt')
const jwtGenerator = require("../utils/jwtGenerator")
const { JsonWebTokenError } = require("jsonwebtoken")

const validInfo = require("../middleware/validInfo")
const authorization = require("../middleware/authorization")

 // REGISTERING

 router.post("/register", validInfo, async(req, res) => {
    try {
       const { name, email, password, date_of_birth, gender, city } = req.body;

       const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
       
       if(user.rows.length != 0) {
           return res.status(401).send("User already exist.")
       }

       const saltRound = 10;
       const salt = await bcrypt.genSalt(saltRound);
       const bcryptPassword = await bcrypt.hash(password, salt);
       
       const newUser = await pool.query("INSERT INTO users (role_id, name, email, password, gender, date_of_birth, city) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
       [2, name, email, bcryptPassword, gender, date_of_birth, city]);
       
       console.log("User")
       const token = jwtGenerator(newUser.rows[0].user_id);

       res.json({ token });

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Server Error")
    }
})

// LOGIN ROUTE

router.post("/login", validInfo, async(req, res) => {
    try {
        //1. Destructure the req.body

       const { email, password } = req.body;

        //2. Check if user doesn't exist

       const user = await pool.query("SELECT * FROM users WHERE email = $1", 
           [ email ]);
        console.log(user);
       if(user.rows.length === 0) {
           return res.status(401).json("Email is incorrect.");
       }

        //3. Check if incoming password is the same the database pw

       const validPassword = await bcrypt.compare(password, user.rows[0].password);

       if(!validPassword) {
           res.status(401).json("Password is incorrect.")
       }

        //4. Give them the jwt token

        const token = jwtGenerator(user.rows[0].user_id);

        res.json({ token });

    } catch (error) {
       console.error(error.message)
       res.status(500).send("Server Error")
    }
})


router.get("/is-verify", authorization, async (req, res) => {
    try {
        res.json(true);
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Server Error")
    }
})

// UPDATE PROFILE
router.post("/update", async(req, res) => {
    try {
       const { user_id, name, email, date_of_birth, gender, city } = req.body;

       const updateUser = await pool.query("UPDATE users SET  name = $1, email = $2, gender = $3, date_of_birth = $4, city = $5 WHERE user_id = $6",
       [name, email, gender, date_of_birth, city, user_id]);

       res.json("User was updated!");

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Server Error")
    }
})

// DELETE USER
router.delete("/delete_user", validInfo, async(req, res) => {
    try {
       const { email, password } = req.body;

       const user = await pool.query("SELECT * FROM users WHERE email = $1", 
           [ email ]);
        console.log(user);
       if(user.rows.length === 0) {
           return res.status(401).json("Email is incorrect.");
       }

       const validPassword = await bcrypt.compare(password, user.rows[0].password);

       if(!validPassword) {
           res.status(401).json("Password is incorrect.")
       }

       const deleteUser = await pool.query("DELETE FROM users WHERE email = $1", [email]);

        res.json("User was deleted!");

    } catch (error) {
       console.error(error.message)
       res.status(500).send("Server Error")
    }
})

module.exports = router;
