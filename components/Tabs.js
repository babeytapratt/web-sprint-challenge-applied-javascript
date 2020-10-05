// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const entryPoint = document.querySelector('.topics')

function tabMaker(object) {

    const tabs = document.createElement('div')
    const tab1 = document.createElement('button')
    const tab2 = document.createElement('button')
    const tab3 = document.createElement('button')
    const tab4 = document.createElement('button')
    const tab5 = document.createElement('button')

    tabs.appendChild(tab1)
    tabs.appendChild(tab2)
    tabs.appendChild(tab3)
    tabs.appendChild(tab4)
    tabs.appendChild(tab5)

    tab1.classList.add('active-tab')
    tab2.classList.add('active-tab')
    tab3.classList.add('active-tab')
    tab4.classList.add('active-tab')
    tab5.classList.add('active-tab')

    tab1.textContent = object.topics[0]
    tab2.textContent = object.topics[1]
    tab3.textContent = object.topics[2]
    tab4.textContent = object.topics[3]
    tab5.textContent = object.topics[4]

    return tabs
}

    axios.get(`https://lambda-times-api.herokuapp.com/topics`)
        .then(res => {

        const tabContent = tabMaker(res.data)
        entryPoint.append(tabContent)
        })
