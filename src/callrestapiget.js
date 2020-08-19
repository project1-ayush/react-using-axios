import React from 'react';
import axios from 'axios'
class Callin extends React.Component 
{
    constructor()
     {
      super();
      this.state = {
                        post:[],
                        errorMsg:''
                    };
                }
                componentDidMount()
                {
                    axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>
                    {
                        console.log(response)
                        console.log(response.data);
                        this.setState({post:response.data})
                        //console.log(this.state.post);
                    })
                    .catch(error=>
                         {
                        console.log(error)
                        this.setState({errorMsg:'Error Data'})
                    }
                    )
                }
                
               
                render()
                {
                    const {post,errorMsg}=this.state
                    return(
                        <div>
                            List Of post
                        {
                            post.length ? post.map(post=><div key={post.id}>{post.title}</div>) : null
                        }
                        {
                            errorMsg ? <div>{errorMsg}</div>:null
                        }
                        </div>
                    )
                }
            }

                        
                    

  export default Callin;

