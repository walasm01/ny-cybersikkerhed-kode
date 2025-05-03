'use strict';

const startingSlide = document.querySelector('#starting-slide');
const endingSlide = document.querySelector('#ending-slide');
const endingText = document.querySelector('#ending-slide p');

const btns = document.querySelectorAll('.btn-group button');
const btns1 = document.querySelectorAll('#btns1 button');
const btns2 = document.querySelectorAll('#btns2 button');
const btns3 = document.querySelectorAll('#btns3 button');

const scenario1 = document.querySelector('#scenario1');
const scenario2 = document.querySelector('#scenario2');
const scenario3 = document.querySelector('#scenario3');
const scenario4 = document.querySelector('#scenario4');

const feedbackSlide = document.querySelector('#feedback-slide');
const feedbackText = document.querySelector('#feedback-slide p');

let correctClick = 0;
let wrongClick = 0;
let ending = 0;

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

        btns1.forEach (btn => {
            btn.addEventListener('click', funcScenario1);
        });
    };
};

// Funktionen for 1. scenarie. Inde i denne funktion har vi funktionerne for udfaldene også. Dette giver et bedre overblik over koden.
function funcScenario1 (e) {
    if (e.target == btns1[0] && correctClick >= 1) {
        console.log('Du har ignoreret beskeden efter tjek på mobilepay-appen');
        scenario1.classList.add('hidden');
        feedbackSlide.classList.remove('hidden');

        feedbackText.innerText = 'Du har sikret dig at MobilePay ikke gjorde krav på oplysninger inde på appen.\n\n MobilePay ville aldrig opkræve oplysninger fra dig via et link på en SMS.\n\n Du kan derfor konkludere, at beskeden var et forsøg på phishing, altså fup.\n\n Godt klaret! :]';

        btns.forEach(btn => {
            btn.addEventListener('click', funcS1Udfald2continued);
        });

    } else if (e.target == btns1[0] && correctClick == 0) {
        console.log('første valg for 1. scenarie');
        scenario1.classList.add('hidden');
        feedbackSlide.classList.remove('hidden');
        feedbackText.innerText = 'Beskeden var et forsøg på phishing, og du ignorerede den.\n\n Du har dog ikke sikret dig, om MobilePay faktisk skulle bruge dine oplysninger, hvilket er hensynsløst. :[\n\n Det rigtige valg havde været at tjekke om du havde fået nogle krav på oplysninger på MobilePay-appen.';
        feedbackText.style.color = '#FFE17E';
        wrongClick++;

        btns.forEach(btn => {
            btn.addEventListener('click', funcS1Udfald1);
        });

    } else if (e.target == btns1[1]) {
        console.log('andet valg for 1. scenarie');
        scenario1.classList.add('hidden');
        feedbackSlide.classList.remove('hidden');
        feedbackText.innerText = 'Du er gået ind på MobilePay-appen.\n\n Du har ingen notifikationer, der fortæller dig, at du skal angive oplysninger.'

        btns.forEach(btn => {
            btn.addEventListener('click', funcS1Udfald2);
        })

    } else if (e.target == btns1[2]) {
        console.log('tredje valg for 1. scenarie');
        scenario1.classList.add('hidden');
        scenario3.classList.remove('hidden');

        btns3.forEach(btn => {
            btn.addEventListener('click', funcScenario3);
        })
    };

    // Her har vi funktionerne for udfaldene for dette scenarie.
    function funcS1Udfald1 (e) {
        if (e.target.id == 'continue-btn' &&
            ending == 0) {

            console.log('fortsætter til scenario 2');
            feedbackSlide.classList.add('hidden');
            scenario2.classList.remove('hidden');

            btns.forEach(btn => {
                btn.addEventListener('click', funcScenario2);
            });
        };
    };

    function funcS1Udfald2 (e) {
        if (e.target.id == 'continue-btn' &&
            correctClick == 0 &&
            ending == 0) {

            console.log('Du har tjekket mobilepay-appen');
            feedbackSlide.classList.add('hidden');
            scenario1.classList.remove('hidden');
            btns1[1].classList.add('hidden');
            correctClick++;

            btns.forEach(btn => {
                btn.addEventListener('click', funcScenario1);
            });
        };
    };

    function funcS1Udfald2continued (e) {
        if (e.target.id == 'continue-btn' &&
            correctClick >= 1 &&
            ending == 0) {
            console.log('Godt klaret');
            feedbackSlide.classList.add('hidden');
            scenario2.classList.remove('hidden');

            btns.forEach(btn => {
                btn.addEventListener('click', funcScenario2);
            });
        };
    };
};


// funktionen for 2. scenarie
function funcScenario2 (e) {
    if (e.target == btns2[0]) {
        console.log('første valg for 2. scenarie');
        scenario2.classList.add('hidden');
        feedbackSlide.classList.remove('hidden');
        feedbackText.innerText = 'Beskeden og linket var begge legitime.\n\n Når beskeden oplyser sporingsnummer og afsender (og afsenderen stemmer overens med, hvem du har bestilt fra), kan du godt regne med, at beskeden er legitim.\n\n Linket har også den rette URL, som fører til PostNords hjemmeside.\n\n Det er godt du er kritisk, men du fik ikke sporet pakken, som du ville. :[';
        feedbackText.style.color = '#FFE17E';
        wrongClick++;
        ending++;

        btns.forEach(btn => {
            btn.addEventListener('click', funcS2Udfald1);
        });

    } else if (e.target == btns2[1]) {
        console.log('andet valg for 2. scenarie');
        scenario2.classList.add('hidden');
        feedbackSlide.classList.remove('hidden');
        feedbackText.innerText = 'Beskeden og linket var begge legitime.\n\n Når beskeden oplyser sporingsnummer og afsender (og afsenderen stemmer overens med, hvem du har bestilt fra), kan du godt regne med, at beskeden er legitim.\n\n Linket har også den rette URL, som fører til PostNords hjemmeside.\n\n Du trykkede på det legitime link, som førte dig direkte til sporing af din pakke på PostNords hjemmeside. Ville du være 100% sikker, havde det rette valg været at gå på PostNords hjemmeside via din browser og indtaste sporingsnummeret manuelt. Det tager længere tid, men det er mere sikkert, da man aldrig burde trykke  på uopfordrede links.';
        feedbackText.style.color = '#34FF6D';
        ending++;

        btns.forEach(btn => {
            btn.addEventListener('click', funcS2Udfald1);
        });

    } else if (e.target == btns2[2]) {
        console.log('tredje valg for 2. scenarie');
        scenario2.classList.add('hidden');
        feedbackSlide.classList.remove('hidden');
        feedbackText.innerText = 'Beskeden og linket var begge legitime.\n\n Når beskeden oplyser sporingsnummer og afsender (og afsenderen stemmer overens med, hvem du har bestilt fra), kan du godt regne med, at beskeden er legitim.\n\n Linket har også den rette URL, som fører til PostNords hjemmeside.\n\n Du valgte, at gå ind på PostNords hjemmeside via din browser og indtaste sporingsnummeret manuelt.\n\n Du valgte den rute, der tog længst tid, men også den mest sikre. Godt klaret! :]';
        feedbackText.style.color = '#34FF6D';
        ending++;

        btns.forEach(btn => {
            btn.addEventListener('click', funcS2Udfald1);
        });
    };

    function funcS2Udfald1 (e) {
        if (e.target.id == 'continue-btn' && 
            wrongClick >= 1 &&
            ending >= 1) {
            
            console.log('Gul slutning');
            feedbackSlide.classList.add('hidden');
            endingSlide.classList.remove('hidden');
            endingText.innerText = 'Du er blevet udsat for 2 scenarier, hvor du skulle bruge din kritiske sans for at vurdere om beskederne var legitime eller om det var “phishing”, altså fup.\n\n Du trykkede ikke på nogle farlige links, men din kritiske sans kan få dig til at ignorere legitime beskeder. :[\n\n Du har nu forhåbentligt lært at identificere phishing-beskeder, og vigtigst af alt, at du aldrig burde klikke på uopfordrede links.';
            endingText.style.color = '#FFE17E';

            btns.forEach(btn => {
                btn.addEventListener('click', funcEnding);
            });

        } else if (e.target.id == 'continue-btn' && 
            wrongClick == 0 &&
            ending >= 1) {
            
            console.log('Grøn slutning');
            feedbackSlide.classList.add('hidden');
            endingSlide.classList.remove('hidden');
            endingText.innerText = 'Du er blevet udsat for 2 scenarier, hvor du skulle bruge din kritiske sans for at vurdere om beskederne var legitime eller om det var “phishing”, altså fup.\n\n Du har en god kritisk sans, der hjælper dig med at skelne mellem legitime beskeder og phishing.\n\n Godt klaret! :]';
            endingText.style.color = '#34FF6D';

            btns.forEach(btn => {
                btn.addEventListener('click', funcEnding);
            });
        };
    };

};

function funcScenario3 (e) {
    if (e.target == btns3[0]) {
        console.log('jeg går ud af linket');
    } else if (e.target == btns3[1]) {
        console.log('Jeg indtaster oplysningerne');
    };
};


function funcEnding (e) {
    if (e.target.id == 'again-btn') {
        location.reload();
    };
};