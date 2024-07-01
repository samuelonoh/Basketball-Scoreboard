let homeScoreboard = document.getElementById("homeScore");
let guestScoreboard = document.getElementById("guestScore");
homeCount = 0;
guestCount = 0;

function homeScore1() {
    homeCount += 1
    homeScoreboard.textContent = homeCount
}

function homeScore2() {
    homeCount += 2
    homeScoreboard.textContent = homeCount
}

function homeScore3() {
    homeCount += 3
    homeScoreboard.textContent = homeCount
}

function guestScore1() {
    guestCount += 1
    guestScoreboard.textContent = guestCount
}

function guestScore2() {
    guestCount += 2
    guestScoreboard.textContent = guestCount
}

function guestScore3() {
    guestCount += 3
    guestScoreboard.textContent = guestCount
}

function reset() {
    guestCount = 0
    homeCount = 0
    homeScoreboard.textContent = homeCount
    guestScoreboard.textContent = guestCount
}