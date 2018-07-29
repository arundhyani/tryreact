import React, { Component } from 'react'
import PostData from '../data/posts.json'
import PostDetail from './PostDetail'

class PostList extends Component {
  constructor (props){
    super(props)
    this.handleCallBack = this.handleCallBack.bind(this)
    this.handlePostRemove = this.handlePostRemove.bind(this)
    this.state = {
      postlist : []
    }
  }
  handleCallBack (msg){
    alert(msg)
  }
  updateBackend(currentList) {
    this.setState ({
      postlist : currentList
    })
  }
  handlePostRemove(postItem) {
    let currentList = this.state.postlist
    var index = currentList.indexOf(postItem);
    alert("index is " + index)
    if (index > -1) {
      currentList.splice(index, 1);
    }
    this.updateBackend(currentList)
  }

  componentDidMount() {
    this.setState ({
      postlist : PostData
    })
  }
  render () {
    return (
      <div >
        <h1>Hello There</h1>
        {this.state.postlist.map((postDetail, index) => {
          return <PostDetail post={postDetail} 
                             key={`post-list-key ${index}`} 
                             handlePostRemove = {this.handlePostRemove}
                             callBack={this.handleCallBack}
                  />
        })}
      </div>
    )
  }
}

export default PostList