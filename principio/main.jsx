// import React from 'react'
import React from "https://esm.sh/react-dom@18.2.0"
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"
// import ReactDOM from 'react-dom/client'


const appDomElement = document.getElementById('app')

const root = ReactDOM.createRoot(appDomElement)
const button = React.createElement('button', { "data-id": 123 }, 'Me gusta 1')
const button2 = React.createElement('button', { "data-id": 345 }, 'Me gusta 2')
const button3 = React.createElement('button', { "data-id": 565 }, 'Me gusta 3')

// para renderizar 3 botones RENDERIZAR ELEMENTOS
const app = React.createElement(React.Fragment, null, [button, button2, button3])

root.render(app)