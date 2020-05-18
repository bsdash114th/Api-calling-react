import React from 'react';
import {Button} from 'antd';
import './App.css';

class App extends React.Component{  
  constructor(){
      super();
      this.state = {
        users:null
      }
    }
    fetchData=()=>
    {
      fetch("http://dummy.restapiexample.com/api/v1/employees").then((Response)=>{
       Response.json().then((result)=>{
         this.setState({users:result.data})
       }) 
      })
    }
  
  render () {
      return (
        <div className="App">
          <h1 className='more'> OFFICE STAFF DETAILS </h1>
          <Button onClick={ this.fetchData } > Click me </Button>
          {
            this.state.users ?
            this.state.users.map((item,i)=> 
            <div>
              <p>
                {i}
                ----
                {item.employee_name}
                ---
                {item.employee_salary}
                ---
                {item.employee_age}
                ---
                {item.profile_image}
    
                {item.email}
              </p>
              </div>
              )
              :
            null
          }
            </div>
        
      ); 
        }
      }
    
    
  export default App;
  