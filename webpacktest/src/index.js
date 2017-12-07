import _ from 'lodash'
import printMe from './print.js'

function component() {
    var element = document.createElement('div')
    
    //
    var btn = document.createElement('button')
    
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    
    //
    btn.innerHTML = 'Click, check console'
    btn.onclick = printMe
    element.appendChild(btn)
    
    return element
}

document.body.appendChild(component())

//when a change inside print.js is detected we tell webpack to accept the updated module.
if(module.hot) {
    module.hot.accept('./print.js', function() {
        consoel.log('Accepting the updated printMe module')
        printMe()
    })
}