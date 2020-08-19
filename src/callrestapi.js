import React from 'react';
import axios from 'axios';
class Calling extends React.Component 
{
    constructor(props)
     {
      super(props);
      this.state = {
                        userId:'',
                        title:'',
                        email:''
                    };
     }
               /* componentDidMount()
                {
                    fetch('http://127.0.0.1:5000/lms/admin',
                    {
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json',
                          'Authorization':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc'
                        },
                        method: "POST",
                       body: JSON.stringify({    
                    "name":"ayush1",    
                    "email":"aypuxa@email.com",
                    "password":"12345"
                   
                     })
                     
                    }).then((resp)=>
                    {
                        resp.json().then((result)=>
                        {   alert(result.success);
                            
                        }).catch(error=>alert(error))
                    })
                }*/
                 changeHandler=(e)=>{
                    this.setState({[e.target.name]:e.target.value})
                                   }
                submitHandler=(e)=>{
                    e.preventDefault();
                    console.log(this.state)
                    axios.post('https://reqres.in/api/users?page=2',this.state)
                    .then(response =>{
                        console.log(response)
                    })
                    .catch(error=>{
                        console.log(error)
                    })
                }
                render()
                {
                    
                    const {userId,title,email}=this.state
                    return(
                        <div>
                            <form onSubmit={this.submitHandler}> 
                                <div>
                                    <input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
                                </div>
                                <div>
                                    <input type="text" name="title" value={title} onChange={this.changeHandler}/>
                                </div>
                                <div>
                                    <input type="text" name="email" value={email} onChange={this.changeHandler}/>
                                </div>
                                <button type="submit">Submit</button>

                           </form>

                            
                        </div>
                    );
                }
            }

  export default Calling;

