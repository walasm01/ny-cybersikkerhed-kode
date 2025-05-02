'use strict';

const startingSlide = document.querySelector('#starting-slide');

const btns = document.querySelectorAll('.btn-group button');
const btns1 = document.querySelectorAll('#btns1 button');
const btns2 = document.querySelectorAll('#btns2 button');
const btns3 = document.querySelectorAll('#btns3 button');

const scenario1 = document.querySelector('#scenario1');
const scenario2 = document.querySelector('#scenario2');
const scenario3 = document.querySelector('#scenario3');
const feedbackSlide = document.querySelector('#feedback-slide');
const feedbackText = document.querySelector('#feedback-slide p');


// Når knapperne trykkes, kaldes funktionen "start"
btns.forEach(btn => {
    btn.addEventListener('click', start);
});

// Funktionen "start" fører brugeren til 1. scenarie
function start (e) {
    if (e.target.id == 'start-btn') {
        console.log('Let the games begin');
        startingSlide.classList.add('hidden');
        scenario1.classList.remove('hidden');

        btns.forEach (btn => {
            btn.addEventListener('click', funcScenario1);
        });
    };
};

// Funktionen for 1. scenarie. Inde i denne funktion har vi funktionerne for udfaldene også. Dette giver et bedre overblik over koden.
function funcScenario1 (e) {

    if (e.target == btns1[0]) {
        console.log('første valg for 1. scenarie');
        scenario1.classList.add('hidden');
        feedbackSlide.classList.remove('hidden');
        feedbackText.innerText = 'Beskeden var et forsøg på phishing, og du ignorerede den.\n\n Du har dog ikke sikret dig, om MobilePay faktisk skulle bruge dine oplysninger, hvilket er hensynsløst.\n\n Det rigtige valg havde været at tjekke om du havde fået nogle krav på oplysninger på MobilePay-appen.';
        feedbackText.style.color = '#FFE17E';

        btns.forEach(btn => {
            btn.addEventListener('click', funcS1Udfald1);
        });

    } else if (e.target == btns1[1]) {
        console.log('andet valg for 1. scenarie');
    } else if (e.target == btns1[2]) {
        console.log('tredje valg for 1. scenarie');
    };

    // Her har vi funktionerne for udfaldene for dette scenarie.
    function funcS1Udfald1 (e) {
        if (e.target.id == 'continue-btn') {
            console.log('fortsætter til scenario 2');
            feedbackSlide.classList.add('hidden');
            scenario2.classList.remove('hidden');

            btns2.forEach(btn => {
                btn.addEventListener('click', funcScenario2);
            });
        };
    };

    function funcS1Udfald2 () {

    }

    function funcS1Udfald3 () {

    }
};

// funktionen for 2. scenarie
function funcScenario2 (e) {
    if (e.target == btns2[0]) {
        console.log('første valg for 2. scenarie');
    } else if (e.target == btns2[1]) {
        console.log('andet valg for 2. scenarie');
    } else if (e.target == btns2[2]) {
        console.log('tredje valg for 2. scenarie');
    };
}

function funcScenario3 () {

}