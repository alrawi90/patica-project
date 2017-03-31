const React = require('react');
const Item = require('./Item');
const ReactBootstrap=require('react-bootstrap')
class Main extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    // require('react-bootstrap').Alert;
    // var Grid = require('react-bootstrap').Grid;
    // var Row = require('react-bootstrap').Row;
    // var Col=require('react-bootstrap').Col;
    // var code = require('react-bootstrap').code;
    return (
      <div className='container' >
        <ReactBootstrap.Row >
          <ReactBootstrap.Col md={4}>
              <Item />
          </ ReactBootstrap.Col>    
          <ReactBootstrap.Col md={4}>
              <Item />
          </ReactBootstrap.Col> 
          <ReactBootstrap.Col md={4}>
              <Item />
          </ReactBootstrap.Col> 
        </ReactBootstrap.Row>
      </div>
    )
  }

}

module.exports = Main
