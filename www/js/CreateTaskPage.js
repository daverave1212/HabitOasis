
function saveTask() {
    const name = get('.create-task-title').value
    const days = get('.period-days-input').value
    const hour = get('.time-input--hour').value
    const minute = get('.time-input--minute').value
    const description = get('.create-task-description').value
    const daysPeriod = get('.period-days-input').value
    const daysRemind = get('.every-x-days-input').value
    addTask({ name, days, hour, minute, description, daysPeriod, daysRemind })
    showPage('Home-Page')
}


let currentShowTimePopupTaskDom
function showTimePopup(forWhat, forWhatTaskDom=null) {
    get('#Choose-Time-Popup').style.display = ''

    const [hours, minutes] =
        forWhat == 'new-task'? get('.reminder-time').innerText.split(':') :
        forWhat == 'existing-task'? forWhatTaskDom.querySelector('.task-misc-box-hour').innerText.split(':') :
        []

    get('.time-input--hour').value = hours
    get('.time-input--minute').value = minutes
    currentShowTimePopupTaskDom = forWhatTaskDom
}
function hideTimePopup() {
    get('#Choose-Time-Popup').style.display = 'none'
}
function onSelectChooseTimePopup() {
    const time = get('.time-input--hour').value + ':' + get('.time-input--minute').value
    get('.reminder-time').innerText = time
    hideTimePopup();
}
function onCancelChooseTimePopup() {
    hideTimePopup();
}




let currentShowPeriodPopupTaskDom
function showPeriodPopup(forWhat, forWhatTaskDom=null) {
    get('#Choose-Period-Popup').style.display = ''
    console.log({forWhat})
    get('.period-days-input').value =
        forWhat == 'new-task'? '5' :
        forWhat == 'existing-task'? forWhatTaskDom.querySelector('.task-misc-box-period-days').innerText : null
    get('.every-x-days-input').value =
        forWhat == 'new-task'? '3' :
        forWhat == 'existing-task'? forWhatTaskDom.querySelector('.task-misc-box-period-remind').innerText : null
    currentShowPeriodPopupTaskDom = forWhatTaskDom
    console.log({forWhatTaskDom})
    console.log({currentShowPeriodPopupTaskDom})
}
function hidePeriodPopup() {
    get('#Choose-Period-Popup').style.display = 'none'
}
function onSelectChoosePeriodPopup() {
    hidePeriodPopup()
    if (currentShowPeriodPopupTaskDom != null) {
        const periodDays = get('.period-days-input').value
        const remindDays = get('.every-x-days-input').value
        console.log({periodDays, remindDays})
        currentShowPeriodPopupTaskDom.querySelector('.task-misc-box-period-days').innerText = periodDays
        currentShowPeriodPopupTaskDom.querySelector('.task-misc-box-period-remind').innerText = remindDays
    }
}
function onCancelChoosePeriodPopup() {
    hidePeriodPopup()
}