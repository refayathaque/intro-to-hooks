import React, { Fragment, useContext } from 'react'
import { PostsContext } from '../Hooks/PostsContext'

export default ({listType='bodies', header=''}) => {
  const [ state ] = useContext(PostsContext);

  const renderFetchedData = () => {
    return (
      <ul>
        {state.data.map((post, index) => {
          if (listType === 'title') {
            return <li key={index}>{post.title}</li>
          } else {
            return <li key={index}>{post.body}</li>
          }
        })}
      </ul>
    )
  }

  return (
    <Fragment>
      <h3>Posts reusable component {header}</h3>
      <h4>Post {listType} only</h4>
      {state.request ? renderFetchedData() : <div>No data requested</div>}
    </Fragment>
  )
}
