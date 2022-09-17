let timeEl = document.getElementById("timer")
let defuserEl = document.getElementById("defuser")

let countdown = 10
let intervalId = setInterval(function(){
    countdown = countdown - 1
    timeEl.textContent = countdown
    if(countdown === 0) {
        timeEl.textContent = "BOOM!"
        clearInterval(intervalId)
    }
}, 1000)

defuserEl.addEventListener("keydown", function(event){
    let bomDefuserText = defuserEl.value 
    if (event.key === "Enter" && bomDefuserText === "defuse" && countdown !== 0) {
        timeEl.textContent = "You did it!!!!"
        clearInterval(intervalId)
    }
})

  