import React, { useContext, useEffect, useState } from 'react'
import { myBasket } from './App';
import Timer from './Timer';
// const quizQuestions = [
//   {
//     question: "What is the capital of France?",
//     options: ["Paris", "London", "Berlin", "Madrid"],
//     correctAnswer: "Paris"
//   },
//   {
//     question: "Which language is primarily used for web development?",
//     options: ["Python", "Java", "JavaScript", "C++"],
//     correctAnswer: "JavaScript"
//   },
//   {
//     question: "Who wrote 'Romeo and Juliet'?",
//     options: ["William Shakespeare", "Mark Twain", "Charles Dickens", "Jane Austen"],
//     correctAnswer: "William Shakespeare"
//   },
//   {
//     question: "What is the largest planet in our solar system?",
//     options: ["Earth", "Mars", "Jupiter", "Saturn"],
//     correctAnswer: "Jupiter"
//   },
//   {
//     question: "What is the boiling point of water?",
//     options: ["100°C", "0°C", "50°C", "200°C"],
//     correctAnswer: "100°C"
//   },
//   {
//     question: "Which element has the chemical symbol 'O'?",
//     options: ["Oxygen", "Gold", "Osmium", "Oganesson"],
//     correctAnswer: "Oxygen"
//   },
//   {
//     question: "What year did World War II end?",
//     options: ["1945", "1918", "1939", "1963"],
//     correctAnswer: "1945"
//   },
//   {
//     question: "What is the speed of light?",
//     options: ["299,792,458 meters per second", "150,000,000 meters per second", "100,000 kilometers per hour", "1,000 miles per hour"],
//     correctAnswer: "299,792,458 meters per second"
//   },
//   {
//     question: "Who painted the Mona Lisa?",
//     options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
//     correctAnswer: "Leonardo da Vinci"
//   },
//   {
//     question: "What is the hardest natural substance on Earth?",
//     options: ["Gold", "Iron", "Diamond", "Graphite"],
//     correctAnswer: "Diamond"
//   },
//   {
//     question: "Which planet is known as the Red Planet?",
//     options: ["Earth", "Mars", "Jupiter", "Saturn"],
//     correctAnswer: "Mars"
//   },
//   {
//     question: "Who was the first president of the United States?",
//     options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
//     correctAnswer: "George Washington"
//   },
//   {
//     question: "What is the smallest country in the world?",
//     options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
//     correctAnswer: "Vatican City"
//   },
//   {
//     question: "In which year did the Titanic sink?",
//     options: ["1905", "1912", "1915", "1920"],
//     correctAnswer: "1912"
//   },
//   {
//     question: "What is the chemical symbol for gold?",
//     options: ["Ag", "Au", "Gd", "Ge"],
//     correctAnswer: "Au"
//   },
//   {
//     question: "What is the largest ocean on Earth?",
//     options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
//     correctAnswer: "Pacific Ocean"
//   },
//   {
//     question: "How many continents are there on Earth?",
//     options: ["5", "6", "7", "8"],
//     correctAnswer: "7"
//   },
//   {
//     question: "What is the tallest mountain in the world?",
//     options: ["K2", "Kangchenjunga", "Lhotse", "Mount Everest"],
//     correctAnswer: "Mount Everest"
//   },
//   {
//     question: "What is the main ingredient in guacamole?",
//     options: ["Tomato", "Onion", "Avocado", "Pepper"],
//     correctAnswer: "Avocado"
//   },
//   {
//     question: "What is the smallest planet in our solar system?",
//     options: ["Mercury", "Mars", "Venus", "Pluto"],
//     correctAnswer: "Mercury"
//   },
//   {
//     question: "What is the capital of Japan?",
//     options: ["Seoul", "Beijing", "Bangkok", "Tokyo"],
//     correctAnswer: "Tokyo"
//   },
//   {
//     question: "Which organ is responsible for pumping blood throughout the human body?",
//     options: ["Liver", "Brain", "Heart", "Lungs"],
//     correctAnswer: "Heart"
//   },
//   {
//     question: "Who is the author of the Harry Potter series?",
//     options: ["J.R.R. Tolkien", "J.K. Rowling", "Stephen King", "George R.R. Martin"],
//     correctAnswer: "J.K. Rowling"
//   },
//   {
//     question: "Which element has the highest melting point?",
//     options: ["Iron", "Gold", "Tungsten", "Platinum"],
//     correctAnswer: "Tungsten"
//   },
//   {
//     question: "What is the largest mammal in the world?",
//     options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
//     correctAnswer: "Blue Whale"
//   },
//   {
//     question: "Which country hosted the 2016 Summer Olympics?",
//     options: ["China", "Brazil", "United Kingdom", "Japan"],
//     correctAnswer: "Brazil"
//   },
//   {
//     question: "How many bones are there in the human body?",
//     options: ["206", "205", "201", "208"],
//     correctAnswer: "206"
//   },
//   {
//     question: "Who developed the theory of relativity?",
//     options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
//     correctAnswer: "Albert Einstein"
//   },
//   {
//     question: "Which gas is most abundant in the Earth's atmosphere?",
//     options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
//     correctAnswer: "Nitrogen"
//   },
//   {
//     question: "What is the largest land animal?",
//     options: ["Elephant", "Rhinoceros", "Giraffe", "Hippopotamus"],
//     correctAnswer: "Elephant"
//   }
// ];

const quizQuestions = [
  {
    question: "What is the output of the following code: console.log(typeof null);?",
    options: ["'object'", "'null'", "'undefined'", "'number'"],
    correctAnswer: "'object'"
  },
  {
    question: "Which method is used to add an element to the end of an array in JavaScript?",
    options: [".push()", ".pop()", ".shift()", ".unshift()"],
    correctAnswer: ".push()"
  },
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    correctAnswer: "Cascading Style Sheets"
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<script>", "<style>", "<css>", "<stylesheet>"],
    correctAnswer: "<style>"
  },
  // {
  //   question: "What is the correct syntax for referring to an external script called 'app.js'?",
  //   options: ["<script href='app.js'>", "<script name='app.js'>", "<script src='app.js'>", "<script file='app.js'>"],
  //   correctAnswer: "<script src='app.js'>"
  // },
  // {
  //   question: "Which company developed the React library?",
  //   options: ["Google", "Facebook", "Twitter", "Microsoft"],
  //   correctAnswer: "Facebook"
  // },
  // {
  //   question: "What does SQL stand for?",
  //   options: ["Structured Query Language", "Stylish Question Language", "Statement Query Language", "Structured Question Language"],
  //   correctAnswer: "Structured Query Language"
  // },
  // {
  //   question: "Which of the following is not a programming language?",
  //   options: ["Python", "JavaScript", "HTML", "Java"],
  //   correctAnswer: "HTML"
  // },
  // {
  //   question: "In Python, what is the correct way to create a function?",
  //   options: ["function myFunction() {}", "def myFunction():", "func myFunction() {}", "create myFunction() {}"],
  //   correctAnswer: "def myFunction():"
  // },
  // {
  //   question: "Which of the following is a Python tuple?",
  //   options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "1, 2, 3"],
  //   correctAnswer: "(1, 2, 3)"
  // },
  // {
  //   question: "Which of the following is a JavaScript framework?",
  //   options: ["Django", "Flask", "React", "Laravel"],
  //   correctAnswer: "React"
  // },
  // {
  //   question: "In Java, which keyword is used to define a class?",
  //   options: ["function", "method", "class", "struct"],
  //   correctAnswer: "class"
  // },
  // {
  //   question: "Which language is used for web apps?",
  //   options: ["PHP", "Python", "JavaScript", "All of the above"],
  //   correctAnswer: "All of the above"
  // },
  // {
  //   question: "What does 'DOM' stand for?",
  //   options: ["Document Object Model", "Data Object Model", "Digital Object Management", "Document Oriented Model"],
  //   correctAnswer: "Document Object Model"
  // },
  // {
  //   question: "Which CSS property controls the text size?",
  //   options: ["font-style", "text-size", "font-size", "text-style"],
  //   correctAnswer: "font-size"
  // },
  // {
  //   question: "What does JSON stand for?",
  //   options: ["JavaScript Object Notation", "Java Source Open Network", "JavaScript Object Network", "JavaScript Open Notation"],
  //   correctAnswer: "JavaScript Object Notation"
  // },
  // {
  //   question: "Which of the following is used to style web pages?",
  //   options: ["HTML", "JQuery", "CSS", "XML"],
  //   correctAnswer: "CSS"
  // },
  // {
  //   question: "Which language is used for styling web pages?",
  //   options: ["HTML", "JQuery", "CSS", "XML"],
  //   correctAnswer: "CSS"
  // },
  // {
  //   question: "Which symbol is used for comments in JavaScript?",
  //   options: ["//", "/*", "#", "<!--"],
  //   correctAnswer: "//"
  // },
  // {
  //   question: "Which company developed Java?",
  //   options: ["Microsoft", "Google", "Sun Microsystems", "Apple"],
  //   correctAnswer: "Sun Microsystems"
  // },
  // {
  //   question: "Which of the following is a NoSQL database?",
  //   options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
  //   correctAnswer: "MongoDB"
  // },
  // {
  //   question: "What is the default port number for HTTP?",
  //   options: ["80", "21", "443", "8080"],
  //   correctAnswer: "80"
  // },
  // {
  //   question: "Which of the following is not a Python data type?",
  //   options: ["List", "Dictionary", "Tuple", "Class"],
  //   correctAnswer: "Class"
  // },
  // {
  //   question: "Which HTML attribute is used to define inline styles?",
  //   options: ["style", "class", "font", "styles"],
  //   correctAnswer: "style"
  // },
  // {
  //   question: "What is the purpose of the 'alt' attribute in an <img> tag?",
  //   options: ["To display text if the image cannot load", "To style the image", "To link the image", "To set the image size"],
  //   correctAnswer: "To display text if the image cannot load"
  // },
  // {
  //   question: "Which of the following is a Python framework for web development?",
  //   options: ["React", "Laravel", "Django", "Angular"],
  //   correctAnswer: "Django"
  // },
  // {
  //   question: "Which operator is used to assign a value to a variable in JavaScript?",
  //   options: ["=", "==", "===", "!="],
  //   correctAnswer: "="
  // },
  // {
  //   question: "What is the output of the following code: print('Hello World') in Python?",
  //   options: ["Hello World", "'Hello World'", "print('Hello World')", "Syntax Error"],
  //   correctAnswer: "Hello World"
  // },
  // {
  //   question: "Which of the following is a front-end framework?",
  //   options: ["Django", "Flask", "React", "Laravel"],
  //   correctAnswer: "React"
  // },
  // {
  //   question: "In which year was JavaScript created?",
  //   options: ["1990", "1995", "2000", "2005"],
  //   correctAnswer: "1995"
  // }
];




function Question() {
  const { setMyScore, stage, myScore } = useContext(myBasket);
  //
  const [questionIndex, setQuestionIndex] = useState(0);
  // let index = questionIndex;
  // usestate to monitor if any option is click
  const [clicked, setClicked] = useState(false);

  // function to collect users ans and check if it is right or wrong
  function checkAns(yourAns) {
    setClicked(true);
    if (yourAns == quizQuestions[questionIndex].correctAnswer) {
      setMyScore(myScore + 1);
    }
    else {
      if (myScore == 0) {
        setMyScore(0);
      } else {
        setMyScore(myScore - 1);
      }
    }
  }

  return (
    <div>
      <Timer stage={stage} />
      <h3>{questionIndex}/{quizQuestions.length}</h3>
      <h2>{quizQuestions[questionIndex].question}</h2>
      <button onClick={() => checkAns(quizQuestions[questionIndex].options[0])}>{quizQuestions[questionIndex].options[0]}</button>

      <button onClick={() => checkAns(quizQuestions[questionIndex].options[1])}>{quizQuestions[questionIndex].options[1]}</button>

      <button onClick={() => checkAns(quizQuestions[questionIndex].options[2])}>{quizQuestions[questionIndex].options[2]}</button>

      <button onClick={() => checkAns(quizQuestions[questionIndex].options[3])}>{quizQuestions[questionIndex].options[3]}</button>

      {questionIndex > 0 && <button onClick={() => setQuestionIndex(questionIndex - 1)}>Previous</button>}
      {questionIndex == quizQuestions.length - 1 ? <button onClick={() => {
        if (clicked) {
          stage("result");
        } else {
          alert("please select an option");
        }
      }}>Submit</button> : <button onClick={() => {
        if (clicked === false) {
          alert("please select an option");
        } else {
          setClicked(false)
          setQuestionIndex(questionIndex + 1)
        }
      }
      }>Next</button>
      }
    </div>
  )
}

export default Question