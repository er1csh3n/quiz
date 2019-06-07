const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
var cors = require("cors");

const quizQuestions = [
    {
        id: '1',
        question: "What is 2 + 2?",
        answers: ["4","1","0","2"],
        correctAnswer: "4"
    },
    {
        id: '2',
        question: "Who is the current President of the USA?",
        answers: ["Donald Duck", "Barack Obama", "Donald Trump", "Colonel Sanders"],
        correctAnswer: "Donald Trump"
    },
    {
        id: '3',
        question: "What is 3-2?",
        answers: ["2","1","5","32"],
        correctAnswer: "1"
    }
];

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(bodyParser.json());
app.use(cors());


app.get('/api/questions', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(quizQuestions);
});

app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);
