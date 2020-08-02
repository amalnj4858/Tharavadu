import React from 'react';
import './App.css';
import 'tachyons';
import Card from './components/Card/Card';
import Table from './components/Table/Table';
import Navbar from './components/Navbar/Navbar';
import Signin from './components/Signin/Signin';
import CardList from './components/CardList/CardList';
import ChangeBtn from './components/ChangeTable/ChangeTable';
import ProfileList from './components/ProfileList/ProfileList';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      route : 'signin',
      bom : [],
      tableinfo : []
    }
  }

  componentDidMount(){
    fetch('https://shrouded-savannah-46968.herokuapp.com/bdaycard',{
      method : 'get',
      headers : {'Content-Type' : 'application/json'},
    }).then(resp=> resp.json()).then(out=>this.setState({dom : out}))

    fetch('https://shrouded-savannah-46968.herokuapp.com/users',{
                method : 'get',
                headers : {'Content-Type' : 'application/json'}
              }).then(resp=> resp.json()).then(out=>this.setState({tableinfo : out}))

  }

  changeUsersInfo = (event)=>{

      fetch('https://shrouded-savannah-46968.herokuapp.com/checkIsPro',{
      method : 'put',
      headers : {'Content-Type' : 'application/json'}
    })

    fetch('https://shrouded-savannah-46968.herokuapp.com/bdaycard/checkIsNoob',{
      method : 'put',
      headers : {'Content-Type' : 'application/json'}
    })
    
      fetch('https://shrouded-savannah-46968.herokuapp.com/users',{
                method : 'get',
                headers : {'Content-Type' : 'application/json'}
              }).then(resp=> resp.json()).then(out=>this.setState({tableinfo : out}))

      alert('Sheri aanenki ninakkokke kollaam'); 
  }

  isRadioButtonClicked = (event)=>{


    fetch('https://shrouded-savannah-46968.herokuapp.com/updateChelav',{
      method : 'put',
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify({
        name : event.target.name,
        update : event.target.value
      })
    })

  }

  onRouteChange = (nextRoute)=> {
    this.setState({route : nextRoute});
  }

  isSignInClicked = ()=>{
    const nameInput = document.getElementById('nameInput');
    const enteredName = nameInput.value;
    const passwordInput = document.getElementById('password');
    const enteredPassword = passwordInput.value;
    if(enteredName.length ==0 || enteredPassword.length==0)
      alert('nokiyum kandokke cheyy cherakka');
    fetch('https://shrouded-savannah-46968.herokuapp.com/signin',{
      method : 'post',
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify({
        name : enteredName,
        password : enteredPassword
      })
    })
    .then(output=> output.json())
    .then(result=> {
      if(result === 'enter'){
        alert('melcow!');
        this.setState({route:'home'});
      }
      else if(result === 'invalid')
      { 
        alert('erangi po kunda');
      }
      else if(result === 'no user')
      {
        alert('thaan aarua?');
      }
    }).catch(err=>console.log(err))
  }


  render(){

    if(this.state.route === 'signin')
      return (
      <div className = 'tc'>
      <div className = 'gap1' />
      <div className = 'gap1' />
        <Signin onclick = {this.isSignInClicked} />
      </div>
      )
    else if(this.state.route === 'home')
    return(
      <div className= 'tc'>
      <Navbar text1 = 'Sign Out' text2 = 'Profiles' text3 = 'Home' onclick = {this.onRouteChange}  />
      <img src = {require("./house.jpg")} alt = 'house' className='grow pointer' id = 'logo' />
      <h1 className ='f1' id = 'Heading'> THARAVADU </h1>
      <p id = 'est'> ~Est. 2019~ </p>
      <div className = 'gap1' />
      <p className=" f2 animate__animated animate__slideInLeft"> Vannallo vanamala :)) </p>
      <p className = 'f3' > Birthdays This Month - </p>
      <div className = 'gap2' />
      <CardList info = {this.state.dom} onSelect = {this.isRadioButtonClicked} />
      <div className = 'gap2' />
      <ChangeBtn changeinfo = {this.changeUsersInfo} background = "white" />
      <br/>
      <br/>
      <h2> Complete 3 chelavs to get pro status </h2>
      <div className = 'gap2' />
      <Table info = {this.state.tableinfo} />
      <div className = 'gap2' />
      <p id = 'end'><strong><em> Made With Love </em></strong></p>      
      </div>
    );
  else if(this.state.route === 'profiles')
    return(
      <div className= 'tc'>
        <Navbar text1 = 'Sign Out' text2 = 'Profiles' text3 = 'Home' onclick = {this.onRouteChange} />
        <h1 className ='f1' id = 'Heading'> THE FAMILY </h1>
        <div className = 'gap2' />
        <ProfileList info = {this.state.tableinfo} />
        <div className = 'gap2' />
        <p id = 'end'><strong><em> Made With Love </em></strong></p>
      </div>
      )
  }
}

export default App;
