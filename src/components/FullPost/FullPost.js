import Axios from 'axios';
import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost:null
    }

    async componentDidUpdate(){
        if(this.props.id && !this.state.loadedPost){

            const post = await Axios.get('https://jsonplaceholder.typicode.com/posts/'+ this.props.id);

            this.setState({
                loadedPost:post.data
            })

        }
    }

    render () {
        let post = <p> No post selected yet </p>
        if(this.props.id && !this.state.loadedPost) {
            post = <p> Post is Loading </p>
        }
        if(this.props.id && this.state.loadedPost){
            post = <div className="FullPost">
            <h1>{this.state.loadedPost['title']}</h1>
            <p> {this.state.loadedPost['body']} </p>
            <div className="Edit">
                <button className="Delete">Delete</button>
            </div>
            </div>
        }
        
        return post;
    }
}

export default FullPost;