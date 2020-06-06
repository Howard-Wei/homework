import './index.scss'
import './assets/fonts/Sauce Code Powerline Light.otf'
import createImg from './libs/createImg'
import Logo from './assets/img/logo.png'
import Happy from './assets/img/happy.jpg'


let imgContainer = document.createElement('div')
imgContainer.appendChild(createImg(Happy))
imgContainer.appendChild(createImg(Logo))

document.body.appendChild(imgContainer)