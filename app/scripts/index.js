import '../styles/main.css';

import App from './modules/index'

window.onload = () => {
	let DOM = document.getElementById('__app')
	DOM.innerHTML = "<h1>Hello World, I'm "+App.name+"</h1>"
};
