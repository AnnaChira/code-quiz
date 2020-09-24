var questionIndex = 0;
var timeLeft = 230;

//init();

//function init(){
    //leaderScore.style.display = "none";
    //quizBox.style.display = "none";
    //var lastUser = JSON.parse(localStorage.getItem("leaderHighScore"));
    //if (lastUser !== null) {
      //leaders = lastUser;
    //}
//}

var startQuiz = document.getElementById("startQuiz");
startQuiz.addEventListener("click", function(){
    console.log("test");
    var welcome = document.getElementById("welcome");
    welcome.style.display = "none";
    startTimer();
    display();
})
function startTimer(){
    timerInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = "Timer: " + timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            showScore();
        }
    }, 1000);
}
var liQuestion = document.querySelector("li");
liQuestion.addEventListener("click", function(){
    var clickItem = this.textContent;
    if (li2.textContent === "Curely Brackets"){
        clearInterval(timerInterval);
    }
    else (li1.textContent && li3.textContent && li4.textContent);{
        var timeLeft = 10;
        alert("Time out!! :(");
    }
    if (li4.textContent === "All the Above"){
        clearInterval(timerInterval);
    }
    else (li1.textContent && li2.textContent && li3.textContent);{
       var timeleft = 10; 
        alert("Time out!! :(");
    }
    if (li4.textContent === "Parantheses"){
        clearInterval(timerInterval);
    }
    else(li1.textContent && li2.textContent && li3.textContent);{
        var timeleft = 10;
        alert("Time out!! :(");
    }
    if (li4.textContent === "Console Log"){
        clearInterval(timerInterval);
    }
    else(li1.textContent && li2.textContent && li3.textContent);{
        var timeleft = 10;
        alert("Time out!! :(");
    }
    if (li3.textContent === "Alerts"){
        clearInterval(timerInterval);
    }
    else(li1.textContent && li2.textContent && li4.textContent);{
        var timeleft = 10;
        alert("Time out!! :(");
    }
})

function display(){
    if (questionIndex == 0){
        var h2EL = document.createElement("h2");
        var ulEl = document.createElement("ul");
        var li1 = document.createElement("li");
        var li2 = document.createElement("li");
        var li3 = document.createElement("li");
        var li4 = document.createElement("li");
        h2EL.textContent = "The condition in an if / else statement is enclosed within ____";
        li1.textContent = "Quotes";
        li2.textContent = "Curley Brackets";
        li3.textContent = "Paranthese";
        li4.textContent = "Square brackets";
    }
    else if (questionIndex == 1){
        var h2EL = document.createElement("h2");
        var ulEl = document.createElement("ul");
        var li1 = document.createElement("li");
        var li2 = document.createElement("li");
        var li3 = document.createElement("li");
        var li4 = document.createElement("li");
        h2EL.textContent = "Arrays in JavaScript can be used to store _____.";
        li1.textContent = "Number and Strings";
        li2.textContent = "Other Arrays";
        li3.textContent = "Booleans";
        li4.textContent = "All the Above";
    }
    else if (questionIndex == 2){
        var h2EL = document.createElement("h2");
        var ulEl = document.createElement("ul");
        var li1 = document.createElement("li");
        var li2 = document.createElement("li");
        var li3 = document.createElement("li");
        var li4 = document.createElement("li");
        h2EL.textContent = "String Values must be enclosed within _________ when being assigned to variables";
        li1.textContent = "Commas";
        li2.textContent = "Curly Brackets";
        li3.textContent = "Quotes";
        li4.textContent = "Parantheses";
    }
    else if (questionIndex == 3){
        var h2EL = document.createElement("h2");
        var ulEl = document.createElement("ul");
        var li1 = document.createElement("li");
        var li2 = document.createElement("li");
        var li3 = document.createElement("li");
        var li4 = document.createElement("li");
        h2EL.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
        li1.textContent = "JavaScript";
        li2.textContent = "Terminal/Bash";
        li3.textContent = "For Loops";
        li4.textContent = "Console log";
    }
    else if (questionIndex == 4){
        var h2EL = document.createElement("h2");
        var ulEl = document.createElement("ul");
        var li1 = document.createElement("li");
        var li2 = document.createElement("li");
        var li3 = document.createElement("li");
        var li4 = document.createElement("li");
        h2EL.textContent = "Commonly used data types do not include;";
        li1.textContent = "Strings";
        li2.textContent = "Booleans";
        li3.textContent = "Alerts";
        li4.textContent = "Numbers";
    }
    
    li1.addEventListener("click", check);
    li2.addEventListener("click", check);
    li3.addEventListener("click", check);
    li4.addEventListener("click", check);

    var question = document.getElementById('question');
    question.innerHTML="";
    question.append(h2EL);
    ulEl.append(li1);
    ulEl.append(li2);
    ulEl.append(li3);
    ulEl.append(li4);
    question.append(ulEl);

    questionIndex++;
}

function renderQuestions(){
    questions.innerHTML = questionArr[i].question;
    choiceA.innerHTML = questionArr[i].choiceA;
    choiceB.innerHTML = questionArr[i].choiceB;
    choiceC.innerHTML = questionArr[i].choiceC;
};

function check(event){
    console.log(event.target.textContent)
    var quizAnswers = (answersScore('Curely Bracekets') + answersScore('All of the Above') + answersScore('Console Log') + answersScore('Alerts'));
    return quizAnswers;
}

function showScore(){
    var gameOverHTML = "<h1>Results</h1>";
    gameOverHTML += "<h2 id = 'score'> Your scores:" + quiz.score + "</h2>";
    var element = document.getElementById("LenderHighScore");
    element.innerHTML = gameOverHTML;
}
var quiz = startQuiz(questionIndex);