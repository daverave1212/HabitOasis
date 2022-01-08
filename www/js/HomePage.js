

let currentTaskDomForPopup

// Worked on task today?
function showWorkedOnTaskPopup(taskDom) {
    get('#Have-You-Worked-Popup').style.display = ''
    get('#Have-You-Worked-Popup .home-popup-task-name').innerText = getTaskName(taskDom)
    currentTaskDomForPopup = taskDom
}
function hideWorkedOnTaskPopup() {
    get('#Have-You-Worked-Popup').style.display = 'none'
}


function onYesWorkedOnTaskClick() {
    decrementTaskDays(currentTaskDomForPopup)
    hideWorkedOnTaskPopup()
    if (getTaskDays(currentTaskDomForPopup) <= 0) {
        currentTaskDomForPopup.remove()
        showCongratulationsPopup()
    }
}
function onNoWorkedOnTaskClick() {
    hideWorkedOnTaskPopup()
    showRestartTaskPopup()
}






// Restart task?
function showRestartTaskPopup() {
    get('#Would-You-Like-To-Restart-Popup').style.display = ''
    get('#Would-You-Like-To-Restart-Popup .home-popup-task-name').innerText = getTaskName(currentTaskDomForPopup)
}
function hideRestartTaskPopup() {
    get('#Would-You-Like-To-Restart-Popup').style.display = 'none'
}

function onYesRestartTaskClick() {
    resetTaskDays(currentTaskDomForPopup)
    hideRestartTaskPopup()
}
function onNoRestartTaskClick() {
    currentTaskDomForPopup.remove()
    hideRestartTaskPopup()
}


// Congratulations!
function showCongratulationsPopup() {
    get('#Congratulations-Popup').style.display = ''
}
function hideCongratulationsPopup() {
    get('#Congratulations-Popup').style.display = 'none'
}