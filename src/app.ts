import './styles.css';
import { getFullYear, getAppPrefix } from './utils';

const main = () => {
  window.addEventListener('load', () => {
    let year = document.getElementById('year');
    year.textContent = getFullYear().toString();
    let appPrefix = document.getElementById('app-prefix');
    appPrefix.textContent = getAppPrefix();
  });
};

main();
