import React, {Component} from 'react'
import Home from './Home'
import '../App.css'
import dp from '../images/Mask Group 2.png'

class profile extends Component{
  constructor(props){
    super(props)
    this.state = {
      displayName:'',
      firstName:'',
      lastName: '',
      comments:'',
      designation:''
    }
  }
  handleDisplayNameChange= (event) => {
    this.setState({
      displayName : event.target.value
    })
  }

  handleFirstNameChange= (event) => {
    this.setState({
      firstName : event.target.value
    })
  }
  handleLastNameChange= (event) => {
    this.setState({
      lastName : event.target.value
    })
  }
  handleCommentsChange= (event) => {
    this.setState({
      comments : event.target.value
    })
  }
  handleDesignerChange= (event) => {
    this.setState({
      designer : event.target.value
    })
  }
  handleDeveloperChange= (event) => {
    this.setState({
      developer : event.target.value
    })
  }
  handleProjectManagerChange= (event) => {
    this.setState({
      projectManager : event.target.value
    })
  }
  handleSalesChange= (event) => {
    this.setState({
      sales : event.target.value
    })
  }
  
  handleRoleChange = (event) =>{
    this.setState({
      role : event.target.value
    })
  }
  handleExperienceChange = (event) =>{
    this.setState({
      experience : event.target.value
    })
  }
  handleDesignationChange = (event) =>{
    this.setState({
      designation : event.target.value
    })
  }
  handleSubmit = (event) =>{
    alert('Your profile is saved!')
  }
  render(){
    const {role} = this.state
    return(
      <div>
      <Home/>
      <div className='main'>
      <div className='pageBanner'> My Profile</div>
      <div className='dp'><img src={dp} alt="DP" /></div>
      <form onSubmit={this.handleSubmit}>
        <div className='scrollDiv'>
        <table className='profileData'>
        <tbody>
          <tr>
            <td><label>Display Name</label></td>
            <td><label>First Name</label></td>
            <td><label>Last Name</label></td>
          </tr>
          <tr>
          <td><input type='text' value={this.state.displayName} onChange={this.handleDisplayNameChange} required/></td>
            <td><input type='text' value={this.state.firstName} onChange={this.handleFirstNameChange} required/></td>
            <td><input type='text' value={this.state.lastName} onChange={this.handleLastNameChange} required/></td>
          </tr>
          <tr>
            <td><label>About Yourself</label></td>
          </tr>
          <tr >
            <td><textarea value={this.state.comments} onChange={this.handleCommentsChange} required></textarea></td>
          </tr>
          <tr>
            <td colSpan={2}><label>Area of Interest</label></td>
          </tr>
          <tr>
            <td colSpan={3}><input name='interest' type='checkbox' value='designer' onChange={this.handleDesignerChange} />
            <label  for='designer'>Designer</label></td>
          </tr>
          <tr>
            <input name='interest' type='checkbox' value='developer' onChange={this.handleDeveloperChange} />
            <label for value='developer'>Developer</label>
          </tr>
          <tr>
            <input name='interest 'type='checkbox' value='projectManager' onChange={this.handleProjectManagerChange} />
            <label for value='projectManager'>Project Manager</label>
          </tr>
          <tr>
            <input name='interest' type='checkbox' value='sales' id='trigger' onChange={this.handleSalesChange} />
            <label for value='sales'>Sales</label>
          </tr>
          <tr>
            <td><label>Are you a student or professional?</label></td>
          </tr>
          <tr>
            <td><input type='radio' name='role' value='student' onChange={this.handleRoleChange} required/>
            <label>Student</label></td>
          </tr>
          <tr>
            <td><input type='radio' name='role' value='professional' onChange={this.handleRoleChange} required/>
            <label>Professional</label></td>
          </tr>
          <tr>
            {
              role==='professional' &&(
              <div>
                <table className='profileInner'>
                  <tr>
                  <td colSpan={2}><label>How much of experience you have?</label></td>
                  </tr>
                  <tr>
                  <td><input type='radio' name='experience' value='0-5' onChange={this.handleExperienceChange} required/>
                  <label>0-5</label></td>
                  <td><input type='radio' name='experience' value='5-10' onChange={this.handleExperienceChange} required/>
                  <label>5-10</label></td>
                  <td><input type='radio' name='experience' value='10 & above' onChange={this.handleExperienceChange} required/>
                  <label>10 & above</label></td>
                  </tr>

                  <tr>
                  <td colSpan={2}><label>What is Your expertise?</label></td>
                  </tr>
                  <tr>
                  <td><input type='radio' name='expertise' value='java' onChange={this.handleExpertiseChange} required/>
                  <label>Java</label></td>
                  <td><input type='radio' name='expertise' value='react' onChange={this.handleExpertiseChange} required/>
                  <label>React</label></td>
                  <td><input type='radio' name='expertise' value='backend' onChange={this.handleExpertiseChange} required/>
                  <label>Backend</label></td>
                  </tr>
                  <tr>
                  <td colSpan={2}><label>Mention your Role</label></td>
                  </tr>
                  <tr>
                  <td><textarea value={this.state.designation} onChange={this.handleDesignationChange} required></textarea></td>
                  </tr>
                </table>
              </div>
              )
            }
          </tr>
          </tbody>
        </table>
        <button className='profilebutton' type='submit' >Save</button>
        </div>
      </form>
    </div>
    </div>

    )
  }
}
export default profile;