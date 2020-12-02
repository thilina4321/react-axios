import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
import axios from "axios";

class Blog extends Component {
  state = {
    posts: [],
    selectedId:null
  };
  async componentDidMount() {
    const p = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const pData = p.data.slice(0, 4);
    const uData = pData.map((p) => {
      return {
          id:p.id,
        title: p.title,
        author: "Max",
      };
    });

    this.setState({
      posts: uData,

    });
  }

  selectedHandler =(id)=>{
      this.setState({
          selectedId:id,
      })
  }
  render() {
    const posts = this.state.posts.map((p) => {
      return <Post key={p.id} 
      selected={()=> this.selectedHandler(p.id)}
      author={p.author} title={p.title} />;
    });
    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedId}/>
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
