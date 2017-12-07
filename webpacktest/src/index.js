import _ from 'lodash'
import printMe from './print.js'
import './styles.css'

if(process.env.NODE_ENV !== 'production') {
    console.log('dev mode')
}

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

//document.body.appendChild(component())
let element = component() // Store the element to re-render on print.js changes
document.body.appendChild(element)

//when a change inside print.js is detected we tell webpack to accept the updated module.
if(module.hot) {
    module.hot.accept('./print.js', function() {
        consoel.log('Accepting the updated printMe module')

        // button's onclick event handler is still bound to the original printMe function.
        // need to update that binding to the new printMe function using module.hot.accept
//        printMe()
        document.body.removeChild(element)
        element = component() // Re-render the "component" to update the click handler
        document.body.appendChild(element)
    })
}