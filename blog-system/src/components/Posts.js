import React, { Component } from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { posts:[] }

        axios.get('/posts')
            // .then(data=> console.log(data.data.posts))
            .then(data=> this.setState({posts:data.data.posts}))
            .catch(err=>console.log(err));
    }
    render() { 
        return ( 
            <div className="container">
                <h3 className="text-center">List of Posts</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <PostList data={this.state.posts} />
                    </tbody>
                </table>
            </div>
         );
    }
}
 
const PostList = (props) => {
    console.log(props.data);
    // let postData;
    // if(props.data.length > 0){
    //     postData = props.data.map(e => <tr key={e._id}>
    //         <td>{e._id}</td>
    //         <td>{e.title}</td>
    //         <td>{e.description}</td>
    //     </tr>)
    // }else{
    //     postData = "no data available!"
    // }
    return (

        props.data.map(e => <tr key={e._id}>
            <td>{e._id}</td>
            <td>{e.title}</td>
            <td>{e.description}</td>
            <td><NavLink to={"/post/"+e._id}>View Post</NavLink></td>
        </tr>
        )
      );
}
export default Posts;