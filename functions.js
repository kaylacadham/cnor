//GLOBAL

//Set the countdown dates
var connorsBirthday = new Date("Jun 3, 2025 00:00:00").getTime();
var endBirthday = new Date("Jun 4, 2025 00:00:00").getTime();

//track how many times button has been clicked
var timesClicked = 0;

//get today's date
var now = new Date().getTime();

//FUNCTIONS
function checkIfBirthday() {

    if (now > connorsBirthday && now < endBirthday) {
        //set the birthday message
        if (timesClicked > 0) {
            document.getElementById("message1").innerHTML=getBirthdayMessage();
        } else {
            document.getElementById("message1").innerHTML="IT'S YOUR BIRTHDAY!! Okaaaay let's go!!";
        }
        //set the countdown message
        document.getElementById("countdownMessage").innerHTML="Enjoy it while it lasts.";
        //set countdown
        document.getElementById("countdown").innerHTML=getCountdown(endBirthday);
    } else {
        //set waiting message
        document.getElementById("message1").innerHTML=getMessage();
        //set countdown message
        document.getElementById("countdownMessage").innerHTML="Try again in a bit!";
        //set countdown
        document.getElementById("countdown").innerHTML=getCountdown(connorsBirthday);
    }    

    //set the button label
    document.getElementById("button1").innerHTML="How About Now?";

    //increment the click count
    timesClicked++;
}

function getCountdown(countDownDate) {
    //update the current time
    now = new Date().getTime();

    //find time left between now and countdown date
    var timeLeft = countDownDate - now;

    //Time calculations
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000); 

    //Output the result in the element
    var result = days + "d " + hours + "h "
     + minutes + "m " + seconds + "s ";
    return result;
}

function getBirthdayMessage() {
    var msg;
    switch (true) {
        case timesClicked<5:
            msg = "You betcha! It's not over yet!"
            break;

        case timesClicked<10:
            msg = "YES SIR, you're still the Birthday Boy!"
            break;

        case timesClicked<50:
            msg = "Okay RELAX. Go eat some cake."
            break;
    
        default:
            msg = "YEP! It's still your Birthday!"
            break;
    }
    return msg;
}

function getMessage() {
    var msg;
    switch (true) {
        case timesClicked<5:
            msg = "It's not your Birthday yet!"
            break;

        case timesClicked<10:
            msg = "Um, sorry still not your birthday."
            break;

        case timesClicked<50:
            msg = "Okay RELAX. We'll get there."
            break;
    
        default:
            msg = "NOPE! <br> Not quite yet."
            break;
    }
    return msg;
}
