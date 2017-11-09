import '../styles/main.css';

import Icon from './modules/icons' /* load it first, (before your actual component styles in this case : index.css), to maintain css class override  */
import './index.css';

import App from './modules/index'
import CrayonIcon from '../img/icons/svg/crayon.svg'
import FaceBookIcon from '../img/icons/svg/fb-like.svg'
import CircleIcon from '../img/icons/svg/circle__stroke.svg'


window.onload = () => {
	let DOM = document.getElementById('__app')
	DOM.innerHTML = `<h1>Hello World, I'm ${App.name}</h1>
	<p>This is an example of an icon es6 Javascript module using webpack loader to clean svg files and create svg sprite.</p>

	<h2>Guideline for your integration:</h2>
	<ol>
		<li>Import the icon modules <div class="demo-code">import Icon from './modules/icons'</div></li>
		<li>Import the image of the icon <div class="demo-code">import CrayonIcon from '../img/icons/svg/crayon.svg'</div></li>
		<li>Add your icon in your page <div class="demo-code">document.getElementById('myContainer').innerHTML =`+ '`${Icon.renderer({symbol:CrayonIcon})}`'+`</div></li>
	</ol>

	<h2>Parameters: </h2>
	<ul>
		<li>symbol : required</li>
		<li>customClass : optional</li>
		<li>stroke : optional</li>
		<li>small : optional</li>
		<li>large : optional</li>

	</ul>

	<h3>Examples:</h3>
	Default : ${Icon.renderer({symbol:FaceBookIcon})} </br>
	With Custom CSS Class : ${Icon.renderer({symbol:FaceBookIcon, customClass:'custom-class-named-test'})} </br>
	Default : ${Icon.renderer({symbol:CrayonIcon})} </br>
	Small : ${Icon.renderer({symbol:CrayonIcon, small:true})} </br>
	Large : ${Icon.renderer({symbol:CrayonIcon, large:true})} </br>
	With Custom CSS Class : ${Icon.renderer({symbol:CrayonIcon, customClass:'custom-class-named-test3'})} </br>
	As stroke : ${Icon.renderer({symbol:CircleIcon, stroke:true})} </br>
	As stroke + Custom CSS Class : ${Icon.renderer({symbol:CircleIcon, customClass:'custom-class-named-test4', stroke:true})}
	`
};
