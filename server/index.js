const express = require("express")
const app = express();
const cors  =require("cors")
const pool = require("./db")

const requestHeader = require("./middleware/request")
//middleware
app.use(express.json());
app.use(cors());

//ROUTES//
// REGISTER, LOGIN ROUTES 

app.use("/auth", require("./routes/jwtAuth"));

// DASHBOARD ROUTE

app.use("/dashboard", require("./routes/dashboard"));

//UPDATE USER POINTS
app.put("/user/:user_id", async(req, res) => {
    try {
        const {user_id} = req.params;
        const {points } = req.body;

        const updateUser = await pool.query("UPDATE users SET points = $1 WHERE user_id = $2",
        [points, user_id]);

        res.json("User was updated!");
    } catch(err) {
        console.error(err.message);
    }
})

//GET ALL LESSONS
app.get("/lessons", requestHeader, async(req, res) => {
    try {
        const allSentences = await pool.query("SELECT * FROM lessons");
        console.log(allSentences) 
        res.json(allSentences.rows);
    } catch(err) {
        console.error(err.message);
    }
})

//CREATE A LESSON
app.post("/lessons", async(req, res) => {
    try {
        const {category, text_of_lesson, level} = req.body;
        const newLesson = await pool.query("INSERT INTO lessons (category, text_of_lesson, level) VALUES ($1, $2, $3) RETURNING *",
         [category, text_of_lesson, level]
        );
        console.log(newLesson)
        res.json(newLesson.rows[0]);
    } catch (error) {
        console.log(error.message)
    }
})

//GET ALL SENTENCES
app.get("/sentences", async(req, res) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    try {
        const allSentences = await pool.query("SELECT * FROM sentences");
        res.json(allSentences.rows);
    } catch(err) {
        console.error(err.message);
    }
})

//CREATE A SENTENCE
app.post("/sentences", async(req, res) => {
    try {
        const {sentence, type} = req.body;
        const newSentence = await pool.query("INSERT INTO sentences (sentence, type) VALUES ($1, $2) RETURNING *",
         [sentence, type]
        );

        res.json(newSentence.rows[0]);
    } catch (error) {
        console.log(error.message)
    }
})

//GET ALL SENTENCE
app.get("/sentences", async(req, res) => {
    try {
        const allSentences = await pool.query("SELECT * FROM sentences");
        console.log(allSentences)
        res.json(allSentences.rows);
    } catch(err) {
        console.error(err.message);
    }
})

//GET A SENTENCE
app.get("/sentences/:sentence_id", async(req, res) => {
    try {
        const { sentence_id } = req.params;
        const sentence = await pool.query("SELECT * FROM sentences WHERE sentence_id = $1",
         [sentence_id]
        );

        res.json(sentence.rows[0]);
    } catch(err) {
        console.error(err.message);
    }
})

//UPDATE A SENTENCE
app.put("/sentences/:sentence_id", async(req, res) => {
    try {
        const {sentence_id} = req.params;
        const {sentence, type} = req.body;

        const updateSentence = await pool.query("UPDATE sentences SET sentence = $1, type = $2 WHERE sentence_id = $3",
        [sentence, type, sentence_id]);

        res.json("Sentence was updated!");
    } catch(err) {
        console.error(err.message);
    }
})

//DELETE A SENTENCE
app.delete("/sentences/:sentence_id", async(req, res) => {
    try {
        const {sentence_id} = req.params;
        const deleteSentence = await pool.query("DELETE FROM sentences WHERE sentence_id = $1", [sentence_id]);

        res.json("Sentence was deleted!");
    } catch(err) {
        console.error(err.message);
    }
})

//start server: node_modules/.bin/nodemon index
app.listen(5000, () => {
    console.log("server has started on port 5000")
})