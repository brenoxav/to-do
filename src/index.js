import printMe from './print';
import './style.css';
import Logo from './webpack-logo.svg';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  btn.innerHTML = 'Click me and check the console.';
  btn.onclick = printMe;

  const logo = new Image();
  logo.src = Logo;

  element.appendChild(logo);
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
