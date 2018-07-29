import React, { Component } from 'react'

class PostDetail extends Component {
  constructor (props) {
    super(props)
    this.titleWasClicked = this.titleWasClicked.bind(this)
    this.toggleContent = this.toggleContent.bind(this)
    this.handleRemoveContentButton = this.handleRemoveContentButton.bind(this)
    this.state = {
      showContent : true,
      postItem : null
    }
  }
  handleRemoveContentButton (event) {
    if(this.props.handlePostRemove) {
      this.props.handlePostRemove(this.state.postItem)
    }
  }
  titleWasClicked (event) {
    event.preventDefault()
    const newPostItem = {
       title: '',
       content: this.state.postItem.content
    }
    this.setState({
      postItem : newPostItem
    })
    if (this.props.callBack !== undefined) {
//       this.props.callBack(newPostItem)
    }
  }
  toggleContent (event) {
    event.preventDefault()
  //  alert("toggle clicked")
    this.setState({
      showContent : !this.state.showContent
    })
  }
  componentDidMount () {
    this.setState ({
      postItem : this.props.post
    })
  }
  render () {
    const {postItem} = this.state
     return (
       <div>
         {postItem !== null
           ? <div>
             <h1 onClick={this.titleWasClicked}>{postItem.title}</h1>
             {this.state.showContent === true ? <p>{postItem.content}</p> : ''}
             <button onClick={this.toggleContent}>Toggle Content Display</button>
             <button onClick={this.handleRemoveContentButton}>Remove Content</button>
           </div>
           : ''}
       </div>
     )
   }
}

export default PostDetail