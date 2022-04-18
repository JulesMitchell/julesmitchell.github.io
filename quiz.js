// creates a quiz for my portfolio
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [
    {
        question: "Jules Mitchell's PhD is on",
        answers: {
          a: "Alzheimer's disease",
          b: "Anorexia Nervosa",
          c: "Brain-machine interfaces",
          d: "Coping styles"
        },
        correctAnswer: "b"
      },
      {
        question: "Jules works at:",
        answers: {
          a: "Thompson Institute",
          b: "USC Hospital",
          c: "Sunshine Coast Council",
          d: "The moon"
        },
        correctAnswer: "a"
      },
      {
        question: "Jules prior experience includes",
        answers: {
          a: "Clinical trial coordination",
          b: "Blood sample prep and analysis",
          c: "Research advisor",
          d: "All of the above"
        },
        correctAnswer: "d"
      },
      {
        question: "Jules is best known for his:",
        answers: {
          a: "Sense of humour",
          b: "Work ethic",
          c: "Friendliness",
          d: "All of the above and more!"
        },
        correctAnswer: "d"
      }
];

function buildquiz() {

//variable to store the HTMl output 
const output = [];

for (i=0; i<quizQuestions.length; i++){

    //variable to store the list of possible answers
    const answers = [];

    //for each available answer to this question add a html radio button
    for (letter in quizQuestions[i].answers){

        answers.push(
            '<label>'
            +'<input type = "radio" name = "question'+i+'" value = "'+letter+'">'
            + letter + '; '
            + quizQuestions[i].answers[letter]
            + '</label>'
        );
    }

    //add this question and its answers to the output
    output.push(
        '<div class="question">' + quizQuestions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>' 
    );
}
    // combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');  
}

function showResults () {
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    var numCorrect = 0;

    //for each question...find selected answer
    for(i=0; i<quizQuestions.length; i++){
    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

        // if answer is correct add to the number of correct answers
        if(userAnswer===quizQuestions[i].correctAnswer){
        numCorrect++;
            
        // color the answers green
        answerContainers[i].style.color = 'lightgreen';
    }
        // if answer is wrong or blank
        else{
        // color the answers red
        answerContainers[i].style.color = 'red';
      }
  }

  //none correct
  if (numCorrect === 0) { 
    resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
        }
        //one correct 
        if (numCorrect === 1) { 
            resultsContainer.innerHTML = "There’s room for improvement there! You only got one correct answer.";
                }
        //two corrext
        if (numCorrect === 2) { 
            resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
                }
        //three correct
        if (numCorrect === 3) { 
            resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Jules Mitchell pretty well!";
                }
        //all correct
        if (numCorrect === 4) { 
            resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Jules Mitchell so well!";
                }
    
}
//load quiz
buildquiz();
submitButton.onclick = function(){
    showResults();
}