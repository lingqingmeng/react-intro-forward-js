const ReactDOM = require('react-dom')
const React = require('react')
const Clock = require('./clock.jsx')
const HelloWorld = require('./hello-world.jsx')

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('first')
)
ReactDOM.render(
  <Clock />,
  document.getElementById('content')
)
