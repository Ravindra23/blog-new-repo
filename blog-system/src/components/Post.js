import React, { Component } from 'react';
import axios from 'axios';
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { post:[] }

        const postId = this.props.match.params.id;
        let url = '/post/'+postId
        axios.get(url)
            .then(data=>this.setState({post:data.data.post}))
            .catch(err=>console.log(err))
    }
    render() { 
        return ( 
            <div className="container">
                <img src="" alt="" />
                <h4>{this.state.post.title}</h4>
                <p>{this.state.post.description}</p>
                <br />

                <h4>comments</h4>
                comments.....
            </div>
         );
    }
}
 
export default Post;