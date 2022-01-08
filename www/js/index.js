/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function initApp() {
    document.querySelector('.App').style.display = ''

    showPage('Login-Page')

    const today = new Date()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    get('.current-date-week-day').innerText = days[today.getDay()]
    get('.current-date-full-date').innerText = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`

    const allTaskOptionsJSON = window.localStorage.getItem('allTaskOptions')
    const allTaskOptions = JSON.parse(allTaskOptionsJSON)
    if (allTaskOptions != null) {
        for (const taskData of allTaskOptions) {
            addTask(taskData)
        }
    }

    const username = window.localStorage.getItem('username')
    if (username != null) {
        get('.login-input').value = username
    }
}

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    initApp()
}

if (!window.cordova) {
    initApp()
}





function login() {
    const username = get('.login-input').value
    get('.welcome-back-user-name').innerText = username
    showPage('Home-Page')
    window.localStorage.setItem('username', username)
}

function showPage(elementIdOfPage) {
    toggleDiv(elementIdOfPage)
    const elem = document.getElementById(elementIdOfPage)
    
    if (elem.getAttribute('data-has-footer') == 'true') {
        get('.footer-cadre').style.display = ''
        get('.footer-bottom').style.display = ''
    } else {
        get('.footer-cadre').style.display = 'none'
        get('.footer-bottom').style.display = 'none'
    }

    if (elem.getAttribute('data-footer-cadre-height') != null) {
        get('.footer-cadre').style.height = elem.getAttribute('data-footer-cadre-height')
    } else {
        get('.footer-cadre').style.height = ''
    }


    if (elem.getAttribute('data-footer-has-button') == 'true') {
        get('.footer-middle-button').style.display = ''
    } else {
        get('.footer-middle-button').style.display = 'none'
    }
}
