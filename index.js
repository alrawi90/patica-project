
const React = require('react');
const ReactDOM = require('react-dom');
const Main = require('./components/Main');


ReactDOM.render(
  <div>
    <div className="container">
      <div className="title">Create Role</div>
      <Main />
    </div>
  </div>,
  document.getElementById('main')
);

