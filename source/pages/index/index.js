import createMenu from '../../components/menu/menu';
import 'normalize.css';
import './index.scss';
let menu = createMenu(['Главная', 'Блог'], 'menu');
document.body.appendChild(menu);

$(document).ready(function() {
  alert('check');
});