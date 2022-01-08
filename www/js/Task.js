


function Task({ name, days, hour, minute, description, daysPeriod, daysRemind }) {
    const taskDom = dom(`
        <div class="task">
            <div class="task-name-days-box">
                <div class="task-name">${name}</div>
                <div class="task__days-box">
                    <div class="task__days-box__days-left"><span class="days-left-span" data-initial-value="${days}">${days}</span> days left</div>
                    <button class="task__days-box__plus">+</button>
                </div>
            </div>
            <div class="task-misc-box" style="display: none;">
                <div class="task-misc-box-description">
                    <textarea class="task-description">${description}</textarea>
                    <div class="task-edit-delete-box">
                        <button class="task-edit-button">Edit</button>
                        <button class="task-delete-button">Delete</button>
                    </div>
                </div>
                <div class="task-misc-box-time-and-period">
                    <button class="task-misc-box-hour">${hour}:${minute}</button>
                    <button class="task-misc-box-period">
                        <span class="task-misc-box-period-days">${daysPeriod}</span>
                        (<span class="task-misc-box-period-remind">${daysRemind}</span>)
                    </button>
                <div>
            </div>
        </div>
    `, {
        '.task__days-box__plus': task => {
            showWorkedOnTaskPopup(task)
        },
        '.task-name': task => {
            foldAllTasks()
            expandTask(task)
        },
        '.task-misc-box-hour': task => {
            showTimePopup('existing-task', task)
        },
        '.task-misc-box-period': task => {
            showPeriodPopup('existing-task', task)
        }
    })
    return taskDom
}

const allTaskOptions = []
function addTask(options) {
    get('.tasks-container').appendChild(Task(options))
    allTaskOptions.push(options)
    window.localStorage.setItem('allTaskOptions', JSON.stringify(allTaskOptions))
}

function getTaskName(taskDom) {
    return taskDom.querySelector('.task-name').innerText
}
function getTaskDays(taskDom) {
    return parseInt(taskDom.querySelector('.days-left-span').innerText)
}


function decrementTaskDays(taskDom) {
    const currentDays = getTaskDays(taskDom)
    taskDom.querySelector('.days-left-span').innerText = currentDays - 1
}
function resetTaskDays(taskDom) {
    const initialDays = taskDom.querySelector('.days-left-span').getAttribute('data-initial-value')
    taskDom.querySelector('.days-left-span').innerText = initialDays
}

function foldAllTasks() {
    for (const elem of document.querySelectorAll('.task-misc-box')) {
        elem.style.display = 'none'
    }
}
function expandTask(taskDom) {
    taskDom.querySelector('.task-misc-box').style.display = ''
}

