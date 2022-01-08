

// Setup
function getURLParameters() {
    function paramsToObject(entries) {
      const result = {}
      for(const [key, value] of entries) { // each 'entry' is a [key, value] tupple
        result[key] = value;
      }
      return result;
    }
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    return paramsToObject(urlParams)
}
function getSetupPlayerData() {
	const urlParams = getURLParameters()
	if (urlParams['lobby-code'] == null || urlParams['name'] == null) {
		goToErrorPage()
		return
	}
    const player = {
        lobbyCode: urlParams['lobby-code'],
        name: urlParams['name']
    }
    return player
}



// Navigation
function get(query) {
    return document.querySelector(query)
}

function toggleDiv(id) {
    const allDivs = [...document.querySelectorAll('.togglable-div')]
    for (let div of allDivs) {
        div.style.display = 'none'
    }
    const elem = document.getElementById(id)
    elem.style.display = ''
}



// Tech
const dom = function (str, clickListeners) {
    const doc = new DOMParser().parseFromString(str, 'text/html');
    const firstDiv = doc.body.firstChild;
    for (const listenerName of Object.keys(clickListeners)) {
        console.log(`Checking listener name: ${listenerName}`)
        console.log(firstDiv.querySelectorAll(listenerName))
        for (const elem of Array.from(firstDiv.querySelectorAll(listenerName))) {
            elem.addEventListener('click', () => {
                clickListeners[listenerName](firstDiv)
            })
        }
    }
    parseBinding(firstDiv)
	return firstDiv
};

// Sets up a dom elem to always be bound to the value of another elem
// Syntax: data-bind-to-value=".my-input"
// The search for the input/form/textarea is always bottom to top
// It will find the closest element with that selector
function parseBinding(domElem) {
    function findBoundElem(elem, selector) {
        const currentParent = elem
        while (currentParent != null) {
            const valueElemAttempt = currentParent.querySelector(selector)
            if (valueElemAttempt != null) {
                return valueElemAttempt
            } else {
                currentParent = currentParent.parentNode
            }
        }
        return null
    }
    const allBoundElems = domElem.querySelectorAll('[data-bind-to-value]')
    for (const elem of allBoundElems) {
        const valueElemSelector = elem.getAttribute('data-bind-to-value')
        let valueElem = findBoundElem(elem, valueElemSelector)  // Search in the element
        if (valueElem == null)
            valueElem = findBoundElem(document.body, valueElemSelector) // Search in body
        if (valueElem == null) {
            throw(`No element with selector "${valueElemSelector}" found to bind value for dom element ${domElem}`)
        }
        valueElem.addEventListener('input', () => {
            elem.innerText = valueElem.value
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    parseBinding(document.body)
})




function isTextInvalid(text) {
    if (text == null) return true
    if (!/\S/.test(text)) return true
    return false
}



// Fluff
function reddenInput(input) {
    input.style.border = 'solid red 1px'
}
function unreddenInput(input) {
    input.style.border = ''
}











// Cordova
function cordovaCreateFile() {
    const type = window.TEMPORARY
    const size = 5 * 1024 * 1024

    window.requestFileSystem(type, size, fs => {
        fs.root.getFile('myFile.txt', { create: true, exclusive: true }, file => {
            alert('Successfully created file!')
        }, () => {alert('Error')})
    }, (error) => {
        alert(error.code)
    })
}