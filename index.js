let homeFoulCount = 0
let guestFoulCount = 0
let homeScoreCount = 0
let guestScoreCount = 0
let homeScore = document.getElementById("teamScoreHome")
let guestScore = document.getElementById("teamScoreGuest")
let foulCountHome = document.getElementById("foulCountHome")
let foulCountGuest = document.getElementById("foulCountGuest")

function addOneHome() {
    homeScoreCount += 1
    homeScore.textContent = homeScoreCount
}

function addTwoHome() {
    homeScoreCount += 2
    homeScore.textContent = homeScoreCount
}

function addThreeHome() {
    homeScoreCount += 3
    homeScore.textContent = homeScoreCount
}

function addOneGuest() {
    guestScoreCount += 1
    guestScore.textContent = guestScoreCount
}

function addTwoGuest() {
    guestScoreCount += 2
    guestScore.textContent = guestScoreCount
}

function addThreeGuest() {
    guestScoreCount += 3
    guestScore.textContent = guestScoreCount
}

function addFoulHome() {
    homeFoulCount += 1
    foulCountHome.textContent = homeFoulCount
}

function addFoulGuest() {
    guestFoulCount += 1
    foulCountGuest.textContent = guestFoulCount
}

function newGame() {
    guestFoulCount = 0
    homeFoulCount = 0
    homeScoreCount = 0
    guestScoreCount = 0
    homeScore.textContent = homeScoreCount
    foulCountHome.textContent = homeFoulCount
    guestScore.textContent = guestScoreCount
    foulCountGuest.textContent = guestFoulCount
}