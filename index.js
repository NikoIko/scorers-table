let homeScore = document.getElementById("score")
let guestScore = document.getElementById("guest-score")
let homePlusOne = document.getElementById("home-plus-one")
let homePlusTwo = document.getElementById("home-plus-two")
let homePlusThree = document.getElementById("home-plus-three")
let guestPlusOne = document.getElementById("guest-plus-one")
let guestPlusTwo = document.getElementById("guest-plus-two")
let guestPlusThree = document.getElementById("guest-plus-three")




let homePoints = 0
let guestPoints = 0

homePlusOne.addEventListener('click', function(){
    homePoints += 1
    homeScore.textContent = homePoints
})

homePlusTwo.addEventListener('click', function(){
    homePoints += 2
    homeScore.textContent = homePoints
})

homePlusThree.addEventListener('click', function(){
    homePoints += 3
    homeScore.textContent = homePoints
})


guestPlusOne.addEventListener('click', function(){
    guestPoints += 1
    guestScore.textContent = guestPoints
})

guestPlusTwo.addEventListener('click', function(){
    guestPoints += 2
    guestScore.textContent = guestPoints
})

guestPlusThree.addEventListener('click', function(){
    guestPoints += 3
    guestScore.textContent = guestPoints
})

function resetGame() {
    homePoints = 0
    guestPoints = 0
    homeScore.textContent = 0
    guestScore.textContent = 0
}