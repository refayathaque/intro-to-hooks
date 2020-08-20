import React, { Fragment, useContext } from 'react'
import { CommentsContext } from '../Hooks/CommentsContext'
// import { PostsContext } from '../Hooks/PostsContext'

export default function Comments() {
  const [ state ] = useContext(CommentsContext);

  // const [ postsState ] = useContext(PostsContext);
  // console.log(postsState)
  // Will log an empty object

  const renderFetchedData = () => {
    if (state.isLoading) {
      return <div>Loading...</div>
    } else {
      return (
        <ul>
        {state.data.map((comment, index) => {
          return <li key={index}>{comment.body}<ul><li>{comment.email}</li></ul></li>
        })}
      </ul>
      )
    }
  }

  return (
    <Fragment>
      <h3>Comments component</h3>
      {state.request ? renderFetchedData() : <div>No data requested</div>}
    </Fragment>
  )
}
