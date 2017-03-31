const React = require('react');
class Hexagon extends React.Component {
constructor(props){
   super(props)
   this.state={
     clicked: false
   }
  this.show=this.show.bind(this)
  this.collapse=this.collapse.bind(this)
  } 
  show(){
     var newState={};
     newState["clicked"]=true;
     this.setState(newState);
  }
    collapse(){
     var newState={};
     newState["clicked"]=false;
     this.setState(newState);

  }
  render () {
    return (
  <div className="frame" onClick={this.show}>
      <svg viewBox='0 0 300 300'  id="image-fill" xmlns="http://www.w3.org/2000/svg" version="1.1" width="10%" height="10%"  xmlnsXlink="http://www.w3.org/1999/xlink">

        <defs>
           <pattern id="image-bg" x="0" y="0" height="300" width="300" patternUnits="userSpaceOnUse">
            <image width="300" height="300" xlinkHref="http://placekitten.com/306/306"></image>

          </pattern>
        </defs>
        
        <polygon  className="hex" points="300,150 225,280 75,280 0,150 75,20 225,20" fill="url('#image-bg')"></polygon>
        
      </svg>
  </div>
    );
  }
}

  module.exports = Hexagon
