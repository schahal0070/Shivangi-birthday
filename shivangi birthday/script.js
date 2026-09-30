/* =========================
   ELEMENTS
========================= */

const introScreen =
    document.getElementById("introScreen");

const enterButton =
    document.getElementById("enterButton");

const birthdayScreen =
    document.getElementById("birthdayScreen");

const cake =
    document.getElementById("cake");

const clickText =
    document.getElementById("clickText");

const tapArrow =
    document.getElementById("tapArrow");

const wishMessage =
    document.getElementById("wishMessage");

const countdown =
    document.getElementById("countdown");

const universeSection =
    document.getElementById("universeSection");

const messageCard =
    document.getElementById("messageCard");

const messageOverlay =
    document.getElementById("messageOverlay");

const closeMessage =
    document.getElementById("closeMessage");
const quizCard =
    document.getElementById("quizCard");

const quizOverlay =
    document.getElementById("quizOverlay");

const closeQuiz =
    document.getElementById("closeQuiz");

const quizProgress =
    document.getElementById("quizProgress");

const quizQuestion =
    document.getElementById("quizQuestion");

const quizOptions =
    document.getElementById("quizOptions");

const nextQuestion =
    document.getElementById("nextQuestion");

const quizResult =
    document.getElementById("quizResult");

const awardsCard =
    document.getElementById("awardsCard");

const awardsOverlay =
    document.getElementById("awardsOverlay");

const closeAwards =
    document.getElementById("closeAwards");

const mysteryCard =
    document.getElementById("mysteryCard");

const mysteryOverlay =
    document.getElementById("mysteryOverlay");

const closeMystery =
    document.getElementById("closeMystery");

const openGift =
    document.getElementById("openGift");

const mysteryGift =
    document.getElementById("mysteryGift");

const mysteryStep1 =
    document.getElementById("mysteryStep1");

const mysteryStep2 =
    document.getElementById("mysteryStep2");

const mysteryStep3 =
    document.getElementById("mysteryStep3");

const mysteryStep4 =
    document.getElementById("mysteryStep4");

const moreMemories =
    document.getElementById("moreMemories");

const nextMemory =
    document.getElementById("nextMemory");

const memoryText =
    document.getElementById("memoryText");

const finalMessageOverlay =
    document.getElementById("finalMessageOverlay");

const closeFinalMessage =
    document.getElementById("closeFinalMessage");

/* =========================
   VARIABLES
========================= */

let cakeClicked = false;


/* =========================
   ENTER BUTTON
========================= */

enterButton.addEventListener("click", () => {

    introScreen.classList.add("hide");

    birthdayScreen.classList.add("show");

});


/* =========================
   CAKE
   ONLY ONE CLICK
========================= */

cake.addEventListener("click", () => {

    /* 
       If she somehow clicks again,
       absolutely nothing happens.
    */

    if (cakeClicked) {
        return;
    }


    cakeClicked = true;


    /* Remove tap instruction */

    clickText.innerText =
        "✨ NOW MAKE A WISH ✨";


    tapArrow.style.display =
        "none";


    /* Stop cake bouncing */

    cake.style.animation =
        "none";


    cake.style.transform =
        "scale(1.15)";


    /* Show wish message */

    wishMessage.classList.add("show");


    /* Start 3-2-1 */

    startCountdown();

});


/* =========================
   COUNTDOWN
========================= */

function startCountdown() {

    const numbers = [
        "3",
        "2",
        "1"
    ];


    let index = 0;


    /* First number */

    countdown.innerText =
        numbers[index];


    countdown.classList.add("show");


    const timer =
        setInterval(() => {

            index++;


            /* Show next number */

            if (index < numbers.length) {

                countdown.classList.remove("show");


                /*
                   Force browser to restart
                   the animation.
                */

                void countdown.offsetWidth;


                countdown.innerText =
                    numbers[index];


                countdown.classList.add("show");

            }


            /* Countdown finished */

            else {

                clearInterval(timer);


                countdown.classList.remove("show");


                countdown.innerText =
                    "";


                setTimeout(() => {

                    showHappyBirthday();

                }, 400);

            }

        }, 1000);

}


/* =========================
   HAPPY BIRTHDAY
========================= */

function showHappyBirthday() {

    /* Hide wish message */

    wishMessage.classList.remove("show");


    /* Hide countdown */

    countdown.classList.remove("show");

    countdown.innerText = "";


    /* Birthday message */

    clickText.innerText =
        "🎉 HAPPY BIRTHDAY SHIVANGI!!! 🎉";


    clickText.style.color =
        "#fff36d";


    clickText.style.fontSize =
        "24px";


    clickText.style.letterSpacing =
        "1px";


    /* Cake celebration */

    cake.style.transform =
        "scale(1.3)";


    /* Confetti */

    createConfetti();


    /* Open Universe automatically */

    setTimeout(() => {

        universeSection.classList.add("show");

    }, 2500);

}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const emojis = [
        "🎉",
        "✨",
        "💗",
        "⭐",
        "🎀",
        "💫",
        "🥳",
        "💕"
    ];


    for (let i = 0; i < 140; i++) {

        const confetti =
            document.createElement("div");


        confetti.innerText =
            emojis[
            Math.floor(
                Math.random() *
                emojis.length
            )
            ];


        confetti.style.position =
            "fixed";


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.top =
            "-40px";


        confetti.style.fontSize =
            Math.random() * 22 + 14 + "px";


        confetti.style.zIndex =
            "2000";


        confetti.style.pointerEvents =
            "none";


        confetti.style.transition =
            "top 2.5s linear, transform 2.5s linear, opacity 2.5s";


        document.body.appendChild(
            confetti
        );


        setTimeout(() => {

            confetti.style.top =
                "110vh";


            confetti.style.transform =
                `rotate(${Math.random() * 1000}deg)`;


            confetti.style.opacity =
                "0";

        }, 50);


        setTimeout(() => {

            confetti.remove();

        }, 2800);

    }

}
/* =========================
   MESSAGE
========================= */

messageCard.addEventListener("click", () => {

    messageOverlay.classList.add("show");

});


closeMessage.addEventListener("click", () => {

    messageOverlay.classList.remove("show");

});


messageOverlay.addEventListener("click", (event) => {

    if (event.target === messageOverlay) {

        messageOverlay.classList.remove("show");

    }

});
/* =========================
   AAKASH QUIZ
========================= */

const quizQuestions = [

    {
        question: "Who was the most boring / pakau teacher? 😭",
        options: [
            "SantRam",
            "Rakesh Bhaiya",
            "Vikas Sir",
            "Sanjay Bhaiya"
        ],
        answer: 0
    },

    {
        question: "Who was our mentor? 👀",
        options: [
            "Nishat Ma'am",
            "Anant Ma'am",
            "Vikas Sir",
            "SantRam"
        ],
        answer: 1
    },

    {
        question: "Who was always living in her own shadi ke khwab? 💭",
        options: [
            "Anant Ma'am",
            "Nishat Ma'am",
            "Sanjay Bhaiya",
            "Rakesh Bhaiya"
        ],
        answer: 1
    },

    {
        question: "Who kept an eye on basically EVERY student? 👀",
        options: [
            "Vikas Sir",
            "Rakesh Bhaiya",
            "Sanjay Bhaiya",
            "SantRam"
        ],
        answer: 2
    },

    {
        question: "Who was the cool one? 😎",
        options: [
            "Rakesh Bhaiya",
            "SantRam",
            "Sanjay Bhaiya",
            "Nishat Ma'am"
        ],
        answer: 0
    },

    {
        question: "Which teacher was the most cool physics teacher? 👀",
        options: [
            "SantRam",
            "Vikas Sir",
            "Babulal",
            "Anant Ma'am"
        ],
        answer: 1
    },

    {
        question: "What did we spend A LOT of time doing? 😭",
        options: [
            "Studying peacefully",
            "Staybacks",
            "Going home early",
            "Sleeping in class"
        ],
        answer: 1
    },

    {
        question: "Who was the funniest teacher? 😂",
        options: [
            "Nishat",
            "Anant",
            "Vikas",
            "Babulal"
        ],
        answer: 3
    },

    {
        question: "Who sent us out of the class? 😭",
        options: [
            "Nishattt",
            "Babuuuuulal",
            "Anantwaaa",
            "Santram"
        ],
        answer: 1
    },

    {
        question: "Which one describes our Aakash era best? 💀",
        options: [
            "Very serious students",
            "Always on time",
            "Random chaos",
            "Never talking"
        ],
        answer: 2
    },

    {
        question: "How long have we been stuck with each other? 😭",
        options: [
            "Since 11th",
            "Since college",
            "Since yesterday",
            "I don't remember 💀"
        ],
        answer: 0
    },

    {
        question: "Most important question: are you still my bestie? 🥹",
        options: [
            "Obviously ❤️",
            "No",
            "Maybe",
            "I need to think"
        ],
        answer: 0
    }

];


let currentQuestion = 0;
let quizScore = 0;
let answerSelected = false;


/* OPEN QUIZ */

quizCard.addEventListener("click", () => {

    quizOverlay.classList.add("show");

    currentQuestion = 0;
    quizScore = 0;

    showQuestion();

});


/* SHOW QUESTION */

function showQuestion() {

    answerSelected = false;

    const question =
        quizQuestions[currentQuestion];

    quizProgress.innerText =
        `Question ${currentQuestion + 1} / ${quizQuestions.length}`;

    quizQuestion.innerText =
        question.question;

    quizOptions.innerHTML = "";

    quizResult.style.display =
        "none";

    nextQuestion.style.display =
        "none";


    question.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.className =
            "quiz-option";

        button.innerText =
            option;

        button.addEventListener("click", () => {

            selectAnswer(
                button,
                index
            );

        });

        quizOptions.appendChild(button);

    });

}


/* SELECT ANSWER */

function selectAnswer(button, selectedIndex) {

    if (answerSelected) {
        return;
    }

    answerSelected = true;

    const correctIndex =
        quizQuestions[currentQuestion].answer;

    const allOptions =
        document.querySelectorAll(".quiz-option");


    allOptions.forEach((option, index) => {

        option.disabled = true;

        if (index === correctIndex) {

            option.classList.add("correct");

        }

    });


    if (selectedIndex === correctIndex) {

        quizScore++;

        button.innerText += " ✓";

    } else {

        button.classList.add("wrong");

        button.innerText += " ✗";

    }


    nextQuestion.style.display =
        "block";

}


/* NEXT QUESTION */

nextQuestion.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {

        showQuestion();

    } else {

        showQuizResult();

    }

});


/* FINAL RESULT */

function showQuizResult() {

    quizProgress.innerText =
        "QUIZ COMPLETE 🎉";

    quizQuestion.innerText =
        "";

    quizOptions.innerHTML =
        "";

    nextQuestion.style.display =
        "none";

    quizResult.style.display =
        "block";


    if (quizScore === quizQuestions.length) {

        quizResult.innerText =
            `PERFECT SCORE 😭💗 ${quizScore}/${quizQuestions.length} — okay you actually remember everything.`;

    } else if (quizScore >= 8) {

        quizResult.innerText =
            `${quizScore}/${quizQuestions.length} 💗 Okay bestie, you pass.`;

    } else if (quizScore >= 5) {

        quizResult.innerText =
            `${quizScore}/${quizQuestions.length} 😭 We need to discuss your Aakash memory.`;

    } else {

        quizResult.innerText =
            `${quizScore}/${quizQuestions.length} 💀 Were you even there?!`;

    }

}


/* CLOSE QUIZ */

closeQuiz.addEventListener("click", () => {

    quizOverlay.classList.remove("show");

});


/* CLICK OUTSIDE TO CLOSE */

quizOverlay.addEventListener("click", (event) => {

    if (event.target === quizOverlay) {

        quizOverlay.classList.remove("show");

    }

});
/* =========================
   AWARDS
========================= */

awardsCard.addEventListener("click", () => {

    awardsOverlay.classList.add("show");

});


closeAwards.addEventListener("click", () => {

    awardsOverlay.classList.remove("show");

});


awardsOverlay.addEventListener("click", (event) => {

    if (event.target === awardsOverlay) {

        awardsOverlay.classList.remove("show");

    }

});
/* =========================
   MYSTERY BOX
========================= */

const memories = [
    "Remember Aakash? 😭",
    "Remember our staybacks?",
    "And somehow we're still friends 💀",
    "More memories loading..."
];

let memoryIndex = 0;


/* OPEN MYSTERY BOX */

mysteryCard.addEventListener("click", () => {

    mysteryOverlay.classList.add("show");

    mysteryStep1.classList.remove("hidden");
    mysteryStep2.classList.add("hidden");
    mysteryStep3.classList.add("hidden");
    mysteryStep4.classList.add("hidden");

    memoryIndex = 0;

});


/* OPEN GIFT */

openGift.addEventListener("click", () => {

    mysteryGift.classList.add("shake");

    createConfetti();

    setTimeout(() => {

        mysteryStep1.classList.add("hidden");
        mysteryStep2.classList.remove("hidden");

    }, 800);

});


/* SHOW MEMORIES */

moreMemories.addEventListener("click", () => {

    mysteryStep2.classList.add("hidden");
    mysteryStep3.classList.remove("hidden");

    memoryIndex = 0;

    memoryText.innerText =
        memories[memoryIndex];

});


/* NEXT MEMORY */

nextMemory.addEventListener("click", () => {

    memoryIndex++;

    if (memoryIndex < memories.length) {

        memoryText.style.opacity = "0";

        setTimeout(() => {

            memoryText.innerText =
                memories[memoryIndex];

            memoryText.style.opacity = "1";

        }, 200);

    } else {

    mysteryStep3.classList.add("hidden");
    mysteryStep4.classList.remove("hidden");

    createConfetti();

    setTimeout(() => {

        mysteryOverlay.classList.remove("show");

        setTimeout(() => {

            finalMessageOverlay.classList.add("show");

        }, 500);

    }, 2500);

}

});


/* CLOSE */

closeMystery.addEventListener("click", () => {

    mysteryOverlay.classList.remove("show");

});


/* CLICK OUTSIDE */

mysteryOverlay.addEventListener("click", (event) => {

    if (event.target === mysteryOverlay) {

        mysteryOverlay.classList.remove("show");

    }

});
/* =========================
   FINAL MESSAGE
========================= */

closeFinalMessage.addEventListener("click", () => {

    finalMessageOverlay.classList.remove("show");

});