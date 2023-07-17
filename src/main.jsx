import { render } from 'preact'
import App from './app.jsx'
import { Reset } from 'styled-reset'

render(
    <>
    <App />
    <Reset />
    </>
, document.getElementById('app'))
