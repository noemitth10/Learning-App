const express = require("express")
const app = express();
const cors  =require("cors")
const pool = require("./db")

const requestHeader = require("./middleware/request");
const { all } = require("./routes/jwtAuth");
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

//GET TASKS WITH ANSWERS
app.get("/tasks", async(req, res) => {
    try {
        const allTasks = await pool.query("SELECT * FROM tasks");
        console.log(allTasks)
        res.json(allTasks.rows);
    } catch(err) {
        console.error(err.message);
    }
})

//CREATE A TASK
app.post("/tasks", async(req, res) => {
    try {
        const {category, task_type, text_of_the_question, points, choice_array} = req.body;

        last_task_id = await pool.query("SELECT MAX(task_id) FROM tasks");
        let max = last_task_id.rows[0].max;
        max++;

        const newTask = await pool.query("INSERT INTO tasks (task_id, category, task_type, text_of_the_question, points, choice_array) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
         [max, category, task_type, text_of_the_question, points, choice_array]
        );

        res.json(newTask.rows[0]);
    } catch (error) {
        console.log(error.message)
    }
})

//GET ANSWERS
app.get("/answers", async(req, res) => {
    try {
        const allAnswers = await pool.query("SELECT * FROM answers");
        console.log(allAnswers)
        res.json(allAnswers.rows);
    } catch(err) {
        console.error(err.message);
    }
})

//CREATE A TASK
app.post("/answers", async(req, res) => {
    try {
        const {task_id, question_text, answer_text, correct} = req.body;
        const newAnswer = await pool.query("INSERT INTO answers (task_id, answer_text, correct, question_text) VALUES ($1, $2, $3, $4) RETURNING *",
         [task_id, answer_text, correct, question_text]
        );

        res.json(newAnswer.rows[0]);
    } catch (error) {
        console.log(error.message)
    }
})

app.get("/tasks_with_answers", async(req, res) => {
    try {
        //const allTasks = await pool.query("SELECT * FROM tasks INNER JOIN answers ON answers.task_id = tasks.task_id");
        const allTasks = await pool.query("SELECT * FROM tasks");
        const allAnswers = await pool.query("SELECT * FROM answers");
        
        for (const task of allTasks.rows) {
            let answers = [];

            for (const answer of allAnswers.rows) {
                console.log(answer)

                if(task.task_id == answer.task_id)
                    answers.push(answer);
            }

            task.answers = answers;
            console.log(answers[1])
        }
        
        res.json(allTasks.rows);
    } catch(err) {
        console.error(err.message);
    }
})

app.get("/tasks_by_spec_teacher/:owner_id", async(req, res) => {
    try {
        const { owner_id } = req.params;

        const owned_Tests = await pool.query("SELECT * FROM tests WHERE owner_id = $1",
         [owner_id]
        );
        const allTasks = await pool.query("SELECT * FROM tasks");
        const allAnswers = await pool.query("SELECT * FROM answers");
        
        for (const test of owned_Tests.rows) {
            let tasks = [];

            for (const task of allTasks.rows) {
                console.log(task)
                if(test.test_id == task.test_id) {
                    tasks.push(task);
                    console.log(test.id == task.test_id)
                }

                let answers = [];
    
                for (const answer of allAnswers.rows) {
                    if(task.task_id == answer.task_id)
                        answers.push(answer);
                }
    
                task.answers = answers;
            }

            test.tasks = tasks;
        }
        
        res.json(owned_Tests.rows);
    } catch(err) {
        console.error(err.message);
    }
})

app.delete("/delete_tasks_by_spec_teacher/:test_id", async(req, res) => {
    try {
        const {test_id} = req.params;
        console.log(test_id)
        const deleteTest = await pool.query("DELETE FROM tests WHERE test_id = $1", [test_id]);
        const deleteTask = await pool.query("DELETE FROM tasks WHERE test_id = $1", [test_id]);

        res.json("Test was deleted!");
    } catch(err) {
        console.error(err.message);
    }
})

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

app.post("/edit_test", async(req, res) => {
    try {
        const {title, test_type, owner_id, class_id, is_public, category, text_of_the_question, points, answersList } = req.body;

        last_test_id = await pool.query("SELECT MAX(test_id) FROM tests");
        let max = last_test_id.rows[0].max;
        max++;

        const newTest = await pool.query("INSERT INTO tests (test_id, title, owner_id, class_id, public) VALUES ($1, $2, $3, $4, $5) RETURNING *",
         [max, title, owner_id, class_id, is_public]
        );

        last_test = await pool.query("SELECT test_id, title FROM tests ORDER BY test_id DESC LIMIT 1");

        last_task_id = await pool.query("SELECT MAX(task_id) FROM tasks");
        let max2 = last_task_id.rows[0].max;
        max2++;
        console.log(last_test.rows[0].test_id)
        const newTask = await pool.query("INSERT INTO tasks (task_id, test_id, category, task_type, text_of_the_question, points) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
         [max2, last_test.rows[0].test_id, category, test_type, text_of_the_question, points]
        );

        last_task = await pool.query("SELECT task_id, task_type FROM tasks ORDER BY task_id DESC LIMIT 1");

        console.log(answersList)
        for (const answer of answersList) {
            console.log(answer)
            const {question_text, answer_text, correct} = answer;
            const newAnswer = await pool.query("INSERT INTO answers (task_id, answer_text, correct, question_text) VALUES ($1, $2, $3, $4) RETURNING *",
            [last_task.rows[0].task_id, answer_text, correct, question_text]);
        }

        res.json(newTask.rows[0]);
    } catch (error) {
        console.log(error.message)
    }
})

//start server: node_modules/.bin/nodemon index
app.listen(5000, () => {
    console.log("server has started on port 5000")
})