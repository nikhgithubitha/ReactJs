import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    text: '',
    comment: '',
    commentsList: [],
  }

  deleteComment = commentId => {
    this.setState({
      commentsList: commentsList.filter(comment => comment.id !== commentId),
    })
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  renderCommentsList = () => {
    const {commentsList} = this.state
    return commentsList.map(eachComment => (
      <CommentItem
        key={eachComment.id}
        commentDetails={eachComment}
        toggleIsLiked={this.toggleIsLiked}
        deleteComment={this.deleteComment}
      />
    ))
  }

  onAddComment = event => {
    event.preventDefault()
    const {text, comment} = this.state
    const initialBackgroundColorClassName =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    const newComment = {
      id: uuidv4(),
      name: text,
      comment: comment,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      text: '',
      comment: '',
    }))
  }

  onChangeName = event => {
    this.setState({text: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {text, comment, commentsList} = this.state
    return (
      <>
        <div className="bg">
          <div className="card1">
            <form onSubmit={this.onAddComment}>
              <h1>Comments</h1>
              <p>Say something about 4.0 Technologies</p>
              <input
                type="text"
                value={text}
                placeholder="Your Name"
                onChange={this.onChangeName}
              />
              <textarea
                value={comment}
                placeholder="Your Comment"
                onChange={this.onChangeComment}
                rows="6"
              />
              <button>Add Comment</button>
            </form>
          </div>
          <div className="card2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="Comments"
            />
          </div>
        </div>
        <hr />

        <p>
          <span>{commentsList.length}</span> Comments
        </p>
        <ul>{this.renderCommentsList()}</ul>
      </>
    )
  }
}

export default Comments
