import './index.scss'
import './assets/fonts/Sauce Code Powerline Light.otf'
import Logo from './assets/img/logo.png'
import Happy from './assets/img/happy.jpg'


let imgContainer = document.createElement('div')

let happyImg = document.createElement('img')
happyImg.setAttribute('src', Happy)
imgContainer.appendChild(happyImg)

let logoImg = document.createElement('img')
logoImg.setAttribute('src', Logo)
imgContainer.appendChild(logoImg)

document.body.appendChild(imgContainer)