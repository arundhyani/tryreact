import React, { Component } from 'react'
import PostData from '../data/posts.json'
import PostDetail from './PostDetail'

class PostList extends Component {
  constructor (props){
    super(props)
    this.handleCallBack = this.handleCallBack.bind(this)
  }
  handleCallBack (msg){
    alert(msg)
  }
  render () {
    return (
      <div >
        <h1>Hello There</h1>
        {PostData.map((postDetail, index) => {
          return <PostDetail post={postDetail} 
                             key={`post-list-key ${index}`} 
                             callBack={this.handleCallBack}
                  />
        })}
      </div>
    )
  }
}

export default PostList