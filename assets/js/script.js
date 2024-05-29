/*jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", () => {
  /*questions array inlcuding answers and flag images held within the constant 'questions' variable*/
  const questions = [
    {
      flagImage: "assets/images/flags/1_cook_island.png",
      answers: [
        { text: "Cayman islands", correct: false },
        { text: "Soloman islands", correct: false },
        { text: "New Zealand", correct: false },
        { text: "Cook islands", correct: true },
      ]
    },
    {
      flagImage: "assets/images/flags/2_slovakia.png",
      answers: [
        { text: "Slovenia", correct: false },
        { text: "Slovakia", correct: true },
        { text: "Serbia", correct: false },
        { text: "Croatia", correct: false },
      ]
    },
    {
      flagImage: "assets/images/flags/3_ireland.png",
      answers: [
        { text: "Ivory Coast", correct: false },
        { text: "Northern Ireland", correct: false },
        { text: "Republic of Ireland", correct: true },
        { text: "Wales", correct: false },
      ]
    },
    {
      flagImage: "assets/images/flags/4_the_gambia.png",
      answers: [
        { text: "South Sudan", correct: false },
        { text: "Rwanda", correct: false },
        { text: "Sierra Leone", correct: false },
        { text: "The Gambia", correct: true },
      ]
    },
    {
      flagImage: "assets/images/flags/5_france.png",
      answers: [
        { text: "France", correct: true },
        { text: "Monaco", correct: false },
        { text: "Belgium", correct: false },
        { text: "Andorra", correct: false },
      ]
    },
    {
      flagImage: "assets/images/flags/6_benin.png",
      answers: [
        { text: "Bolivia", correct: false },
        { text: "Benin", correct: true },
        { text: "Sao Tome and Principe", correct: false },
        { text: "Andorra", correct: false },
      ]
    },
    {
      flagImage: "assets/images/flags/7_el_salvador.png",
      answers: [
        { text: "Honduras", correct: false },
        { text: "El Salvador", correct: true },
        { text: "Nicaragua", correct: false },
        { text: "Andorra", correct: false },
      ]
    },
    {
      flagImage: "assets/images/flags/8_turkmenistan.png",
      answers: [
        { text: "Tajikistan", correct: false },
        { text: "Turkmenistan", correct: true },
        { text: "Pakistan", correct: false },
        { text: "Kyrgyzstan", correct: false },
      ]
    },
    {
      flagImage: "assets/images/flags/9_netherlands.png",
      answers: [
        { text: "Luxembourg", correct: false },
        { text: "Netherlands", correct: true },
        { text: "Germany", correct: false },
        { text: "Lichtenstein", correct: false },
      ]
    },
    {
      flagImage: "assets/images/flags/10_indonesia.png",
      answers: [
        { text: "Luxembourg", correct: false },
        { text: "Netherlands", correct: false },
        { text: "Indonesia", correct: true },
        { text: "Lichtenstein", correct: false },
      ]
    },
    {
      flagImage: "assets/images/flags/11_austrailia.png",
      answers: [
        { text: "Fiji", correct: false },
        { text: "Australia", correct: true },
        { text: "Tonga", correct: false },
        { text: "St Helena", correct: false },
      ]
    },
    {
      flagImage: "assets/images/flags/12_chad.png",
      answers: [
        { text: "Chad", correct: true },
        { text: "Romania", correct: false },
        { text: "Benin", correct: false },
        { text: "Lithuania", correct: false },
      ]
    },
    {
      flagImage: "assets/images/flags/13_cyprus.png",
      answers: [
        { text: "Chad", correct: false },
        { text: "Romania", correct: false },
        { text: "Cyprus", correct: true },
        { text: "Lithuania", correct: false },
      ]
    },
    {
      flagImage: "assets/images/flags/14_united_kingdom.png",
      answers: [
        { text: "England", correct: false },
        { text: "United Kingdom", correct: true },
        { text: "Germany", correct: false },
        { text: "France", correct: false },
      ]
    },
    {
      flagImage: "assets/images/flags/15_trinidad_and_tobago.png",
      answers: [
        { text: "Barbados", correct: false },
        { text: "Jamaica", correct: false },
        { text: "Dominican Republic", correct: false },
        { text: "Trinidad and Tobago", correct: true },
      ]
    },
    {
      flagImage: "assets/images/flags/16_albania.png",
      answers: [
        { text: "Albania", correct: true },
        { text: "Romania", correct: false },
        { text: "Georgia", correct: false },
        { text: "Greece", correct: false },
      ]
    },
    {
      flagImage: "assets/images/flags/17_iran.png",
      answers: [
        { text: "Iraq", correct: false },
        { text: "Iran", correct: true },
        { text: "Syria", correct: false },
        { text: "Egypt", correct: false },
      ]
    },
    {
      flagImage: "assets/images/flags/18_kenya.png",
      answers: [
        { text: "Ethiopia", correct: false },
        { text: "Somalia", correct: false },
        { text: "Kenya", correct: true },
        { text: "Sudan", correct: false },
      ]
    },
    {
      flagImage: "assets/images/flags/19_finland.png",
      answers: [
        { text: "Sweden", correct: false },
        { text: "Norway", correct: false },
        { text: "Finland", correct: true },
        { text: "Iceland", correct: false },
      ]
    },
    {
      flagImage: "assets/images/flags/20_papua_new_guinea.png",
      answers: [
        { text: "New Caledonia", correct: false },
        { text: "Soloman islands", correct: false },
        { text: "East Timor", correct: false },
        { text: "Papua New Guinea", correct: true },
      ]
    },
    {
      flagImage: "assets/images/flags/21_uae.png",
      answers: [
        { text: "Kuwait", correct: false },
        { text: "Jordan", correct: false },
        { text: "UAE", correct: true },
        { text: "Yemen", correct: false },
      ]
    },
    {
      flagImage: "assets/images/flags/22_bulgaria.png",
      answers: [
        { text: "Bulgaria", correct: true },
        { text: "Hungary", correct: false },
        { text: "Romania", correct: false },
        { text: "Armenia", correct: false },
      ]
    },
    {
      flagImage: "assets/images/flags/23_estonia.png",
      answers: [
        { text: "Latvia", correct: false },
        { text: "Lithuania", correct: false },
        { text: "Estonia", correct: true },
        { text: "Belarus", correct: false },
      ]
    },
    {
      flagImage: "assets/images/flags/24_uruguay.png",
      answers: [
        { text: "Uruguay", correct: true },
        { text: "Paraguay", correct: false },
        { text: "Estonia", correct: false },
        { text: "Guatemala", correct: false },
      ]
    },
    {
      flagImage: "assets/images/flags/25_usa.png",
      answers: [
        { text: "USA", correct: true },
        { text: "Canada", correct: false },
        { text: "Mexico", correct: false },
        { text: "Malaysia", correct: false },
      ]
    }
  ];

  /*various let variables to set questionindex and correct/incorrect counts to 0 and create
   a timer variable that allows future styling and a timeLeft variable to set the time to 15 seconds*/
  let currentQuestionIndex = 0;
  let correctCount = 0;
  let incorrectCount = 0;
  let timer;
  let timeLeft = 15;

  /* constant variables created to extract html elements so they can be manipulated later on in the javascript code*/
  const flagImageElement = document.getElementById("flag-image");
  const answerButtons = Array.from(document.getElementsByClassName("answer-box"));
  const correctElement = document.getElementById("Correct");
  const incorrectElement = document.getElementById("Incorrect");
  const questionNumberElement = document.getElementById("question-number");
  const startButton = document.getElementById("start-section");
  const quizSection = document.getElementById("quiz-section");
  const endSection = document.getElementById("end-section");
  const endSectionText = document.getElementById("end-section-text");
  const restartButton = document.getElementById("restart-button");
  const nextButton = document.getElementById("next-button");
  const clockText = document.getElementById("clock-text");
  const timerElement = document.querySelector(".timer");

  /* event listener added so when the start button is clicked it will start the startQuiz function */
  startButton.addEventListener("click", startQuiz);

  /*startQuiz function that hides the startButton,
  including the introductory quiz text and reveals the quiz section as well as starting the loadQuestion function*/
  function startQuiz() {
    startButton.classList.add('hide');
    quizSection.classList.remove('hide');
    loadQuestion();
  }

  /* loadQuestion function that runs the code for each question in the questions 
  array and activates the resetTimer and startTimer functions */
  function loadQuestion() {
    timerElement.style.backgroundColor = '#78ff75';
    const currentQuestion = questions[currentQuestionIndex];
    flagImageElement.src = currentQuestion.flagImage;
    answerButtons.forEach((button, index) => {
      button.textContent = currentQuestion.answers[index].text;
      button.dataset.correct = currentQuestion.answers[index].correct;
    });
    questionNumberElement.textContent = currentQuestionIndex + 1;
    resetTimer();
    startTimer();
  }


  /*Select Answer function that runs the code for when an answer is selected by the user, 
  showing an if/else statement to distinguish between correct and incorrect selected answers
  and displaying the next button afterwards*/

  function selectAnswer(e) {
    clearInterval(timer);
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    if (correct) {
      correctCount++;
      correctElement.textContent = correctCount;
      selectedButton.classList.add("correct");
    } else {
      incorrectCount++;
      incorrectElement.textContent = incorrectCount;
      const correctButton = answerButtons.find(button => button.dataset.correct === "true");
      selectedButton.classList.add("incorrect");
      correctButton.classList.add("correct");
    }
    answerButtons.forEach(button => {
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }

  /*code that moves the user to the next question and if there are no questions left in the array, moves them to the end section*/
  function nextQuestion() {
    nextButton.style.display = "none";
    answerButtons.forEach(button => {
      button.classList.remove("correct", "incorrect");
    });
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
      answerButtons.forEach(button => {
        button.disabled = false;
      });
    } else {
      quizSection.classList.add('hide');
      endSection.classList.remove('hide');
      endSectionText.textContent = `Quiz finished !!!, You got ${correctCount} out of ${questions.length} correct!`;
      resetState();
    }
  }

  /*event listener added for the restartQuiz button to activate the restartQuiz function*/
  restartButton.addEventListener("click", restartQuiz);

  /* Reset state function to equate the correct answers to the correct count, 
    the incorrect answers to the incorrect count and the question number to the question index +1 
    as well as enabling the answer buttons again.*/
  function resetState() {
    answerButtons.forEach(button => {
      button.disabled = false;
    });
    questionNumberElement.textContent = currentQuestionIndex + 1;
    correctElement.textContent = correctCount;
    incorrectElement.textContent = incorrectCount;
  }

  /* restart Quiz function to reset incorrect and correct answers to 0, 
  the question number index to 0, and present the start button again */
  function restartQuiz() {
    currentQuestionIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
    correctElement.textContent = correctCount;
    incorrectElement.textContent = incorrectCount;
    endSection.classList.add('hide');
    startButton.classList.remove('hide');
  }
  /*start Timer function that resets the timer and assigns it different colours 
  depending on how much time is left as well as reseting the timer and activating 
  the handleTimeOut function when the timer runs out.*/
  function startTimer() {
    timeLeft = 15;
    clockText.textContent = timeLeft;
    timer = setInterval(() => {
      timeLeft--;
      if (timeLeft >= 11) {
        timerElement.style.backgroundColor = '#78ff75';
      } else if (timeLeft >= 6) {
        timerElement.style.backgroundColor = '#ffd270';
      } else if (timeLeft >= 0) {
        timerElement.style.backgroundColor = '#ec8383';
      } else if (timeLeft <= 0) {
        clearInterval(timer);
        handleTimeOut();
      }
      clockText.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        handleTimeOut();
      }
    }, 1000);
  }

  /* reset timer function to clear the timer, reset it to 15 seconds and assign the number of seconds as a text value 
  within the timer section */
  function resetTimer() {
    clearInterval(timer);
    timeLeft = 15;
    clockText.textContent = timeLeft;
  }

  /* handleTimeOut function changes the timer background, gives it the text 'Time out',
    highlights the correct answer and adds 1 to the incorrect answers, disables the answers 
    and activates the selectAnswer&nextQuestion following clicks on the next button and 
    answer buttons, the latter loading the next question in the quesion array*/

  function handleTimeOut() {
    timerElement.style.backgroundColor = '#8ae8f5';
    clockText.innerHTML = "Time Out";
    incorrectCount++;
    incorrectElement.textContent = incorrectCount;
    const correctButton = answerButtons.find(button => button.dataset.correct === "true");
    correctButton.classList.add("correct");
    answerButtons.forEach(button => {
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }
  answerButtons.forEach(button => {
    button.addEventListener("click", selectAnswer);
  });
  nextButton.addEventListener("click", nextQuestion);
  loadQuestion();
});
