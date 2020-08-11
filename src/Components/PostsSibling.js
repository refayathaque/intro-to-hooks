import React, { Fragment, useContext } from 'react'
import { PostsContext } from '../Hooks/PostsContext'

export default () => {
  const [ state ] = useContext(PostsContext);

  const renderFetchedData = () => {
    return (
      <ul>
        {state.data.map((post, index) => {
          return <li key={index}>{post.title}</li>
        })}  
      </ul>
    )
  }

  const renderInitialState = () => {
    return (
      <div>No data requested</div>
    )
  }

  return (
    <Fragment>
      <h3>PostsSibling component</h3>
      <h4>Post titles only</h4>
      {state.request ? renderFetchedData() : renderInitialState()}
    </Fragment>
  )
}
