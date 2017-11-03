import '../styles/main.css';

import App from './modules/index'

import CrayonIcon from '../img/icons/svg/crayon.svg'
import Icon from './modules/icons';


window.onload = () => {
	let DOM = document.getElementById('__app')
	DOM.innerHTML = "<h1>Hello World, I'm "+App.name+"</h1>"+Icon.renderer(CrayonIcon)
};
