import { render } from 'preact'
import { App } from './app'
import './index.css'

const root = document.querySelector(`[data-saltpay-navbar]`);

if (!root) {
    throw new Error(`Element with attribute \`data-saltpay-navbar\` not found`);
};

render(<App />, root)
