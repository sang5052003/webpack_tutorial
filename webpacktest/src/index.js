import _ from 'lodash'
import './style.css'
import DogImg from './dog.jpg'

function component() {
    var element = document.createElement('div')
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    
    //add style
    element.classList.add('hello')
    
    //add img
    var dog = new Image()
    dog.src = DogImg
    element.appendChild(dog)
    
    return element
}

document.body.appendChild(component())