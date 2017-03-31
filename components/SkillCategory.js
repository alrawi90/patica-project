const React = require('react');
const Modal = require('./Modal');

class SkillCategory extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false,name:'' }
    this.handleChange=this.handleChange.bind(this)
  }
  render () {
    return (
    <div>
        <button onClick={() => this.openModal()}>Add Name</button>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()} >
          <h1>Create New Category</h1>
          <form>
            <label>
              Category Name: <input  type='text' ref='cn' />
              
            </label>
            <p><button onClick={() => this.closeModal()}>Close</button></p>
            <p><button onClick={this.handleChange}>Set</button></p>
          </form>
        </Modal> 
    </div>
    )  
    }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }
  handleChange(e){
        e.preventDefault()
        var cn = this.refs.cn.value;
        this.props.handler(cn);
        this.closeModal()

  }

}

module.exports = SkillCategory