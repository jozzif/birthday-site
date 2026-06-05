let username = "";

const acceptedAnswers = [
    "joseph",
    "jose",
    "amimo"
];

const wrongResponses = [
    "Hmm... that's not right.",
    "The evidence disagrees.",
    "Try again, detective.",
    "Suspicious answer detected."
];

function showScreen(id){

    document
        .querySelectorAll(".screen")
        .forEach(screen=>{
            screen.classList.remove("active");
        });

    document
        .getElementById(id)
        .classList.add("active");
}

function updateProgress(percent){
    document.getElementById(
        "progress-bar"
    ).style.width = percent + "%";
}

function goToScreen2(){

    username = document
        .getElementById("nameInput")
        .value
        .trim();

    if(username === ""){
        alert("Enter your name");
        return;
    }

    showScreen("screen2");

    updateProgress(40);

    typeWriter(
        "detectiveText",
        `Hmm... ${username}, who sent you this? 🔍`
    );
}

function checkSender(){

    let answer = document
        .getElementById("senderInput")
        .value
        .trim()
        .toLowerCase();

    if(acceptedAnswers.includes(answer)){

        showScreen("screen3");

        updateProgress(60);

        document
            .getElementById("heeheeAudio")
            .play();

    }else{

        document.body.classList.add("shake");

        setTimeout(()=>{
            document.body.classList.remove("shake");
        },400);

        let random =
            wrongResponses[
                Math.floor(
                    Math.random()*wrongResponses.length
                )
            ];

        document
            .getElementById("errorMessage")
            .innerText = random;
    }
}

function goToScreen4(){

    showScreen("screen4");

    updateProgress(80);

    typeWriter(
        "ageQuestion",
        `How old are you turning today, ${username}?`
    );
}

function submitAge(){

    let age = document
        .getElementById("ageInput")
        .value;

    showScreen("screen5");

    updateProgress(100);

    launchConfetti();

    document
        .getElementById("awwwAudio")
        .play();

    document
        .getElementById("birthdayMessage")
        .innerHTML = `
        <p>
        Happy Birthday Sophia! 🎂
        </p>

        <p>
        Thank you for being such an amazing friend.
        </p>

        <p>
        May this year bring you happiness,
        success, laughter, and unforgettable memories.
        </p>

        <p>
        — Joseph
        </p>

        <br>

        <p>
        Wait... you're turning ${age}? 🤫
        </p>
    `;
}

function launchConfetti(){

    confetti({
        particleCount:200,
        spread:120
    });

    setTimeout(()=>{
        confetti({
            particleCount:200,
            spread:120
        });
    },2000);
}

function claimCake(){

    document
        .getElementById("cakeResult")
        .innerText =
        "Error 404: Cake already eaten by Joseph.";
}

function showSurprise(){

    document
        .getElementById("surpriseBox")
        .innerHTML = `
        nakujia keki and remember to eat
        pineapples so that you can be
        my smooth criminal 😂😝
        `;

    let audio =
        document.getElementById(
            "greenAudio"
        );

    audio.play();

    setTimeout(()=>{
        audio.play();
    },1500);

    setTimeout(()=>{
        audio.play();
    },3000);
}

function typeWriter(id,text){

    let i = 0;

    let speed = 40;

    let target =
        document.getElementById(id);

    target.innerHTML = "";

    let interval = setInterval(()=>{

        target.innerHTML += text.charAt(i);

        i++;

        if(i >= text.length){
            clearInterval(interval);
        }

    },speed);
}